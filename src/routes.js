import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import EditCoursePage from './components/courses/EditCoursePage';
import PostsPage from './components/posts/PostsPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course/:id" component={EditCoursePage} />
    <Route path="course" component={EditCoursePage} />
    <Route path="posts" component={PostsPage} />
  </Route>
);
