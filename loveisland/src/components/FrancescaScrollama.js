import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import LoveIsland from '../assets/animated-cast.png';
import Ovie from '../assets/ovie-couch.jpeg';
import TextSection from './TextSection';
import CircleLayoutFran from './CircleLayoutFran';

const Main = styled.div`
  padding: 10vh 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  position: sticky;
  width: 100%;
  padding: 8rem 4rem;
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

const imageMap = {
  1: LoveIsland,
  2: LoveIsland,
  3: Ovie,
  4: Ovie,
  5: Ovie
};

const textMap = {
    1: <TextSection description={ 
      <div>
        <p>
        Let’s contrast this to someone who wasn’t as successful as Amber: Francesca.
        She lasted 12 days, which isn’t bad but on the lower end and currently has around 0.5million Instagram followers.
        </p>
        <p>
        Her chart is notably less complex than Amber.

        </p>
      </div>
        }
        />,
    2: <TextSection description={
        <div>
          <p> 
          She seemed kind and genuine, but the process just didn’t seem to work for 
          her. Coming in the middle of the season, her options for single men were 
          also more limited than Amber.
          She developed a friendship with Michael who saved her during a recoupling. 
          And she and Maura did fight for Curtis, but Curtis went with Maura. 
          </p>
          <p>
          Her lack of connections, both in friendships and relationships, made it so 
          that she never became a staple to the overall narrative like Amber, which led to her early exit.

          </p>
        </div> }
        />,
};

export default class FrancescaScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(textMap),
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
                <CircleLayoutFran islander={"francesca"}/>
            </ImageWrapper>
        </Graphic>
      </Main>
    );
  }
}