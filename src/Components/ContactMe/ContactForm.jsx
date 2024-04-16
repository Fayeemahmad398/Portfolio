/* eslint-disable react/no-unknown-property */
import "./contact.css"
function ContactForm() {
    return (
        <form class="row g-3 form-box-">

            <div class="col-12">
                <input type="text" class="form-control" id="inputPassword2"
                    placeholder="Enter fullname" />
            </div>
            <div class="col-12">
                <input type="email" class="form-control" id="inputPassword2"
                    placeholder="Enter your email" />
            </div>
            <div class="col-12">
                <input type="password" class="form-control" id="inputPassword2"
                    placeholder="Enter Phone number" />
            </div>

            <div class="col-12">
                <button className="btn resume-btn w-100" disabled={true} >
                    Resume
                </button>
            </div>
        </form>
    )
}

export default ContactForm
