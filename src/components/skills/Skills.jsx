import SkillData from "./SkillData";
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
                            <SkillData skillName="JavaScript" iconClass="bx bxl-javascript" />
                            <SkillData skillName="TypeScript" iconClass="bx bxl-typescript" />
                            <SkillData skillName="Groovy" iconClass="bx bx-code-alt" />
                            <SkillData skillName="Java" iconClass="bx bxl-java" />
                        </div>

                        <div className="skills__group">
                            <SkillData skillName="Python" iconClass="bx bxl-python" />
                            <SkillData skillName="PHP" iconClass="bx bxl-php" />
                            <SkillData skillName="Golang" iconClass="bx bxl-go-lang" />
                            <SkillData skillName="C++" iconClass="bx bxl-c-plus-plus" />
                            <SkillData skillName="SQL" iconClass="bx bxs-data" />  
                        </div>
                    </div>
                </div>


                <div className="skills__content">
                <h3 className="skills__title">Stacks</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <SkillData skillName="HTML" iconClass="bx bxl-html5" /> 
                            <SkillData skillName="React.js" iconClass="bx bxl-react" /> 
                            <SkillData skillName="Next.js" iconClass="bx bx-windows" /> 
                            <SkillData skillName="Tailwind" iconClass="bx bxl-tailwind-css" /> 
                            <SkillData skillName="Appium" iconClass="bx bx-mobile" /> 
                            <SkillData skillName="Cypress" iconClass="bx bx-cog" /> 
                            <SkillData skillName="Firebase" iconClass="bx bxl-firebase" /> 
                            <SkillData skillName="Docker" iconClass="bx bxl-docker" /> 
                        </div>
                    
                        <div className="skills__group">
                            <SkillData skillName="CSS" iconClass="bx bxl-css3" /> 
                            <SkillData skillName="React Native" iconClass="bx bxl-react" /> 
                            <SkillData skillName="Node.js" iconClass="bx bxl-nodejs" /> 
                            <SkillData skillName="Git" iconClass="bx bxl-git" /> 
                            <SkillData skillName="Katalon" iconClass="bx bxl-kickstarter" /> 
                            <SkillData skillName="MongoDB" iconClass="bx bxl-mongodb" /> 
                            <SkillData skillName="Kubernetes" iconClass="bx bxl-kubernetes" /> 
                        </div>
                    </div>

                </div>

                
            </div>
        </section>
    );
}
