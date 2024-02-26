import React from 'react'

const QualificationData = ({role, company, dateSpan, right=false}) => {
  return (
    <div className="qualification__data">
        {right && (
            <>
                <div />
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </>
        )}
        <div>
            <h3 className="qualification__title">{role}</h3>
            <span className="qualification__subtitle">{company}</span>
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {dateSpan}
            </div>
        </div>
        {!right && (
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
        )}
    </div>
  )
}

export default QualificationData