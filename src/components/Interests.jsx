import useScrollFade from '../hooks/useScrollFade'

const interestList = ["Coding", "medicine/surgery", "biology", "Problem Solving", "football and swiming"]

function Interests() {
  const [ref, isVisible] = useScrollFade()

  return (
    <section
      id="interests"
      className={`section fade-section ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <h2>Interests</h2>
      <div className="chip-container">
        {interestList.map((interest, index) => (
          <span className="chip" key={index}>{interest}</span>
        ))}
      </div>
    </section>
  )
}
export default Interests