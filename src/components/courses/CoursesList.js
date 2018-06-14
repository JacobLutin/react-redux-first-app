import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CoursesList = ({courses}) => {
  return (
    <table className="table table-hover" id="courses-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      { courses.map(course => 
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CoursesList;