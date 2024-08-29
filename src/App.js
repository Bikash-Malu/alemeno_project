// App.js
import React, { useState } from 'react';
import CourseList from './components/course/CourseList';
import CourseDetails from './components/course/CourseDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
     <Toaster position="top-right" reverseOrder={false} />
      {!selectedCourse ? (
        <CourseList setSelectedCourse={setSelectedCourse} />
      ) : (
        <CourseDetails course={selectedCourse} />
      )}
    </div>
  );
}

export default App;
