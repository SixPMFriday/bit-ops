import React from 'react';
import { Instructions, InstructionsButton } from './Components/Instructions';
import { Game } from './Components/Game';

/*
  app state:
    - base (bit)      -- original value of base array
    - current (bit)   -- current value of base array
    - target (bit)    -- value of target array
    - match (bool)    -- do current and target array match?
    - operations (stack)  -- history of operations performed to transform base into current
*/
function Header() {
  return (
    <>
    <div className = 'header'>
      <h1>Bit Ops</h1>
      <InstructionsButton/>
    </div>
    </>
  )
}


export function App() {
  return (
    <>
    <div id="Layout" className="App" layout="default">
      <div id="Header" layout="default">      
        <Header/>
      </div>
      <div id="Instructions" layout="default">      
        <Instructions/>
      </div>
      <div id="Game" layout="default">
        <Game/>
      </div>
    </div>
    </>
  )
}
