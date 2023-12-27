import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContent';
import Achievement from './components/Achievement/Achievement';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id  ={theme}>
    <ToastContainer/>
    <Layout/>
    <Home/>
    <About/>
    {/* <Skill/> */}
    <Projects/>
    <Achievement/>
    <Education/>
    <Contact/>
    </div>
    <ScrollToTop smooth
    color='#f29f67'
    style={{backgroundColor:'#1e1e2c', borderRadius:'80px'}} />
  </>
  );
}

export default App;
