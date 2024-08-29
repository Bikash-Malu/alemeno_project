import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextInput, Button, ListGroup, Spinner } from 'flowbite-react'; 
import CourseCard from './CourseCard';
import CourseDetails from './CourseDetails';
import Layout from '../student/Layout';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/8f2fd21b-db18-4427-ade9-d8b4dda770f5') 
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCourse = (course) => {
    setSelectedCourse(course); 
  };

  const handleBackToList = () => {
    setSelectedCourse(null); 
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {loading ? ( 
          <div className="flex justify-center items-center h-full">
            <Spinner size="xl" color="info" aria-label="Loading..." />Loading....
          </div>
        ) : !selectedCourse ? (
          <>
            <div className="mb-4 flex items-center mt-4">
              <TextInput
                type="text"
                placeholder="Search by Course Name or Instructor"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md border-gray-300 rounded-l-md"
              />
              <Button type="button" color="primary" className="ml-2 rounded-r-md">
                Search
              </Button>
            </div>
            {filteredCourses.length > 0 ? (
              <ListGroup>
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} onSelect={handleSelectCourse} />
                ))}
              </ListGroup>
            ) : (
              <p className="text-gray-600 text-center mt-4">No courses found.</p>
            )}
          </>
        ) : (
          <CourseDetails course={selectedCourse} onBack={handleBackToList} /> 
        )}
      </div>
    </Layout>
  );
};

export default CourseList;
