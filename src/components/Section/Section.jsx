const Section = ({ countTotalFeedback, children }) => (
    <section>
        <h1>{countTotalFeedback !== 0 ? 'Thanks for your choice' : 'Please leave feedback'}</h1>
        {children}
    </section>
)

export default Section;