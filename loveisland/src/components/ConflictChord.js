import ChordDiagram from 'react-chord-diagram';
import React, { Component } from 'react';
import TextSection from './TextSection';
import styled from 'styled-components';


const data = require('../data/ind-chord2.json');

const Container = styled.div`
    columns: 2 auto;
    height: '300px';
`


export default class ConflictChord extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }
      }
    
    render() {
    return (
        <div>
          <Container>
                <div>
                    <TextSection
                        title={"concluding conflict charts..."}
                        description ={
                            <p>
                                this chart represents all the conflicts of the season
                            </p>
                        } />
                    <ChordDiagram
                    style= {{font: '10.5px sans-serif'}}
                    matrix={data['conflict']['matrix']} 
                    componentId={1}
                    groupLabels={data['conflict']['islanders']}
                    groupColors={['#FFFFFF' , '#a2d6f9ff', '#7b1e7aff', "#ed6b83ff"]}
                    blurOnHover= {false}
                    width={600}
                    height={600}
                />
                </div>
                <div>
                <TextSection
                    title={"concluding couples charts..."}
                    description ={
                        <p>
                            this chart represents all the couples in the season
                        </p>
                    } />
                    <ChordDiagram
                        style= {{font: '11px sans-serif'}}
                        matrix={data['couples']['matrix']}
                        componentId={1}
                        groupLabels={data['couples']['islanders']}
                        groupColors={['#ed6b83ff', '#fffd98ff', '#f9564fff','#FFFFFF',]}
                        blurOnHover= {false}
                        width={600}
                        height={600}
                    />
                </div>
                    
            </Container>
            
        </div>
    )}
}

