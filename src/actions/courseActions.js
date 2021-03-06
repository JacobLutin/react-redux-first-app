import * as types from './actionTypes';
import CourseApi from '../api/courseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function(dispatch) {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    return CourseApi.saveCourse(course).then(course => {
      if (course.id) {
        dispatch(updateCourseSuccess(course));
      } else {
        dispatch(createCourseSuccess(course));
      }
    }).catch(error => {
      throw(error);
    });
  };
}