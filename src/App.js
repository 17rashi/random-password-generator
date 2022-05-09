import './App.css';
// import NavBar from './components/NavBar';
// import Sidebar from './components/SideBar';
import Signup from './pages/signup';
import Generate from './pages/generatePasswords'
import NavBar from './components/NavBar';
import Strength from './pages/Strength';
import About from './pages/about';

import Home from './pages';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="generatePasswords" element={[<NavBar />, <Generate />]} />
      <Route path="signup" element={[<NavBar />, <Signup />]} />
      <Route path="about" element={[<NavBar />, <About />]} />
      <Route path="Strength" element={[<NavBar />, <Strength />]} />
    </Routes>
  </BrowserRouter>
 
  </>
  );
}

export default App;
