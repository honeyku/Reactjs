import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setcounter] = useState(15);
  // let counter = 15;

  const addvalue = () => {
    if (counter < 20) {
      setcounter(counter + 1);
    }
    console.log("Clicked", counter);
  };

  const Decreasevalue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter values:5</h2>
      <button onClick={addvalue}>Increase Values{counter}</button>
      <br />
      <button onClick={Decreasevalue}>Decrease values{counter}</button>
    </>
  );
}

export default App;
