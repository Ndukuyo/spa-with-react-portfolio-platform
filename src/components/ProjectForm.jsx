
import { useState } from 'react';

function ProjectForm({ addProject }) {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectToAdd = {
      ...newProject,

    };
    addProject(projectToAdd);
    // Reset form
    setNewProject({
      title: '',
      description: '',
      imageUrl: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Add New Project</h3>
      
      <div className="form-group">
        <label>Project Title</label>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleChange}
          required
          rows="3"
        />
      </div>


      <div className="form-group">
        <label>Image URL (optional)</label>
        <input
          type="url"
          name="imageUrl"
          value={newProject.imageUrl}
          onChange={handleChange}
          placeholder="Leave empty for placeholder"
        />
      </div>

      <button type="submit" className="submit-btn">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;