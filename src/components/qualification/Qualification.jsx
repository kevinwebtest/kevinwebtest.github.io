import { useState } from "react";
import "./Qualification.css"
import QualificationData from "./QualificationData";


export default function Qualification() {
    const [toggleState, setToggleState] = useState(true);

    const toggleTabWork = () => {
        setToggleState(true);
    };
    const toggleTabAcademy = () => {
        setToggleState(false);
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
                        onClick={toggleTabWork}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Work
                    </div>

                    <div className={
                            toggleState === false ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                        }
                        onClick={toggleTabAcademy}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Academy
                    </div>
                </div>

                <div className="qualification__sections hidden">
                    <div className={
                            toggleState===true ? "qualification__content qualification__content-active" : "qualification__content"
                        }
                    >
                        <QualificationData role="Software Engineer (Frontend)" company="Waresix" dateSpan="Nov 2023 - Mar 2024"/>
                        <QualificationData role="Software Engineer" company="Samsung Research & Development" dateSpan="Jun 2023 - Nov 2023" right={true} />
                        <QualificationData role="Software Engineer" company="Tokopedia" dateSpan="Oct 2022 - Dec 2022" />
                        <QualificationData role="Software Development Engineer in Test" company="DANA Indonesia" dateSpan="Aug 2021 - Feb 2022" right={true} />
                        <QualificationData role="Computer Lab Assistant" company="Atma Jaya Catholic University of Indonesia" dateSpan="Aug 2019 - Jul 2022" />
                    </div>

                    <div className={
                            toggleState===false ? "qualification__content qualification__content-active" : "qualification__content"
                    }>
                        <QualificationData role="Electrical Engineer, Summa Cum Laude" company="Atma Jaya Catholic University of Indonesia" dateSpan="Aug 2018 - Aug 2022"/>
                        <QualificationData role="Data Engineer Bootcamp" company="DQLab Academy" dateSpan="May 2022 - Jun 2022" right={true} />
                        <QualificationData role="Certified Cloud Practitioner" company="AWS Academy" dateSpan="Mar 2022 - Jun 2022"/>
                    </div>

                </div>
                
            </div>
        </section>
    );
  }
  