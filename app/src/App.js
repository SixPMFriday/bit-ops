import React from 'react';
import logo from './logo.svg';
import './App.css';


function Bit() {
  return (
    <>
      <span class="dot"></span>
    </>
  )
}
function BitOpsButtons() {
  return(
    <>
    <div class="bit-operations-controller">
      <button>AND (&)</button>
      <button>OR (|)</button>
      <button>XOR (^)</button>
      <button>NOT (~)</button>
      <button>LEFT SHIFT ({'<<'})</button>
      <button>RIGHT SHIFT ({'>>'})</button>
    </div>
    </>
  )

}
function BitArray_8() {
  const bit_items = Array.from({length: 8}, i => 0) 
  return (
    <>
      <div class="bit-window">
          {bit_items.map(item => {
            return(
              <div class="bit-item" key = {item.id}>
                <Bit/>
              </div>
            )
          })}
      </div>
    </>
  )
}
/*
  app state:
    - base (bit)      -- original value of base array
    - current (bit)   -- current value of base array
    - target (bit)    -- value of target array
    - match (bool)    -- do current and target array match?
    - operations (stack)  -- history of operations performed to transform base into current
*/
function UserArray() {
  return(
    <>
      <p>Your Array</p>
      <BitArray_8/>
      <button>Undo</button>
      <button>Redo</button>
    </>
  )
}
function TargetArray() {
  return(
    <>
      <p>Target Array</p>
      <BitArray_8/>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bit Ops</h1>
      <main>
        <UserArray/>
        <BitOpsButtons/>
        <TargetArray/>
      </main>
      </header>
    </div>
  );
}

export default App;
