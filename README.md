# Skillmint - Job Platform

A comprehensive MERN stack job platform that connects employers with talented students and professionals. Built with modern technologies and following MVC architecture principles.

## 🎯 Project Overview

Skillmint is a full-stack job platform that provides a seamless experience for employers to post jobs and for students/professionals to find and apply for opportunities. The platform features separate user roles, payment processing, file management, and automated job management.

## 🚀 Key Features

### For Employers

- **Job Posting**: Create detailed job listings with rich text descriptions
- **Applicant Management**: View and manage applications from candidates
- **Premium Features**: Enhanced job visibility through Stripe payments
- **Dashboard**: Comprehensive overview of posted jobs and applications
- **Profile Management**: Company profile and branding

### For Students/Applicants

- **Job Discovery**: Browse, search, and filter available opportunities
- **Application System**: Apply to jobs with professional profiles
- **Profile Management**: Create and maintain detailed professional profiles
- **Application Tracking**: Monitor application status and responses
- **Public Profiles**: Shareable professional profiles

### For Administrators

- **User Management**: Oversee all users, students, and employers
- **Job Oversight**: Monitor and manage all job postings
- **System Administration**: Full platform control and analytics
- **Content Moderation**: Review and approve job postings

## 🏗️ Architecture

### Backend (Node.js/Express.js)

- **MVC Pattern**: Model-View-Controller architecture
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT Authentication**: Secure user authentication
- **AWS S3**: File storage for images and documents
- **Stripe**: Payment processing for premium features
- **Nodemailer**: Email services for notifications
- **Cron Jobs**: Automated task scheduling

### Frontend (React.js)

- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first styling
- **DaisyUI**: Component library
- **React Router**: Navigation and routing
- **Axios**: HTTP client for API communication
- **React Stripe**: Payment integration
- **Google Analytics**: User tracking and analytics

## 📁 Project Structure

```
Skillmint-main/
├── backend/                 # Node.js/Express.js API
│   ├── config/             # Configuration files
│   ├── controllers/        # Business logic
│   ├── middleware/         # Custom middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── server.js          # Main server file
├── client/                 # React.js frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── features/      # Redux Toolkit slices
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main app component
│   └── public/            # Static assets
└── README.md              # This file
```

## 🛠️ Technology Stack

### Backend Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **AWS SDK** - Cloud services integration
- **Stripe** - Payment processing
- **Nodemailer** - Email services
- **Node-cron** - Task scheduling
- **DOMPurify** - Input sanitization

### Frontend Technologies

- **React.js** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling framework
- **DaisyUI** - Component library
- **Axios** - HTTP client
- **React Stripe** - Payment integration
- **React Quill** - Rich text editor
- **React Icons** - Icon library
- **React Toastify** - Notifications
- **React Modal** - Modal dialogs

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- AWS S3 Account
- Stripe Account
- SMTP Email Service

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Skillmint-main
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   # Backend Environment Variables
   NODE_ENV=development
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET=your_stripe_secret_key

   # AWS Configuration
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_BUCKET_NAME=your_s3_bucket_name

   # Email Configuration
   EMAIL_HOST=your_smtp_host
   EMAIL_PORT=587
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password

   # Server Addresses
   AWS_IP_ADDRESS=your_domain_or_ip
   SERVER_ADDRESS=your_backend_url
   SERVER_ADDRESS_FRONT=your_frontend_url
   ```

5. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

6. **Start the frontend application**

   ```bash
   cd client
   npm start
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## 🔧 Development

### Backend Development

```bash
cd backend
npm run dev  # Start with nodemon for development
```

### Frontend Development

```bash
cd client
npm start    # Start development server
```

### Building for Production

```bash
# Build frontend
cd client
npm run build

# Start production backend
cd backend
npm start
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Input Sanitization**: DOMPurify for XSS protection
- **CORS Configuration**: Cross-origin resource sharing
- **File Upload Security**: Secure file handling with validation
- **Error Handling**: Comprehensive error management

## 📊 Features Overview

### User Management

- Multi-role authentication (Employer, Student, Admin)
- Account activation system
- Password reset functionality
- Profile management

### Job Management

- CRUD operations for job postings
- Job expiration handling
- Featured job capabilities
- Application tracking

### Payment System

- Stripe integration for premium features
- Secure payment processing
- Payment success/failure handling

### File Management

- AWS S3 integration for file storage
- Image upload and processing
- Document management
- Profile picture handling

### Communication

- Email notifications
- Contact form handling
- Account activation emails
- Password reset emails

## 🚀 Deployment

### Backend Deployment

1. Set up environment variables for production
2. Build and deploy to your hosting service
3. Configure MongoDB connection
4. Set up AWS S3 and Stripe credentials

### Frontend Deployment

1. Build the React application: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Configure environment variables for production

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation in the backend and client folders

## 🔮 Future Enhancements

- Real-time messaging system
- Advanced search and filtering
- Mobile application
- AI-powered job matching
- Video interview integration
- Advanced analytics dashboard

---

**Skillmint** - Connecting talent with opportunities 🚀
