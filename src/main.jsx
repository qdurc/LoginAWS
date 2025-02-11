import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Auth/Login.jsx"; 
import { RegisterPage } from "./pages/Auth/Register.jsx";
import { HomePage } from "./pages/Home/HomePage";

export const Main = () => {
  return (
    <Router>
      <Routes>
        
        {/* Ruta para Login */}
        <Route path="/login" element={<LoginPage/>} />
        {/* Ruta para Register */}
        <Route path="/register" element={<RegisterPage/>} />
        {/* Ruta para HomePage */}
        <Route path="/home" element={<HomePage/>} />

      </Routes>
    </Router>
  );
};
