import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CourseList from './components/course/CourseList';
import { Toaster } from 'react-hot-toast';
import EnrolledCourse from './components/student/EntrolledCourse';
import Profile from './components/student/Profile';
import LogoutPage from './components/student/LogoutPage';

function App() {

  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Toaster position="top-right" reverseOrder={false} />
          <Routes>
          <Route path="/" element={<Navigate to="/courses" />} />
          <Route path="/courses" element={<CourseList/>} />
            <Route path="/course-enroll" element={<EnrolledCourse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
