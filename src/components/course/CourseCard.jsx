import React from 'react';
import { Button, ListGroup } from 'flowbite-react';

const CourseCard = ({ course, onSelect }) => {
  return (
    <ListGroup.Item className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-blue-500">
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.name}</h3>
        <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>
        <Button gradientMonochrome="success" onClick={() => onSelect(course)}>
          View Details
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default CourseCard;
