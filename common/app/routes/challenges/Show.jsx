import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { contain } from 'redux-epic';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import CompletionModal from './Completion-Modal.jsx';
import Classic from './views/classic';
import Step from './views/step';
import Project from './views/project';
import BackEnd from './views/backend';
import Quiz from './views/quiz';

import { challengeMetaSelector } from './redux';
import {
  updateTitle,
  updateCurrentChallenge,
  fetchChallenge,

  challengeSelector,
  langSelector
} from '../../redux';
import { makeToast } from '../../Toasts/redux';

const views = {
  backend: BackEnd,
  classic: Classic,
  project: Project,
  simple: Project,
  step: Step,
  quiz: Quiz
};

const mapDispatchToProps = {
  fetchChallenge,
  makeToast,
  updateCurrentChallenge,
  updateTitle
};

const mapStateToProps = createSelector(
  challengeSelector,
  challengeMetaSelector,
  langSelector,
  (
    { dashedName, isTranslated },
    { viewType, title },
    lang
  ) => ({
    lang,
    isTranslated,
    title,
    challenge: dashedName,
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

const link = 'http://forum.freecodecamp.org/t/' +
  'guidelines-for-translating-free-code-camp' +
  '-to-any-language/19111';

const propTypes = {
  areChallengesLoaded: PropTypes.bool,
  isStep: PropTypes.bool,
  isTranslated: PropTypes.bool,
  lang: PropTypes.string.isRequired,
  makeToast: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  title: PropTypes.string,
  updateCurrentChallenge: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
  viewType: PropTypes.string
 };

export class Show extends PureComponent {
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
    if (this.props.title) {
      this.props.updateTitle(this.props.title);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { title } = nextProps;
    const { dashedName } = nextProps.params;
    const { lang, isTranslated } = nextProps;
    const { updateTitle, updateCurrentChallenge, makeToast } = this.props;
    if (this.props.params.dashedName !== dashedName) {
      updateCurrentChallenge(dashedName);
      updateTitle(title);
      if (lang !== 'en' && !isTranslated) {
        makeToast({
          message: 'We haven\'t translated this challenge yet.',
          action: <a href={ link } target='_blank'>Help Us</a>,
          timeout: 15000
        });
      }
    }
  }

  render() {
    const { viewType } = this.props;
    const View = views[viewType] || Classic;
    return (
      <div>
        <View />
        <CompletionModal />
      </div>
    );
  }
}

Show.displayName = 'Show(ChallengeView)';
Show.propTypes = propTypes;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  contain(fetchOptions)
)(Show);
