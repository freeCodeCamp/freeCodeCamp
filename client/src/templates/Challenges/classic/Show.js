import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Media from 'react-responsive';

import LearnLayout from '../../../components/layouts/Learn';
import MultifileEditor from './MultifileEditor';
import Preview from '../components/Preview';
import SidePanel from '../components/Side-Panel';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import VideoModal from '../components/VideoModal';
import ResetModal from '../components/ResetModal';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';
import Hotkeys from '../components/Hotkeys';

import { getGuideUrl } from '../utils';
import { challengeTypes } from '../../../../utils/challengeTypes';
import { ChallengeNode } from '../../../redux/propTypes';
import { dasherize } from '../../../../../utils/slugs';
import {
  createFiles,
  challengeFilesSelector,
  challengeTestsSelector,
  initConsole,
  initTests,
  updateChallengeMeta,
  challengeMounted,
  consoleOutputSelector,
  executeChallenge,
  cancelTests
} from '../redux';

import './classic.css';
import '../components/test-frame.css';

const mapStateToProps = createStructuredSelector({
  files: challengeFilesSelector,
  tests: challengeTestsSelector,
  output: consoleOutputSelector
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createFiles,
      initConsole,
      initTests,
      updateChallengeMeta,
      challengeMounted,
      executeChallenge,
      cancelTests
    },
    dispatch
  );

const propTypes = {
  cancelTests: PropTypes.func.isRequired,
  challengeMounted: PropTypes.func.isRequired,
  createFiles: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  executeChallenge: PropTypes.func.isRequired,
  files: PropTypes.shape({
    key: PropTypes.string
  }),
  initConsole: PropTypes.func.isRequired,
  initTests: PropTypes.func.isRequired,
  output: PropTypes.arrayOf(PropTypes.string),
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.shape({
      id: PropTypes.string,
      introPath: PropTypes.string,
      nextChallengePath: PropTypes.string,
      prevChallengePath: PropTypes.string
    })
  }),
  tests: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      testString: PropTypes.string
    })
  ),
  updateChallengeMeta: PropTypes.func.isRequired
};

const MAX_MOBILE_WIDTH = 767;

class ShowClassic extends Component {
  constructor() {
    super();

    this.resizeProps = {
      onStopResize: this.onStopResize.bind(this),
      onResize: this.onResize.bind(this)
    };

    this.state = {
      resizing: false
    };

    this.containerRef = React.createRef();
    this.editorRef = React.createRef();
  }
  onResize() {
    this.setState({ resizing: true });
  }

  onStopResize() {
    this.setState({ resizing: false });
  }

  componentDidMount() {
    const {
      data: {
        challengeNode: { title }
      }
    } = this.props;
    this.initializeComponent(title);
  }

  componentDidUpdate(prevProps) {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
      data: {
        challengeNode: { title: currentTitle }
      }
    } = this.props;
    if (prevTitle !== currentTitle) {
      this.initializeComponent(currentTitle);
    }
  }

  initializeComponent(title) {
    const {
      challengeMounted,
      createFiles,
      initConsole,
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: {
          files,
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    initConsole('');
    createFiles(files);
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, title, challengeType });
    challengeMounted(challengeMeta.id);
  }

  componentWillUnmount() {
    const { createFiles, cancelTests } = this.props;
    createFiles({});
    cancelTests();
  }

  getChallenge = () => this.props.data.challengeNode;

  getBlockNameTitle() {
    const {
      fields: { blockName },
      title
    } = this.getChallenge();
    return `${blockName}: ${title}`;
  }

  getVideoUrl = () => this.getChallenge().videoUrl;

  hasPreview() {
    const { challengeType } = this.getChallenge();
    return (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern
    );
  }

  renderInstructionsPanel({ showToolPanel }) {
    const {
      fields: { blockName },
      description,
      instructions
    } = this.getChallenge();

    const { forumTopicId, title } = this.getChallenge();
    return (
      <SidePanel
        className='full-height'
        description={description}
        guideUrl={getGuideUrl({ forumTopicId, title })}
        instructions={instructions}
        section={dasherize(blockName)}
        showToolPanel={showToolPanel}
        title={this.getBlockNameTitle()}
        videoUrl={this.getVideoUrl()}
      />
    );
  }

  renderEditor() {
    const { files } = this.props;
    const { description } = this.getChallenge();
    return (
      files && (
        <MultifileEditor
          challengeFiles={files}
          containerRef={this.containerRef}
          description={description}
          editorRef={this.editorRef}
          hasEditableBoundries={this.hasEditableBoundries()}
          resizeProps={this.resizeProps}
        />
      )
    );
  }

  renderTestOutput() {
    const { output } = this.props;
    return (
      <Output
        defaultOutput={`
/**
* Your test output will go here.
*/
`}
        output={output}
      />
    );
  }

  renderPreview() {
    return (
      <Preview className='full-height' disableIframe={this.state.resizing} />
    );
  }

  hasEditableBoundries() {
    const { files } = this.props;
    return Object.values(files).some(
      file =>
        file.editableRegionBoundaries &&
        file.editableRegionBoundaries.length === 2
    );
  }

  render() {
    const {
      fields: { blockName },
      forumTopicId,
      title
    } = this.getChallenge();
    const {
      executeChallenge,
      pageContext: {
        challengeMeta: { introPath, nextChallengePath, prevChallengePath }
      },
      files
    } = this.props;

    return (
      <Hotkeys
        editorRef={this.editorRef}
        executeChallenge={executeChallenge}
        innerRef={this.containerRef}
        introPath={introPath}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`Learn ${this.getBlockNameTitle()} | freeCodeCamp.org`}
          />
          <Media maxWidth={MAX_MOBILE_WIDTH}>
            <MobileLayout
              editor={this.renderEditor()}
              guideUrl={getGuideUrl({ forumTopicId, title })}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: false
              })}
              preview={this.renderPreview()}
              testOutput={this.renderTestOutput()}
              videoUrl={this.getVideoUrl()}
            />
          </Media>
          <Media minWidth={MAX_MOBILE_WIDTH + 1}>
            <DesktopLayout
              challengeFiles={files}
              editor={this.renderEditor()}
              hasEditableBoundries={this.hasEditableBoundries()}
              hasPreview={this.hasPreview()}
              instructions={this.renderInstructionsPanel({
                showToolPanel: true
              })}
              preview={this.renderPreview()}
              resizeProps={this.resizeProps}
              testOutput={this.renderTestOutput()}
            />
          </Media>
          <CompletionModal blockName={blockName} />
          <HelpModal />
          <VideoModal videoUrl={this.getVideoUrl()} />
          <ResetModal />
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowClassic.displayName = 'ShowClassic';
ShowClassic.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowClassic);

// TODO: handle jsx (not sure why it doesn't get an editableRegion) EDIT:
// probably because the dummy challenge didn't include it, so Gatsby couldn't
// infer it.
export const query = graphql`
  query ClassicChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      description
      instructions
      challengeType
      videoUrl
      forumTopicId
      fields {
        slug
        blockName
        tests {
          text
          testString
        }
      }
      required {
        link
        src
      }
      files {
        indexcss {
          key
          ext
          name
          contents
          head
          tail
          editableRegionBoundaries
        }
        indexhtml {
          key
          ext
          name
          contents
          head
          tail
          editableRegionBoundaries
        }
        indexjs {
          key
          ext
          name
          contents
          head
          tail
          editableRegionBoundaries
        }
        indexjsx {
          key
          ext
          name
          contents
          head
          tail
          editableRegionBoundaries
        }
      }
    }
  }
`;
