import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { graphql } from 'gatsby';
import { first } from 'lodash';
import { Tabs, TabPane } from '@freecodecamp/react-bootstrap';
import Media from 'react-media';

import LearnLayout from '../../../components/layouts/Learn';
import Editor from './Editor';
import Preview from '../components/Preview';
import SidePanel from '../components/Side-Panel';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import VideoModal from '../components/VideoModal';
import ResetModal from '../components/ResetModal';
import ToolPanel from '../components/Tool-Panel';

import { randomCompliment } from '../utils/get-words';
import { createGuideUrl } from '../utils';
import { challengeTypes } from '../../../../utils/challengeTypes';
import { ChallengeNode } from '../../../redux/propTypes';
import { dasherize } from '../../../../utils';
import {
  createFiles,
  challengeFilesSelector,
  challengeTestsSelector,
  currentTabSelector,
  initTests,
  updateChallengeMeta,
  challengeMounted,
  updateSuccessMessage,
  consoleOutputSelector,
  moveToTab
} from '../redux';

import './classic.css';
import '../components/test-frame.css';

import decodeHTMLEntities from '../../../../utils/decodeHTMLEntities';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeTestsSelector,
  consoleOutputSelector,
  currentTabSelector,
  (files, tests, output, currentTab) => ({
    files,
    tests,
    output,
    currentTab
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      moveToTab,
      createFiles,
      initTests,
      updateChallengeMeta,
      challengeMounted,
      updateSuccessMessage
    },
    dispatch
  );

const propTypes = {
  challengeMounted: PropTypes.func.isRequired,
  createFiles: PropTypes.func.isRequired,
  currentTab: PropTypes.number,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  files: PropTypes.shape({
    key: PropTypes.string
  }),
  initTests: PropTypes.func.isRequired,
  moveToTab: PropTypes.func.isRequired,
  output: PropTypes.string,
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.shape({
      nextchallengePath: PropTypes.string
    })
  }),
  tests: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      testString: PropTypes.string
    })
  ),
  updateChallengeMeta: PropTypes.func.isRequired,
  updateSuccessMessage: PropTypes.func.isRequired
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
  }
  onResize() {
    this.setState({ resizing: true });
  }

  onStopResize() {
    this.setState({ resizing: false });
  }

  componentDidMount() {
    const {
      challengeMounted,
      createFiles,
      initTests,
      updateChallengeMeta,
      updateSuccessMessage,
      data: {
        challengeNode: {
          files,
          title,
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    createFiles(files);
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, title, challengeType });
    updateSuccessMessage(randomCompliment());
    challengeMounted(challengeMeta.id);
  }

  componentDidUpdate(prevProps) {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
      challengeMounted,
      createFiles,
      initTests,
      updateChallengeMeta,
      updateSuccessMessage,
      data: {
        challengeNode: {
          files,
          title: currentTitle,
          fields: { tests },
          challengeType
        }
      },
      pageContext: { challengeMeta }
    } = this.props;
    if (prevTitle !== currentTitle) {
      updateSuccessMessage(randomCompliment());
      createFiles(files);
      initTests(tests);
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType
      });
      challengeMounted(challengeMeta.id);
    }
  }

  getBlockNameTitle() {
    const {
      data: {
        challengeNode: {
          fields: { blockName },
          title
        }
      }
    } = this.props;
    return `${blockName}: ${title}`;
  }

  getGuideUrl() {
    const {
      data: {
        challengeNode: {
          fields: { slug }
        }
      }
    } = this.props;
    return createGuideUrl(slug);
  }

  getChallengeFile() {
    const { files } = this.props;
    return first(Object.keys(files).map(key => files[key]));
  }

  hasPreview() {
    const {
      data: {
        challengeNode: {
          challengeType
        }
      }
    } = this.props;
    return (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern
    );
  }

  renderInstructionsPanel({ showToolPanel }) {
    const {
      data: {
        challengeNode: {
          fields: { blockName },
          description,
          instructions,
          videoUrl
        }
      }
    } = this.props;
    return (
      <SidePanel
        className='full-height'
        description={description}
        guideUrl={this.getGuideUrl()}
        instructions={instructions}
        section={dasherize(blockName)}
        showToolPanel={showToolPanel}
        title={this.getBlockNameTitle()}
        videoUrl={videoUrl}
      />
    );
  }

  renderEditor() {
    const { files } = this.props;
    const challengeFile = first(Object.keys(files).map(key => files[key]));
    return challengeFile && (
      <Editor {...challengeFile} fileKey={challengeFile.key} />
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
        output={decodeHTMLEntities(output)}
      />
    );
  }

  renderPreview() {
    return (
      <Preview
        className='full-height'
        disableIframe={this.state.resizing}
      />
    );
  }

  renderDesktopLayout() {
    const challengeFile = this.getChallengeFile();
    return (
      <ReflexContainer orientation='vertical'>
        <ReflexElement flex={1} {...this.resizeProps}>
          {this.renderInstructionsPanel({ showToolPanel: true })}
        </ReflexElement>
        <ReflexSplitter propagate={true} {...this.resizeProps} />
        <ReflexElement flex={1} {...this.resizeProps}>
          {challengeFile && (
            <ReflexContainer key={challengeFile.key} orientation='horizontal'>
              <ReflexElement
                flex={1}
                propagateDimensions={true}
                renderOnResize={true}
                renderOnResizeRate={20}
                {...this.resizeProps}
                >
                {this.renderEditor()}
              </ReflexElement>
              <ReflexSplitter propagate={true} {...this.resizeProps} />
              <ReflexElement
                flex={0.25}
                propagateDimensions={true}
                renderOnResize={true}
                renderOnResizeRate={20}
                {...this.resizeProps}
                >
                {this.renderTestOutput()}
              </ReflexElement>
            </ReflexContainer>
          )}
        </ReflexElement>
        {this.hasPreview() && (
          <Fragment>
            <ReflexSplitter propagate={true} {...this.resizeProps} />
            <ReflexElement flex={0.7} {...this.resizeProps}>
              {this.renderPreview()}
            </ReflexElement>
          </Fragment>
        )}
      </ReflexContainer>
    );
  }

  renderMobileLayout() {
    const {
      data: {
        challengeNode: {
          videoUrl
        }
      },
      currentTab,
      moveToTab
    } = this.props;

    const editorTabPaneProps = {
      mountOnEnter: true,
      unmountOnExit: true
    };

    return (
      <Fragment>
        <Tabs
          activeKey={currentTab}
          defaultActiveKey={1}
          id='challege-page-tabs'
          onSelect={(key) => moveToTab(key)}
          >
          <TabPane eventKey={1} title='Instructions'>
            { this.renderInstructionsPanel({ showToolPanel: false }) }
          </TabPane>
          <TabPane eventKey={2} title='Code' {...editorTabPaneProps}>
            <div className='challege-edittor-wrapper'>
              {this.renderEditor()}
            </div>
          </TabPane>
          <TabPane eventKey={3} title='Tests' {...editorTabPaneProps}>
            <div className='challege-edittor-wrapper'>
              {this.renderTestOutput()}
            </div>
          </TabPane>
          {this.hasPreview() && (
            <TabPane eventKey={4} title='Preview'>
              {this.renderPreview()}
            </TabPane>
          )}
        </Tabs>
        <ToolPanel
          guideUrl={this.getGuideUrl()}
          isMobile={true}
          videoUrl={videoUrl}
        />
      </Fragment>
    );
  }

  render() {
    const {
      data: {
        challengeNode: {
          videoUrl
        }
      }
    } = this.props;

    return (
      <LearnLayout>
        <Helmet
          title={`Learn ${this.getBlockNameTitle()} | freeCodeCamp.org`}
        />
        <Media query={{ maxWidth: MAX_MOBILE_WIDTH }}>
          {matches =>
            matches
              ? this.renderMobileLayout()
              : this.renderDesktopLayout()
          }
        </Media>
        <CompletionModal />
        <HelpModal />
        <VideoModal videoUrl={videoUrl} />
        <ResetModal />
      </LearnLayout>
    );
  }
}

ShowClassic.displayName = 'ShowClassic';
ShowClassic.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowClassic);

export const query = graphql`
  query ClassicChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      description
      instructions
      challengeType
      videoUrl
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
        indexhtml {
          key
          ext
          name
          contents
          head
          tail
        }
        indexjs {
          key
          ext
          name
          contents
          head
          tail
        }
        indexjsx {
          key
          ext
          name
          contents
          head
          tail
        }
      }
    }
  }
`;
