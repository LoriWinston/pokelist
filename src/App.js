import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import SearchPage from './Components/SearchPage.js';
import Header from './Components/Header.js';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
                < Router >
                  < Header />
                      < Switch >
                          < Route 
                              path="/" 
                              exact
                              render={(routerProps) => < HomePage {...routerProps} />} 
                          />
                          < Route 
                              path="/search" 
                              exact
                              render={(routerProps) => < SearchPage {...routerProps} />} 
                          />
                      </ Switch >
                </ Router >
      </header>
    </div>
    );
  }
}