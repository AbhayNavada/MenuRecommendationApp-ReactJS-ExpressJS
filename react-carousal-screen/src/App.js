import './stylesheets/App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopNavBar from './components/TopNavBar';
import Recommendations from './components/Recommendations';
import UserPreferences from './components/UserPreferences';

//The main App function component
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appetizerImages : [],
      sweetImages: [],
      softDrinkImages: []
    };
  }

  //Initialize the data by making GET requests to the Express server
  componentDidMount() {
    fetch('http://localhost:4000/appetizerImages')
        .then(response => response.json())
        .then(response => this.setState({ appetizerImages : response }));
    
      fetch('http://localhost:4000/sweetImages')
        .then(response => response.json())
        .then(response => this.setState({ sweetImages : response }));
    
      fetch('http://localhost:4000/softDrinkImages')
        .then(response => response.json())
        .then(response => this.setState({ softDrinkImages : response }));
  }

  render() {
    return (
      <Router>
        <div className='main-container'>
          <div className='top-nav-bar-container'>
            <TopNavBar />
          </div>
          <div className='content-container'>
            <Switch>
              <Route exact path="/">
                <UserPreferences />
              </Route>
              <Route exact path="/recommendations">
                <Recommendations />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
