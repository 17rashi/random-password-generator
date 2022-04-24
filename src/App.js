import './App.css';
// import NavBar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
// import Sidebar from './components/SideBar';
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
