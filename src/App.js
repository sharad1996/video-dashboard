import {
  BrowserRouter as Router
} from "react-router-dom";
import SideMenu from './components/side-menu/side-menu.component';
import Routes from './routes/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='d-flex'>
          <SideMenu />
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
