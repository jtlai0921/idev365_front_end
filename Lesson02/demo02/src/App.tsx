import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    
  }
  render() {
    let title:string = "Hello,React TS";
    return (
      <div className="App">
        <header className="App-header">
          { title }
        </header>
      </div>
    );
  }
}

export default App;
