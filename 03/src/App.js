import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  console.log(count);
  console.log(setCount);

  const handleClickInc = () => {
    setCount(count+1);
  }
  const handleClickDec = () => {
    setCount(count-1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
}

export default App;
