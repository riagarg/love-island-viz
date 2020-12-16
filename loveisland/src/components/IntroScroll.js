import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import LoveIsland from '../assets/animated-cast-crop.png';
import Ovie from '../assets/ovie-couch.jpeg';
import TextSection from './TextSection';
import AG from '../assets/gregamber.png';
import MT from '../assets/mollymaetommy.png';

const Main = styled.div`
  padding: 1vh 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  position: sticky;
  width: 100%;
  padding: 2rem 0;
  top: 1rem;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 100%;
`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  padding: 15vh 0 5vh 5vw;
  &:last-child {
    margin-bottom: 0;
  }
`
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
  height: 80%;
  top: 25%;
  left: 10%;
`
// const List = styled.li {
//   font-size: 14px;
//   margin-left: 10px;
//   list-style-type: circle;
//   display: inline;
// }

const imageMap = {
  1: LoveIsland,
  2: LoveIsland,
  3: MT,
  4: AG,
  5: Ovie
};

const textMap = {
    1: <TextSection description={ 
      <div>
        <p>
        Love Island brings together UK's hottest singles gather for a summer every year 
        (well except 2020 rip) and vie for the title of best couple of the summer. Contestants are constantly filtering in and out as 
        they are put in by the producers and eliminated when they fail to couple up. 
        </p>
      </div>
        }
        />,
    2: <TextSection description={
        <div>
          <p> 
            but what does it take to be successful on the show, and what does it mean to be successful?

            in my eyes there are three metrics of success you can find on the show:
                <ul> 
                  <li><b>finding love</b></li>
                  <li><b>winning your season and the monetary compensation</b></li>
                  <li><b>increased following</b></li>
                </ul>
          </p>
        </div> }
        />,
    3: <TextSection 
        title={'Finding Love:'}
        description={
        <div>
            <p> 
            Let's be real, if contestants are truly looking for love, Love Island ain't it. Especially 
            considering only one couple remains together from the 2018 and 2019 summers combined.

            More realistic indicators of success probably in the more valuable metric for success in 
            this internet age--instagram followers. Also the monetary award for being crowned the 
            winner probably isn't bad either.
            </p>
      </div>
    }/>,
    4: <TextSection 
        title={'Winning your season and monetary compensation:'}
        description={
        <div>
            <p> 
              Again another unrealistic goal as only one couple makes it through to the end. 
              Additionally the £50,000 split between you and your partner can only take you so far in life. 
              2019’s winners were Greg and Amber, pictured right.  
              However, even to win you need audience support for the public to vote for you, which takes us 
              into our next topic.

            </p>
        </div>
    }/>,
    5:  <TextSection description={ 
    <div>
      <p> 
        if you watch the show you know how crazy things can get. the producers intentionally
        stir things up to create drama by inserting people, doing re-couplings, having people
        go on dates at random times etc. 

        so i thought it would be interesting to explore how contestants achieve the most success
        on the show through data!
      </p>
    </div>
    }/>
};

export default class IntroScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(imageMap),
      progress: 0,
    };
  };

  getImages(imageMap, data) {
    return Object.keys(imageMap).map((key => {
      return (<Image src={imageMap[key]} display={key == data} />);
    }));
  }

  onStepEnter = ({ element, data }) => {
    this.setState({ data });
  };

  onStepExit = ({ element }) => {
  };

  onStepProgress = ({ element, progress }) => {
    // Commented out because it stalls animation
    // this.setState({ progress });
  }
  
  render() {
    const { data, steps, progress } = this.state;

    return (
      <Main>
        <Scroller>
          <Scrollama
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
            progress
            onStepProgress={this.onStepProgress}
            offset={0.33}
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <Content>
                    {textMap[value]}
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <ImageWrapper minHeight={300} minWidth={400}>
            {this.getImages(imageMap, data)}
          </ImageWrapper>
        </Graphic>
      </Main>
    );
  }
}