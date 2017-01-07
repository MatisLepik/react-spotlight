import React from 'react';

export default class Spotlight extends React.Component {

  constructor(props) {
    super(props);

    const isServerSide = typeof window === 'undefined';
    // If the user has server rendering, we assume they have a 4k screen (better aim high than low just in case).
    this.state = {
      windowWidth: isServerSide ? 3840 : window.innerWidth,
      windowHeight: isServerSide ? 2160 : window.innerHeight
    };

    this.resizeThrottler = this.resizeThrottler.bind(this);
  }

  componentDidMount() {
    if (this.props.responsive) window.addEventListener('resize', this.resizeThrottler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeThrottler);
  }

  // https://developer.mozilla.org/en-US/docs/Web/Events/resize#setTimeout
  resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        this.recalc();
      }, 66); // The actualResizeHandler will execute at a rate of 15fps
    }
  }

  recalc() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  getBorderSize() {
    // We find the diagonal of the screen and add the circle's radius to ensure
    // that the border covers the screen when the circle is just off screen.
    const diagonal = Math.ceil(Math.sqrt(Math.pow(this.state.windowWidth, 2) + Math.pow(this.state.windowHeight, 2)));
    return diagonal + this.props.radius;
  }

  getX() {
    const pos = this.props.usePercentage ? this.state.windowWidth * this.props.x / 100 : this.props.x;
    return `${pos}px`;
  }

  getY() {
    const pos = this.props.usePercentage ? this.state.windowHeight * this.props.y / 100 : this.props.y;
    return `${pos}px`;
  }

  getInnerStyles() {
    const { animSpeed, radius, borderWidth, color } = this.props;
    const diameter = radius * 2 + (borderWidth * 2);

    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: diameter,
      height: diameter,
      transform: 'translate(-50%, -50%)',
      border: `${this.getBorderSize()}px solid ${color}`,
      opacity: 0.9,
      borderRadius: '50%',
      boxSizing: 'content-box',
      transitionDuration: `${animSpeed}ms`,
      transitionProperty: 'all'
    };
  }

  getOuterStyles() {
    const { animSpeed, borderWidth, borderColor, radius } = this.props;
    const diameter = radius * 2;

    return {
      position: 'fixed',
      left: -radius - borderWidth,
      top: -radius - borderWidth,
      width: diameter,
      height: diameter,
      borderRadius: '50%',
      zIndex: 999,
      boxSizing: 'content-box',
      border: `${borderWidth}px solid ${borderColor}`,
      transform: `translate(${this.getX()}, ${this.getY()})`,
      transitionDuration: `${animSpeed}ms`,
      transitionProperty: 'all'
    };
  }

  render() {

    return (
      <div style={this.getOuterStyles()} className={this.props.outerClass || ''}>
        <div style={this.getInnerStyles()} className={this.props.innerClass || ''}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Spotlight.propTypes = {
  color: React.PropTypes.string,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  radius: React.PropTypes.number,
  responsive: React.PropTypes.bool,
  outerClass: React.PropTypes.string,
  innerClass: React.PropTypes.string,
  borderWidth: React.PropTypes.number,
  borderColor: React.PropTypes.string,
  animSpeed: React.PropTypes.number,
  usePercentage: React.PropTypes.bool
};

Spotlight.defaultProps = {
  color: 'black',
  x: 50,
  y: 50,
  radius: 100,
  responsive: true,
  usePercentage: false,
  borderWidth: 0,
  borderColor: 'white',
  animSpeed: 500
};
