import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import Challenge from './Challenge.jsx';
import Step from './step/Step.jsx';
import { fetchChallenge } from '../../../redux/actions';
import { STEP, HTML } from '../../../utils/challengeTypes';

const bindableActions = {
  fetchChallenge
};

const challengeSelector = createSelector(
  state => state.challengesApp.challenge,
  state => state.entities.challenge,
  (challengeName, challengeMap) => {
    const challenge = challengeMap[challengeName];
    return {
      challenge: challenge,
      showPreview: !!challenge && challenge.challengeType === HTML,
      isStep: !!challenge && challenge.challengeType === STEP,
      mode: !!challenge && challenge.challengeType === HTML ?
        'text/html' :
        'javascript'
    };
  }
);

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.content,
  (challengeProps, content) => ({
    ...challengeProps,
    content
  })
);

const fetchOptions = {
  fetchAction: 'fetchChallenge',
  getActionArgs({ params: { dashedName } }) {
    return [ dashedName ];
  },
  isPrimed({ challenge }) {
    return challenge;
  }
};

export class Challenges extends PureComponent {
  static displayName = 'Challenges';
  static propTypes = {
    challenge: PropTypes.object,
    showPreview: PropTypes.bool,
    mode: PropTypes.string,
    isStep: PropTypes.bool
  };

  render() {
    if (this.props.isStep) {
      return <Step { ...this.props }/>;
    }
    return <Challenge { ...this.props }/>;
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(Challenges);
