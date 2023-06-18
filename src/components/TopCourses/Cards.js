import React, {useState} from 'react';
import Card from './Card';

const Cards = (props) => {

  let coursesList=props.courses.data;
  let category= props.category;
  const [likedCourses, setlikedCourses] = useState([])
  
  function getCourses(){

    if( category ==="All"){
    let allCourses=[];
    Object.values(coursesList).forEach(array=> {
        array.forEach(courseData=>{
            allCourses.push(courseData);
        })
    })

    return allCourses;
  }
  
  else if(category==="Liked Courses"){
      let allCourses=[];
      
      likedCourses.forEach((id)=>{
        Object.values(coursesList).forEach(array=> {
          array.forEach((courseData)=>{
            if(courseData.id === id)
            {
              allCourses.push(courseData);
            }
          })
        })
      })

      return allCourses;
  }

  else{
     return coursesList[category];
  }
    
  }  


  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        
        
        
        {   


          getCourses().length>0? 
          (
            getCourses().map((course)=>{
                return <Card key={course.id} course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses}/>
            })
          )
          :
          (
            
              <div className=' text-white text-[2rem] font-bold'>
                Please Like Some Courses
              </div>
          )
          

        }
    </div>
  )
}

export default Cards;