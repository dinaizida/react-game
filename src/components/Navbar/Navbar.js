
// export default Navbar;
import React from 'react';
import "./Navbar.css";
const Navbar = ({ score, topScore, message }) => {
	return (
		<div className='navbar-fixed'>
			<nav>
				<div className=' nav-wrapper row blue center-align flow-text navbar-fixed-top'>
				<div className='col m4 s6' href="#">
				<a href='/'><img src="/images/../../favicon.png" height="60" className="logo d-inline-block align-top"/></a>
               </div>
					<div className='col m4 s6'>
						<span className ="btn pulse orange accent-1 message">{message}</span>
					</div>
					<div className=' score col m4 s12'>
						<span >Score: {score} | Top Score: {topScore}</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;