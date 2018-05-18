/* global graphql */
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';

import Editor from './Editor';
import Preview from '../components/Preview';
import SidePanel from '../components/Side-Panel';
import TestSuite from '../components/Test-Suite';
import Output from '../components/Output';
import CompletionModal from '../components/CompletionModal';
import HelpModal from '../components/HelpModal';
import ResetModal from '../components/ResetModal';

import { randomCompliment } from '../utils/get-words';

import { challengeTypes } from '../../../../utils/challengeTypes';
import { ChallengeNode } from '../../../redux/propTypes';
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
import ToolPanel from '../components/Tool-Panel';
import Spacer from '../../../components/util/Spacer';

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
  pathContext: PropTypes.shape({
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

class ShowClassic extends PureComponent {
  componentDidMount() {
    const {
      challengeMounted,
      createFiles,
      initTests,
      updateChallengeMeta,
      updateSuccessMessage,
      data: { challengeNode: { files, title, fields: { tests } } },
      pathContext: { challengeMeta }
    } = this.props;
    createFiles(files);
    initTests(tests);
    updateChallengeMeta({ ...challengeMeta, title });
    updateSuccessMessage(randomCompliment());
    challengeMounted(challengeMeta.id);
  }

  componentDidUpdate(prevProps) {
    const { data: { challengeNode: { title: prevTitle } } } = prevProps;
    const {
      challengeMounted,
      createFiles,
      initTests,
      updateChallengeMeta,
      updateSuccessMessage,
      data: {
        challengeNode: { files, title: currentTitle, fields: { tests } }
      },
      pathContext: { challengeMeta }
    } = this.props;
    updateSuccessMessage(randomCompliment());
    if (prevTitle !== currentTitle) {
      createFiles(files);
      initTests(tests);
      updateChallengeMeta({ ...challengeMeta, title: currentTitle });
      challengeMounted(challengeMeta.id);
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          challengeType,
          fields: { blockName },
          title,
          description,
          guideUrl
        }
      },
      files,
      tests,
      output
    } = this.props;
    const editors = Object.keys(files)
      .map(key => files[key])
      .map((file, index) => (
        <Fragment key={file.key + index}>
          {index !== 0 && <ReflexSplitter />}
          <ReflexElement flex={1}>
            <Editor {...file} fileKey={file.key} />
          </ReflexElement>
          {index + 1 === Object.keys(files).length && <ReflexSplitter />}
          {index + 1 === Object.keys(files).length ? (
            <ReflexElement flex={0.25}>
              <Output
                defaultOutput={`
/**
* Your output will go here.
* Any console.log() statements
* will appear in here as well.
*/
`}
                output={output}
              />
            </ReflexElement>
          ) : null}
        </Fragment>
      ));

    const showPreview =
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern;
    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <Fragment>
        <Helmet title={`${blockNameTitle} | Learn freeCodeCamp`} />
        <ToolPanel />
        <ReflexContainer orientation='vertical'>
          <ReflexElement flex={1}>
            <SidePanel
              className='full-height'
              description={description}
              guideUrl={guideUrl}
              title={blockNameTitle}
            />
          </ReflexElement>
          <ReflexSplitter />
          <ReflexElement flex={1}>
            <ReflexContainer orientation='horizontal'>
              {editors}
            </ReflexContainer>
          </ReflexElement>
          <ReflexSplitter />
          <ReflexElement flex={0.5}>
            {showPreview ? <Preview className='full-height' /> : null}
            <Spacer />
            <TestSuite tests={tests} />
          </ReflexElement>
        </ReflexContainer>

        <CompletionModal />
        <HelpModal />
        <ResetModal />
      </Fragment>
    );
  }
}

ShowClassic.displayName = 'ShowClassic';
ShowClassic.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ShowClassic);

export const query = graphql`
  query ClassicChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      title
      guideUrl
      description
      challengeType
      fields {
        blockName
        tests {
          text
          testString
        }
      }
      required {
        link
        raw
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
