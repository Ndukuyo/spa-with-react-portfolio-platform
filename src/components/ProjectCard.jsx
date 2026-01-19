
function ProjectCard({ project }) {
  
  return (
    <div className="project-card">
      <div className="project-image">
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} />
        ) : (
          <div className="placeholder-image">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>



      </div>
    </div>
  );
}

export default ProjectCard;