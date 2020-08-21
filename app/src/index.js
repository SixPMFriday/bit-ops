import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAction, createReducer } from '@reduxjs/toolkit';

import { IntToByte, IntToByteArray, ByteToInt } from './BitOps';
import { GameInstructions } from './Components/GameInstructions';

/*
  Objects in global store:
    - current_byte
    - target_byte
    - history (list of dictionaries with byte 
        value and transform/untransform operations)

  Dependant components:
      -current byte and target (box)
        - flex box with byte array visual representation
        - int value on left

      - operations buttons:
        - bit ops (select from row)
        - numbers (select from row)


    - base (bit)      -- original value of base array
    - current (bit)   -- current value of base array
    - target (bit)    -- value of target array
    - match (bool)    -- do current and target array match?
    - operations (stack)  -- history of operations performed to transform base into current
*/



/*  createSlice function  allows us to provide an object with the reducer functions, and it will automatically generate 
    the action type strings and action creator functions based on the names of the reducers we listed.

    createSlice returns a "slice" object that contains the generated reducer function as a field named reducer, and the generated
    action creators inside an object called actions.
*/

const counterSlice = createSlice({
  name: 'counter',
  initialState: 10,
  reducers: {
    increment: state => { state.value += 1},
    decrement: state => { state.value -= 1}
  }
})


// Store
const store = configureStore({
  reducer: counterSlice.reducer
});


/* Use ES6 destructuring syntax to pull out the action creator functions and reducer as variables */
const { actions, reducer } = counterSlice
const { increment, decrement } = actions
// SELECTORS
const selectCurrentValue = state => state.Value;


// Content Components


function Header() {
  return (
    <>
    <div className = 'header'>
      <h1>Bit Ops</h1>
      <GameInstructions/>
    </div>
    </>
  )
}

function ByteArray_Current() {
  // useState returns a tuple where the first param is the current state
  // and the second is a method which allows us to update the counters state
  // useState is a hook
  // useState declares a state vatiable, passed value is initial value of state
  const bitValue = useSelector(state => state.value);
  //const [bitValue, setBitValue] = store.getState();

  return (
    <>
      <div className="byte-window">
        <div className="byte-window-value">
          <p>{bitValue}</p>
        </div>
        <div className="byte-window-bitarray">
          {IntToByteArray(bitValue).map(item => {
            return(
              <div className={"byte-window-byte val_"+item} key = {item.id}>
                  <p>{item}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

function GameOperations() {
  return (
    <>
      <div id="user-controller">
        <p>Operations:</p>
        <div id="formula-controller">
          <button id="formula-button-and">AND (&)</button>
          <button id="formula-button-or">OR (|)</button>
          <button id="formula-button-xor">XOR (^)</button>
          <button id="formula-button-not">NOT (~)</button>
          <button id="formula-button-ls">LEFT SHIFT ({'<<'})</button>
          <button id="formula-button-rs">RIGHT SHIFT ({'>>'})</button>
        </div>
        <div id="byte-controller">
          <button id="byte-button-rs">Run</button>
        </div>
        <div id="history-controller">
          <button id="history-button-undo">Undo</button>
          <button id="history-button-redo">Redo</button>
        </div>
      </div>
    </>
  )
}

function GameOperationsHistory() {
  return (
    <>
      <div className="history">
        <h2>History</h2>
        <ol>
          <li>left shift 2</li>
          <li>xor 68</li>
          <li>and 200</li>
        </ol>
      </div>
    </>
  )
}

function ContentLayout() {
  // Add all page content to div element
  // App contains grid, each content will have alias
  return (
    <>
    <div className="App grid-main">
      <div className="grid-header">      
        <Header/>
      </div>
      <div className="grid-current-value">  
        <p>Current Value:</p>
        <ByteArray_Current/>
      </div>
      <div className="grid-target-value">  
        <p>Target Value:</p>
        <ByteArray_Current/>
      </div>
      <div className="grid-operations">
        <GameOperations/>
      </div>
      <div className="grid-operations-history">
        <GameOperationsHistory/>
      </div>
    </div>
    </>
  )
}

// App with components (includes provider with store passed as prop)
// <Provider/> wil supply our entire component tree with the global state tree
function App() {
  return (
    <Provider store={store}>
      <ContentLayout/>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




/*
Uint8 array
  -- will store bytes, size = 2

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array


*/
