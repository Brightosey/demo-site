import "./Contact.scss";
import pinIcon from "../../assets/Icon/pin.png";
import emailIcon from "../../assets/Icon/email.png";
import telepohoneIcon from "../../assets/Icon/telephone.png";
import facebook from "../../assets/Icon/facebook.png";
import instagram from "../../assets/Icon/instagram.png";
import twitter from "../../assets/Icon/twitter.png";

function Contact () {
    return (
        <article className="site__contact">
               <section className="site__contact-info">
                 <div className="site__contact-fence">
                   <div className="site__contact-block">
                     <div className="site__contact-label">
                       <img
                         src={pinIcon}
                         alt="location icon"
                         className="site__contact-icon"
                       />
                       <p className="site__contact-heading">Address</p>
                     </div>
                     <p className="site__contact-text">300 Alamo Plaza</p>
                     <p className="site__contact-text">San Antonio, TX 78205</p>
                   </div>
       
                   <div className="site__contact-block">
                     <div className="site__contact-label">
                       <img
                         src={telepohoneIcon}
                         alt="telephone icon"
                         className="site__contact-icon"
                       />
                       <p className="site__contact-heading">Phone</p>
                     </div>
                     <p className="site__contact-text">Phone: +1-123-456-7890</p>
                     <p className="site__contact-text">Mobile: +1-123-456-6789</p>
                   </div>
       
                   <div className="site__contact-block">
                     <div className="site__contact-label">
                       <img
                         src={emailIcon}
                         alt="email icon"
                         className="site__contact-icon"
                       />
                       <p className="site__contact-heading">Contact</p>
                     </div>
                     <p className="site__contact-text">handmade@example.com</p>
                     <p className="site__contact-text">
                       Legal Notice | Privacy Policy
                     </p>
                   </div>
                 </div>
       
                 <div className="site__contact-socials">
                   <a
                     href="https://www.facebook.com"
                     target="_blank"
                     className="site__social-link"
                   >
                     <img
                       src={facebook}
                       alt="facebook"
                       className="site__social-icon"
                     />
                   </a>
                   <a
                     href="https://www.instagram.com"
                     target="_blank"
                     className="site__social-link"
                   >
                     <img
                       src={instagram}
                       alt="instagram"
                       className="site__social-icon"
                     />
                   </a>
                   <a
                     href="https://www.twitter.com"
                     target="_blank"
                     className="site__social-link"
                   >
                     <img src={twitter} alt="twitter" className="site__social-icon" />
                   </a>
                 </div>
               </section>
             </article>
    );
}

export default Contact;