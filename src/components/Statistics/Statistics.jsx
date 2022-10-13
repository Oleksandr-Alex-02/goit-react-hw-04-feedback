import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => (

    <div>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {countTotalFeedback}</li>
            <li>Positive Feedback: {countTotalFeedback ? countPositiveFeedbackPercentage : 0}%</li>
        </ul>
    </div>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics
