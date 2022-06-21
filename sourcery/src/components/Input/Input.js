import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState({ name: "", url: "", description: "" });

  return (
    <div>
    {/* Input field for the name */}
      <input
        type="text"
        onChange={(event) => setText({...text, name: event.target.value})}
      ></input>

      {/* Input field for the url  */}
      <input
        type="text"
        onChange={(event) => setText({...text, url: event.target.value})}
      ></input>

      {/* Input field for the description */}
      <input
        type="text"
        onChange={(event) => setText({...text, description: event.target.value})}
      ></input>
      <button onClick={() => props.addResource(text)}>Submit</button>
    </div>
  );
}

export default Input;
