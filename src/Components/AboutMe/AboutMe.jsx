import Heading from "../Heading"
import "./aboutme.css"
function AboutMe() {
  return (
    <section >
      <Heading firstChar={"A"} RemainChars={"BOUT ME"} />
      <div className='row container-fluid aboutme'>
        <div className="col-lg-4 left-of-about">
          <div className="personal-box">
            <h4>Personal Details</h4>
            <div style={{ overflowWrap: "break-word" }}>
              Email:
              <strong >fayeemahmad0@gmail.com</strong>
            </div>
            <div>
              Nationality: <strong>Indian</strong>
            </div>
            <div>
              Language: <strong>English,Hindi</strong>
            </div>


          </div>

        </div>
        <div className="col-lg-7 right-of-about">
          <div>
            <h4>I am Full Stack Web Developer</h4>
            <p>My name is Fayeem Ahmad, I am from Bijnor, UP.
              Passionate Full Stack Web Developer with skills in the MERN stack,
              I have learned Full Stack Web Development in Acciojob Bootcamp.
              Skilled in problem- solving logically.
              I look forward to joining a company where I can contribute to
              individual and company growth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
