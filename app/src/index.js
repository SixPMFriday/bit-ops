import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './layout.css';
import * as serviceWorker from './serviceWorker';

import { App } from './App';

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
// Content Components

