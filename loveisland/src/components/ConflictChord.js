import ChordDiagram from 'react-chord-diagram';
import React, { Component } from 'react';
import TextSection from './TextSection';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const data = require('../data/ind-chord2.json');

const Container = styled.div`
    padding: 5vw;
`
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 100
    }
}))

export default class ConflictChord extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
        }
      }
    
    render() {
    return (
        <Container>
          <Grid container>
                <Grid item xs>
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
                    groupColors={['#FFFFFF' , '#5fd3ed', '#7b1e7aff', "#ed6b83ff"]}
                    // light blue: '#a2d6f9ff'
                    blurOnHover= {false}
                    width={580}
                    height={580}
                    resizeWithWindow={true}
                />
                </Grid>
                <Grid item xs>
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
                        width={580}
                        height={580}
                        resizeWithWindow={true}
                    />
                </Grid>
                    
            </Grid>
            
        </Container>
    )}
}

