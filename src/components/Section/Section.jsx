import PropTypes from 'prop-types';

const Section = ({ countTotalFeedback, children }) => (
    <section>
        <h2>{countTotalFeedback !== 0 ? 'Thanks for your choice' : 'Please leave feedback'}</h2>
        {children}
    </section>
)

Section.propTypes = {
    countTotalFeedback: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;