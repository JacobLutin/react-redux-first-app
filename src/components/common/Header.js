import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<a className="navbar-brand" href="#">Project</a>
			<div className="collapse navbar-collapse" sid="navbarNavAltMarkup">
				<div className="navbar-nav mr-auto">
					<IndexLink to="/" className="nav-item nav-link" activeClassName="active">Home</IndexLink>
					<Link to="/about" className="nav-item nav-link" activeClassName="active">About</Link>
					<Link to="/courses" className="nav-item nav-link" activeClassName="active">Courses</Link>
					<Link to="/test" className="nav-item nav-link" activeClassName="active">Test</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;