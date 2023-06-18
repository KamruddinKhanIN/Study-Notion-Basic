import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate= useNavigate();
  return (
    <div className='flex flex-col justify-center items-center text-white text-3xl'>
        Welcome To Study Notion

        <button onClick={()=>navigate("/courses") } className=' mt-[400px] button-85'>Go To Courses</button>
    </div>
  )
}

export default Dashboard