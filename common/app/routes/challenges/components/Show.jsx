import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import Classic from './classic/Classic.jsx';
import Step from './step/Step.jsx';
import Project from './project/Project.jsx';
import Video from './video/Video.jsx';

import { fetchChallenge, fetchChallenges } from '../redux/actions';
import { challengeSelector } from '../redux/selectors';

const views = {
  step: Step,
  classic: Classic,
  project: Project,
  simple: Project,
  video: Video
};

const bindableActions = {
  fetchChallenge,
  fetchChallenges
};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.challenge,
    ({ viewType }, challenge) => ({
    challenge,
    viewType
  })
);

const fetchOptions = {
  fetchAction: 'fetchChallenge',
  getActionArgs({ params: { block, dashedName } }) {
    return [ dashedName, block ];
  },
  isPrimed({ challenge }) {
    return !!challenge;
  }
};

export class Challenges extends PureComponent {
  static displayName = 'Challenges';
  static propTypes = {
    isStep: PropTypes.bool,
    fetchChallenges: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchChallenges();
  }

  renderView(viewType) {
    const View = views[viewType] || Classic;
    return <View />;
  }

  render() {
    const { viewType } = this.props;
    return (
      <div>
        { this.renderView(viewType) }
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, bindableActions),
  contain(fetchOptions)
)(Challenges);
