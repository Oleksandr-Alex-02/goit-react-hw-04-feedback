import React, { Component } from 'react';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    clickGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    }

    clickNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    clickBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad
        return Math.round(good * 100 / total)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Please leave feedback</h1>
                    <button onClick={this.clickGood}>Good</button>
                    <button onClick={this.clickNeutral}>Neutral</button>
                    <button onClick={this.clickBad}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral:{this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.countTotalFeedback()}</li>
                        <li>Positive Feedback: {this.countTotalFeedback() ? this.countPositiveFeedbackPercentage() : 0}%</li>
                    </ul>
                </div>
            </div >
        )
    }
}
