import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';
import Education from './education';
import '../style/components/maincontext.sass'

const MainContext = () => {
  return(
   <main id="main-content">
    
      <AboutContainer/>
      <ProjectsContainer/>
      <Education/>
      <TechnologiesContainer/>

  </main>
  )
}

export default MainContext