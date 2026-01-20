

function ProjectList({ displayProjects }) {

    console.log({displayProjects})



  return (

    <>

    <div className='searchbar'>
        <input type="text" placeholder='Search Project' />
        <button type='submit'> Search </button>
    </div>

    {displayProjects.map((project,index) => ( 

    <div className="card">
    
        <h2>{ project.title }</h2>
        <p>{ project.description }</p> 

    </div>

    ))}

    </>
 
  )
}

export default ProjectList;