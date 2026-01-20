import React, { useState } from 'react'

function ProjectForm() {

    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Project Added:", title, description);
    }
  return (

    <div>
        <h2> Add Project </h2>
        <form ClassName="project-form" onSubmit={handleSubmit}>
            <label id='title' htmlFor='title'> Title </label> <br />
            <input type="text" name= "title"placeholder='Project Title' value={title} onChange={(event)=> setTitle(event.target.value)}/> <br />
            <label htmlFor="description"> Description </label> <br />
            <textarea name= "description"type="text" placeholder='Description' value={ description } onChange={(event) => setDescription(event.target.value)} /> <br />
            <button type="submit"> Add New Project </button>


        </form>

    </div>
  )
}

export default ProjectForm;