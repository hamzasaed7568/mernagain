import React from 'react'
import './App.css';
import Homescreen from './Homescreen';
import Signin from './Components/Signin';
import Profile from './Components/Profile';
import {BrowserRouter as Router , Route} from "react-router-dom"
const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Homescreen} />
        <Route path="/signin" component={Signin} />
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  )
}

export default App
