const asyncHandler = require("express-async-handler");
const studentForm = require("../models/studentFormModel");
const Student = require("../models/studentModel");
const fs = require("fs");
const studentFormModel = require("../models/studentFormModel");
const multer = require("multer");
const path = require("path");
const DIR = path.join(__dirname, "../../Client/public/submissions/");

const getProfile = asyncHandler(async (req, res) => {
  const studentId = req.student.id;
  const profile = await studentForm.findOne({ student: studentId });

  if (!profile) {
    res.status(404);
    throw new Error("Student profile not found");
  }

  res.json(profile);
});

const setSForm = asyncHandler(async (req, res) => {
  // MULTER
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: function (req, file, cb) {
      const fileNameWithoutExtension = path.parse(file.originalname).name;
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      cb(
        null,
        file.fieldname + "-" + fileNameWithoutExtension + "-" + uniqueSuffix
      );
    },
  });

  const fileFilter = (req, file, cb) => {
    // Only allow certain file types
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/docx"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const fileUpload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5, // Limit file size to 5MB
    },
    fileFilter,
  });

  fileUpload.single("cv")(req, res, async (err) => {
    if (err) {
      // Handle any errors that occurred while parsing the form data
      throw new Error("No File was selected!");
      /*       if (!filename) {
        
      } */
      /* return res.status(500).send(err); */
    }

    // Extract form data
    const student = req.student.id;
    const studentName = req.student.name;
    const cv = "/submissions/" + req.file.filename;
    const { University, Degree, DegreeTitle } = req.body;

    // Create Profile
    const sProfile = await studentForm.create({
      student,
      studentName,
      University,
      Degree,
      DegreeTitle,
      cv,
    });

    res.status(200).json(sProfile);
  });
});

const updateSForm = asyncHandler(async (req, res) => {
  const formId = req.params.id;

  // Find the existing student profile by ID
  const existingProfile = await studentForm.findById(formId);

  if (!existingProfile) {
    res.status(404);
    throw new Error("Student form not found");
  }

  // Check if the logged-in student owns the profile
  if (existingProfile.student.toString() !== req.student.id) {
    res.status(403);
    throw new Error("Not authorized to update this student form");
  }

  // Update the form data
  existingProfile.University =
    req.body.University || existingProfile.University;
  existingProfile.Degree = req.body.Degree || existingProfile.Degree;
  existingProfile.DegreeTitle =
    req.body.DegreeTitle || existingProfile.DegreeTitle;

  // Handle file update
  if (req.file && req.file.filename) {
    const cv = "/submissions/" + req.file.filename;

    // Delete the old CV file if it exists
    if (existingProfile.cv) {
      const oldCVPath = path.join(
        __dirname,
        "..",
        "public",
        existingProfile.cv
      );
      fs.unlinkSync(oldCVPath);
    }

    existingProfile.cv = cv;
  }

  // Save the updated profile
  const updatedProfile = await existingProfile.save();

  res.json(updatedProfile);
});

const deleteProfile = asyncHandler(async (req, res) => {
  const dprofile = await studentFormModel.findById(req.params.id);

  if (!dprofile) {
    res.status(409);
    throw new Error("Job Not Found");
  }

  const student = await Student.findById(req.student.id);

  // Check for User
  if (!req.student) {
    res.status(401);
    throw new Error("User Not Found");
  }

  // Make Sure the logged in user matches the job user
  if (dprofile.student.toString() !== req.student.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  // Delete the CV file if it exists
  if (dprofile.cv) {
    const cvFilePath = path.join(DIR, dprofile.cv.substr(11));
    fs.unlinkSync(cvFilePath);
  }
  await studentFormModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  setSForm,
  updateSForm,
  getProfile,
  deleteProfile,
};
