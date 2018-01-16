import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import ns from './ns.json';

import BugModal from './Bug-Modal.jsx';
import HelpModal from './Help-Modal.jsx';
import ToolPanel from './Tool-Panel.jsx';
import ChallengeTitle from './Challenge-Title.jsx';
import ChallengeDescription from './Challenge-Description.jsx';
import TestSuite from './Test-Suite.jsx';
import Output from './Output.jsx';
import {
  openBugModal,
  openHelpModal,
  updateHint,
  executeChallenge,
  unlockUntrustedCode,

  challengeMetaSelector,
  testsSelector,
  outputSelector,
  hintIndexSelector,
  codeLockedSelector
} from './redux';

import { descriptionRegex } from './utils';
import { challengeSelector } from '../../redux';
import { makeToast } from '../../Toasts/redux';

const mapDispatchToProps = {
  makeToast,
  executeChallenge,
  updateHint,
  openBugModal,
  openHelpModal,
  unlockUntrustedCode
};
const mapStateToProps = createSelector(
  challengeSelector,
  challengeMetaSelector,
  testsSelector,
  outputSelector,
  hintIndexSelector,
  codeLockedSelector,
  (
    { description, guideUrl },
    { title },
    tests,
    output,
    hintIndex,
    isCodeLocked,
  ) => ({
    title,
    guideUrl,
    description,
    tests,
    output,
    isCodeLocked
  })
);
const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  executeChallenge: PropTypes.func,
  guideUrl: PropTypes.string,
  hint: PropTypes.string,
  isCodeLocked: PropTypes.bool,
  makeToast: PropTypes.func,
  openBugModal: PropTypes.func,
  openHelpModal: PropTypes.func,
  output: PropTypes.string,
  tests: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  unlockUntrustedCode: PropTypes.func,
  updateHint: PropTypes.func
};

export class SidePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.bindTopDiv = this.bindTopDiv.bind(this);
  }

  componentWillUpdate(nextProps) {
    const { title } = this.props;
    if (title !== nextProps.title) {
      const node = ReactDom.findDOMNode(this.descriptionTop);
      setTimeout(() => { node.scrollIntoView({ behavior: 'smooth'}); }, 0);
    }
  }

  bindTopDiv(node) {
    this.descriptionTop = node;
  }

  renderDescription(description = [ 'Happy Coding!' ]) {
    return description.map((line, index) => {
      if (descriptionRegex.test(line)) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: line }}
            key={ line.slice(-6) + index }
          />
        );
      }
      return (
        <p
          className='wrappable'
          dangerouslySetInnerHTML= {{ __html: line }}
          key={ line.slice(-6) + index }
        />
      );
    });
  }

  render() {
    const {
      title,
      description,
      tests = [],
      output,
      hint,
      executeChallenge,
      updateHint,
      makeToast,
      openBugModal,
      openHelpModal,
      isCodeLocked,
      unlockUntrustedCode,
      guideUrl
    } = this.props;
    return (
      <div
        className={ `${ns}-instructions-panel` }
        ref='panel'
        role='complementary'
        >
        <div ref={ this.bindTopDiv } />
        <div>
          <ChallengeTitle>
            { title }
          </ChallengeTitle>
          <ChallengeDescription>
            { this.renderDescription(description) }
          </ChallengeDescription>
        </div>
        <ToolPanel
          executeChallenge={ executeChallenge }
          guideUrl={ guideUrl }
          hint={ hint }
          isCodeLocked={ isCodeLocked }
          makeToast={ makeToast }
          openBugModal={ openBugModal }
          openHelpModal={ openHelpModal }
          unlockUntrustedCode={ unlockUntrustedCode }
          updateHint={ updateHint }
        />
        <BugModal />
        <HelpModal />
        <Output
          defaultOutput={
`/**
  * Your output will go here.
  * Any console.log() statements
  * will appear in here as well.
  */`
          }
          output={ output }
        />
        <br />
        <TestSuite tests={ tests } />
      </div>
    );
  }
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel);
