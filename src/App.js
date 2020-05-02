import React, { Component } from 'react'
import './App.css';
import MainScreen from './containers/MainScreen';
import {connect} from 'react-redux';

import * as moduleAction from './store/action/module';
import * as expertAction from './store/action/expert';

export class App extends Component {
  
  componentDidMount() {
    this.props.fetchMoules();
    this.props.getExperts();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="m-2">
          <MainScreen/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      fetchMoules: () => dispatch(moduleAction.initModules()),
      getExperts: () => dispatch (expertAction.initExperts()),
    }
}
export default connect(null,mapDispatchToProps)(App);
