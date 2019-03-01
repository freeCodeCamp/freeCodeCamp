import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChallengeTitle from './Challenge-Title';
import ChallengeDescription from './Challenge-Description';
import ToolPanel from './Tool-Panel';
import TestSuite from './Test-Suite';
import Spacer from '../../../components/helpers/Spacer';

import { initConsole, challengeTestsSelector } from '../redux';
import { createSelector } from 'reselect';
import './side-panel.css';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  tests => ({
    tests
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initConsole
    },
    dispatch
  );

const MathJax = global.MathJax;

const propTypes = {
  description: PropTypes.string,
  guideUrl: PropTypes.string,
  initConsole: PropTypes.func.isRequired,
  instructions: PropTypes.string,
  introPath: PropTypes.string,
  nextChallengePath: PropTypes.string,
  prevChallengePath: PropTypes.string,
  section: PropTypes.string,
  showPrevNextBtns: PropTypes.bool,
  showToolPanel: PropTypes.bool,
  tests: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  videoUrl: PropTypes.string
};

export class SidePanel extends Component {
  componentDidMount() {
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
    this.props.initConsole('');
  }

  render() {
    const {
      title,
      description,
      instructions,
      introPath,
      guideUrl,
      nextChallengePath,
      prevChallengePath,
      tests,
      section,
      showPrevNextBtns,
      showToolPanel,
      videoUrl
    } = this.props;
    return (
      <div className='instructions-panel' role='complementary'>
        <Spacer />
        <div>
          <ChallengeTitle
            introPath={introPath}
            nextChallengePath={nextChallengePath}
            prevChallengePath={prevChallengePath}
            showPrevNextBtns={showPrevNextBtns}
          >
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel);
