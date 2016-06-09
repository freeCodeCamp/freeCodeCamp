import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import ReactTransitionReplace from 'react-css-transition-replace';

import {
  goToStep,
  completeAction,
  submitChallenge
} from '../../redux/actions';
import { challengeSelector } from '../../redux/selectors';
import { Button, Col, Image, Row } from 'react-bootstrap';

const transitionTimeout = 1000;
const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.currentIndex,
  state => state.challengesApp.previousIndex,
  state => state.challengesApp.isActionCompleted,
  (
    {
      challenge: { description = [] }
    },
    currentIndex,
    previousIndex,
    isActionCompleted
  ) => ({
    currentIndex,
    isActionCompleted,
    step: description[currentIndex],
    steps: description,
    numOfSteps: description.length,
    isGoingForward: currentIndex > previousIndex
  })
);

const dispatchActions = {
  goToStep,
  completeAction,
  submitChallenge
};

export class StepChallenge extends PureComponent {
  constructor(...args) {
    super(...args);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  static displayName = 'StepChallenge';
  static propTypes = {
    currentIndex: PropTypes.number,
    step: PropTypes.array,
    steps: PropTypes.array,
    isActionCompleted: PropTypes.bool,
    isGoingForward: PropTypes.bool,
    numOfSteps: PropTypes.number,
    goToStep: PropTypes.func,
    completeAction: PropTypes.func,
    submitChallenge: PropTypes.func
  };

  handleNextClick() {
    const { numOfSteps, currentIndex, submitChallenge, goToStep } = this.props;
    const isLastStep = currentIndex + 1 >= numOfSteps;
    if (isLastStep) {
      return submitChallenge();
    }
    return goToStep(currentIndex + 1);
  }

  handleBackClick() {
    const { currentIndex, goToStep } = this.props;
    goToStep(currentIndex - 1);
  }

  renderActionButton(action, completeAction) {
    const isApiAction = action === '#';
    const buttonCopy = isApiAction ?
      'Confirm' :
      'Open link in new tab ';
    if (!action) {
      return null;
    }
    return (
      <div>
        <Button
          block={ true }
          bsSize='large'
          bsStyle='primary'
          href={ action }
          onClick={ completeAction }
          target='_blank'
          >
          { buttonCopy }  (this unlocks the next step)
        </Button>
        <div className='spacer' />
      </div>
    );
  }

  renderBackButton(index) {
    if (index === 0) {
      return (
        <Col
          className='hidden-xs'
          md={ 4 }
          >
          { ' ' }
        </Col>
      );
    }
    return (
      <Button
        bsSize='large'
        bsStyle='primary'
        className='col-sm-4 col-xs-12'
        onClick={ this.handleBackClick }
        >
        Go to my previous step
      </Button>
    );
  }

  renderNextButton(hasAction, index, numOfSteps, isCompleted) {
    const isLastStep = index + 1 >= numOfSteps;
    const btnClass = classnames({
      'col-sm-4 col-xs-12': true,
      disabled: hasAction && !isCompleted
    });
    return (
      <Button
        bsSize='large'
        bsStyle='primary'
        className={ btnClass }
        disabled={ hasAction && !isCompleted }
        onClick={ this.handleNextClick }
        >
        { isLastStep ? 'Finish challenge' : 'Go to my next step'}
      </Button>
    );
  }

  renderStep({
    step,
    currentIndex,
    numOfSteps,
    isActionCompleted,
    completeAction
  }) {
    if (!Array.isArray(step)) {
      return null;
    }
    const [imgUrl, imgAlt, info, action] = step;
    return (
      <div
        className=''
        key={ imgUrl }
        >
        <a href={ imgUrl }>
          <Image
            alt={ imgAlt }
            responsive={ true }
            src={ imgUrl }
          />
        </a>
        <Row>
          <div className='spacer' />
          <Col
            md={ 8 }
            mdOffset={ 2 }
            sm={ 10 }
            smOffset={ 1 }
            xs={ 12 }
            >
            <p
              className='challenge-step-description'
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </Col>
        </Row>
        <div className='spacer' />
        <div className='challenge-button-block'>
          { this.renderActionButton(action, completeAction) }
          { this.renderBackButton(currentIndex) }
          <Col
            className='challenge-step-counter large-p text-center'
            sm={ 4 }
            xs={ 12 }
            >
            ( { currentIndex + 1 } / { numOfSteps })
          </Col>
          {
            this.renderNextButton(
              !!action,
              currentIndex,
              numOfSteps,
              isActionCompleted
            )
          }
        </div>
        <div className='clearfix' />
      </div>
    );
  }

  renderImages(steps) {
    // will preload all the image
    if (!Array.isArray(steps)) {
      return null;
    }
    return steps.map(([imgUrl, imgAlt]) => (
      <div key={ imgUrl }>
        <Image
          alt={ imgAlt }
          responsive={ true }
          src={ imgUrl }
        />
      </div>
    ));
  }

  render() {
    const { steps, isGoingForward } = this.props;
    const transitionName = 'challenge-step-' +
      (isGoingForward ? 'forward' : 'backward');
    return (
      <Col
        md={ 8 }
        mdOffset={ 2 }
        >
        <ReactTransitionReplace
          transitionEnterTimeout={ transitionTimeout }
          transitionLeaveTimeout={ transitionTimeout }
          transitionName={ transitionName }
          >
          { this.renderStep(this.props) }
        </ReactTransitionReplace>
        <div className='hidden'>
          { this.renderImages(steps) }
        </div>
        <div className='spacer' />
      </Col>
    );
  }
}

export default connect(mapStateToProps, dispatchActions)(StepChallenge);
