import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';

class Main extends React.Component {

  render() {
    return (
    	 <main>
		    <Switch>
		      <Route exact path='/' render={(props) => <Home {...props} navList={this.props.navList} />} />
		      <Route path='/c/:categoryId_feature/newarrivals' component={Category}/>
		    </Switch>
  		 </main>
    );
  }
}

export default Main;