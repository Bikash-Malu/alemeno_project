import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enrolledCourses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push({
        ...action.payload,
        isCompleted: false,
        progress: 0,
      });
    },
    removeCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(course => course.id !== action.payload.id);
    },
    markCourseAsCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload.id);
      if (course) {
        course.isCompleted = true;
        course.progress = 100;
      }
    },
    updateCourseProgress: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload.id);
      if (course) {
        course.progress = action.payload.progress;
      }
    },
  },
});

export const { enrollCourse, removeCourse, markCourseAsCompleted, updateCourseProgress } = courseSlice.actions;
export default courseSlice.reducer;
