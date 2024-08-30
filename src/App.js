// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CourseList from './components/course/CourseList';
import CourseDetails from './components/course/CourseDetails';
import { Toaster } from 'react-hot-toast';
import Layout from './components/student/Layout';
import SidebarComponent from './components/student/SidebarComponent';
import EnrolledCourse from './components/student/EntrolledCourse';
import Profile from './components/student/Profile';
import LogoutPage from './components/student/LogoutPage';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Toaster position="top-right" reverseOrder={false} />
          <Routes>
          <Route path="/" element={<Navigate to="/courses" />} />
          <Route path="/courses" element={<CourseList setSelectedCourse={setSelectedCourse}/>} />
            <Route path="/course-details" element={<CourseDetails course={selectedCourse} />} />
            <Route path="/course-enroll" element={<EnrolledCourse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogoutPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
