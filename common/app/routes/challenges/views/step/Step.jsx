import React, { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createSelector } from 'reselect';
import LightBox from 'react-images';
import { Button, Col, Image, Row } from 'react-bootstrap';

import ns from './ns.json';
import {
  closeLightBoxImage,
  completeAction,
  clickOnImage,
  stepBackward,
  stepForward,
  updateUnlockedSteps,

  currentIndexSelector,
  actionCompletedSelector,
  previousIndexSelector,
  lightBoxSelector
} from './redux';
import { submitChallenge } from '../../redux';
import { challengeSelector } from '../../../../redux';

const mapStateToProps = createSelector(
  challengeSelector,
  currentIndexSelector,
  previousIndexSelector,
  actionCompletedSelector,
  lightBoxSelector,
  (
    { description = [] },
    currentIndex,
    previousIndex,
    isActionCompleted,
    isLightBoxOpen
  ) => ({
    currentIndex,
    isActionCompleted,
    isLightBoxOpen,
    step: description[currentIndex],
    steps: description,
    numOfSteps: description.length,
    isLastStep: currentIndex + 1 >= description.length
  })
);

function mapDispatchToProps(dispatch) {
  const dispatchers = bindActionCreators({
    closeLightBoxImage,
    completeAction,
    stepBackward,
    stepForward,
    submitChallenge,
    updateUnlockedSteps
  }, dispatch);
  dispatchers.clickOnImage = e => {
    if (!(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      return dispatch(clickOnImage());
    }
    return null;
  };
  return () => dispatchers;
}

const propTypes = {
  clickOnImage: PropTypes.func.isRequired,
  closeLightBoxImage: PropTypes.func.isRequired,
  completeAction: PropTypes.func.isRequired,
  currentIndex: PropTypes.number,
  isActionCompleted: PropTypes.bool,
  isLastStep: PropTypes.bool,
  isLightBoxOpen: PropTypes.bool,
  numOfSteps: PropTypes.number,
  step: PropTypes.array,
  stepBackward: PropTypes.func,
  stepForward: PropTypes.func,
  steps: PropTypes.array,
  submitChallenge: PropTypes.func.isRequired,
  updateUnlockedSteps: PropTypes.func.isRequired
};

export class StepChallenge extends PureComponent {
  componentWillMount() {
    const { updateUnlockedSteps } = this.props;
    updateUnlockedSteps([]);
  }

  componentWillUnmount() {
    const { updateUnlockedSteps } = this.props;
    updateUnlockedSteps([]);
  }

  componentWillReceiveProps(nextProps) {
    const { steps, updateUnlockedSteps } = this.props;
    if (nextProps.steps !== steps) {
      updateUnlockedSteps([]);
    }
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

  renderBackButton(index, stepBackward) {
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
        onClick={ stepBackward }
        >
        Go to my previous step
      </Button>
    );
  }

  renderNextButton(hasAction, isLastStep, isCompleted, stepForward) {
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
        onClick={ stepForward }
        >
        { isLastStep ? 'Finish challenge' : 'Go to my next step'}
      </Button>
    );
  }

  renderStep({
    clickOnImage,
    completeAction,
    currentIndex,
    isActionCompleted,
    isLastStep,
    numOfSteps,
    step,
    stepBackward,
    stepForward
  }) {
    if (!Array.isArray(step)) {
      return null;
    }
    const [imgUrl, imgAlt, info, action] = step;
    return (
      <div key={ imgUrl }>
        <a
          href={ imgUrl }
          onClick={ clickOnImage }
          target='_blank'
          >
          <Image
            alt={ imgAlt }
            className='center-block'
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
            <div
              className={ `${ns}-description` }
              dangerouslySetInnerHTML={{ __html: info }}
            />
          </Col>
        </Row>
        <div className='spacer' />
        <div className={ `${ns}-button-block` }>
          { this.renderActionButton(action, completeAction) }
          { this.renderBackButton(currentIndex, stepBackward) }
          <Col
            className={ `${ns}-counter large-p text-center` }
            sm={ 4 }
            xs={ 12 }
            >
            ( { currentIndex + 1 } / { numOfSteps } )
          </Col>
          {
            this.renderNextButton(
              !!action,
              isLastStep,
              isActionCompleted,
              stepForward
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
    return steps.map(([ imgUrl, imgAlt ]) => (
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
    const {
      step,
      steps,
      isLightBoxOpen,
      closeLightBoxImage
    } = this.props;
    return (
      <Row>
        <Col
          md={ 8 }
          mdOffset={ 2 }
          >
          { this.renderStep(this.props) }
          <div className='hidden'>
            { this.renderImages(steps) }
          </div>
          <LightBox
          backdropClosesModal={ true }
          images={ [ { src: step[0] } ] }
          isOpen={ isLightBoxOpen }
          onClose={ closeLightBoxImage }
          showImageCount={ false }
          />
          <div className='spacer' />
        </Col>
      </Row>
    );
  }
}

StepChallenge.displayName = 'StepChallenge';
StepChallenge.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepChallenge);
