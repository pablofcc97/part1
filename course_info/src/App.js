import React from 'react'

const Header=({course})=>{
  return(
    <h1>{course}</h1>
  )
}

const Part=({part, exercises})=>{
  return(
    <p>
      {part} {exercises}
    </p>
  )
}
const Content=({parts})=>{
  return(
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises}></Part>
      <Part part={parts[1].name} exercises={parts[1].exercises}></Part>
      <Part part={parts[2].name} exercises={parts[2].exercises}></Part>
    </>
  )
}

const Total=({parts})=>{
  return(
    <p>Number of exercises {parts.reduce((a,b)=>a+b,0)}</p>
  )
}
const App = () => { 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts.map((e)=>e.exercises)} />
    </div>
  )
}

export default App