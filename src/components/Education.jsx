import useScrollFade from '../hooks/useScrollFade'
import schoolLogo from '../assets/school-logo.png'

const educationList = [
  {
    years: "2016 - 2030",
    school: "International School of the Hague (ISH)",
    program: "International Baccalaureate (IB) MYP 4",
    highlight: "My subject choices:", 
    highlight1: "Math",
    highlight2: "English",
    highlight3: "Dutch",
    highlight4: "Biology",
    highlight5: "Chemistry",
    highlight6: "Physics",
    highlight7: "Physical Exercise and Welbieng (PEW)",
    highlight8: "Buisness mangement",
    highlight9: "Digital design",
    description: "I am currently 14 years old who has a great intrest in helping people and in the technology all around us."
  }
]

function Education() {
  const [ref, isVisible] = useScrollFade()

  return (
    <section
      id="education"
      className={`section fade-section ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div className="education-entry" key={index}>
            <img src={schoolLogo} alt={edu.school} className="education-logo" />
            <div className="education-text">
              <p className="education-years">{edu.years}</p>
              <h3>{edu.school}</h3>
              <p className="education-program">{edu.program}</p>
              <p className="education-highlight">{edu.highlight}</p>
              <p className="education-highlight">{edu.highlight1}</p>
              <p className="education-highlight">{edu.highlight2}</p>
              <p className="education-highlight">{edu.highlight3}</p>
              <p className="education-highlight">{edu.highlight4}</p>
              <p className="education-highlight">{edu.highlight5}</p>
              <p className="education-highlight">{edu.highlight6}</p>
              <p className="education-highlight">{edu.highlight7}</p>
              <p className="education-highlight">{edu.highlight8}</p>
              <p className="education-highlight">{edu.highlight9}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Education