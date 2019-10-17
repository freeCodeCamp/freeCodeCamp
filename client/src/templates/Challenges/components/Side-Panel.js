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
  constructor(...props) {
    super(...props);
    this.state = {
      MathJax: global.MathJax
    };
    this.handleMathJaxLoad = this.handleMathJaxLoad.bind(this);
  }

  handleMathJaxLoad() {
    console.info('MathJax has loaded');
    this.setState(state => ({
      ...state,
      MathJax: global.MathJax
    }));
  }

  componentDidMount() {
    const { MathJax } = this.state;
    const mathJaxMountPoint = document.querySelector('#mathjax');
    const rosettaCodeChallenge = this.props.section === 'rosetta-code';
    if (MathJax) {
      // Configure MathJax loaded through Gatsby SSR
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          processEscapes: true,
          processClass: 'rosetta-code'
        }
      });
      MathJax.Hub.Queue([
        'Typeset',
        MathJax.Hub,
        document.querySelector('.rosetta-code')
      ]);
    } else if (mathJaxMountPoint && rosettaCodeChallenge) {
      mathJaxMountPoint.addEventListener('load', this.handleMathJaxLoad);
    } else if (rosettaCodeChallenge) {
      mathJaxScriptLoader(this.handleMathJaxLoad);
    }
  }

  componentWillUnmount() {
    const mathJaxMountPoint = document.querySelector('#mathjax');
    if (mathJaxMountPoint) {
      mathJaxMountPoint.removeEventListener('load', this.handleMathJaxLoad);
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
