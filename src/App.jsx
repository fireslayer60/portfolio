
import './App.css'
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';
import NavBar from './sections/NavBar/NavBar';
function App() {

  return <>
  <NavBar/>
  <div className='main'>
    <Hero/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/>
  </div>
  
  </>;
  
}

export default App;
