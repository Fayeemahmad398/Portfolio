import profileImg from "../../assets/pass photos.png"
import Typewriter from 'typewriter-effect';
import "./topsection.css"
function TopSection() {
    return (
        <div className="container-fluid top-section row mt-5">
            <div className="left-of-top-section  col-lg-6 g-1 d-flex flex-column align-items-start">
                <Typewriter
                    options={{
                        strings: ["Hi , I am Fayeem Ahmad"],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <p className='fs-6 fw-bold'>I am a Full Stack Web Developer and
                    I have knowledge in HTML, CSS,
                    <p>
                        JavaScript, ReactJS,Redux and NodeJS.</p>
                </p>
                <a href="https://drive.google.com/file/d/1E6VW5y1nbbd3OmNr4zVr5LCepw633Lnc/view?usp=sharing" className="btn resume-btn mt-2">Resume</a>
            </div>
            <div className="right-of-top-section col-lg-6 p-1 d-flex justify-content-center">
                <img src={profileImg} alt="" />
            </div>
        </div>
    )
}

export default TopSection
