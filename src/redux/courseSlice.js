// courseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enrolledCourses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      state.enrolledCourses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(course => course.id !== action.payload.id);
    },
  },
});

export const { enrollCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
