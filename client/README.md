# Skillmint Frontend

A modern React.js frontend application for the Skillmint job platform, featuring a responsive design with Tailwind CSS and comprehensive job management functionality.

## 🚀 Features

- **Responsive Design**: Modern UI built with Tailwind CSS and DaisyUI
- **User Authentication**: Complete login/register system for employers, students, and admins
- **Job Management**: Browse, search, filter, and apply for jobs
- **Dashboard System**: Separate dashboards for employers, students, and admins
- **Payment Integration**: Stripe payment processing for premium job postings
- **Real-time Updates**: Redux Toolkit for state management
- **File Upload**: Profile image and document upload functionality
- **Email Integration**: Account activation and password reset
- **Analytics**: Google Analytics 4 integration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend README)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Skillmint-main/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the client directory with the following variables:

   ```env
   REACT_APP_API_URL=http://localhost:4000
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   REACT_APP_GA_TRACKING_ID=your_google_analytics_id
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
client/src/
├── app/                    # Redux store configuration
│   └── store.js
├── components/             # React components
│   ├── Account/           # Authentication components
│   ├── Admin/             # Admin-specific components
│   ├── Dashboard/         # Dashboard components
│   │   ├── Admin/         # Admin dashboard
│   │   ├── Applicant/     # Student dashboard
│   │   └── Employer/      # Employer dashboard
│   ├── Job/               # Job-related components
│   │   ├── Components/    # Job display components
│   │   └── Post/          # Job posting components
│   ├── Misc/              # Utility components
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer component
│   └── Stripe/            # Payment components
├── features/              # Redux Toolkit slices
│   ├── auth/              # Authentication state
│   ├── jobs/              # Job management state
│   ├── students/          # Student management state
│   ├── profiles/          # Profile management state
│   └── ...
├── pages/                 # Page components
│   ├── Home.jsx           # Landing page
│   ├── Login.jsx          # Login page
│   ├── Register.jsx       # Registration page
│   ├── Contact.jsx        # Contact page
│   └── Post.jsx           # Job posting page
├── App.js                 # Main application component
├── App.css                # Application styles
└── index.js               # Application entry point
```

## 🎯 Key Features

### For Employers

- **Job Posting**: Create and manage job listings
- **Applicant Management**: View and manage job applications
- **Dashboard**: Overview of posted jobs and applications
- **Premium Features**: Enhanced job visibility with payment

### For Students/Applicants

- **Job Browsing**: Search and filter available jobs
- **Application System**: Apply to jobs with profile
- **Profile Management**: Create and update professional profiles
- **Application Tracking**: Monitor application status

### For Admins

- **User Management**: Manage all users and students
- **Job Oversight**: Monitor and manage all job postings
- **System Administration**: Full platform control

## 🔧 Key Technologies

- **React.js** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Navigation and routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Axios** - HTTP client
- **React Stripe** - Payment processing
- **React Quill** - Rich text editor
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **React Modal** - Modal dialogs

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Modern Interface**: Clean and intuitive design
- **Dark/Light Mode**: Theme support
- **Loading States**: Smooth user experience
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time validation feedback

## 🔌 API Integration

The frontend communicates with the backend API through:

- **Axios** for HTTP requests
- **Redux Toolkit** for state management
- **JWT tokens** for authentication
- **File upload** for images and documents

## 🚀 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile phones

## 🔒 Security Features

- JWT token management
- Secure file uploads
- Input validation
- XSS protection
- CSRF protection

## 📊 Analytics

Google Analytics 4 is integrated to track:

- Page views
- User interactions
- Conversion tracking
- Performance metrics

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

3. **Configure environment variables** for production

## 📄 License

This project is licensed under the MIT License.
