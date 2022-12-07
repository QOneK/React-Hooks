import React, { useState } from "react";

// Destructuring with arrays and useState

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li> //need the key value of array to know which value to output
          //since list, the * will appear with number
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour;
