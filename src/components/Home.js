import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	 constructor(props) {
	    super(props);
	    console.log(props.navList)
	  }

  render() {

  	const navigationList = this.props.navList.map((navItem) => {
  		return (
  			<li><Link to={navItem.url}>{navItem.label}</Link></li>
  		);
  	});
    return (
    <div>
    	<ul className="category-nav">
        	{navigationList}
      	</ul>
    </div>
    );
  }
}

export default Home;