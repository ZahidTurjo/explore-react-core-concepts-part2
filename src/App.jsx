import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('button 2 clicked')
  }

const addFive=(num)=>{
  alert(num+5)
}
  return (
    <>
      
      
      <h3>React Core Concepts 2</h3>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2} >Click 2</button>
     <button onClick={()=>{
      alert('button 3 clicked')
     }} >Click 3</button>
     <button onClick={()=>{
      addFive(3)
     }}>Add 5</button>
     
    </>
  )
}

export default App
