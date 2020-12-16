import React, { Component } from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    background: rgb(255,236,181);
    background: linear-gradient(90deg, rgba(255,236,181,1) 35%, rgba(255,236,181,1) 35%);
    height: auto;
    text-align: center;
    padding: 5vh 10vw;
    margin-top: 15vh;
`
const Text = styled.span`
    color: rgba(0,0,0,1);
    width: 80vw;
    font-weight: 300;
	font-family: Comfortaa; 
`
const ContentWrapper = styled.div`
  height: 400px;
`

export default class Highlight extends Component {
    render(){
        return(
            <ContentWrapper>
                <TextWrapper>
                    <h1><Text>{this.props.text}</Text></h1>
                </TextWrapper>
            </ContentWrapper>
        )
    }
}
