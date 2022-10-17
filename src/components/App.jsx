import React, { Component } from 'react';
import Button from "./button/Button";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    clickFeedback = option => {
        this.setState(prevState => ({ [option]: prevState[option] + 1 }));
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
                <Section title={'Please leave feedback'} countTotalFeedback={this.countTotalFeedback()}>
                    <Button
                        clickFeedback={this.clickFeedback}
                        options={Object.keys(this.state)}
                    />
                    <section>
                        <h2>Statistics</h2>
                        {this.countTotalFeedback() !== 0 ?
                            <>
                                <Statistics
                                    good={this.state.good}
                                    neutral={this.state.neutral}
                                    bad={this.state.bad}
                                    countTotalFeedback={this.countTotalFeedback()}
                                    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
                                />
                            </>
                            : null}
                    </section>
                </Section>
            </div >
        )
    }
}
