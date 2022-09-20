import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Tittle=({tittle})=> <h2>{tittle}</h2>

const Button=({content, handleClick})=><button onClick={handleClick}>{content}</button>

const Statistic = ({content, total})=>{
  return(
    <td>
      <p>{content} {total}</p>
    </td>
  )
}

const Statistics = ({good, neutral, bad})=>{
  let all = good+neutral+bad
  const average=()=>((good*1)+(bad*-1))/all
  const positivePercent=()=>(good*100)/all
  if(all===0) return (<p>No feedback given</p>)
  return (
    <>
      <table>
        <tbody>
          <tr>
            <Statistic content="Good" total={good}></Statistic>
          </tr>
          <tr>
            <Statistic content="Neutral" total={neutral}></Statistic>
          </tr>
          <tr>
            <Statistic content="Bad" total={bad}></Statistic>
          </tr>
          <tr>
            <Statistic content="All" total={all}></Statistic>
          </tr>
          <tr>
            <Statistic content="Average" total={average()}></Statistic>
          </tr>
          <tr>
            <Statistic content="Positive" total={`${positivePercent()}%`}></Statistic>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  return (
    <div>
      <Tittle tittle="Give Feedback"></Tittle>
      <Button content="good" handleClick={increaseGood}></Button>
      <Button content="neutral" handleClick={increaseNeutral}></Button>
      <Button content="bad" handleClick={increaseBad}></Button>
      <Tittle tittle="Statistics"></Tittle>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)