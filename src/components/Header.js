import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
    	<header className="header">
    		<Link to='/'>
    			<img src="https://www.jcrew.com/next-static/images/jcrew/header-logo-cursive.svg" className="App-logo" alt="logo" />
    		</Link>
    	</header>
    );
  }
}

export default Header;