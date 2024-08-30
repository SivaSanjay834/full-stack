import img_profile from "./homebackground.png"
import "./Profile.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Profile=()=>{
    return(
        <>
        <div className="profile"id='home'>
  <img src={img_profile}width="400px"></img>

<h1><span className="one">I'm Siva Sanjay Uppalapati</span>, frontend developer and Programmer.</h1>
<button className="button"><AnchorLink className='knowmore'offset={50}href="#about">Know More</AnchorLink></button>
<div className="profile-action">
    <div className="profile-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
   
</div>
</div>
  </>
    )

} 
export default Profile;