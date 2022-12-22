import { useState } from "react";
import Button from "./button/Button";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const clickFeedback = option => {
        switch (option) {
            case 'good':
                setGood(good => good + 1);
                break;
            case 'neutral':
                setNeutral(neutral => neutral + 1);
                break;
            case 'bad':
                setBad(bad => bad + 1);
                break;
            default:
                throw new Error('Not supported type');
        }
    };

    const TotalFeedback = good + neutral + bad;
    const countTotalFeedback = Math.round(good * 100 / TotalFeedback)
    const options = Object.keys({ good, neutral, bad });

    return (
        <div>
            <Section title={'Please leave feedback'} countTotalFeedback={countTotalFeedback}>
                <Button
                    clickFeedback={clickFeedback}
                    options={options}
                />
                <section>
                    {TotalFeedback !== 0 ?
                        <>
                            <h2>Statistics</h2>
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                countTotalFeedback={TotalFeedback}
                                countPositiveFeedbackPercentage={countTotalFeedback}
                            />
                        </>
                        : null}
                </section>
            </Section>
        </div >
    )
}
