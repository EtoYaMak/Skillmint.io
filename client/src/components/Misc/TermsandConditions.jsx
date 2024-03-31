import React from "react";

function TermsandConditions({ closeModal }) {
  return (
    <div className="z-[99] ">
      <div className="head w-full flex flex-row justify-between">
        <h1 className="font-Poppins text-2xl font-semibold">Skillmint.io</h1>
        <button
          onClick={closeModal}
          className="px-3 py-2 bg-red-600 font-Poppins text-lg rounded-lg text-white"
        >
          Close
        </button>
      </div>

      <div className="toc">
        <h2 className="text-lg font-bold mb-4">Terms and Conditions</h2>
        <p>Welcome to Skillmint.io!</p>
        <p className="mb-4 font-Poppins">
          These terms and conditions ("Terms") govern your access to and use of
          the Skillmint.io website (the "Website") and the services provided
          therein (the "Services"). By accessing or using the Website and
          Services, you agree to be bound by these Terms. If you do not agree to
          these Terms, please do not access or use the Website or Services.
        </p>
        <ol className="list-decimal ml-6 mb-4 font-Poppins">
          {/* Account Registration */}
          <li>
            <h3 className="font-bold mb-2">Account Registration</h3>
            <ul className="list-disc ml-6">
              <li>
                Applicants and employers may register for an account on
                Skillmint.io.
              </li>
              <li>
                You agree to provide accurate, current, and complete information
                during the registration process.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </li>
            </ul>
          </li>
          {/* User Responsibilities */}
          <li>
            <h3 className="font-bold mb-2">User Responsibilities</h3>
            <ul className="list-disc ml-6">
              <li>
                Applicants are solely responsible for the accuracy and
                completeness of the information provided in their profiles and
                job applications.
              </li>
              <li>
                Employers are solely responsible for the content of their job
                listings and for reviewing and managing applications for their
                posted jobs.
              </li>
              <li>
                You agree not to use Skillmint.io for any unlawful or
                unauthorized purpose.
              </li>
            </ul>
          </li>
          {/* Payment and Fees */}
          <li>
            <h3 className="font-bold mb-2">Payment and Fees</h3>
            <ul className="list-disc ml-6">
              <li>
                Certain features of Skillmint.io may require payment of fees. By
                using such features, you agree to pay all applicable fees as
                described on the Website.
              </li>
              <li>All fees are non-refundable unless otherwise stated.</li>
            </ul>
          </li>
          {/* Intellectual Property */}
          <li>
            <h3 className="font-bold mb-2">Intellectual Property</h3>
            <ul className="list-disc ml-6">
              <li>
                Skillmint.io and its contents, including but not limited to
                text, graphics, logos, and images, are the property of
                Skillmint.io or its licensors and are protected by copyright and
                other intellectual property laws.
              </li>
              <li>
                You may not reproduce, modify, distribute, or republish any
                content from Skillmint.io without the prior written consent of
                Skillmint.io.
              </li>
            </ul>
          </li>
          {/* Limitation of Liability */}
          <li>
            <h3 className="font-bold mb-2">Limitation of Liability</h3>
            <ul className="list-disc ml-6">
              <li>
                Skillmint.io is provided on an "as-is" and "as-available" basis
                without warranties of any kind, either express or implied.
              </li>
              <li>
                Skillmint.io shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or in
                connection with your use of the Website or Services.
              </li>
            </ul>
          </li>
          {/* Governing Law */}
          <li>
            <h3 className="font-bold mb-2">Governing Law</h3>
            <ul className="list-disc ml-6">
              <li>
                These Terms shall be governed by and construed in accordance
                with the laws of the United Kingdom.
              </li>
              <li>
                Any disputes arising out of or in connection with these Terms
                shall be subject to the exclusive jurisdiction of the courts of
                the United Kingdom.
              </li>
              <li>
                You agree not to use Skillmint.io for any unlawful or
                unauthorized purpose.
              </li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold mb-2">Contact Information</h3>
            <ul className="list-disc ml-6">
              <li>
                If you have any questions or concerns regarding these Terms,
                please contact us at skillmintofficial@gmail.com.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="pp">
        <h2 className="text-lg font-bold mb-4">Privacy Policy</h2>
        <p>
          At Skillmint.io, we are committed to protecting your privacy. This
          Privacy Policy describes how we collect, use, and disclose personal
          information when you use our Website and Services.
        </p>
        <ol className="list-decimal ml-6 mb-4">
          {/* Information We Collect */}
          <li>
            <h3 className="font-bold mb-2">Information We Collect</h3>
            <ul className="list-disc ml-6">
              <li>
                Applicant Information: When you register for an account as an
                applicant, we collect your name, email address, password
                (encrypted), and profile details (such as name, about me, CV
                file, experience, and education).
              </li>
              <li>
                Employer Information: When you register for an account as an
                employer, we collect your name, email address, password
                (encrypted), and job details.
              </li>
              <li>
                Usage Information: We may collect information about your use of
                the Website and Services, including log data and device
                information.
              </li>
            </ul>
          </li>
          {/* How We Use Information */}
          <li>
            <h3 className="font-bold mb-2">Information We Collect</h3>
            <ul className="list-disc ml-6">
              <li>
                We use the information we collect to provide, maintain, and
                improve our Website and Services, as well as to communicate with
                you about your account and our offerings.
              </li>
              <li>
                We may use your information to personalize your experience and
                to provide targeted advertisements and promotions.
              </li>
            </ul>
          </li>
          {/* Information Sharing */}
          <li>
            <h3 className="font-bold mb-2">Information Sharing</h3>
            <ul className="list-disc ml-6">
              <li>
                We may share your information with third-party service providers
                who assist us in operating our Website and Services.
              </li>
              <li>
                We may also share your information in response to legal requests
                or to protect our rights, property, or safety.
              </li>
            </ul>
          </li>
          {/* Data Security */}
          <li>
            <h3 className="font-bold mb-2">Data Security</h3>
            <ul className="list-disc ml-6">
              <li>
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, disclosure, or
                destruction.
              </li>
              <li>
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </li>
            </ul>
          </li>
          {/* Your Choices */}
          <li>
            <h3 className="font-bold mb-2">Your Choices</h3>
            <ul className="list-disc ml-6">
              <li>
                You may update or correct your account information at any time
                by logging into your account settings.
              </li>
              <li>
                You may opt-out of receiving promotional communications from us
                by following the instructions provided in such communications.
              </li>
            </ul>
          </li>
          {/* Children's Privacy */}
          <li>
            <h3 className="font-bold mb-2">Children's Privacy</h3>
            <ul className="list-disc ml-6">
              <li>
                Skillmint.io is not intended for children under the age of 13,
                and we do not knowingly collect personal information from
                children under the age of 13.
              </li>
            </ul>
          </li>
          {/* Changes to This Policy */}
          <li>
            <h3 className="font-bold mb-2">Changes to This Policy</h3>
            <ul className="list-disc ml-6">
              <li>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the effective date will be
                updated accordingly.
              </li>
              <li>
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </li>
            </ul>
          </li>
          <li>
            <h3 className="font-bold mb-2">Contact Information</h3>
            <ul className="list-disc ml-6">
              <li>
                If you have any questions or concerns regarding these Terms,
                please contact us at skillmintofficial@gmail.com.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default TermsandConditions;
