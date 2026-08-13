import useScrollFade from '../hooks/useScrollFade'

const projectList = [
  {
    title: "Portfolio Website",
    description:
      "My first project in coding! Built with React and Three.js, this personal portfolio showcases who I am, my interests, education, and projects.",
    link: "https://github.com/tidal-17/my-portfolio",
    type: "Coding"
  },
  {
    title: "GIN Postcard Project",
    description:
      "A project I created with my friend Matias through the Global Issues Network. We brought our entire year group together to create and draw postcards for children at Juliana Kinderziekenhuis.",
    type: "Community Project"
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
      <p className="projects-label">WHAT I'VE CREATED</p>

      <h2>Projects</h2>

      <p className="projects-intro">
        A collection of things I have built, organized, and worked on.
      </p>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="project-type">
              {project.type}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            ) : (
              <a href="#projects">
                Learn More →
              </a>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects