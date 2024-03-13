import "./Footer.css"

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer__container container">
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/setiawan-kevin/" className="footer__social-link" target="_black">
                    <i className="bx bxl-linkedin"></i>
                </a>
                
                <a href="https://github.com/kevinwebtest/" className="footer__social-link" target="_black">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <p className="footer__copy">This website was created using React.js<br />&copy;Kevin Setiawan.</p>
        </div>
      </footer>
    );
}
  