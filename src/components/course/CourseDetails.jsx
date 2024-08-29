import React, { useState, useEffect } from 'react';
import { Card, Badge, Accordion, Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse } from '../../redux/courseSlice';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2'; // Import SweetAlert2

const CourseDetails = ({ course, onBack }) => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const alreadyEnrolled = enrolledCourses.some(
      (enrolledCourse) => enrolledCourse.id === course.id
    );
    setIsEnrolled(alreadyEnrolled);
  }, [enrolledCourses, course.id]);

  const handleEnroll = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to enroll in ${course.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, enroll me!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(enrollCourse(course));
        setIsEnrolled(true);
        toast.success(`Successfully enrolled in ${course.name}!`, {
          duration: 2000,
        });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        onClick={onBack}
        color="light"
        className="mb-6 text-blue-600 hover:text-blue-800 border border-blue-600 hover:bg-blue-100"
      >
        Back to List
      </Button>

      <Card className="p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg rounded-lg border border-gray-200">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-600">{course.name}</h2>
          <p className="text-sm sm:text-md text-gray-600 mt-1">Instructor: {course.instructor}</p>
        </div>

        <Badge color="success" className="mb-4 py-1 px-3 text-xs sm:text-sm">
          {course.enrollmentStatus}
        </Badge>

        <div className="space-y-4">
          <p className="text-sm sm:text-md text-gray-700">
            <strong>Description:</strong> {course.description}
          </p>
          <p className="text-sm sm:text-md text-gray-700">
            <strong>Course Duration:</strong> {course.duration}
          </p>
          <p className="text-sm sm:text-md text-gray-700">
            <strong>Schedule:</strong> {course.schedule}
          </p>
          <p className="text-sm sm:text-md text-gray-700">
            <strong>Location:</strong> {course.location}
          </p>
          <p className="text-sm sm:text-md text-gray-700">
            <strong>Pre-requisites:</strong>
            {course.prerequisites && Array.isArray(course.prerequisites) && course.prerequisites.length > 0 ? (
              <ul className="list-disc pl-5 mt-2">
                {course.prerequisites.map((item, index) => (
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
          color={isEnrolled ? "gray" : "dark"}
          className="mt-4"
          disabled={isEnrolled}
        >
          {isEnrolled ? "Enrolled" : "Enroll"}
        </Button>

        <Accordion flush className="mt-6">
          <Accordion.Panel>
            <Accordion.Title className="text-lg sm:text-xl font-medium text-gray-700">
              Syllabus
            </Accordion.Title>
            <Accordion.Content>
              {Array.isArray(course.syllabus) ? (
                <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-md">
                  {course.syllabus.map((item, index) => (
                    <li key={index} className="mt-2">
                      <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm sm:text-md">{course.syllabus}</p>
              )}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Card>
    </div>
  );
};

export default CourseDetails;
