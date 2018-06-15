import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <div className="py-4">
          <h1>Courses</h1>
          <CoursesList courses={courses}/>
          <Link to="/course" className="btn btn-primary">Add course</Link>
        </div> 
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
