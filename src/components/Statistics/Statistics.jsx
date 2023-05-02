import React from "react";
import PropTypes from 'prop-types'
import { countTotalFeedback } from "utils/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "utils/countPositiveFeedbackPercentage";
import s from './Statistics.module.css'

export const Statistics = ({ options, state }) => {
    // const hasFeedback = Object.values(state).some(item => item > 0)

    return (
    <div className={s.div}>
          {options.map(text => (
            <span className={s.span} key={text}>{text} : {state[text]} </span>
          ))}
          <span className={s.span}>Total: {countTotalFeedback(state)} </span>
          <span className={s.span} >Positive feedback {countPositiveFeedbackPercentage(state.good, countTotalFeedback(state))} </span>
        </div>
    )
}; 

Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    state:PropTypes.object.isRequired
}