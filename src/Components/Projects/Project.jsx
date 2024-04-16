/* eslint-disable react/jsx-key */
import { useEffect } from "react"
import "./project.css"
import 'aos/dist/aos.css';
import { IoLogoGithub } from "react-icons/io5";
import AOS from "aos"
import { GrDeploy } from "react-icons/gr";
import shop1 from "../../assets/shopPage.png";
import typingimg from "../../assets/typingWeb1.png"
import utubeimg from "../../assets/utube.png"
import Heading from "../Heading";
function Project() {
    const projectsCollections = [
        {
            name: "E-Commerce WebApp", description: `Fully responsive user friendly interface with functionalities of filter the products on the basis of
            price,range,color,and size .
            • User can see ’add to cart’ functionality with shipping information then checkout and pay through the
            trusted third party payment gateway integration.
            • Application fetching the data from fake store API and storing in Local Storage .`,
            techs: ["DOM Manipulation", "HTML", "CSS", "JS"],
            repo_link: "https://github.com/Fayeemahmad398/shoppingApp",
            deploy_link: "https://fayeemahmad398.github.io/shoppingApp/"
            ,
            imgs: [shop1, shop1, shop1]
        }, {
            name: "TypingSpeedTest WebApp",
            description: `Implemented a multimode typing test website with using Styled-Components JS library.
            • Used firebase to implement login/signup authentication and database to save data for better analysis
            (firestore).
            • User’s data are used to show the animated graph of latest typing speed analysis and progress of user then
            previous situation of himself/herself using tech Chart.js Js library.`, techs: ["REACT", "JS", "MUI", "CHARTJS", "Styled-Components"],
            repo_link: "https://github.com/Fayeemahmad398/Typing-Speed-Test-WebApp",
            deploy_link: "https://typing-speed-booster.netlify.app/",
            imgs: [typingimg, typingimg, typingimg
            ]
        }, {
            name: "UTube WebApp",
            description: `Implemented a multimode typing test website with using Styled-Components JS library.
            • Used firebase to implement login/signup authentication and database to save data for better analysis
            (firestore).
            • User’s data are used to show the animated graph of latest typing speed analysis and progress of user then
            previous situation of himself/herself using tech Chart.js Js library.`, techs: ["REACT", "JS", "YouTube API", "Async JS"],
            repo_link: "https://github.com/Fayeemahmad398/UtubeWebAppInReact",
            deploy_link: "https://ahmadyoutube-10-2023.netlify.app/"
            ,
            imgs: [utubeimg, utubeimg, utubeimg]
        }
    ]

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000
        });
    }, [])
    return (
        <div >
            <Heading firstChar={"P"} RemainChars={"ROJECTS"} />
            <div className="all-projects container row m-auto">
                {
                    projectsCollections.map((project, ind) =>
                        <div className={`one-project row d-flex ${ind % 2 == 0 ? "flex-row-reverse" : "flex-row"}`}>
                            <div className="col-lg-6 project-view">
                                <img src={project.imgs[0]} alt="" className="big-img" />
                                <div className="short-img-box">
                                    <img src={project.imgs[1]} alt="" className="short-img" />
                                    <img src={project.imgs[2]} alt="" className="short-img" />
                                </div>
                            </div>
                            <div className="project-details col-lg-6">
                                <h4 className="project-name">{project.name}</h4>
                                <p className="project-desc">{project.description}</p>
                                <div className="techs-box">
                                    {
                                        project.techs.map((skill) =>
                                            <div>{skill}</div>
                                        )
                                    }
                                </div>
                                <div className="git-info-box">

                                    <a href={`${project.repo_link}`} >
                                        <IoLogoGithub />
                                    </a>
                                    <a href={`${project.deploy_link}`} >
                                        <GrDeploy />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Project
