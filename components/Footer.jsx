const youtube_icon = "assets/youtube_icon.png";
const twitter_icon = "assets/twitter_icon.png";
const instagram_icon = "assets/instagram_icon.png";
const facebook_icon = "assets/facebook_icon.png";

const Footer = () => {
  return(
    <div className="max-w-[1000px] " style={{padding: "30px 4%", margin: "0 auto"}}>
      <div className="flex" style={{gap: "20px", margin: "40px 0"}}>
        <img src={facebook_icon} alt="" style={{width: "30px", cursor: "pointer"}}/>
        <img src={instagram_icon} alt="" style={{width: "30px", cursor: "pointer"}}/>
        <img src={twitter_icon} alt="" style={{width: "30px", cursor: "pointer"}}/>
        <img src={youtube_icon} alt="" style={{width: "30px", cursor: "pointer"}}/>
      </div>
      <ul style={{display: "grid", gridTemplateColumns: "auto auto auto auto", gap: "15px", marginBottom: "30px", listStyle: "none"}}>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p style={{color: "gray", fontSize: "14px"}}>	&copy; 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer;