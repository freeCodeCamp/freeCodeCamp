import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChallengeTitle from './Challenge-Title';
import ChallengeDescription from './Challenge-Description';
import ToolPanel from './Tool-Panel';
import TestSuite from './Test-Suite';
import Spacer from '../../../components/util/Spacer';

import { initConsole, challengeTestsSelector } from '../redux';
import { createSelector } from 'reselect';
import './side-panel.css';

const mapStateToProps = createSelector(challengeTestsSelector, tests => ({
  tests
}));

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initConsole
    },
    dispatch
  );

const MathJax = global.MathJax;

const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  guideUrl: PropTypes.string,
  initConsole: PropTypes.func.isRequired,
  section: PropTypes.string,
  tests: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  videoUrl: PropTypes.string
};

export class SidePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.bindTopDiv = this.bindTopDiv.bind(this);
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
        processClass: 'rosetta-code'
      }
    });
  }

  componentDidMount() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub,
    document.querySelector('.rosetta-code')]);
    this.props.initConsole('');
  }

  componentDidUpdate(prevProps) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub,
    document.querySelector('.rosetta-code')]);
    const { title, initConsole } = this.props;
    if (title !== prevProps.title) {
      initConsole('');
      const node = ReactDom.findDOMNode(this.descriptionTop);
      setTimeout(() => {
        node.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }

  bindTopDiv(node) {
    this.descriptionTop = node;
  }

  render() {
    const {
      title,
      description,
      guideUrl,
      tests,
      section,
      videoUrl
    } = this.props;
    return (
      <div className='instructions-panel' role='complementary'>
        <div ref={this.bindTopDiv} />
        <Spacer />
        <div>
          <ChallengeTitle>{title}</ChallengeTitle>
          <ChallengeDescription description={description} section={section} />
        </div>
        <ToolPanel guideUrl={guideUrl} videoUrl={videoUrl} />
        <TestSuite tests={tests} />
      </div>
    );
  }
}

SidePanel.displayName = 'SidePanel';
SidePanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
