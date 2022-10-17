import PropTypes from 'prop-types';


const Button = ({ clickFeedback, options }) => (
    <>
        {options.map(item => (
            <button key={item} onClick={() => clickFeedback(item)}>{item}</button>

        ))}
    </>
)

Button.protoType = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    clickGood: PropTypes.func.isRequired,
}
export default Button
