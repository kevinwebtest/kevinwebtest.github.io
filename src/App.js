import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'; 
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import { useEffect } from "react"
import ScrollUp from './components/scrollUp/ScrollUp';
import Footer from './components/footer/Footer';

function App() {
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry=>{
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
            }
        })
    })

    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach(item => observer.observe(item));

    return () => observer.disconnect();
},[])
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
