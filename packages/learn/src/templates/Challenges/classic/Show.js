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
import CompletionModal from '../components/CompletionModal';

import { challengeTypes } from '../../../../utils/challengeTypes';
import { ChallengeNode } from '../../../redux/propTypes';
import {
  createFiles,
  challengeFilesSelector,
  initTests,
  updateChallengeMeta
} from '../redux';

import './classic.css';

const mapStateToProps = createSelector(challengeFilesSelector, files => ({
  files
}));

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFiles, initTests, updateChallengeMeta }, dispatch);

const propTypes = {
  createFiles: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  files: PropTypes.shape({
    key: PropTypes.string
  }),
  initTests: PropTypes.func.isRequired,
  pathContext: PropTypes.shape({
    challengeMeta: PropTypes.shape({
      nextchallengePath: PropTypes.string
    })
  }),
  updateChallengeMeta: PropTypes.func.isRequired
};

class ShowClassic extends PureComponent {
  componentDidMount() {
    const {
      createFiles,
      initTests,
      updateChallengeMeta,
      data: { challengeNode: { files, fields: { tests } } },
      pathContext: { challengeMeta }
    } = this.props;
    createFiles(files);
    initTests(tests);
    console.log(challengeMeta);
    updateChallengeMeta(challengeMeta);
  }

  componentDidUpdate(prevProps) {
    const { data: { challengeNode: { title: prevTitle } } } = prevProps;
    const {
      createFiles,
      initTests,
      updateChallengeMeta,
      data: {
        challengeNode: { files, title: currentTitle, fields: { tests } }
      },
      pathContext: { challengeMeta }
    } = this.props;
    if (prevTitle !== currentTitle) {
      createFiles(files);
      initTests(tests);
      updateChallengeMeta(challengeMeta);
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
      files
    } = this.props;
    console.log(files);
    const editors = Object.keys(files)
      .map(key => files[key])
      .map((file, index) => (
        <Fragment key={file.key + index}>
          {index !== 0 && <ReflexSplitter />}
          <ReflexElement flex={1}>
            <Editor {...file} fileKey={file.key} />
          </ReflexElement>
        </Fragment>
      ));

    const showPreview = (
      challengeType === challengeTypes.html ||
      challengeType === challengeTypes.modern
    );
    const blockNameTitle = `${blockName} - ${title}`;
    return (
      <Fragment>
        <Helmet title={`${blockNameTitle} | Learn freeCodeCamp}`} />
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
          {showPreview && <ReflexSplitter />}
          {showPreview && (
            <ReflexElement flex={0.3} maxSize={325}>
              <Preview className='full-height' />
            </ReflexElement>
          )}
        </ReflexContainer>
        <CompletionModal />
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
