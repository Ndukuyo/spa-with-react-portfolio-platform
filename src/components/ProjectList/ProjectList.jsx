function ProjectList() {

// how projects will be displayed
    const projects = {
        title: "Project title",
        description: "Project description",
        image: ""
    }

  return (

    <>

    <div className='searchbar'>
        <input type="text" placeholder='Search Project' />
        <button type='submit'> Search </button>
    </div>

    <div className="card">
        <h2>{ projects.title }</h2>
        <p>{ projects.description }</p>
        <img src= { projects.image } alt="project title" />

    </div>

    </>
 
  )
}

export default ProjectList;