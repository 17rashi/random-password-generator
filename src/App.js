import "./App.css";
// import NavBar from './components/NavBar';
// import Sidebar from './components/SideBar';
import Signup from "./components/Signup";
import Generate from "./pages/generatePasswords";
import NavBar from "./components/NavBar";
import Strength from "./pages/Strength";
import About from "./pages/about";
import Home from "./pages";
import { UserAuthContextProvider } from "./components/userAuthContext";
import Login from "./components/Login";
import Home2 from "./components/Home2";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="generatePasswords" element={<Generate />} />

          <Route path="Strength" element={<Strength />} />
          <Route path="about" element={<About />} />
        </Routes>
        <UserAuthContextProvider>
          <Routes>
          <Route path="/home"
                element={
                  <ProtectedRoute>
                    <Home2 />
                  </ProtectedRoute>
                }
              />
            <Route path="Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
