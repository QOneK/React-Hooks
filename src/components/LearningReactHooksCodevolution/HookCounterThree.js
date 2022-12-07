import React, { useState } from "react";

function HookCounterThree() {
  //   setting inital value of useState, first and last name are initally empty strings
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
  
    // Just like in HTML, React uses forms to allow users to interact with the web page.
    
    // Target: gives you the element that triggered the event. So, event.target.value retrieves 
    // the value of that element

    // useState does not automatically merge and update the object. Use the spread operator to solve issue

    // …name => it’s like creating a replica of the name property

  <form>
    <input type = "text" value = {name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})}/>
    <input type = "text" value = {name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})}/>
    <h2>Your first name is - {name.firstName}</h2>
    <h2>Your last name is - {name.lastName}</h2>
    <h2>{JSON.stringify(name)}</h2>
  </form>
  );
}

export default HookCounterThree;
