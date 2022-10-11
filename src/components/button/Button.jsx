import React, { Component } from "react";

class Button extends Component() {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = option => {
        this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    };

    render() {
        // const { good, neutral, bad } = this.state;
        // const total = good + neutral + bad;
        // const positivePercentage = Number.parseInt((good / total) * 100);

        return (<div>
            <div>
                <h1>Please leave feedback</h1>
                <button onClick={() => this.onLeaveFeedback}>Good</button>
                <button onClick={() => this.onLeaveFeedback}>Neutral</button>
                <button onClick={() => this.onLeaveFeedback}>Bad</button>
            </div>
            <div>
                <h2>Statistics</h2>
                <p>Bad:</p>
                <p>Neutral:</p>
                <p>Good:</p>
            </div>
        </div >
        )
    }
}

export default Button;