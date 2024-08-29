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
  },
});

export const { enrollCourse } = courseSlice.actions;
export default courseSlice.reducer;
