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
  const currentProjects = [

    {
      id: 1,
      title: "Informational Sites",
      description: "An informational site focused on providing relevant content to your audience.",
      image: ""
    }
  ]

  return (
    <>
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <main className="main-container">

        <div className="project-form">
          <ProjectForm />
        </div>

        <div className="project-list">
          <ProjectList Projects={currentProjects} />  {/* Passing currentProjects as props */}
          
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
