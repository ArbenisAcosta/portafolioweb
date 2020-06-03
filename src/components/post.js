import React from 'react'

export default (props) => {
  const post = props.element

  return (
    <div className="shadow-xl bg-white mr-4 rounded flex-shrink-0" style={{width:"300px"}}> 

      <header className="h-40 bg-cover bg-center" style={{backgroundImage: `url(${post.thumbnail})`}}></header>
      
      <div className="p-8">

        <h4 className="text-center font-bold h-20 overflow-y-hidden">
            {post.title}
        </h4>
        
        <div className="text-center mt-8">
            <a className="btn" href={post.link} target="_blank" rel="noopener noreferrer">Leer</a>
        </div>

      </div>

    </div>

  )
}