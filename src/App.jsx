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
      title: 'E-commerce Website',
      description: 'A fully responsive online store with shopping cart functionality.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather forecast application with location detection.',
      technologies: ['JavaScript', 'API', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      imageUrl: ''
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Drag and drop task management application with team collaboration.',
      technologies: ['React', 'Firebase', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      imageUrl: ''
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio with animations and contact form.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
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
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
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
          {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
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
        <p>© {new Date().getFullYear()} Creative Agency Portfolio</p>
        <p>Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;