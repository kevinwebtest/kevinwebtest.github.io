import { useState } from "react";
import "./Qualification.css"


export default function Qualification() {
    const [toggleState, setToggleState] = useState(true);

    const toggleTab = () => {
        setToggleState(prevState=>!prevState);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My timeline</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                            toggleState === true ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                        }
                        onClick={toggleTab}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Work
                    </div>

                    <div className={
                            toggleState === false ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                        }
                        onClick={toggleTab}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Academy
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                            toggleState===true ? "qualification__content qualification__content-active" : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Tokopedia</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Oct 2022 - Dec 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Development Engineer in Test</h3>
                                <span className="qualification__subtitle">DANA Indonesia</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2021 - Feb 2022
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Lab Assistant</h3>
                                <span className="qualification__subtitle">Atma Jaya Catholic University of Indonesia</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2019 - July 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>

                    <div className={
                            toggleState===false ? "qualification__content qualification__content-active" : "qualification__content"
                        }>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Atma Jaya Catholic University of Indonesia</h3>
                                <span className="qualification__subtitle">Electrical Engineer, Summa Cum Laude</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2018 - Aug 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">DQLab Academy</h3>
                                <span className="qualification__subtitle">Data Engineer Bootcamp</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> May 2022 - Jun 2022
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AWS Academy</h3>
                                <span className="qualification__subtitle">Certified Cloud Practitioner</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Mar 2022 - Jun 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>

                </div>
                
            </div>
        </section>
    );
  }
  