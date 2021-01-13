import React from 'react';
import styled from 'styled-components';
import TextSection from './TextSection'
import IndChord from './IndChord';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2% 32% 32% 32% 2% ;
  padding: 10px;

`
const Top = styled.div`
  text-align: center;
  font-size: 30px;

`
const Bottom = styled.div``

const Couple = styled.span`
	background-color: blue;
  color: white;
  font-weight: bold;
`
const Conflict = styled.span`
	background-color: red;
  color: white;
  font-weight: bold;
`
const Both = styled.span`
	background-color: purple;
  color: white;
  font-weight: bold;
`

export default class IndChordSM extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
    return ( 
      <div>
      <TextSection
      title={"looking at the relationship profiles  "}
      description ={
      <div>
        <p>
          Each pie chart represents an islander, the islander with the largest bar on the right. This depicts all their relationships
          on the show: red for <Conflict>conflicts</Conflict>, blue for <Couple>couples</Couple>, and purple for <Both>both</Both> conflicts and 
          couples. Note that "being involved in a conflict" could mean being on the same side of an argument.
        </p>
        <p>
          Below, the top row consists of some of the top followed islanders, while the bottom row consists of some of the least followed. More 
          than that, the top row has more complex charts: they appear to have more interactions with various contestants in both relationships and conflicts. 

         </p>
      </div>
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