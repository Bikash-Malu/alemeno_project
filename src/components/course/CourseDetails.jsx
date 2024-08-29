import React, { useState } from 'react';
import { Card, Badge, Accordion, Button } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { enrollCourse } from '../../redux/courseSlice'; 
import { toast } from 'react-hot-toast'; 

const CourseDetails = ({ course, onBack }) => {
  const dispatch = useDispatch();
  const [isEnrolled, setIsEnrolled] = useState(false); 

  const handleEnroll = () => {
    dispatch(enrollCourse(course)); 
    setIsEnrolled(true); 
    toast.success(`Successfully enrolled in ${course.name}!`, {
        duration: 5000,
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-3">
      <Button
        onClick={onBack}
        color="light"
        className="mb-6 text-blue-600 hover:text-blue-800 border border-blue-600 hover:bg-blue-100"
      >
        Back to List
      </Button>

      <Card className="p-6 shadow-lg rounded-lg border border-gray-200">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">{course.name}</h2>
          <p className="text-md text-gray-600 mt-1">Instructor: {course.instructor}</p>
        </div>

        <Badge color="success" className="mb-4 py-1 px-3 text-sm">
          {course.enrollmentStatus}
        </Badge>

        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Description:</strong> {course.description}
          </p>
          <p className="text-gray-700">
            <strong>Course Duration:</strong> {course.duration}
          </p>
          <p className="text-gray-700">
            <strong>Schedule:</strong> {course.schedule}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {course.location}
          </p>
          {/* Corrected rendering of prerequisites */}
          <p className="text-gray-700">
            <strong>Pre-requisites:</strong>
            {course.preRequisites && Array.isArray(course.preRequisites) && course.preRequisites.length > 0 ? (
              <ul className="list-disc pl-5 mt-2">
                {course.preRequisites.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            ) : (
              <span>None</span>
            )}
          </p>
        </div>

        <Button
          onClick={handleEnroll}
          color={isEnrolled ? "gray" : "success"} 
          className="mt-4"
          disabled={isEnrolled} 
        >
          {isEnrolled ? "Enrolled" : "Enroll"} 
        </Button>
        <Accordion flush className="mt-6">
          <Accordion.Panel>
            <Accordion.Title className="text-lg font-medium text-gray-700">
              Syllabus
            </Accordion.Title>
            <Accordion.Content>
              {Array.isArray(course.syllabus) ? (
                <ul className="list-disc pl-5 text-gray-600">
                  {course.syllabus.map((item, index) => (
                    <li key={index} className="mt-2">
                      <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{course.syllabus}</p>
              )}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Card>
    </div>
  );
};

export default CourseDetails;
