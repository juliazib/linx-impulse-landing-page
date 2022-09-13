import React from 'react'
import s from './SectionTitle.module.css'

export const SectionTitle = ({ title }) => {
    return (
        <div className={s.SectionTitleContainer}>
            <span>
                <hr />
            </span>
            <h4 className={s.SectionTitle}>{title}</h4>
            <span>
                <hr />
            </span>
        </div>
    )
}