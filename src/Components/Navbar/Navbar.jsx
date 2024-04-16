/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import "./navbar.css"
const Navbar = () => {
    const [isIconClicked, setIsIconClicked] = useState(false);
    const navlinks = [{ link: "AboutMe", path: "aboutme" },
    { link: "Skills", path: "skills" },
    { link: "Projects", path: "projects" },
    { link: "Contact", path: "contact" }];


    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fayeem-navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> {"<"} Fayeem Ahmad{"/>"}</a>
                <button class={`navbar-toggler my-toggler`}
                    style={{ background: isIconClicked ? "#3399e3" : "rgb(137 184 219)" }}
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setIsIconClicked(!isIconClicked)}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto"></ul>
                    <form class="d-flex">
                        <ul class="navbar-nav mb-2 mb-lg-0 me-5">
                            {
                                navlinks.map((link) =>
                                    <li class="nav-item" key={link}>
                                        <a class="nav-link active"
                                            aria-current="page" href={link.path}>{link.link}</a>
                                    </li>
                                )
                            }
                            <li class="resume-box">
                                <a href="https://drive.google.com/file/d/1E6VW5y1nbbd3OmNr4zVr5LCepw633Lnc/view?usp=sharing" className="btn resume-btn">Resume</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar