function Button() {
    return (<div>
        <button onClick={() => { console.log('123') }}>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
    </div>
    )
}

export default Button;