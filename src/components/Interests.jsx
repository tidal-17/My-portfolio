import { useState } from 'react'
import useScrollFade from '../hooks/useScrollFade'

const interestList = [
  {
    title: "Coding",
    description:
      "I enjoy building things with code and learning how different technologies work together. Creating my own portfolio website was my first real experience with web development."
  },
  {
    title: "Medicine & Surgery",
    description:
      "I hope to become a surgeon in the future. I want to use my knowledge, skills and dedication to help as many people as I can and make a meaningful difference in their lives."
  },
  {
    title: "Biology",
    description:
      "I am fascinated by how living organisms work, especially the human body. Biology is one of the subjects that connects strongly with my future ambition of becoming a surgeon."
  },
  {
    title: "Piano",
    description:
      "I have been playing piano for 4 years. It has taught me patience, consistency and how to keep improving through regular practice."
  },
  {
    title: "Chemistry",
    description:
      "I enjoy understanding how substances interact and how chemistry connects to the world around us. It is also one of the subjects I am particularly interested in at school."
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy working through difficult problems and finding different ways to reach a solution. I especially enjoy mathematics because of the logical thinking involved."
  },
  {
    title: "Football",
    description:
      "I have played football for 4 years. I enjoy the teamwork, competition and discipline that come with playing the sport."
  },
  {
    title: "Swimming",
    description:
      "I have been swimming for several years and have achieved my A, B and C swimming certificates, as well as Zwemvaardigheid 1, 2 and 3."
  },
  {
    title: "Technology",
    description:
      "I am interested in how technology is changing the way we learn, communicate and solve problems. I enjoy exploring new technologies and understanding how they work."
  },
  {
    title: "Mathematics",
    description:
      "I enjoy the logic behind mathematics and often help teach my friends when they are struggling with a difficult concept. Explaining something to someone else also helps me understand it better."
  }
]

function Interests() {
  const [ref, isVisible] = useScrollFade()
  const [selectedInterest, setSelectedInterest] = useState(null)

  const selected =
    selectedInterest !== null
      ? interestList[selectedInterest]
      : null

  return (
    <section
      id="interests"
      className={`section interests-section fade-section ${
        isVisible ? 'visible' : ''
      }`}
      ref={ref}
    >
      <div className="interests-header">

        <p className="interests-label">
          WHAT INSPIRES ME
        </p>

        <h2>My Interests</h2>

        <p className="interests-intro">
          The subjects, activities and skills that keep me curious,
          motivated and always learning.
        </p>

        <p className="interests-note">
          Not a ranked list — just some of the things I enjoy.
        </p>

      </div>


      <div className="interests-explorer">

        {/* LEFT SIDE */}

        <div className="interest-menu">

          {interestList.map((interest, index) => (

            <button
              className={`interest-menu-item ${
                selectedInterest === index ? 'active' : ''
              }`}
              key={index}
              onClick={() => setSelectedInterest(index)}
            >

              <span className="interest-menu-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="interest-menu-title">
                {interest.title}
              </span>

              <span className="interest-menu-arrow">
                →
              </span>

            </button>

          ))}

        </div>


        {/* RIGHT SIDE */}

        <div className="interest-detail">

          {selected ? (

            <>
              <p className="interest-detail-number">
                {String(selectedInterest + 1).padStart(2, '0')}
              </p>

              <h3>{selected.title}</h3>

              <p className="interest-detail-description">
                {selected.description}
              </p>

              <div className="interest-detail-line" />

              <p className="interest-detail-hint">
                Select another interest to explore →
              </p>
            </>

          ) : (

            <div className="interest-welcome">

              <p className="interest-detail-number">
                GET TO KNOW ME
              </p>

              <h3>
                Learn more about me
              </h3>

              <p className="interest-detail-description">
                Explore some of the interests, activities and subjects
                that shape who I am and keep me curious.
              </p>

              <div className="interest-detail-line" />

              <p className="interest-detail-hint">
                Select an interest to discover more →
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  )
}

export default Interests