# Skillmint Backend

A robust Node.js/Express.js backend API for the Skillmint job platform, built with MVC architecture and MongoDB.

## 🚀 Features

- **Job Management**: Complete CRUD operations for job postings with expiration handling
- **User Authentication**: JWT-based authentication for employers, students, and admins
- **File Upload**: AWS S3 integration for profile images and documents
- **Payment Processing**: Stripe integration for premium job postings
- **Email Services**: Nodemailer for account activation and password reset
- **Automated Tasks**: Cron jobs for managing expired jobs
- **Security**: Input sanitization, CORS configuration, and error handling

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- AWS S3 Account
- Stripe Account
- SMTP Email Service

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Skillmint-main/backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:

   ```env
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

4. **Start the server**

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## 📁 Project Structure

```
backend/
├── config/                 # Configuration files
│   ├── db.js              # MongoDB connection
│   ├── multerConfig.js    # File upload configuration
│   └── s3*.js             # AWS S3 configurations
├── controllers/           # Business logic
│   ├── jobController.js   # Job management
│   ├── userController.js  # User management
│   ├── studentController.js # Student management
│   └── ...
├── middleware/            # Custom middleware
│   ├── authMiddleware.js  # Authentication
│   ├── adminMiddleware.js # Admin authorization
│   └── errorMiddleware.js # Error handling
├── models/               # MongoDB schemas
│   ├── jobModel.js       # Job schema
│   ├── userModel.js      # User schema
│   ├── studentModel.js   # Student schema
│   └── ...
├── routes/               # API routes
│   ├── jobRoutes.js      # Job endpoints
│   ├── userRoutes.js     # User endpoints
│   ├── studentRoutes.js  # Student endpoints
│   └── ...
└── server.js             # Main server file
```

## 🔌 API Endpoints

### Authentication

- `POST /api/users/register` - Register new employer
- `POST /api/users/login` - Employer login
- `POST /api/students/register` - Register new student
- `POST /api/students/login` - Student login
- `POST /api/superusers/register` - Register admin
- `POST /api/superusers/login` - Admin login

### Jobs

- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job
- `GET /api/jobs/:id` - Get specific job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `GET /api/expiredJobs` - Get expired jobs

### Users & Students

- `GET /api/users` - Get all users
- `GET /api/students` - Get all students
- `PUT /api/users/:id` - Update user
- `PUT /api/students/:id` - Update student

### Profiles

- `GET /api/profiles` - Get student profiles
- `POST /api/profiles` - Create profile
- `PUT /api/profiles/:id` - Update profile

### Contact

- `POST /api/contact` - Submit contact form

### Payments

- `POST /payment` - Process Stripe payment

## 🔧 Key Technologies

- **Express.js** - Web framework
- **MongoDB/Mongoose** - Database and ODM
- **JWT** - Authentication
- **AWS S3** - File storage
- **Stripe** - Payment processing
- **Nodemailer** - Email services
- **Multer** - File upload handling
- **Node-cron** - Scheduled tasks
- **DOMPurify** - Input sanitization

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Input sanitization with DOMPurify
- CORS configuration
- Error handling middleware
- Account activation system
- Password reset functionality

## 🚀 Deployment

The backend is configured to serve the React frontend in production mode. The server will automatically serve static files from the `../client/build` directory.

## 📝 Environment Variables

Make sure to set up all required environment variables in your `.env` file before running the application.

## 📄 License

This project is licensed under the MIT License.
