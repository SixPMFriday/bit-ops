
import React from 'react';
//import IntToByteArray from './BitOps';


// Returns 8-character string representing param num (int between 0 and 255) as byte
function IntToByte(num) {
  if (num < 0 || num > 255) {
      throw "IntToByte parameter num ("+num+") is not between 0 and 255! A byte can represent only represent 256 distinct values.";
  }
  let binary = "";
  let temp = num;
  while (temp > 0) {
      if (temp % 2 === 0) {
          binary = "0" + binary;
      }
      else {
          binary = "1" + binary;
      }
      temp = Math.floor(temp / 2);
  }
  if (!binary.length === 8) {
      throw "IntToByte return value ("+binary+") does not have 8 bits!"
  }
  return binary;
}

// Returns 8-element array representing param num (int between 0 and 255) as byte
function IntToByteArray(num) {
let bit_items = Array.from(IntToByte(num));
while (bit_items.length < 8) {
  bit_items.unshift("0");
}
return bit_items
}


function ByteArray_Current() {
    // useState returns a tuple where the first param is the current state
    // and the second is a method which allows us to update the counters state
    // useState is a hook
    // useState declares a state vatiable, passed value is initial value of state
    //const bitValue = useSelector(state => state.value);
    //const [bitValue, setBitValue] = store.getState();
    const bitValue = 8;
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


export function Game() {
    return(
        <>
        <div className="game-container">
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
