import { useState } from "react";
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

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    Setiawan
                </a>
                <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-bag nav__icon"></i> Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-arrow nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-wrench nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
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