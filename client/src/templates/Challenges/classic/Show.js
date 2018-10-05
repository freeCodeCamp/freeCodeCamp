import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { graphql } from 'gatsby';
import { first } from 'lodash';

import LearnLayout from '../../../components/layouts/Learn';
import Editor from './Editor';
import Preview from '../components/Preview';
import SidePanel from '../components/Side-Panel';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import VideoModal from '../components/VideoModal';
import ResetModal from '../components/ResetModal';

import { randomCompliment } from '../utils/get-words';
import { createGuideUrl } from '../utils';
import { challengeTypes } from '../../../../utils/challengeTypes';
import { ChallengeNode } from '../../../redux/propTypes';
import { dasherize } from '../../../../utils';
import {
  createFiles,
  challengeFilesSelector,
  challengeTestsSelector,
  initTests,
  updateChallengeMeta,
  challengeMounted,
  updateSuccessMessage,
  consoleOutputSelector
} from '../redux';

import './classic.css';
import '../components/test-frame.css';

import decodeHTMLEntities from '../../../../utils/decodeHTMLEntities';

const mapStateToProps = createSelector(
  challengeFilesSelector,
  challengeTestsSelector,
  consoleOutputSelector,
  (files, tests, output) => ({
    files,
    tests,
    output
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
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
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  files: PropTypes.shape({
    key: PropTypes.string
  }),
  initTests: PropTypes.func.isRequired,
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

  render() {
    const {
      data: {
        challengeNode: {
          challengeType,
          fields: { blockName, slug },
          title,
          description,
          instructions,
          videoUrl
        }
      },
      files,
      output
    } = this.props;
    const challengeFile = first(Object.keys(files).map(key => files[key]));
    const editors = challengeFile && (
      <ReflexContainer key={challengeFile.key} orientation='horizontal'>
        <ReflexElement
          flex={1}
          propagateDimensions={true}
          renderOnResize={true}
          renderOnResizeRate={20}
          {...this.resizeProps}
          >
          <Editor {...challengeFile} fileKey={challengeFile.key} />
        </ReflexElement>
        <ReflexSplitter propagate={true} {...this.resizeProps} />
        <ReflexElement
          flex={0.25}
          propagateDimensions={true}
          renderOnResize={true}
          renderOnResizeRate={20}
          {...this.resizeProps}
          >
          <Output
            defaultOutput={`
/**
* Your test output will go here.
*/
`}
            output={decodeHTMLEntities(output)}
          />
        </ReflexElement>
      </ReflexContainer>
    );
    const showPreview =
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern;
    const blockNameTitle = `${blockName}: ${title}`;
    return (
      <LearnLayout>
        <Helmet title={`Learn ${blockNameTitle} | freeCodeCamp.org`} />
        <ReflexContainer orientation='vertical'>
          <ReflexElement flex={1} {...this.resizeProps}>
            <SidePanel
              className='full-height'
              description={description}
              guideUrl={createGuideUrl(slug)}
              instructions={instructions}
              section={dasherize(blockName)}
              title={blockNameTitle}
              videoUrl={videoUrl}
            />
          </ReflexElement>
          <ReflexSplitter propagate={true} {...this.resizeProps} />
          <ReflexElement flex={1} {...this.resizeProps}>
            {editors}
          </ReflexElement>
          {showPreview && (
            <ReflexSplitter propagate={true} {...this.resizeProps} />
          )}
          {showPreview ? (
            <ReflexElement flex={0.7} {...this.resizeProps}>
              <Preview
                className='full-height'
                disableIframe={this.state.resizing}
              />
            </ReflexElement>
          ) : null}
        </ReflexContainer>

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
