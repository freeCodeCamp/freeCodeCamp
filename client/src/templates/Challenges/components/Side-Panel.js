import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChallengeTitle from './Challenge-Title';
import ChallengeDescription from './Challenge-Description';
import ToolPanel from './Tool-Panel';
import TestSuite from './Test-Suite';

import { challengeTestsSelector, isChallengeCompletedSelector } from '../redux';
import { createSelector } from 'reselect';
import './side-panel.css';
import { mathJaxScriptLoader } from '../../../utils/scriptLoaders';

const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  challengeTestsSelector,
  (isChallengeCompleted, tests) => ({
    isChallengeCompleted,
    tests
  })
);

const propTypes = {
  description: PropTypes.string,
  guideUrl: PropTypes.string,
  instructions: PropTypes.string,
  isChallengeCompleted: PropTypes.bool,
  section: PropTypes.string,
  showToolPanel: PropTypes.bool,
  tests: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  videoUrl: PropTypes.string
};

export class SidePanel extends Component {
  componentDidMount() {
    const MathJax = global.MathJax;
    const mathJaxMountPoint = document.querySelector('#mathjax');
    const mathJaxChallenge =
      this.props.section === 'rosetta-code' ||
      this.props.section === 'project-euler';
    if (MathJax) {
      // Configure MathJax when it's loaded and
      // users navigate from another challenge
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
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
    const {
      title,
      description,
      instructions,
      isChallengeCompleted,
      guideUrl,
      tests,
      section,
      showToolPanel,
      videoUrl
    } = this.props;
    return (
      <div className='instructions-panel' role='complementary' tabIndex='-1'>
        <div>
          <ChallengeTitle isCompleted={isChallengeCompleted}>
            {title}
          </ChallengeTitle>
          <ChallengeDescription
            description={description}
            instructions={instructions}
            section={section}
          />
        </div>
        {showToolPanel && <ToolPanel guideUrl={guideUrl} videoUrl={videoUrl} />}
        <TestSuite tests={tests} />
      </div>
    );
  }
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default connect(mapStateToProps)(SidePanel);
