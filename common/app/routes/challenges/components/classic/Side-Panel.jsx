import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { Col, Row } from 'react-bootstrap';

import TestSuite from './Test-Suite.jsx';
import Output from './Output.jsx';
import ToolPanel from './Tool-Panel.jsx';
import { challengeSelector } from '../../redux/selectors';
import {
  openBugModal,
  updateHint,
  executeChallenge,
  unlockUntrustedCode,
  submitChallenge
} from '../../redux/actions';
import { makeToast } from '../../../../toasts/redux/actions';
import { toggleHelpChat } from '../../../../redux/actions';

const bindableActions = {
  makeToast,
  executeChallenge,
  updateHint,
  toggleHelpChat,
  openBugModal,
  unlockUntrustedCode,
  submitChallenge
};
const mapStateToProps = createSelector(
  challengeSelector,
  state => state.app.windowHeight,
  state => state.app.navHeight,
  state => state.challengesApp.tests,
  state => state.challengesApp.output,
  state => state.challengesApp.hintIndex,
  state => state.challengesApp.isCodeLocked,
  state => state.challengesApp.isChallengePassed,
  (
    { challenge: { title, description, hints = [] } = {} },
    windowHeight,
    navHeight,
    tests,
    output,
    hintIndex,
    isCodeLocked,
    isChallengePassed
  ) => ({
    title,
    description,
    height: windowHeight - navHeight - 20,
    tests,
    output,
    hint: hints[hintIndex],
    isCodeLocked,
    isChallengePassed
  })
);

export class SidePanel extends PureComponent {
  constructor(...args) {
    super(...args);
    this.descriptionRegex = /\<blockquote|\<ol|\<h4|\<table/;
  }
  static displayName = 'SidePanel';

  static propTypes = {
    description: PropTypes.arrayOf(PropTypes.string),
    height: PropTypes.number,
    tests: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    output: PropTypes.string,
    hint: PropTypes.string,
    updateHint: PropTypes.func,
    makeToast: PropTypes.func,
    toggleHelpChat: PropTypes.func,
    openBugModal: PropTypes.func,
    unlockUntrustedCode: PropTypes.func,
    isCodeLocked: PropTypes.bool,
    isChallengePassed: PropTypes.bool,
    executeChallenge: PropTypes.func,
    submitChallenge: PropTypes.func
  };

  renderDescription(description = [ 'Happy Coding!' ], descriptionRegex) {
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

  componentWillReceiveProps(nextProps) {
    let { title } = this.props;
    if (title !== nextProps.title) {
      ReactDom.findDOMNode(this).scrollTop = 0;
    }
  }

  render() {
    const {
      title,
      description,
      height,
      tests = [],
      output,
      hint,
      executeChallenge,
      updateHint,
      makeToast,
      toggleHelpChat,
      openBugModal,
      isCodeLocked,
      isChallengePassed,
      unlockUntrustedCode,
      submitChallenge
    } = this.props;
    const style = {};
    if (height) {
      style.height = height + 'px';
    }
    return (
      <div
        className='challenges-instructions-panel'
        ref='panel'
        style={ style }
        >
        <div>
          <h4 className='text-center challenge-instructions-title'>
            { title || 'Happy Coding!' }
          </h4>
          <hr />
          <Row>
            <Col
              className='challenge-instructions'
              xs={ 12 }
              >
              { this.renderDescription(description, this.descriptionRegex) }
            </Col>
          </Row>
        </div>
        <ToolPanel
          executeChallenge={ executeChallenge }
          hint={ hint }
          isChallengePassed={ isChallengePassed }
          isCodeLocked={ isCodeLocked }
          makeToast={ makeToast }
          openBugModal={ openBugModal }
          submitChallenge={ submitChallenge }
          toggleHelpChat={ toggleHelpChat }
          unlockUntrustedCode={ unlockUntrustedCode }
          updateHint={ updateHint }
        />
        <Output output={ output }/>
        <br />
        <TestSuite tests={ tests } />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  bindableActions
)(SidePanel);
