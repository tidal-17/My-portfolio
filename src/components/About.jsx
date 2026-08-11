import useScrollFade from '../hooks/useScrollFade'

function About() {
  const [ref, isVisible] = useScrollFade()

  return (
    <section
      id="about"
      className={`section fade-section ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <h2>About Me</h2>
      <p>My name is Vatsin Khakhar I want to be a surgeon in the future, a person who is capable of helping a lot of lives to a great extent.</p>
    </section>
  )
}
export default About