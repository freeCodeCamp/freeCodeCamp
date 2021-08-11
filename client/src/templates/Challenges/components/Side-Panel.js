import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import { mathJaxScriptLoader } from '../../../utils/script-loaders';
import { challengeTestsSelector } from '../redux';
import TestSuite from './Test-Suite';
import ToolPanel from './Tool-Panel';

import './side-panel.css';

const mapStateToProps = createSelector(challengeTestsSelector, tests => ({
  tests
}));

const propTypes = {
  block: PropTypes.string,
  challengeDescription: PropTypes.element.isRequired,
  challengeTitle: PropTypes.element.isRequired,
  guideUrl: PropTypes.string,
  instructionsPanelRef: PropTypes.any.isRequired,
  showToolPanel: PropTypes.bool,
  tests: PropTypes.arrayOf(PropTypes.object),
  videoUrl: PropTypes.string
};

export class SidePanel extends Component {
  componentDidMount() {
    const MathJax = global.MathJax;
    const mathJaxMountPoint = document.querySelector('#mathjax');
    const mathJaxChallenge =
      this.props.block === 'rosetta-code' ||
      this.props.block === 'project-euler';
    if (MathJax) {
      // Configure MathJax when it's loaded and
      // users navigate from another challenge
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ],
          processEscapes: true,
          processClass: 'rosetta-code|project-euler'
        }
      });
      MathJax.Hub.Queue([
        'Typeset',
        MathJax.Hub,
        document.querySelector('.rosetta-code'),
        document.querySelector('.project-euler')
      ]);
    } else if (!mathJaxMountPoint && mathJaxChallenge) {
      mathJaxScriptLoader();
    }
  }

  render() {
    const { instructionsPanelRef, guideUrl, tests, showToolPanel, videoUrl } =
      this.props;
    return (
      <div
        className='instructions-panel'
        ref={instructionsPanelRef}
        role='complementary'
        tabIndex='-1'
      >
        {this.props.challengeTitle}
        {this.props.challengeDescription}
        {showToolPanel && <ToolPanel guideUrl={guideUrl} videoUrl={videoUrl} />}
        <TestSuite tests={tests} />
      </div>
    );
  }
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default connect(mapStateToProps)(SidePanel);
