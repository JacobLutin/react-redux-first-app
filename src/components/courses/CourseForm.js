import React, { PropTypes } from 'react';

const CourseForm = ({course, errors, saving, onChange, onSave }) => {
  return (
    <form className="py-4">
      <h4>{course.id ? 'Edit course' : 'Add course'}</h4>
      <br/>
      <div className="form-group row">
        <label forHtml="title" className="col-sm-1 col-form-label">Title</label>
        <div className="col-md-6">
          <input type="text" onChange={onChange}
                 name="title" value={course.title}
                 className="form-control"/>
        </div>
      </div>
       <div className="form-group row">
        <label forHtml="authorId" className="col-sm-1 col-form-label">Author</label>
        <div className="col-md-6">
          <input type="text" onChange={onChange}
                 name="authorId" value={course.authorId}
                 className="form-control"/>
        </div>
      </div>
      <div className="form-group row">
        <label forHtml="category" className="col-sm-1 col-form-label">Category</label>
        <div className="col-md-6">
          <input type="text" onChange={onChange}
                 name="category" value={course.category}
                 className="form-control"/>
        </div>
      </div>
      <div className="form-group row">
        <label forHtml="length" className="col-sm-1 col-form-label">Length</label>
        <div className="col-md-6">
          <input type="text" onChange={onChange}
                 name="length" value={course.length}
                 className="form-control"/>
        </div>
      </div>
      <div className="py-4">
        <input type="submit" className="btn btn-success"
               value={saving ? 'Saving...' : 'Save'} 
               disable={saving}
               onClick={onSave}/>
      </div>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  saving: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CourseForm;