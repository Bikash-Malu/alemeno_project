import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, TextInput, Button, Progress } from 'flowbite-react';
import { removeCourse, markCourseAsCompleted } from '../../redux/courseSlice';
import Layout from './Layout';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';

const EnrolledCourse = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCourses = enrolledCourses.filter((course) =>
    (course.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemove = async (course) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `You are about to remove ${course.name}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    });

    if (result.isConfirmed) {
      dispatch(removeCourse(course));
      toast.success(`${course.name} removed successfully!`);
    }
  };

  const handleMarkAsCompleted = (course) => {
    dispatch(markCourseAsCompleted(course));
    toast.success(`${course.name} marked as completed!`);
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="mb-4">
          <TextInput
            type="text"
            placeholder="Search for a course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
          />
        </div>

        {filteredCourses.length === 0 ? (
          <p>No enrolled courses found.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="shadow-lg p-4">
                <h3 className="text-lg font-semibold text-green-600">{course.name}</h3>
                <p>{course.description}</p>
                <p className="text-gray-500">Instructor: {course.instructor}</p>
                <p className="text-gray-500">Duration: {course.duration} hours</p>
                <p className="text-gray-500">Location: {course.location}</p>

                <Progress
                  value={course.isCompleted?'100%':'0%'}
                  size="md"
                  className="mt-4"
                  color={course.isCompleted ? 'green' : 'gray'}
                />
 <span className="ml-2 text-sm text-gray-700">
                    {course.progress}%
                  </span>
                <div className="flex justify-between mt-4">
                  <Button
                    onClick={() => handleMarkAsCompleted(course)}
                    color="success"
                    disabled={course.isCompleted}
                  >
                    {course.isCompleted ? 'Completed' : 'Mark as Completed'}
                  </Button>
                  <Button
                    onClick={() => handleRemove(course)}
                    color="red"
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EnrolledCourse;
