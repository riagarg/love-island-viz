import './App.css';
import React from 'react';
import logo from './logo.svg';
import  { Scrollama, Step } from 'react-scrollama';
import ExampleScrollama from './components/ExampleScrollama.js';
import BarchartExample from './components/BarchartExample';
import {GlobalStyles, CustomVictoryTheme} from './components/GlobalStyles.js';

function App() {
  return (
    <div className="App">

     
        <GlobalStyles/>

        <BarchartExample>

        </BarchartExample>
        <ExampleScrollama onStepEnter={1}>  
          {/* onStepEnter={callback}> */}
        <Step data={1}>
          <div>...</div>
        </Step>
        <Step data={2}>
          <div>...</div>
        </Step>
      </ExampleScrollama>
    </div>
  );
}

export default App;
