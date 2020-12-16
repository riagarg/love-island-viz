import ChordDiagram from 'react-chord-diagram'
import React, { Component } from 'react'
import styled from 'styled-components';

const data = require('../data/ind-chord2.json');

const Label = styled.span`{
    color: #f9564fff;
    font-family: 'Comfortaa';
    font-size: 2rem;
    margin: 0;
    text-align: left;
  }`
const sty = {
    font: '10px sans-serif'
}

export default class IndChord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            islander: props.islander,
            matrix: data[props.islander].matrix,
            fontS:     {
                font: '9px sans-serif'
            }
        
        }
      }
    createColors() {    
        const c = data[this.state.islander].islanders.map((item) =>
            (data[this.state.islander].colors[item]==-1) ? "#FF0000" : ((data[this.state.islander].colors[item]==-0) ? "#800080" : "#0000FF")  
        )
        return c
    }
    createLabels(){   
        const l = data[this.state.islander].islanders.map((index) => 
            (<Label> 
                {data[this.state.islander].islanders[index]}
            </Label>)
        )
        return l
    }
    
    
    render() {
    return (
        <div>
            <ChordDiagram
                matrix={this.state.matrix} 
                style={this.state.fontS}
                componentId={1}
                groupLabels={data[this.state.islander].islanders}
                groupColors={this.createColors()}
                blurOnHover={false}
                resizeWithWindow={true}
                width={500}
                height={500}
                />
        </div>
    )}
}

