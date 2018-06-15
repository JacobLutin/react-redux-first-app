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
      errors: {}
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
    this.props.actions.saveCourse(this.state.course);
    toastr.success('Course ' + this.state.course.title + ' successfully saved!');
  }

  render() {
    return (
      <div className="py-4">
        <h1>Editing Course Page</h1>
        <CourseForm course={this.state.course}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse} />
      </div>
    );
  }
}

EditCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  initialCourse: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  // let course = {id: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: state.course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCoursePage);