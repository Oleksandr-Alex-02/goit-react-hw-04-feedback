import PropTypes from 'prop-types';


const Button = ({ clickFeedback, options }) => (
    <>
        {options.map(item => (
            <button key={item} onClick={() => clickFeedback(item)}>{item}</button>

        ))}
    </>
)

Button.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    clickFeedback: PropTypes.func.isRequired,
}
export default Button
