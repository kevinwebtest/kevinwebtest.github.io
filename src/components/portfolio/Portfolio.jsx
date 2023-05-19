import "./Portfolio.css"

export default function Portfolio() {    
    return (
        <section className="services section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Projects I have made</span>

            <div className="services__container container grid">
                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">
                            Pet Feeder and Water Dispenser using Website and Android App
                        </h3>
                    </div>
                    <a href="https://youtu.be/w5BulRHJYoc">
                        <span className="services__button">View More{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                    {/* <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description"></p>
                        </div>
                    </div> */}


                </div>
                
                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-apps services__icon"></i>
                        <h3 className="services__title">Weather App (React Native)</h3>
                    </div>
                    <a href="https://expo.dev/@kevin_setiawan/TheWeatherApp">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Find Me Prompt (Next.js)</h3>
                    </div>
                    <a href="https://find-me-prompt.vercel.app/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>

                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Japani's Company Profile</h3>
                    </div>
                    <a href="https://pupukjapani.pages.dev/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>

                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Tenzies Game (React)</h3>
                    </div>
                    <a href="https://kevinwebtest.github.io/tenzies_game/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>

                </div>

                <div className="services__content hidden">
                    <div>
                        <i class="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Notes App (React)</h3>
                    </div>
                    <a href="https://kevinwebtest.github.io/notes_v2/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>

                </div>


                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Meme Generator Website (React)</h3>
                    </div>
                    <a href="https://kevinwebtest.github.io/meme_generator/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>

                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">
                            Portfolio Card Website (React)
                        </h3>
                    </div>
                    <a href="https://kevinwebtest.github.io/portfoliocard/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Movie Review Website</h3>
                    </div>

                    <a href="http://movietalk.infinityfreeapp.com/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Old Portfolio Website</h3>
                    </div>

                    <a href="https://kevinwebtest.github.io/personal_v0/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Airbnb Course Website (React)</h3>
                    </div>

                    <a href="https://kevinwebtest.github.io/airbnb_course/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i className="uil uil-browser services__icon"></i>
                        <h3 className="services__title">Vacation Spots Website (React)</h3>
                    </div>

                    <a href="https://kevinwebtest.github.io/vacation_location/">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i class="uil uil-database services__icon"></i>
                        <h3 className="services__title">Data Cleansing Telecommunication Dataset</h3>
                    </div>

                    <a href="https://github.com/kevinwebtest/Telco-Data-Cleansing">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i class="uil uil-database services__icon"></i>
                        <h3 className="services__title">Data Manipulation</h3>
                    </div>
                    <a href="https://github.com/kevinwebtest/Data-Engineer-Projects">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>
                </div>

                <div className="services__content hidden">
                    <div>
                        <i class="uil uil-database services__icon"></i>
                        <h3 className="services__title">Performing ETL to provide User Data Analytics</h3>
                    </div>
                    <a href="https://github.com/kevinwebtest/User-Data-Analytic-using-ETL">
                        <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    </a>

                </div>
            </div>
        </section>
    );
}
