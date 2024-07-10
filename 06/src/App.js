import { useReducer } from "react";

const reducer = (state,action) => {
console.log(state, action);
if(action.type ==='incr'){
  return {count: state.count+1}
}else if(action.type ==='dec') {
  return {count: state.count-1}
}
}


function App() {
  // useReducer(reducer,initialState)
  const [state, dispatch] = useReducer(reducer, {count: 0});

  //reducer function
  // pure function
  // state and action

  const handleClickDec = () => {
    dispatch({type:"dec"});
  }
  const handleClickInc = () => {
    dispatch({type:"incr"});
  }
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
}

export default App;
