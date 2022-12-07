import React, {useState} from 'react'

function HookCounter() {
//   useState returns pair of values: count and setCount ; can be named anything as desired
//   the format as seen on useState is called "array destructuring"

// There are limitation to this example. Doesn't set state on the previous value; works now due to its simplicity
   const [count, setCount] = useState(0)

    return (
    <div>
        <button onClick = {() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter


