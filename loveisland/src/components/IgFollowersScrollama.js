import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection.js';
import IgFollowers from './IgFollowers.js';

const Main = styled.div`
  padding: 0 2vw 0 2vw;
  display: flex;
  font-family: Helvetica;
  justify-content: space-between;
`
const Graphic = styled.div`
  flex-basis: 45%;
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
const displayMap = {
    1: {
        "amber": true,
        "tommy": true,
        "curtis": true,
        "anton": true,
        "anna": true,
        "michael": true,
        "amy": true,
        "lucie": true,
        "yewande": true,
        "joe": true,
        "sherif": true,
        "callum": true,
        "molly-mae": true,
        "danny": true,
        "maura": true,
        "elma": true,
        "jordan": true,
        "tom": true,
        "arabelle": true,
        "ovie": true,
        "belle": true,
        "joanna": true,
        "marvin": true,
        "george": true,
        "jourdan": true,
        "chris": true,
        "francesca": true,
        "greg": true,
        "india": true,
        "harley": true
    },
    2: {
        "amber": true,
        "tommy": true,
        "curtis": false,
        "anton": false,
        "anna": false,
        "michael": false,
        "amy": false,
        "lucie": false,
        "yewande": false,
        "joe": false,
        "sherif": false,
        "callum": false,
        "molly-mae": true,
        "danny": false,
        "maura": true,
        "elma": false,
        "jordan": false,
        "tom": false,
        "arabelle": false,
        "ovie": false,
        "belle": false,
        "joanna": false,
        "marvin": false,
        "george": false,
        "jourdan": false,
        "chris": false,
        "francesca": false,
        "greg": false,
        "india": false,
        "harley": false
    },
    3: {
        "amber": false,
        "tommy": false,
        "curtis": false,
        "anton": false,
        "anna": false,
        "michael": false,
        "amy": false,
        "lucie": false,
        "yewande": false,
        "joe": false,
        "sherif": true,
        "callum": true,
        "molly-mae": false,
        "danny": false,
        "maura": false,
        "elma": true,
        "jordan": false,
        "tom": true,
        "arabelle": true,
        "ovie": false,
        "belle": false,
        "joanna": true,
        "marvin": true,
        "george": true,
        "jourdan": true,
        "chris": true,
        "francesca": true,
        "greg": true,
        "india": true,
        "harley": true
    }}




const contentMap = {
  1: <TextSection 
    title={"Duration is key:"} 
    description={
      <div>
        <p>
            There is a clear correlation between duration on the 
            show and the followers gained after. So if there is one thing 
            you should be thinking about as a contestant—don’t let yourself get cut.
        </p>
        <p>
            Plotted here is the number of followers on Instagram islanders have 
            vs the days they lasted on the show
        </p>
      </div>
    } 
  />,
  2: <TextSection 
    description={
      <div>
        <p>
          if we focus in a little more at the top, we see the couple that still remains together, Tommy and Molly having some of 
          the most followers. Additonally, Amber, one fo the two winners, makes the top four cut at 2.8 million followers
          and model and ring-girl, Maura, who made an impression on the season with her sense of humor and catch phrases.
        </p>
      </div>
    } 
  />,
  3: <TextSection 
    description={
      <div>
        <p>
          Focusing in on the bottom, we see many contestants who entered midway through the season, who just 
          didn't seem to click with the other single islanders romantically or the audience. 
        </p>
      </div>
    } 
  />
}

export default class IgFollowersScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(contentMap),
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

  getDisplayInfo = (data) => {
    return displayMap[data] || displayMap[1];
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
          <IgFollowers displayInfo={this.getDisplayInfo(data)}/>
        </Graphic>
      </Main>
    );
  }
}