import React, {useState} from 'react'

function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  
//   compared to HookCounter, this version is a "safer" way to pass values for useState
//in summary, in the setCount function, use a function to "save" previous value
    return (
    <div>
        Count: {count}
        <button onClick = {() => setCount(initialCount)}>Reset</button>
        <button onClick = {() => setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick = {() => setCount(prevCount => prevCount-1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo