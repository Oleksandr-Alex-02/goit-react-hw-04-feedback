import React from 'react';
import Button from "./button/Button";

function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

  // render() {
  // const { good, neutral, bad } = this.state

  return (<div>
    <div>
      <h1>Please leave feedback</h1>
      <Button />
    </div>
    <div>
      <h2>Statistics</h2>
      <p>Bad: </p>
      <p>Neutral: </p>
      <p>Good: </p>
    </div>
  </div >
  )
}
// }

export default App;