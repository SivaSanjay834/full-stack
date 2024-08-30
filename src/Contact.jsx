import "./Contact.css"
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "85f74d77-8df4-4e4d-a46d-0bbbfe739ec9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert( res.message);
    }
  };
const Contact =()=>{

    return(
<div className="contact"id='contact'>
    <div className="contact-title">
        <h1>Get in touch</h1>
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on.You can Contact me anytime.</p>
        <div className="contact-details">
            <div className="contact-detail">{ <BiLogoGmail size={60}/>}<p>uppalapatisivasanjay@gmail.com</p></div>
            <div className="contact-detail">{<IoCall size={60}/>}<p>+91 6302871638</p></div>
            <div className="contact-detail">{< FaLocationDot size={60}/>}<p>Kurichedu , Andhra Pradesh <br></br>
              ( INDIA)</p></div>
        </div>
        </div>
        <h1 className="con">Connect Me</h1>
        <form className="contact-right"onSubmit={onSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text"placeholder="Enter Your Name"required></input>
        <label htmlFor="email">Your Email</label>
         <input type="email" name="email"placeholder="Enter Your Email"required></input>
         <label htmlFor="message">Write Your Message Here</label>
         <textarea name="message" rowss="8"placeholder="Enter Your Message"required></textarea> 
         <button className="contact-submit"type="submit">submit</button>
         </form>
    </div>
</div>
)
}
export default Contact;