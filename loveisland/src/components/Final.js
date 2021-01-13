import React, { Component } from 'react';
import styled from 'styled-components';
import Loveislandpic from '../assets/animated-cast.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const TextWrapper = styled.div`
    background: rgb(255,236,181, .7);
    height: auto;
    text-align: center;
    padding: 5vh;
    margin-top: 5vh;
    margin-bottom: 5vh;

`
const Text = styled.span`
    color: rgba(0,0,0,1);
    width: 80vw;
    font-weight: 300;
    font-family: Nunito; 
    font-size: 30px;
`
const Image = styled.img`
  position: absolute;
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  height: 80%;
  top: 25%;
  left: 10%;
`
const styles = {
    media: {
       height: 0,
       paddingTop: '30.25%' // 16:9
    },
    card: {
       position: 'relative',
    },
    overlay: {
       position: 'absolute',
       top: '20px',
       left: '20px',
       right: '20px',
       color: 'black',
    }
 }

 
const ContentWrapper = styled.div`
  height: 400px;
`

export default class Highlight extends Component {
    render(){
        return(
            <Card style={styles.card}>
                <CardMedia image={Loveislandpic} style={styles.media}/>
                <div style={styles.overlay}>
                    <ContentWrapper>
                        <TextWrapper>
                            <h1><Text>{this.props.text}</Text></h1>
                        </TextWrapper>
                    </ContentWrapper>                
                </div>
            </Card>

        )
    }
}
