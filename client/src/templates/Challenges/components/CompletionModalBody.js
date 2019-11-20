import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BezierEasing from 'bezier-easing';
import GreenPass from '../../../assets/icons/GreenPass';

const propTypes = {
  blockName: PropTypes.string,
  completedPercent: PropTypes.number
};

export class CompletionModalBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animateProgress: false,
      progressInterval: null,
      shownPercent: 0
    };

    this.animateProgressBar = this.animateProgressBar.bind(this);
  }

  animateProgressBar(completedPercent) {
    // change this to test different values
    // completedPercent = 100;
    const easing = BezierEasing(0.39, 0.575, 0.565, 1);
    this.setState({ animateProgress: true }, () => {
      if (completedPercent > 100) completedPercent = 100;
      if (completedPercent < 0) completedPercent = 0;
      const transitionLength = completedPercent * 6.5;
      console.log('transitionLength = ' + transitionLength);
      const intervalLength = transitionLength / completedPercent;
      console.log('intervalLength = ' + intervalLength);
      let percent = 0;
      const myInterval = setInterval(() => {
        console.log('interval');
        percent += 1;
        if (percent > 100) percent = 100;
        if (percent > completedPercent) percent = completedPercent;

        this.setState({
          shownPercent: Math.round(
            completedPercent * easing(percent / completedPercent)
          )
        });

        if (percent >= completedPercent) {
          clearInterval(myInterval);
        }
      }, intervalLength);

      this.setState({
        progressInterval: myInterval
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.progressInterval);
  }

  render() {
    // console.log('CompletionModalBodyProps');
    // console.log(this.props);
    const { blockName, completedPercent } = this.props;

    return (
      <>
        <div className='completion-challenge-details'>
          <GreenPass
            className='completion-success-icon'
            onAnimationEnd={() => {
              setTimeout(() => {
                this.animateProgressBar(completedPercent);
              }, 250);
            }}
          />
        </div>
        <div className='completion-block-details'>
          <div className='completion-block-name'>{blockName}</div>
          <div className='progress-bar-wrap'>
            <div className='progress-bar-background'>
              {this.state.shownPercent}% complete
            </div>
            {this.state.animateProgress && (
              <div
                className='progress-bar-percent'
                style={{ width: this.state.shownPercent + '%' }}
              >
                <div className='progress-bar-foreground'>
                  {this.state.shownPercent}% complete
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

CompletionModalBody.displayName = 'CompletionModalBody';
CompletionModalBody.propTypes = propTypes;

export default CompletionModalBody;
