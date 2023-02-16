import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'; 
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollUp/ScrollUp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Qualification />
        <Portfolio />
        <Skills />
        <Contact />
        
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
