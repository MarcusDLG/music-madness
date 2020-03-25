import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
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
              <Link to="/1">Coheed and Cambria</Link>
            </li>
            <li>
              <Link to="/2">RDGLDGRN</Link>
            </li>
            <li>
              <Link to="/3">Billie Eilish</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route exact path="/3" component={Page3}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
