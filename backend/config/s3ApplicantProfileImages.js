// /config/s3ApplicantProfileImages.js
const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const path = require("path");

// Load environment variables
const { S3_AWS_ACCESS_KEY_ID, S3_AWS_SECRET_ACCESS_KEY, S3_AWS_REGION } =
  process.env;

const s3 = new S3Client({
  region: S3_AWS_REGION,
  credentials: {
    accessKeyId: S3_AWS_ACCESS_KEY_ID,
    secretAccessKey: S3_AWS_SECRET_ACCESS_KEY,
  },
});

const s3ProfileImages = multer({
  storage: multerS3({
    fileFilter: (req, file, cb) => {
      cb(null, true);
    },
    s3: s3,
    bucket: "skillmint-job-images", // Bucket
    acl: "public-read",
    contentDisposition: "inline",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const uniqueKey = `Applicant-Profile-Images/${Date.now().toString()}-${
        file.originalname
      }`; //Applicant-Profile-Images will hold profileImage & bannerImage
      cb(null, uniqueKey);
    },
    metadata: function (req, file, cb) {
      cb(null, {});
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5, // Adjust the limit as needed
  },
});

module.exports = { s3ProfileImages };
