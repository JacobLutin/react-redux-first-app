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
      <div key={post.id} className="col-md-8 py-2 post">
        <h4>{ post.title }</h4>
        <p>{ post.body }</p>
      </div>
    );
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
        { (error) ? this.showError(error)
                  : posts.map(post => this.postElement(post))}
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

