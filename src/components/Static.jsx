import React, { Component } from "react";

export default class Static extends Component {
  constructor(props) {
    super(props);
    this.state = {
       good: 0,
       neutral: 0,
       bad: 0
    }
    
    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClickGood = this.handleClickGood.bind(this);
    this.handleClickNeutral = this.handleClickNeutral.bind(this);
    this.handleClickBad = this.handleClickBad.bind(this);
    
  }
  
  handleClickGood() {
   this.setState((state) => {
  return {good: state.good + 1};
});
   
  }
   handleClickNeutral() {
   this.setState((state) => {
  return {neutral: state.neutral + 1};
});
   
  }
   handleClickBad() {
   this.setState((state) => {
  return {bad: state.bad + 1};
});
   
  }
  countTotalFeedback (){
    return this.state.bad + this.state.good + this.state.neutral;
   
  }
  
  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback()
    if (total === 0) {
      return 0
    }
    else {
      return Math.round(this.state.good / total * 100)
    }
  }

  render() {
    const {bad, good, neutral} = this.state
    const total = this.countTotalFeedback()
    const percentage = this.countPositiveFeedbackPercentage()
    return (
      <div>
        <span>Please leave feedback</span>
        <button type="button" onClick={this.handleClickGood}>
          Good
        </button>
        <button type="button" onClick={this.handleClickNeutral}>
          Neutral 
        </button>
         <button type="button" onClick={this.handleClickBad}>
          Bad 
        </button>
        <span>Statistics</span>
        <span>Good:</span><span>{good}</span>
        <span>Neutral:</span><span>{neutral}</span>
        <span>Bad:</span><span>{bad}</span>
        <span>Total:{total}</span>
        <span>Positive feedback:{percentage}%</span>
      </div>
      
    );
  }
}