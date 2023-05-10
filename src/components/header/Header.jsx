import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) 
            header.classList.add("scroll-header");
        else 
            header.classList.remove("scroll-header");
    })

    /*=============== Toggle Menu ===============*/
    const [menu, setMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home")

    /*=============== Change Active Nav ===============*/
    useEffect(() => {
        const handleScroll = () => {
          const currentPos = window.pageYOffset;
        //   const home = document.getElementById('home').offsetTop;
          const about = document.getElementById('about').offsetTop;
          const qualification = document.getElementById('qualification').offsetTop;
          const portfolio = document.getElementById('portfolio').offsetTop;
          const skills = document.getElementById('skills').offsetTop;
          const contact = document.getElementById('contact').offsetTop;

          console.log(currentPos)
          if (currentPos < about-300) {
            setActiveNav('#home');
          } else if (currentPos >= about-300 && currentPos < qualification-300) {
            setActiveNav('#about');
          } else if (currentPos >= qualification-300 && currentPos < portfolio-300) {
            setActiveNav('#qualification');
          } else if (currentPos >= portfolio-300 && currentPos < skills-300) {
            setActiveNav('#portfolio');
          } else if (currentPos >= skills-300 && currentPos < contact-300) {
            setActiveNav('#skills');
          } else {
            setActiveNav('#contact');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">
                    KS
                </a>
                <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#qualification" className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-bag nav__icon"></i> Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-arrow nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-wrench nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-envelope-alt nav__icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>setMenu(!menu)}></i>
                </div>

                <div className="nav__toggle" onClick={()=>setMenu(!menu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
  }