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
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            View Live
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;