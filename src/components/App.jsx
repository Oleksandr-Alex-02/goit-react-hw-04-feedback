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
                    <p>Bad: {this.state.good}</p>
                    <p>Neutral:{this.state.neutral} </p>
                    <p>Good: {this.state.bad} </p>
                </div>
            </div >
        )
    }
}
