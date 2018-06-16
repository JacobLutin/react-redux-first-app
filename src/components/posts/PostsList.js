import React, { PropTypes } from 'react';
import PostElement from './PostElement';

const PostsLists = ({posts}) => {

  return (
    <div>
    { posts.map(post => 
      <PostElement key={post.id} post={post} />
    )}
    </div>
  );
};

PostsLists.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsLists;