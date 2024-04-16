import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import Heading from "../Heading";
function Contact() {
    return (
        <div className="container contact-sources">
            <Heading firstChar={"C"} RemainChars={"ONTACT ME"}/>
            <div className="container m-auto row contact-source-box">
                <div className="col-lg-3 col-md-6">
                    <CgMail  className="contact-source-icon"/>
                    <div>Gmail</div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <FaPhone  className="contact-source-icon"/>
                    <div>Phone</div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <FaGithub  className="contact-source-icon"/>
                    <div>Github</div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <FaLinkedinIn  className="contact-source-icon"/>
                    <div>Linkedin</div>
                </div>

            </div>
            <ContactForm/>
        </div>
    )
}

export default Contact
