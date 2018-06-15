import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toastr from 'toastr';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class EditCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.initialCourse),
      errors: {},
      saving: false
    };
    
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course: course });
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.saveCourse(this.state.course)
      .then(() => {
        this.setState({ saving: false });
        toastr.success('Course ' + this.state.course.title + ' successfully saved!');
        this.context.router.push('/courses');
      })
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  render() {
    return (
      <div>
        <h1>Editing Course Page</h1>
        <CourseForm course={this.state.course}
                    errors={this.state.errors}
                    saving={this.state.saving}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse} />
      </div>
    );
  }
}

EditCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  initialCourse: PropTypes.object.isRequired
};

EditCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getCourseById(courses, courseId) {
  const course = courses.filter(course => course.id == courseId);
  if (course) {
    return course[0];
  } else {
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path /course/:id
  let course = {};
  if (courseId) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    initialCourse: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCoursePage);