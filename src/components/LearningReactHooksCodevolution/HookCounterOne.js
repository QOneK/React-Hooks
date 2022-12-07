import React, {useState, useEffect} from 'react'

//This is an example with use of useEffect
//However, this is not the most efficient method, another example will cover efficiency

function HookCounterOne() {
const [count, setCount] = useState(0)
const [name, setName] = useState('')

//this useEffect function will run everytime the component renders
//ofc, this is customizable but that will be on later lessons
useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times` //document.title is the web broswer tab's title
}, [count]) //2nd parameter of useEffect is array of values that the effect depends on

    return (
    <div>
        <input type="text" value = {name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(prevCount => prevCount + 2)}>Click {count} times</button>
    </div>
  )

  

}

export default HookCounterOne