import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      shownPercent: 0
    };

    this.animateProgressBar = this.animateProgressBar.bind(this);
  }

  animateProgressBar(completedPercent) {
    this.setState({ animateProgress: true }, () => {
      if (completedPercent > 100) completedPercent = 100;
      if (completedPercent < 0) completedPercent = 0;
      const transitionLength = 650;
      const intervalLength = 5;
      const intervalsToFinish = transitionLength / intervalLength;
      const amountPerInterval = completedPercent / intervalsToFinish;
      let shownPercent = 0;

      const myInterval = setInterval(() => {
        console.log('interval');
        shownPercent += amountPerInterval;
        if (shownPercent > 100) shownPercent = 100;
        if (shownPercent > completedPercent) shownPercent = completedPercent;

        this.setState({
          shownPercent: Math.round(shownPercent)
        });

        if (shownPercent >= completedPercent) {
          clearInterval(myInterval);
        }
      }, intervalLength);
    });
  }

  render() {
    // console.log('CompletionModalBodyProps');
    // console.log(this.props);
    const { blockName, completedPercent } = this.props;

    return (
      <span>
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
      </span>
    );
  }
}

CompletionModalBody.displayName = 'CompletionModalBody';
CompletionModalBody.propTypes = propTypes;

export default CompletionModalBody;
