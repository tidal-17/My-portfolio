import useScrollFade from '../hooks/useScrollFade'

const projectList = [
  {
    title: "Portfolio Website",
    description: "My first project in coding! — built with React and Three.js, showcasing who I am.",
    link: "https://github.com/yourusername/my-portfolio"
  }
]

function Projects() {
  const [ref, isVisible] = useScrollFade()

  return (
    <section
      id="projects"
      className={`section fade-section ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects