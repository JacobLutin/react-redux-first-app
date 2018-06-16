import * as types from './actionTypes';
const PostApi = 'https://jsonplaceholder.typicode.com/posts/';

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts: posts};
}

export function loadPostsFailure(error) {
  return {type: types.LOAD_POSTS_FAILURE, error: error};
}

export function loadPosts() {
  return function(dispatch) {
    return fetch(PostApi).then(response => response.json())
      .then(json => {
        return dispatch(loadPostsSuccess(json));
      }).catch(error => {
        return dispatch(loadPostsFailure(error));
      });
  };
} 