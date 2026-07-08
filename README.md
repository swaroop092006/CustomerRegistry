# Customer Registry System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows customers to register complaints, track complaint status, manage their profile, and submit feedback.

## Features

- User Registration & Login
- Secure JWT Authentication
- Customer Dashboard
- Register New Complaint
- View Complaint History
- Track Complaint Status
  - Pending
  - In Process
  - Resolved
- User Profile Management
- Change Password
- Submit Feedback
- Responsive User Interface

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

## Project Structure

```
CustomerRegistry/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/swaroop092006/CustomerRegistry.git
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Environment Variables

Create a `.env` file inside the **backend** folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run the Project

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd frontend
npm start
```

The application will run at:

```
Frontend: http://localhost:3000

Backend: http://localhost:5000
```

## Modules

- Authentication
- Customer Dashboard
- Complaint Management
- Complaint Status Tracking
- Profile Management
- Feedback System

## Future Improvements

- Admin Panel
- Email Notifications
- Complaint Priority Levels
- File Upload for Complaints
- Dashboard Analytics

## Author
**Swaroop**

GitHub:
https://github.com/swaroop092006
Documentation:https://drive.google.com/drive/folders/1GdswgkAWgHv6vuBW5_7q6lXyF5NC8OKi?usp=drive_link
:https://drive.google.com/drive/folders/1z4ZlGus4oGh1J8WxRmcKpC8BT5A0v7cC?usp=drive_link
