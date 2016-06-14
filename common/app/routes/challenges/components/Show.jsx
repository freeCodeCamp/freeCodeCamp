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

import {
  fetchChallenge,
  fetchChallenges,
  replaceChallenge
} from '../redux/actions';
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
  fetchChallenges,
  replaceChallenge
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
    fetchChallenges: PropTypes.func,
    replaceChallenge: PropTypes.func,
    params: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchChallenges();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.dashedName !== nextProps.params.dashedName) {
      this.props.replaceChallenge({
        dashedName: nextProps.params.dashedName,
        block: nextProps.params.block
      });
    }
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
