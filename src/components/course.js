import React from 'react'

export default (props) => {
  const course = props.element

  return (
    <div className=" shadow-xl p-8 bg-white mr-4 mt-4 rounded-lg flex-shrink-0" style={{width:"200px"}}> 

      <h4 className="text-center font-bold h-20 overflow-y-hidden">
          <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
      </h4>
      <div className="text-center">
          <span className="text-sm inline-block bg-blue-200 text-blue-800 p-1 mt-2 radius">Progreso: {parseInt(course.progress)}%</span>
      </div>

    </div>

  )
}