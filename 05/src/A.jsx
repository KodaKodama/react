import React, { createContext } from 'react'
import C from './C'

const GreetContext = createContext();

export default function A() {
    const greet = 'Hello';
    const greet2 = 'hello2'
  return (
    <div>
        <GreetContext.Provider value={{greet, greet2}}>    
        <C />
        </GreetContext.Provider>

    </div>
  )
}

export {GreetContext}