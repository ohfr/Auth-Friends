import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="login">Log In</NavLink>
        <NavLink to="friends">Friends</NavLink>
      </nav>
      <Route to="/login" component={Login} />
      <ProtectedRoute exact path="/friends" component={Friends} />
    </div>
  );
}

export default App;
