import React from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <div className="row content-app">
        <Route path='/cart' component={Cart}/> 
        <Route path='/' exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
