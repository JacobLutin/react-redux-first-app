import React, { PropTypes } from 'react';

const PostElement = ({post}) => {
  
  return (
    <div className="col-md-8 py-2 post">
      <h4>{ post.title }</h4>
      <p>{ post.body }</p>
    </div>
  );
};

PostElement.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostElement;