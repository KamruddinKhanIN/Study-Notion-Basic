import React from 'react';
import logo from "../assets/Logo.svg"
import {  NavLink} from 'react-router-dom'; 
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

  let loginStatus= props.loginStatus;
  let setloginStatus= props.setloginStatus;


  function logoutHandler(){
    setloginStatus(false);
    toast.success("Logged Out")
  }
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <NavLink to="/">
        <div>
            <img src={logo} alt="Page-Logo" width={160} height={32} loading='lazy' />
        </div>
        </NavLink>
        
        <nav >
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/">About</NavLink>
                </li>

                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>
        </nav>


        <div className='flex items-center gap-x-4'>
            { !loginStatus &&
                <NavLink to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </NavLink>
            }

            {!loginStatus &&
                <NavLink to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
                </NavLink>
            }

            {loginStatus &&
                <NavLink to="/">
                    <button onClick={logoutHandler} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Logout</button>
                </NavLink>
            }

            {loginStatus &&
                <NavLink to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </NavLink>
            }
        </div>

    </div>
  )
}

export default Navbar