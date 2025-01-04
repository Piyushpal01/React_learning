import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 10;

  // now this is the syntax of hooks, here useState is hook that change the state and it gives 2 things in array -> FIRST => variable to update and SECOND => Mwthod to update the variable and as a default value we are setting it 0, counter is a variable and setCounter is a method which will update/change the value of counter variable, and in function to update value it will not be like counter+=1, now since counter is updated so react will traverse the whole DOM and wherever the counter variable is use it will update the value of it. To use setCounter method in function call it and update the value in it.

  let [counter, setCounter]=useState(0)
  let IncreaseValue = () => {
    // setCounter(counter+1);
    if (counter == 10){
      setCounter(counter=10)
    }
    else{
      setCounter(counter+1)
    }
  }

  let DecreaseValue = () => {
    // setCounter(counter-1)
    if(counter==0){
      setCounter(counter=0)
    }
    else(
      setCounter(counter-1)
    )
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value &rarr; {counter}</h3>
      <button type='button' onClick={IncreaseValue}>Increase Value</button>
      <button type='button' onClick={DecreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
