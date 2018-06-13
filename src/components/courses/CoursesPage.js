import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  onClickSave(event) {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    return (
      <div>
        <div className="py-4">
          <h1>Courses</h1>
          {this.props.courses.map(this.courseRow)}
        </div> 
        <div className="col-md-6 order-md-1">
          <h4 className="mb-3">Add course:</h4>
          <form>
            <div className="form-group">
              <label forHtml="title">Title</label>
              <input type="text" onChange={this.onTitleChange}
                     name="title" value={this.state.course.title}
                     className="form-control"/>
            </div>
            <input type="submit" className="btn btn-primary"
                   value="Save" onClick={this.onClickSave}/>
          </form>
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
