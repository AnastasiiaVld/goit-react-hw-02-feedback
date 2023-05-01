import { Component } from "react";
import PropTypes from 'prop-types'
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Sections } from "./Section/Section";

const feedbackStatusName = ["good", "neutral", "bad"]

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = value => {
    this.setState(prevState => ({[value]: prevState[value] + 1}))
  }

  render() {
    return (
     <div>
          <Sections title="Please leave feedback"/>
        <FeedbackOptions
          options={feedbackStatusName}
          onButtonClick={this.handleClick}
        /> 
            <Sections title="Statistics"/>
        <Statistics
          options={feedbackStatusName}
          state = {this.state}
        />
        </div>
        )
  }
}

