import PropTypes from 'prop-types'
import s from './Sections.module.css'

export const Sections = ({ title }) => {
    return (
        <h2 className={s.title}>{title}</h2>
    )
} 

Sections.propTypes = {
    title: PropTypes.string
    
}