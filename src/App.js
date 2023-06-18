import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route} from 'react-router-dom'; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TopCourses from "./pages/TopCourses";
import PrivateRoute from "./components/PrivateRoute";
import {useState} from 'react';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
  <div className="w-[100%] min-h-screen bg-richblack-900 flex flex-col">
    <Navbar loginStatus={isLoggedIn} setloginStatus={setisLoggedIn}/>

    <Routes>
       <Route path="/" element={<Login setloginStatus={setisLoggedIn}/>}></Route>
       <Route path="/home" element={<Home/>}/>
       <Route path="/login" element={<Login setloginStatus={setisLoggedIn}/>}></Route>
       <Route path="/signup" element={<Signup setloginStatus={setisLoggedIn}/>}></Route>
       <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>}></Route>
       <Route path="/courses" element={<PrivateRoute isLoggedIn={isLoggedIn}><TopCourses/></PrivateRoute>}></Route>
    </Routes>
     
  </div>)
}

export default App;
