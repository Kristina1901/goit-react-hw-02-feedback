import React, { Component } from "react";

export default class Static extends Component {
  /* ... */

  handleIncrement(evt) {
    console.log("Increment button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  }

  handleDecrement(evt) {
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>Please leave feedback</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}