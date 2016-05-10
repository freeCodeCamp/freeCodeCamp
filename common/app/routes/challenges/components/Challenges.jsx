import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import Challenge from './Challenge.jsx';
import Step from './step/Step.jsx';
import { fetchChallenge } from '../../../redux/actions';
import { challengeSelector } from '../redux/selectors';

const bindableActions = {
  fetchChallenge
};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.challenge,
  ({ isStep }, challenge) => ({ challenge, isStep })
);

const fetchOptions = {
  fetchAction: 'fetchChallenge',
  getActionArgs({ params: { dashedName } }) {
    return [ dashedName ];
  },
  isPrimed({ challenge }) {
    return !!challenge;
  }
};

export class Challenges extends PureComponent {
  static displayName = 'Challenges';
  static propTypes = { isStep: PropTypes.bool };

  render() {
    if (this.props.isStep) {
      return <Step />;
    }
    return <Challenge />;
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(Challenges);
