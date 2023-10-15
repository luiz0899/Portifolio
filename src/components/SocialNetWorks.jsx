import "../style/components/SocialNetWorks.sass";
import{FaLinkedinIn,FaGithub,FaInstagram,FaFacebook} from 'react-icons/fa'

const socialNetWorks = [
  
  { name: "linkedin", link: "https://www.linkedin.com/in/luiz-henrique-pereira-corr%C3%AAa-a81baa23a/", icon: <FaLinkedinIn /> },
  { name: "github", link: "https://github.com/luiz0899", icon: <FaGithub /> },
  { name: "instagram", link: "https://www.instagram.com/luuiz.pereira/", icon: <FaInstagram /> },
  { name: "facebook", link: "https://www.facebook.com/luishenrique.pereiracorrea", icon: <FaFacebook /> },

];

const SocialNetWorks = () => {
  return (
    <section id="social-networks">
        {socialNetWorks.map((socialNetWorks) => 
               <a href={socialNetWorks.link} className='social-btn' id={socialNetWorks.name} key={socialNetWorks.name}>
               {socialNetWorks.icon}
            </a>
        )}
    </section>
  )
}

export default SocialNetWorks