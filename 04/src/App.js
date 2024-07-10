import { useEffect, useState } from "react";


function App() {
  const [clicked, setClicked] = useState();
  const [count, setCount]= useState(0);
  useEffect(()=> {
    alert('we are in useState');

    //return part will run before alert
    return(
      ()=> {console.log('return of useState');}
    )
  },[clicked, count])
  
  return (
    <div className="App">
      <button onClick={()=> setClicked('subscribe')}>Subscribe</button>
      <button onClick={()=> setClicked('now')}>Now</button>
      <h1>{clicked}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
