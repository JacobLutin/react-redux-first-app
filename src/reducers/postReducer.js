import * as types from '../actions/actionTypes';

export default function postReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return { 
        posts: action.posts
      };

    case types.LOAD_POSTS_FAILURE:
      return {
        posts: [],
        error: action.error
      };

    default:
      return state;
  }
}