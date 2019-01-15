// NPM
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

// PROJECT
import './App.css';
import Main from '@/containers/Main'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" component={Main} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
