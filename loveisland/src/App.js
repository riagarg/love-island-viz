import './App.css';
import React from 'react';
import * as d3 from 'd3';
import logo from './logo.svg';
import TitleCard from './components/TitleCard';
import {GlobalStyles, CustomVictoryTheme} from './components/GlobalStyles.js';
import ConflictChord from './components/ConflictChord';
import IntroScroll from './components/IntroScroll';
import JobsHist from './components/JobsHist';
import IndChord from './components/IndChord';
import Highlight from './components/Highlights';
import JobsHistScrollama from './components/JobsHistScrollama';
import IgFollowersScrollama from './components/IgFollowersScrollama';
import IndChordSM from './components/IndChordSM';
import CircleLayout from './components/CircleLayout'
import AmberScrollama from './components/AmberScrollama';
import FrancescaScrollama from './components/FrancescaScrollama';
import Footer from './components/Footer';
import Final from './components/Final';
import styled from 'styled-components';
const TextWrapper = styled.div`
    background: rgb(255,236,181);
    background: linear-gradient(90deg, rgba(255,236,181,1) 35%, rgba(255,236,181,1) 35%);
    height: auto;
    text-align: center;
    padding: 5vh 10vw;
    margin-top: 15vh;
`


function App() {
// const fs = require('fs');
// var merge = require('package-merge');
// var dst = fs.readFileSync('package.json');
// var src = fs.readFileSync('../package.json');
 
// Create a new `package.json`
// console.log(merge(dst, src));
  return (
    <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css?family=Muli:400,700|Philosopher:400,700&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Comfortaa:400,700|Nunito:400,700|Dancing+Script:400|Aladin:400|Anton:400,700)
      </style>
      <GlobalStyles/>
      <TitleCard/>
      <Highlight text="So think you have what it takes to get crowned UK's hottest couple on Love Island? Let's find out!"/>
      <IntroScroll/>
      {/* <D3ex/> */}
      <JobsHistScrollama/>
      <Highlight text="For both gaining a following or winning the show, you need audience support. So let’s explore a little more on how to optimize building a large following."/>
      <IgFollowersScrollama/>
      <IndChordSM/>
      <AmberScrollama/>
      <FrancescaScrollama/>

      <Highlight text="Lets look at the overall relationships on the show"/>

       <ConflictChord/>
       <Final text="In order to win this show you need to make yourself seen and a part of the larger story. You need to build relationships--both romantic and not--and involve 
       yourself with some drama! Keep on the show as long as possible and be likable character. Be involved in the most storylines possible while staying 
       humble! "/>

       <Footer/>
    </div>
  );
}

export default App;

