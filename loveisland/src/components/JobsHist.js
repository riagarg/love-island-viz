import React from 'react';
import { 
  VictoryBar, 
  VictoryChart, 
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';

const data = require('../data/jobs.json');

export default class JobsHist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: props.displayInfo,
      animate: props.animate,
      animating: false
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.animating && this.props !== prevProps) {
      this.setState({
        displayInfo: this.props.displayInfo,
        animating: true
      });
      setTimeout(() => this.setState({animating: false}), this.state.animate);
    }
  }



  getDataWithDisplayInfo(displayInfo) {
    return (displayInfo==0) ? "islanders" : "duration";
  }
  getYAxisLabel(label){
    return label=="duration" ? "number of days" : "number of islanders"
  }

  render() {
    return (
      <VictoryChart
        text= {"Series "+ this.state.series}
        animate={{ duration: this.state.animate }}
        theme={VictoryTheme.material}
        domainPadding={1}
      >
        <VictoryAxis
          label="job"
          tickFormat={(x) => (`${x}`)}
          style={{
            axisLabel: {
              fontSize: 13,
              padding: 30
            },
            tickLabels: {
              angle: 270,
              fontSize: 7,
              padding: 0,
              textAnchor: "end"
            }
          }}
        />
        <VictoryAxis
          label={this.getYAxisLabel(this.getDataWithDisplayInfo(this.state.displayInfo))}
          dependentAxis
          domain={[0, 1]}
          tickFormat={(t) => `${(t)}`}
          style= {{
            axisLabel: {
              fontSize: 15,
              padding : 35
            },
            tickLabels: {
              fontSize: 8
            }
          }}
        />
        <VictoryBar
          //data={this.getDataWithDisplayInfo(this.state.displayInfo)}
          data={data}
          x="job"
          y={this.getDataWithDisplayInfo(this.state.displayInfo)}
          alignment="start"
          style={{
            data: { fill: "purple" },
            labels: { fontSize: ({ text }) => text.length > 5 ? 8 : 12 },
            parent: { border: "1px solid #ccc" }
          }}
          labels={({ datum }) => `islanders: ${datum.islanders}`}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }}   tickFormat={(t) => `${Math.round(t*100)}%`}
          />}
          animate={{
            onEnter: { duration: 1000 },
            onExit: { duration: 1000 }
          }}
        />
      </VictoryChart>
    )
  }
}