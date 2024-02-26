import React from 'react'

const PortfolioData = ({projectName, link, iconClass}) => {
  return (
    <div className="services__content hidden">
        <div>
            <i className={iconClass}></i>
            <h3 className="services__title">{projectName}</h3>
        </div>
        <a href={link}>
            <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
        </a>
    </div>
  )
}

export default PortfolioData