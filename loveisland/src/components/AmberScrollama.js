import React from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';
import TextSection from './TextSection';
import CircleLayout from './CircleLayout';
import AmberCouple from '../assets/amber-couples.png';
import AmberFriends from '../assets/amber-friends.png';
import AmberConflicts from '../assets/amber-conflicts.png';


const Main = styled.div`
  padding: 10vh 2vw;
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

const imageMap = {
  1: <CircleLayout islander={"amber"}/>,
  2: AmberCouple,
  3: AmberFriends,
  4: AmberConflicts
};

const textMap = {
    1: <TextSection 
      title={'Amber:'}
      description={ 
      <div>
        <p>
          Let’s look at one of the winner’s of the show, Amber, who also has one of the 
          highest follower count at 2.8million. 
        </p>
        <p>
          She is a day one that made it through the 
          entire show through a few different couples. Let’s explore her experience
        </p>
      </div>
        }
        />,
    2: <TextSection description={
        <div>
          <p> 
          The <b>purple indicates the two were both in a couple and involved in conflict</b>. 
          For Amber, these are her two romantic relationships.
          </p>
          <p>
          Michael and her had a tumultuous journey. Their relationship seemed to 
          start strong but fell flat when Michael chose to recouple with Joanna at 
          Casa Amour while Amber remained single. Fans felt Amber was wronged and were 
          invested to see her bounce back, which she did with Greg’s arrival. 
        </p>
      </div> }
      />,
    3: <TextSection 
        description={
        <div>
          <p> 
            She was in quite a few “couples” during her time on the show, but only a 
            few were romantic. By building strong friendships, she was saved by friends in 
            recoupling, who also weren’t in romantic relationships and didn’t want to see her leave.
          </p>
          <p>
            Anton and Ovie are both examples of this: the <b>blue</b> indicates they were in a <b>couple</b> with Amber
            and were never involved in a conflict with her.
          </p>
        </div>

    }/>,
    4:  <TextSection description={ 
      <div>
        <p> 
          The <b>red</b> here indicates amber and the islander were involved in a <blue>conflict</blue> together. 
        </p>
        <p>
          Amber had arguments with Danny and Arabella on defending Yewande, one of Amber’s best 
          friends on the show. Involving herself in <b> external conflicts</b> to her while still maintaining 
          strong friendships and empathy, she gains screen time and
          time to connect with the audience. She thus becomes one of the strongest
          parts of the season’s overall narrative. 
        </p>
      </div>
    }/>
};

export default class AmberScrollama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      steps: Object.keys(imageMap),
      progress: 0,
    };
  };

  getImages(imageMap, data) {
    return (data ==1) ?  <CircleLayout islander={"amber"}/> :
     Object.keys(imageMap).map((key => {
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
            <ImageWrapper minHeight={400} minWidth={500}>
              {this.getImages(imageMap, data)}
            </ImageWrapper>
        </Graphic>
      </Main>
    );
  }
}