import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideMenu from './components/side-menu/side-menu.component';
import Routes from './routes/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='d-flex'>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alert">About</Link>
            </li>
            <li>
              <Link to="/reports">Dashboard</Link>
            </li>
          </ul> */}
          <SideMenu />

          {/* <hr /> */}

          <Routes />
          {/* <Switch>
            <Route exact path="/">
              <Alert />
            </Route>
            <Route path="/alert">
              <Alert />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
          </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
