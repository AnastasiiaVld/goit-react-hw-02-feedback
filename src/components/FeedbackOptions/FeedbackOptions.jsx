import React from "react";
import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'


export const FeedbackOptions = ({options, onButtonClick}) => {
    return (
        <div className={s.containerBtn}>
          {options.map(text => (
            <button className={s.button} key={text} onClick={() => onButtonClick(text)} >{text}</button>)
          )}
          </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onButtonClick:PropTypes.func.isRequired
}