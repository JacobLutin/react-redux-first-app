import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class EditCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.initialCourse),
      errors: {}
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    return (
      <div className="py-4">
        <h1>Editing Course Page</h1>
        <CourseForm course={this.state.course}
                    errors={this.state.errors}
                    onChange={this.onChange}
                    onSave={this.onSave} />
      </div>
    );
  }
}

EditCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  initialCourse: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCoursePage);