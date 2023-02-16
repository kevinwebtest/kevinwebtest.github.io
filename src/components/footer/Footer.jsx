import "./Footer.css"

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer__container container">
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Experience</a>
                </li>                
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/setiawan-kevin/" className="footer__social-link" target="_black">
                    <i className="bx bxl-linkedin"></i>
                </a>
                
                <a href="https://github.com/kevinwebtest/" className="footer__social-link" target="_black">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">This Website was created using React.js</span>
        </div>
      </footer>
    );
}
  