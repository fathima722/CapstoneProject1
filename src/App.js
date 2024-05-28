import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
                <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/Login" element={<Login/>}/>
                </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
