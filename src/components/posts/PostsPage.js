import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../actions/postActions';

class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   posts = {},
    //   actions = {}
    // };
  }

  postElement(post) {
    return (
      <div key={post.id}>
        <h4>{ post.title }</h4>
        <p>{ post.body }</p>
      </div>
    );
  }


  render() {
    const posts = this.props.posts; 
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => this.postElement(post))}
      </div>
    );
  }
}

PostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

