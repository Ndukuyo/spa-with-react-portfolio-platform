import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import ProjectForm from './components/ProjectForm/ProjectForm.jsx'
import ProjectList from './components/ProjectList/ProjectList.jsx'

function App() {
  const [count, setCount] = useState(0)

// Projects on the page
  const availableProjects = [
    {
      title: "Informational Sites",
      description: "An informational site focused on providing relevant content to your audience.",
      id: 1
    }, 

    {
      title: "Website Redesign",
      description: "A complete overhaul of an existing website to improve user experience and aesthetics.",
      id: 2
    }
  ]

  // the state that stores the projects
  const [projects, setProjects] = useState(availableProjects);

  // function to add projects through the form
  function addProjects(newProject) {
    setProjects([...projects, newProject])
  }

  return (
    <>
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <main className="main-container">

        <div className="project-form">
          <ProjectForm add={addProjects}/>
        </div>

        <div className="project-list">
          <ProjectList displayProjects={projects} />  {/* Passing currentProjects as props */}
          
        </div>

      </main>
      
      <div className="foter">
        <h4> &copy; M & S Creative Solutions. All rights reserved </h4>
        <p>Call us Today at:  0712 345 678</p>
      </div>
    </div>

    </>
  )
}

export default App
