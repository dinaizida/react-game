
// export default Navbar;
import React from 'react';
import "./Navbar.css";
const Navbar = ({ score, topScore, message }) => {
	return (
		<div className='navbar-fixed'>
			<nav>
				<div className=' nav-wrapper row blue center-align flow-text navbar-fixed-top'>
					<div className='col s4'>
						<a href='/'><b>Clicky Game</b></a>
					</div>
					<div className='col s4'>
						<span>{message}</span>
					</div>
					<div className='col s4'>
						<span>Score: {score} | Top Score: {topScore}</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;