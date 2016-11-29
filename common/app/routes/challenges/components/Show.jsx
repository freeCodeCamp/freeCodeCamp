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
  replaceChallenge,
  resetUi
} from '../redux/actions';
import { challengeSelector } from '../redux/selectors';
import { updateTitle } from '../../../redux/actions';

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
  replaceChallenge,
  resetUi,
  updateTitle
};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.challenge,
  state => state.challengesApp.superBlocks,
  ({ challenge: { title = 'Learn to Code', blockType } = {},
    viewType}, challenge, superBlocks = []) => ({
    title,
    viewType,
    blockType,
    areChallengesLoaded: superBlocks.length > 0
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
    title: PropTypes.string,
    viewType: PropTypes.string,
    isStep: PropTypes.bool,
    fetchChallenges: PropTypes.func.isRequired,
    replaceChallenge: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    areChallengesLoaded: PropTypes.bool,
    resetUi: PropTypes.func.isRequired,
    updateTitle: PropTypes.func.isRequired,
    blockType: PropTypes.string
  };

  componentDidMount() {
    const { areChallengesLoaded, blockType, title } = this.props;
    if (!areChallengesLoaded) {
      this.props.fetchChallenges();
    }
    this.props.updateTitle({ blockType, title });
  }

  componentWillUnmount() {
    this.props.resetUi();
  }

  componentWillReceiveProps(nextProps) {
    const { params, blockType, title } = nextProps;
    const { block, dashedName } = params;
    const { resetUi, updateTitle, replaceChallenge } = this.props;
    if (this.props.params.dashedName !== dashedName) {
      updateTitle({ blockType, title });
      resetUi();
      replaceChallenge({ dashedName, block });
    }
  }

  renderView(viewType) {
    const View = views[viewType] || Classic;
    return <View />;
  }

  render() {
    const { viewType } = this.props;
console.log('show render', this.props.blockType);
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
