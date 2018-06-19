import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Github from './Github'
import Homework from './Homework'
import Pokedex from './Pokedex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Welcome to the</h3>
          <h1>API PARTY</h1>
        </div>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/homework">Homework</NavLink>
          </li>
          <li>
            <NavLink to="/pokedex">Pokedex</NavLink>
          </li>
        </ul>

        <Switch> 
          <Route path="/github" component={Github} />
          <Route path="/homework" component={Homework} />
          <Route path="/pokedex" component={Pokedex} />
          <Route render={() => <p>click one of the links above</p>}/>
        </Switch>
      </div>
    )
  }
}

export default App
