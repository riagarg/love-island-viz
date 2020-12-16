import React from 'react';
import styled from 'styled-components';
import TextSection from './TextSection'
import IndChord from './IndChord';
import BarchartExample from './BarchartExample'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2% 32% 32% 32% 2% ;
  padding: 10px;

`
const Top = styled.div`
  text-align: center;
  font-size: 30px;


`
const Bottom = styled.div`
  
`



export default class IndChordSM extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
    return ( 
      <div>
      <TextSection
      title={"extrapolating risk and flavor combination trends to other seasons..."}
      description ={
        <p>
          Individual thingies
         </p>
      } />
      <Wrapper>
        <div />
        <Top>
          <IndChord islander={"tommy"}/>
        </Top>
        <Top>
          <IndChord islander={"amber"}/>
        </Top>
        <Top>
          <IndChord islander={"maura"}/>
        </Top>
        <div />
        <div />
        <Bottom>
          <IndChord islander={"lucie"}/>
        </Bottom>
        <Bottom>
          <IndChord islander={"francesca"}/>
        </Bottom>
        <Bottom>
          <IndChord islander={"greg"}/>
        </Bottom>
      </Wrapper>
      </div>
    )
  }
}