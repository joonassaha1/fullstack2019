import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.name1} {props.exercises1}</p>
            <p>{props.name2} {props.exercises2}</p>
            <p>{props.name3} {props.exercises3}</p>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>Yhteensä {props.amount} tehtävää</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'

/*     const parts = [
        {
            name: 'Reactin perusteet',
            exercises: 10
        },
        {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
        },
        {
            name: 'Komponenttien tila',
            exercises: 14
        } 
    ] */
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }
    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }

    const maara = part1.exercises + part2.exercises + part3.exercises

    return (
        <div>
            <Header course = {course} />
            <Content name1 = {part1.name} exercises1 = {part1.exercises}/>
            <Content name2 = {part2.name} exercises2 = {part2.exercises}/>
            <Content name3 = {part3.name} exercises3 = {part3.exercises}/>
            <Total amount = {maara}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

