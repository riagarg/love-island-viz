import React from 'react';
import Amber from '../assets/amberpic.png';
import styled from 'styled-components';
import IndChord from '../components/IndChord'

const Circle = styled.div `{
    border-radius: 50%;
    height: 5000px;
    width: 5000px;
  }`
  
const Card = styled.div `{
    border-radius: 50%;
    height: 600px;
    width: 600px;
  }`
  
const CardAttribute = styled.div `{
    position: relative;
    border-radius: 50%;
    color: #000;
    width: 120px;
    height: 120px;
    padding: 0px 0 0 0;
  }`

const ImageWrapper = styled.div`
  height: ${props => `${props.minHeight + 150}px`};
  width: ${props => `${props.minWidth}px`};
`
const Image = styled.img`
  position: absolute;
  opacity: ${props => props.display ? `1` : `0`};
  transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  height: 100%;
  top: 38%;
  left: 0%;
`


export default class CircleLayout extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        islander: props.islander,
        data: props.data,
        animate: props.animate,
        animating: false
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.data,
        animating: true
      });
      setTimeout(() => this.setState({animating: false}), this.state.animate);
    }
  }
  render() {
    console.log(this.state.islander);
    return (
        <div className="row" id="ads">
                <Circle className="rounded-circle">
                    <Card>
                        <div className="card-image">
                            <CardAttribute>
                                <ImageWrapper>
                                    <Image src={Amber} display={true}/>
                                </ImageWrapper>
                            </CardAttribute>
                        <IndChord islander={"amber"}/>
                        </div>
                        <div className="card-image-overlay m-auto" />
                            <div className="card-body text-center">
                            <div className="ad-title m-auto">
                              <h5>{"Amber"}</h5>
                            </div>
                        </div>
                    </Card>
                </Circle>
        </div>
    );
  }
}