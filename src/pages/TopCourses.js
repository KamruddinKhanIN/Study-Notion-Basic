import React from 'react';
import Navbar from '../components/TopCourses/Navbar';
import Cards from '../components/TopCourses/Cards';
import Filter from '../components/TopCourses/Filter';
import { toast } from 'react-hot-toast';
import Spinner from '../components/TopCourses/Spinner';
import {apiUrl, filterData} from '../data';
import { useEffect, useState } from 'react';
const TopCourses = () =>{
    const [courses, setcourses] = useState({});
    const [loading, setloading] = useState(true);
    const [category, setcategory] = useState("All")
    
    async function courseData() {
      setloading(true);
      try{
        const res= await fetch(apiUrl);
        const data = await res.json();
        console.log(data)
        setcourses(data);


      }
  
      catch(e){
        toast.error("Something Went Wrong")
      }
  
      setloading(false);

      
    };

    console.log(courses)
  
    useEffect(() => {
     courseData();
     // eslint-disable-next-line
      },[])

      if (!courses || courses.length === 0) {
        return <p>No courses available</p>;
      }
    
    
    return (
    <div className=" min-h-screen flex flex-col bg-bgDark2 top-courses">
  
       <div>
       <Navbar/>
       </div>
      
      <div className="bg-bgDark2"> 
  
      <div><Filter  filterData={filterData} category={category} setcategory={setcategory} /></div>
  
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">  
        {
        loading? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>
    </div>
  )
}

export default TopCourses;