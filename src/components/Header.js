import React from 'react';
import '../css/Header.css';

const Header = (props) => (
	<header>
	  <nav>
	  	<h1>Heidi Olsen</h1>
	    <ul>
	      <li><a href="#about">About</a></li>
	      <li><a href="#coding">Coding</a></li>
	      <li><a href="#speaking">Speaking</a></li>
	      <li><a href="#writing">Writing</a></li>
	      <li><a href="#interests">Interests</a></li>
	    </ul>
	  </nav>
	</header>
);

export default Header;