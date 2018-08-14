//sets up the reusable Footer component
import React from "react";
import "./Footer.css";

const Footer = () => (
	<header className = "footer row blue">
		<div className="copy">
                Copyright &copy; <span id="copyright_year"></span> Designed by Dina Rudenko at <a target="_blank" href="http://businessonwww.com/">BusinessOnWWW.com</a> | Austin Texas Web Design | All Rights Reserved. 
        </div>
	</header>
);

export default Footer;