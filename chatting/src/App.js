import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <>
    <Layout/>
    <Home/>
    <About/>
    {/* <Skill/> */}
    <Projects/>
    {/* <Achievement/> */}
  </>
  );
}

export default App;
