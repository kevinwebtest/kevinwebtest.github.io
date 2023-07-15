import "./Skills.css";

export default function About() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Tech stacks</span>
            <div className="skills__container container grid hidden">


                <div className="skills__content">
                    <h3 className="skills__title">Language</h3>
                    <div className="skills__box">
                        <div className="skills__group">                        
                            <div className="skills__data">
                                <i className='bx bxl-javascript'></i>
                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxl-c-plus-plus' ></i>
                                <div>
                                    <h3 className="skills__name">C++</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-code-alt'></i>
                                <div>
                                    <h3 className="skills__name">Groovy</h3>                                    
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxl-java'></i>
                                <div>
                                    <h3 className="skills__name">Java</h3>                                    
                                </div>
                            </div>
                        </div>

                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxl-python'></i>
                                <div>
                                    <h3 className="skills__name">Python</h3>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <i className='bx bxl-php' ></i>
                                <div>
                                    <h3 className="skills__name">PHP</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i class='bx bxs-data'></i>
                                <div>
                                    <h3 className="skills__name">SQL</h3>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>


                <div className="skills__content">
                <h3 className="skills__title">Stacks</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxl-html5'></i>
                                <div>
                                    <h3 className="skills__name">HTML</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxl-react' ></i>
                                <div>
                                    <h3 className="skills__name">React.js</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-windows' ></i>
                                <div>
                                    <h3 className="skills__name">Next.js</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i class='bx bx-mobile' ></i>
                                <div>
                                    <h3 className="skills__name">Appium</h3>
                                </div>
                            </div>
                            
                            <div className="skills__data">
                                <i class='bx bxl-firebase' ></i>
                                <div>
                                    <h3 className="skills__name">Firebase</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxl-css3' ></i>
                                <div>
                                    <h3 className="skills__name">CSS</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxl-react' ></i>
                                <div>
                                    <h3 className="skills__name">React Native</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxl-nodejs'></i>
                                <div>
                                    <h3 className="skills__name">Node.js</h3>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bxl-git'></i>
                                <div>
                                    <h3 className="skills__name">Git</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxl-mongodb'></i>
                                <div>
                                    <h3 className="skills__name">MongoDB</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
        </section>
    );
}
