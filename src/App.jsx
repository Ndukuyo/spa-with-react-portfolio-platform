

import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectForm from './components/ProjectForm.jsx';
import './index.css';

function App() {

  // Initial projects data
  const initialProjects = [
    {
      id: 1,
      title: 'Educational Website',
      description: 'A fully responsive educational platform with course management.',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Informational Site',
      description: 'An informational website with a focus on providing useful resources.',
      imageUrl: ''
    },
    {
      id: 3,
      title: 'News, Blog and Media Platforms',
      description: 'A news, blog and media platform with content management.',
      imageUrl: ''
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio with animations and contact form.',
      imageUrl: ''
    }
  ];

  // State for projects and search
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Function to add new project
  const addProject = (project) => {
    setProjects([project, ...projects]);
    setShowForm(false);
    alert('Project added successfully!');
  };

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) 
   
  );

  return (
    <div className="App">
      <Header />
      
      <main className="container">
        <div className="controls">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
          <button 
            className="toggle-form-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Add New Project'}
          </button>
        </div>

        {showForm && (
          <div className="form-container">
            <ProjectForm addProject={addProject} />
          </div>
        )}

        <h2 className="projects-title">
          OUR PROJECTS
        </h2>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found. Try a different search or add a new project!</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p> &copy; {new Date().getFullYear()} M & S Creative Agency. All rights reserved </p>
        <p> Call us Today on 0712 345 678 </p>
      </footer>
    </div>
  );
}

export default App;