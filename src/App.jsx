import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Coheed from './pages/Coheed'
import RGG from './pages/RGG'
import Billie from './pages/Billie'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        {/* <h1>My Favorite Bands</h1> */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Bands</Link>
            </li>
            <li>
              <Link to="/Coheed">Coheed and Cambria</Link>
            </li>
            <li>
              <Link to="/RGG">RDGLDGRN</Link>
            </li>
            <li>
              <Link to="/Billie">Billie Eilish</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Coheed" component={Coheed}></Route>
        <Route exact path="/RGG" component={RGG}></Route>
        <Route exact path="/Billie" component={Billie}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
