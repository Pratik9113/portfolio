import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
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
  </>
  );
}

export default App;
