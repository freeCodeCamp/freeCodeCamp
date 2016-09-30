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
import BackEnd from './backend/Back-End.jsx';

import {
  fetchChallenge,
  fetchChallenges,
  replaceChallenge,
  resetUi
} from '../redux/actions';
import { challengeSelector } from '../redux/selectors';
import { updateTitle } from '../../../redux/actions';
import { makeToast } from '../../../toasts/redux/actions';

const views = {
  step: Step,
  classic: Classic,
  project: Project,
  simple: Project,
  video: Video,
  backend: BackEnd
};

const bindableActions = {
  fetchChallenge,
  fetchChallenges,
  makeToast,
  replaceChallenge,
  resetUi,
  updateTitle
};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.challenge,
  state => state.challengesApp.superBlocks,
  state => state.app.lang,
  (
    {
      challenge: { isTranslated } = {},
      viewType,
      title
    },
    challenge,
    superBlocks = [],
    lang
  ) => ({
    lang,
    isTranslated,
    title,
    challenge,
    viewType,
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

const link = 'http://forum.freecodecamp.com/t/' +
   'guidelines-for-translating-free-code-camp' +
   '-to-any-language/19111';

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
    makeToast: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    isTranslated: PropTypes.bool
  };

  componentWillMount() {
    const { lang, isTranslated, makeToast } = this.props;
    if (lang !== 'en' && !isTranslated) {
      makeToast({
        message: 'We haven\'t translated this challenge yet.',
        action: <a href={ link } target='_blank'>Help Us</a>,
        timeout: 15000
      });
    }
  }

  componentDidMount() {
    if (!this.props.areChallengesLoaded) {
      this.props.fetchChallenges();
    }
    if (this.props.title) {
      this.props.updateTitle(this.props.title);
    }
  }

  componentWillUnmount() {
    this.props.resetUi();
  }

  componentWillReceiveProps(nextProps) {
    const { title } = nextProps;
    const { block, dashedName } = nextProps.params;
    const { lang, isTranslated } = nextProps;
    const { resetUi, updateTitle, replaceChallenge, makeToast } = this.props;
    if (this.props.params.dashedName !== dashedName) {
      updateTitle(title);
      resetUi();
      replaceChallenge({ dashedName, block });
      if (lang !== 'en' && !isTranslated) {
        makeToast({
          message: 'We haven\'t translated this challenge yet.',
          action: <a href={ link } target='_blank'>Help Us</a>,
          timeout: 15000
        });
      }
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
