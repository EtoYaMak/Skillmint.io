import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
/* Job Posting Components */
import JobPost from "./components/Job/Post/JobPost";
import PreviewJob from "./components/Job/Post/Components/PreviewJob";

import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordResetUser from "./components/Account/PasswordResetUser";
import PasswordResetUserForm from "./components/Account/PasswordResetUserForm";

import RegisterAdmin from "./components/Admin/RegisterAdmin";
import LoginAdmin from "./components/Admin/LoginAdmin";
import PasswordResetAdmin from "./components/Account/PasswordResetAdmin";
import PasswordResetAdminForm from "./components/Account/PasswordResetAdminForm";
import AdminDash from "./components/Dashboard/Admin/AdminDash";

import UserDash from "./components/Dashboard/Employer/UserDash";
/* import JobApplicants from "./components/Job/Components/JobApplicants"; */
import JobApplicants from "./components/Dashboard/Employer/components/JobApplicants";
import UserDashJobs from "./components/Dashboard/UserDashJobs";

import StudentDash from "./components/Dashboard/Applicant/StudentDash";
import StudentApplications from "./components/Dashboard/Applicant/StudentApplications";

import ActivateAccount from "./components/Account/ActivateAccount";
import ActivationModal from "./components/Account/ActivationModal";

import JobDetailComponent from "./components/Job/Components/JobDetailComponent";
import JobUpdatePage from "./components/Job/Components/JobUpdatePage";

import { useSelector } from "react-redux";

import StripeContainer from "./components/Stripe/StripeContainer";

import JobForm from "./components/Job/Post/JobForm";
import JobFormAdmin from "./components/Job/Post/JobFormAdmin";
import AllJobsSA from "./components/Dashboard/Admin/AllJobsSA";
import AllUsers from "./components/Dashboard/Admin/AllStudents";
import AllStudents from "./components/Dashboard/Admin/AllStudents";
import UserJobs from "./components/Dashboard/Admin/UserJobs";
import ViewStudentApplications from "./components/Dashboard/Admin/ViewStudentApplications";
import Footer from "./components/Footer";
import CreateJobForm from "./components/Job/Post/Components/CreateJobForm";
import PaymentJobForm from "./components/Job/Post/Components/PaymentJobForm";
import PaymentSuccess from "./components/Job/Post/Components/PaymentSuccess";
import PublicProfilePage from "./components/Dashboard/Applicant/Components/PublicProfilePage";
import NotFound from "./components/NotFound";
import NotAuthorized from "./components/NotAuthorized";

function App() {
  const [message, setMessage] = useState("");
  const location = useLocation();

  const user = useSelector((state) => state.auth.user);
  const SAuser = useSelector((state) => state.SAuser);
  const student = useSelector((state) => state.students.student);

  // State to control the modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  useEffect(() => {
    if (user && user.isActive) {
      setModalOpen(false);
    } else if (user && !user.isActive) {
      setModalType("user");
      setModalOpen(true);
    } else if (student && !student.isActive) {
      setModalType(`student-${student.type}`);
      setModalOpen(true);
    } else if (student && student.isActive) {
      setModalOpen(false);
    }
  }, [user, student]);

  return (
    <>
      <div className="App bg-[#fff] min-h-screen" id="App">
        <ActivationModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          type={modalType}
        />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" &&
          location.pathname !== "/password-reset" &&
          location.pathname !== "/reset/:type/:token" &&
          location.pathname !== "/password-reset-admin" &&
          location.pathname !== "/payment" &&
          location.pathname !== "/reset/:type/:token" &&
          location.pathname !== "/post" &&
          location.pathname !== "/post/jobCreate" &&
          location.pathname !== "/post/jobPreview" &&
          location.pathname !== "/post/jobPayment" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />

          {/*         <Route path="/browse" element={<Browse />} /> */}
          {/*  <Route path="/post" element={<Post />} /> */}

          <Route path="/post/*" element={<JobPost />}>
            <Route index element={<CreateJobForm />} />
            <Route path="jobCreate" element={<CreateJobForm />} />
            <Route path="jobPreview" element={<PreviewJob />} />
            <Route path="jobPayment" element={<PaymentJobForm />} />
          </Route>
          {/*       <Route path="/payment" element={<StripeContainer />} /> */}
          <Route path="/payment-success" element={<PaymentSuccess />} />
          {/*  */}
          <Route path="/contact" element={<Contact />} />
          {/* Normal */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordResetUser />} />
          <Route
            path="/reset/:type/:token"
            element={<PasswordResetUserForm />}
          />
          {/* Super */}
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          {/* <Route path="/registerAdmin" element={<RegisterAdmin />} /> */}
          <Route
            path="/password-reset-admin"
            element={<PasswordResetAdmin />}
          />
          <Route
            path="/reset/:type/:token"
            element={<PasswordResetAdminForm />}
          />
          <Route path="/adminDash/*" element={<AdminDash />} />
          {/* Nested routes for AdminDash */}

          <Route path="users" element={<AllUsers />} />
          <Route path="user-jobs/:userId" element={<UserJobs />} />
          <Route
            path="student-applied-jobs/:studentId"
            element={<ViewStudentApplications />}
          />

          <Route path="students" element={<AllStudents />} />
          <Route path="post" element={<JobFormAdmin />} />
          <Route path="jobs" element={<UserDashJobs />} />
          <Route path="alljobs" element={<AllJobsSA />} />

          {/* Admin End */}
          <Route path="/activate/:type/:token" element={<ActivateAccount />} />

          <Route path="/dash" element={<UserDash />} />
          <Route path="/userjobs" element={<UserDashJobs />} />
          <Route path="/dashboardS" element={<StudentDash />} />

          <Route path="/myapplications" element={<StudentApplications />} />
          <Route path="/jobapplicants/:jobId" element={<JobApplicants />} />
          <Route path="/profile/:studentId" element={<PublicProfilePage />} />

          <Route path="/jobs/:jobId" element={<JobDetailComponent />} />
          <Route path="/jobs/:jobId/update" element={<JobUpdatePage />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
          <Route path="/401" element={<NotAuthorized />} />
        </Routes>

        <ToastContainer />
      </div>
      <div className="bg-[#2c3033]">
        <Footer />
      </div>
    </>
  );
}

export default App;
