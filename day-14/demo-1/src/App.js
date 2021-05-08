// Import Components
import React, { Component } from 'react';
import { range } from 'lodash';
import { MarkSeries, XYPlot, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './App.css'

class App extends Component {
    // Constructor: set intial number of points
    constructor(props) {
        super(props);
        this.state = {
            numPoints: 10
        };
        this.updatePoints = this.updatePoints.bind(this)
    }

    // Update points: to be assigned to input as event listener
    updatePoints(event) {
        this.setState({
            numPoints: event.target.value
        })
    }

    // Render method
    render() {
        // Compute a set of points from state
        let points = range(this.state.numPoints).map((d) => ({
            x: Math.random() * 100,
            y: Math.random() * 100
        }));

        // Return a chart
        return (
            <div className="container">
              <label htmlFor="num-points">Number of points: </label>
              <input id="num-points" type="number" onChange={ this.updatePoints } value={ this.state.numPoints } />
              <XYPlot height={ 300 } width={ 300 }>
                <MarkSeries data={ points } />
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="X Axis" />
                <YAxis title="Y Axis" />
              </XYPlot>
            </div>
            );
    }
}

export default App;