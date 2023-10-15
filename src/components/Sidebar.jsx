import SocialNetWorks from './SocialNetWorks';
import InformationContainer from './informationContainer';
import  Avatar from '../img/Perfil.png';
import { BrowserRouter as Router } from "react-router-dom";
import "../style/components/sidebar.sass"

const Sidebar = () => {
  return <aside id="sidebar">

      <img src={Avatar} alt="Luiz Henrique P. Corrêa" />
      <p className="nome"> Luiz Henrique Pereira Corrêa </p>
      <p className="title"> Desenvolvedor Full Stack </p>
      <SocialNetWorks/>
      <InformationContainer/>

      <a href="/" className='btn'>
        Home</a>
    
      <a href="/Portifolio/Gmail" className='btn'>
        Mandar e-mail</a>
        
      <a  href="https://portifolio44.files.wordpress.com/2023/10/curriculo2023.pdf" className='btn'>
        Download currículo</a>

    </aside>;
}

const App = () => {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
};

export default App