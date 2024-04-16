/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import "./skills.css"
import Heading from "../Heading";

function Skills() {
    const refOfAllBoxSkills = useRef([]);
    const skillList = [
        {
            title: "HTML",
            logo: "https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png",
        },
        {
            title: "CSS",
            logo: "https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png",
        },
        {
            title: "Javascript",
            logo: "https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png",
        },
        {
            title: "ReactJS",
            logo: "https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png",
        },
        {
            title: "Redux",
            logo: "https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png",
        },
        {
            title: "NodeJS",
            logo: "https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png",
        },
        {
            title: "MongoDB",
            logo: "https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png",
        },
        {
            title: "CharJS",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBZX8_TyqbFubzYvbw1QAcqRaf-zxYFCnGljqMLDK1Q&s",
        },
        {
            title: "Git",
            logo: "https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png",
        },
        {
            title: "Github",
            logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
        {
            title: "Bootstrap",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QrtoYPOpOY399TKX90DMolLQixul9sGVklpsG8I&s",
        },
        {
            title: "ExpressJS",
            logo: "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png",
        },
    ];
    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        refOfAllBoxSkills.current.forEach((box) => {
            const boxTop = box.offsetTop;
            const boxHeight = box.offsetHeight;

            // Calculate the scroll distance from the top of the box to the bottom of the viewport
            const scrollDistance = scrollTop + windowHeight - boxTop;

            // Calculate opacity based on scroll distance
            const opacity = Math.min(1, (scrollDistance) / boxHeight);

            // Apply opacity to the image box
            box.style.opacity = opacity;
            box.style.transition = "5s";
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <Heading firstChar={"S"} RemainChars={"KILLS"}/>
            <section className="skills-group-box">
                {
                    skillList.map((skill, ind) =>
                        <div className="skill-box" key={ind}
                            ref={(ele) => refOfAllBoxSkills.current[ind] = ele}>
                            <img src={skill.logo} alt="" />
                            <div>{skill.title}</div>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default Skills
