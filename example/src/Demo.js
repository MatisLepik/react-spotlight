import React from 'react';
import Spotlight from '../../dist/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.state = {
      playing: false,
      x: 0,
      y: 0,
      radius: 75,
      color: '#d74793',
      borderColor: '#1976d2'
    };
  }

  start() {
    this.setStatePromise({ playing: true, ...this.getCoordinates('.btn-try') })
      .then(() => this.sleep(800))
      .then(() => this.setStatePromise({ radius: 200, ...this.getCoordinates('.code-block .source') }))
      .then(() => this.sleep(2000))
      .then(() => this.setStatePromise({ radius: 100, ...this.getCoordinates('.link-view-docs') }))
      .then(() => this.sleep(1500))
      .then(() => this.setStatePromise({ color: '#1976d2', borderColor: 'rgba(0, 50, 225, .5)', text: 'Hello world!' }))
      .then(() => this.sleep(2000))
      .then(() => this.setStatePromise({ playing: false }));
  }

  /* The following are some convenience methods to make chaining the animation more convenient */

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setStatePromise(state) {
    this.setState(state);
    return Promise.resolve();
  }

  getCoordinates(selector) {
    const domEl = document.querySelector(selector);
    if (!domEl) return {};

    const rect = document.querySelector(selector).getBoundingClientRect();
    return { x: rect.left + (rect.width / 2), y: rect.top + (rect.height / 2) };
  }

  render() {
    // Note: the transition group and wrapper div aren't necessary.
    // They're just here to make the demo feel smoother
    return (
      <div>
        <button onClick={this.start} className="btn btn-try">Try it out!</button>

        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.playing && (
            <div key="1">
              <Spotlight
                x={this.state.x}
                y={this.state.y}
                radius={this.state.radius}
                color={this.state.color}
                responsive
                animSpeed={1000}
                borderColor={this.state.borderColor}
                borderWidth={10}>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '-50px',
                  transform: 'translate(-50%, -100%)',
                  whiteSpace: 'nowrap'
                }}>
                  <h1 style={{ margin: 0 }}>{this.state.text}</h1>
                </div>
              </Spotlight>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
