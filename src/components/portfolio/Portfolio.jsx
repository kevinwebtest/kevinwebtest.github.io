import "./Portfolio.css"
import PortfolioData from "./PortfolioData";

export default function Portfolio() {    
    return (
        <section className="services section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Projects I have made</span>

            <div className="services__container container grid">
                <PortfolioData projectName="Pet Feeder and Water Dispenser using Website and Android App" link="https://youtu.be/w5BulRHJYoc" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Weather App (React Native)" link="https://expo.dev/@kevin_setiawan/TheWeatherApp" iconClass="uil uil-apps services__icon" />
                <PortfolioData projectName="Find Me Prompt (Next.js)" link="https://find-me-prompt.vercel.app/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Japani's Company Profile" link="https://pupukjapani.pages.dev/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Best Movies DB" link="https://best-movies-db.vercel.app/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Tenzies Game (React)" link="https://kevinwebtest.github.io/tenzies_game/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Notes App (React)" link="https://kevinwebtest.github.io/notes_v2/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Basic Bookmark Extension" link="https://github.com/kevinwebtest/basically_bookmark_extension" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Meme Generator Website (React)" link="https://kevinwebtest.github.io/meme_generator/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Portfolio Card Website (React)" link="https://kevinwebtest.github.io/portfoliocard/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Movie Review Website" link="http://movietalk.infinityfreeapp.com/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Old Portfolio Website" link="https://kevinwebtest.github.io/personal_v0/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Airbnb Course Website (React)" link="https://kevinwebtest.github.io/airbnb_course/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Vacation Spots Website (React)" link="https://kevinwebtest.github.io/vacation_location/" iconClass="uil uil-browser services__icon" />
                <PortfolioData projectName="Data Cleansing Telecommunication Dataset" link="https://github.com/kevinwebtest/Telco-Data-Cleansing" iconClass="uil uil-database services__icon" />
                <PortfolioData projectName="Data Manipulation" link="https://github.com/kevinwebtest/Data-Engineer-Projects" iconClass="uil uil-database services__icon" />
                <PortfolioData projectName="Performing ETL to provide User Data Analytics" link="https://github.com/kevinwebtest/User-Data-Analytic-using-ETL" iconClass="uil uil-database services__icon" />
            </div>
        </section>
    );
}
