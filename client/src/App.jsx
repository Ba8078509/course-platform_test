import './App.css'
import courses from './data.js'
import { useState } from 'react'

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  console.log(selectedCourse)
  return (
    <>  {selectedCourse ? (
      <div>
        <h1>{selectedCourse.title}</h1>
        <ul>{courses.map (lessons => (<li key ={lessons.id}>{lessons.title}</li>))}</ul>
        <button onClick={() => setSelectedCourse(null)}>Назад к курсам</button>
      </div>
    ) :
      
          (<div className="catalog">
            {courses.map(course => (
            <div key={course.id}>
              
                <div className="course-card" onClick={() => setSelectedCourse(course)}>
                    <h2>{course.title}</h2>
                    <p>Уроков: {course.lessons.length}</p>
                </div>
              
            </div>
          ))}
          </div>)}
      
    </>
  )
}

export default App
