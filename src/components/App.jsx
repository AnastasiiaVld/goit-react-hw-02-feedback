import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Sections } from "./Section/Section";
import { Notification } from "components/Notification/Notification";

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
    const hasFeedback = Object.values(this.state).some(item => item > 0)
    return (
     <div>
          <Sections title="Please leave feedback"/>
        <FeedbackOptions
          options={feedbackStatusName}
          onButtonClick={this.handleClick}
        /> 
            <Sections title="Statistics"/>
        {hasFeedback ? <Statistics
          options={feedbackStatusName}
          state = {this.state}
        /> :(<Notification message= "There is no feedback"/>)}
        </div>
        )
  }
}

