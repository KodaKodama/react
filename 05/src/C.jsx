import React, { useContext } from 'react';
import { GreetContext} from './A';

function C() {
  const useCon = useContext(GreetContext);
  return (
     <h1>Greet: {useCon.greet} {useCon.greet2}</h1>
  );
}

export default C