import ChordDiagram from 'react-chord-diagram'
import React, { Component } from 'react'
const data = require('../data/ind-chord.json');

    
const matrix = data['all']['matrix']

export default class ConflictChord extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }
      }
    
    render() {
    return (
        <div>
            <ChordDiagram
                matrix={matrix} 
                componentId={1}
                groupLabels={data['all']['islanders']}
                groupColors={['#ed6b83ff', '#fffd98ff', '#f9564fff', '#a2d6f9ff', '#7b1e7aff', '#28502eff']}
                blurOnHover= {false}
                />
        </div>
    )}
}

