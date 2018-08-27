import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      navList: ''
    }
  }

  componentWillMount() {

    axios.get('/data/v1/US/navigation')
      .then((response) =>  {
       if (response.data) {
        console.log(response.data.nav[0].navGroups[0].navItems);
          this.setState({
            navList: response.data.nav[0].navGroups[0].navItems
          });
       }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="mainWrapper">
        <Header />
        {
          this.state.navList.length && <Main navList={this.state.navList}/>
        }
      </div>
    );
  }
}

export default App;
