import useScrollFade from '../hooks/useScrollFade'

function About() {
  const [ref, isVisible] = useScrollFade()

  return (
    <section
      id="about"
      className={`section about-section fade-section ${
        isVisible ? 'visible' : ''
      }`}
      ref={ref}
    >
      <div className="about-card">

        {/* LEFT SIDE */}
        <div className="about-content">
          <p className="about-label">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <p className="about-intro">
            Hi, I’m Vatsin Khakhar — a curious and ambitious student who
            enjoys learning, creating, and finding ways to make a positive
            difference in the lives of others.
          </p>

          <p>
            In the future, I hope to become a surgeon, combining my interests
            in biology, chemistry, mathematics, and technology with my desire
            to help people. I know that this path requires dedication,
            patience, and continuous learning, and that is exactly what makes
            it exciting to me.
          </p>

          <p>
            Outside of academics, I enjoy football, swimming, and playing the
            piano. I also enjoy helping others learn and often teach
            mathematics to my friends. Explaining a difficult idea to someone
            else is something I find both rewarding and useful for
            strengthening my own understanding.
          </p>

          <p>
            Through GIN (Global Issues Network), I created a project with my
            friend Matias that brought our entire year group together to
            create and draw postcards for children at Juliana
            Kinderziekenhuis. The project showed me how a simple idea can
            become something much bigger when people work together to help
            others.
          </p>

          <p>
            I have also recently started exploring coding and web development.
            I created this personal portfolio website using different
            programming languages, giving me the opportunity to combine
            creativity, technology, and problem-solving while learning
            something completely new.
          </p>

          <p>
            I want to continue challenging myself, developing my skills, and
            learning from the opportunities around me as I work towards my
            future goals.
          </p>
        </div>

        {/* RIGHT SIDE — INTERACTIVE NAVIGATION */}
        <div className="about-side">

          <a href="#education" className="about-highlight">
            <span className="highlight-number">01</span>

            <div className="highlight-content">
              <h3>My Goals</h3>
              <p>
                Where I’m heading and what I hope to achieve in the future.
              </p>
            </div>

            <span className="highlight-arrow">→</span>
          </a>

          <a href="#projects" className="about-highlight">
            <span className="highlight-number">02</span>

            <div className="highlight-content">
              <h3>My Projects</h3>
              <p>
                Things I have created, explored, and worked on.
              </p>
            </div>

            <span className="highlight-arrow">→</span>
          </a>

          <a href="#education" className="about-highlight">
            <span className="highlight-number">03</span>

            <div className="highlight-content">
              <h3>My Learning</h3>
              <p>
                The subjects and skills I’m developing along the way.
              </p>
            </div>

            <span className="highlight-arrow">→</span>
          </a>

          <a href="#interests" className="about-highlight">
            <span className="highlight-number">04</span>

            <div className="highlight-content">
              <h3>My Interests</h3>
              <p>
                The subjects, activities, and hobbies that inspire me.
              </p>
            </div>

            <span className="highlight-arrow">→</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default About