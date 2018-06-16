import {combineReducers} from 'redux';
import courses from './courseReducer';
import postsResponse from './postReducer';

const rootReducer = combineReducers({
	courses,
	postsResponse
});

export default rootReducer;