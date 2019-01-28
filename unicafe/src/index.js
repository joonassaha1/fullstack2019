import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick = {handleClick}>{text}</button>
    )
}

const Values = ({ text, value }) => (
    <table>
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    </table>
)

const Statistics = ({ good, neutral, bad}) => {
    if (good + neutral + bad === 0) {
        return (
            <div>Ei yhtään palautetta annettu</div>
        )
    }
    
    return (
        <div>
            <table>
                <tbody>
                    <Values text = {'hyvä'} value = {good} />
                    <Values text = {'neutraali'} value = {neutral} />
                    <Values text = {'huono'} value = {bad} />
                    <Values text = {'yhteensä'} value = {good + bad + neutral} />
                    <Values text = {'keskiarvo'} value = {(good + bad) / (good + bad + neutral)} />
                    <Values text = {'positiivisia'} value = {good / (good + bad + neutral)} />
                </tbody>
            </table>
        </div>
    )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Anna palautetta</h1>
        <Button handleClick = {() => setGood(good +1)} text = "hyvä" />
        <Button handleClick = {() => setNeutral(neutral +1)} text = "neutraali" />
        <Button handleClick = {() => setBad(bad +1)} text = "huono" />

        <h1>Statistiikka</h1>
        <Statistics good = {good} neutral = {neutral} bad = {bad} />


    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)