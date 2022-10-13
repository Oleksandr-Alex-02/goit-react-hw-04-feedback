const Button = ({ clickGood, clickNeutral, clickBad }) => (

    <div>
        <button onClick={() => clickGood()}>Good</button>
        <button onClick={() => clickNeutral()}>Neutral</button>
        <button onClick={() => clickBad()}>Bad</button>
    </div>
)
export default Button
