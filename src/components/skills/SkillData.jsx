import React from 'react'

const SkillData = ({skillName, iconClass}) => {
  return (
    <div className="skills__data">
        <i className={iconClass}></i>
        <div>
            <h3 className="skills__name">{skillName}</h3>
        </div>
    </div>
  )
}

export default SkillData