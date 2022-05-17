{/**
//import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home2 from "./Home2";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./userAuthContext";

const Signup = () => {
 
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home2 />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  );
};

export default Signup;
 */}