import "./About.css"
import theme_img from "./theme.jpeg"
const About=()=>{
    return(
        <div className="about"id='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
       <div className="about-sections">
        <div className="about-left">
            <img src={theme_img}height="350px"></img>
            </div>
        <div className="about-right">
        <div className="about-para">
        <p>My name is Siva Sanjay Uppalapati.Iam from Kurichedu.I did my schooling from Saint Joseph's English Medium High School.Now, Iam in R.V.R&J.C College Of Engineering to complete my graduation in the department of Data Science.</p> 
       
        </div>
       <div className="about-skills"><h1 align="center"class="skills">Skills</h1>
        <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"80%"}}></hr> </div>
        <div className="about-skill"> <p>React Js</p><hr style={{width:"50%"}}></hr> </div>
        <div className="about-skill"> <p>Java Script</p><hr style={{width:"55%"}}></hr> </div>
        <div className="about-skill"> <p>C</p><hr style={{width:"80%"}}></hr> </div>
        <div className="about-skill"> <p>C++</p><hr style={{width:"60%"}}></hr> </div>
        <div className="about-skill"> <p>Java</p><hr style={{width:"60%"}}></hr> </div>
        <div className="about-skill"> <p>Python</p><hr style={{width:"90%"}}></hr> </div>
        <div className="about-skill"> <p>R</p><hr style={{width:"50%"}}></hr> </div>
        <div className="about-skill"> <p>SQL</p><hr style={{width:"50%"}}></hr> </div>
        </div>
        </div>
       </div>
       <h1 className="certify">Certfications</h1>
       <div className="about-achievements">
       
        <div className="about-achievement">
            <h1>Programming in Modern C++</h1>
            <p>by IIT (Kharagpur)</p>
        </div>
         <hr></hr>
         <div className="about-achievement">
            <h1>Joy Of Computing Using Python</h1>
            <p>by IIT(Madras)</p>
        </div>
        <hr></hr>
        <div className="about-achievement">
            <h1>Python Credentials</h1>
            <p>by Cisco Networking Academy</p>
            </div>
       </div>

       <div  className="about-internships">
       <h1 className="intern">Internships</h1>
       <div className="about-internship">
       <h1>•AWS Data Engineering Virtual Internship</h1></div><hr></hr>
       <div className="about-internship">
       <h1>•GOOGLE AI-ML Virtual Internship</h1></div><hr></hr>
       <div className="about-internship">
       <h1>•GOOGLE Android Developer Virtual Internship</h1></div>
            </div>
        </div>
      
    )

}
export default About