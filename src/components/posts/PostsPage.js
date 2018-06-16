import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../actions/postActions';
import PostsList from './PostsList';

export class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   posts = {},
    //   actions = {}
    // };
  }

  showError(error) {
    return (
      <div className="alert alert-danger col-md-6">
        Error: { error.message }
      </div>
    );
  }


  render() {
    const posts = this.props.posts; 
    const error = this.props.error;

    return (
      <div>
        <h1>Posts</h1>
        <br/>
        { error ? this.showError(error) 
                : <PostsList posts={posts} />}
      </div>
    );
  }
}

PostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return state.postsResponse;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

