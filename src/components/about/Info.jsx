
export default function About() {
    return (
        <div className="about__info grid hidden"> 
            <div className="about__box">
                <i className="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1 Year of Working Experience</span>
            </div>
            
            <div className="about__box">
                <i className="uil uil-constructor about__icon"></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">9+ Projects Made</span>
            </div>

        </div>
    );
}
