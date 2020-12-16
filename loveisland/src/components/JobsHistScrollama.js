import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import JobsHist from './JobsHist';
import TextSection from './TextSection';


const Main = styled.div`
  padding: 0 2vw 0 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  flex-basis: 60%;
  position: sticky;
  width: 100%;
  padding: 10vh 5vw 0 5vw;
  top: 1rem;
  align-self: flex-start;
`
const Scroller = styled.div`
  flex-basis: 50%;
`
const Content = styled.div`
  margin: 0 auto 2rem auto;
  min-height: 50vh;
  padding: 5vh 0 10vh 5vw;
  &:last-child {
    margin-bottom: 0;
  }
`
const contentMap = {
  0: <TextSection 
    title={"increased following:"} 
    description={
      <div>
        <p>
          a more valuable metric for success in this internet age may be an increased 
          social media following. it’s no secret that being on Love Island gives you a 
          massive followers, and this generation knows how to monetize it. 
        </p>
        <p>
          From the histogram we can see that islanders have professions that benefit from 
          more exposure. For athletes, influencers, entainers, and business people, exposure 
          is key in bringing in customers and brand deals.
        </p>
      </div>
    } 
  />,
  1: <TextSection 
    description={
      <div>
        <p>
          But it is important to note that, though some careers seem meant for love island, there 
          doesn’t seem to be an evident correlation between profession and audience support
        </p>
      </div>
    } 
  />
  };
export default class JobsHistScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: [0,1],
      progress: 0,
    };
  };

  onStepEnter = ({ element, data }) => {
    this.setState({ data });
  };

  onStepExit = ({ element }) => {
  };

  onStepProgress = ({ element, progress }) => {
    // Commented out because it stalls animation
    // this.setState({ progress });
  }

  getContent = (value) => {
    return contentMap[value] || contentMap[1];
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
                  {this.getContent(value)}
                </Content>
              </Step>
            ))}
          </Scrollama>
        </Scroller>
        <Graphic>
          <JobsHist displayInfo={data}/>
        </Graphic>
      </Main>
    );
  }
}