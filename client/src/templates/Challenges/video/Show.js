import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';

import { ChallengeNode } from '../../../redux/propTypes';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateProjectFormValues
} from '../redux';

import LearnLayout from '../../../components/layouts/Learn';
import ChallengeTitle from '../components/Challenge-Title';
import ChallengeDescription from '../components/Challenge-Description';
import Spacer from '../../../components/helpers/Spacer';
import CompletionVideoModal from '../components/CompletionVideoModal';
import HelpModal from '../components/HelpModal';
import Hotkeys from '../components/Hotkeys';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted,
      updateProjectFormValues,
      openCompletionModal: () => openModal('completion')
    },
    dispatch
  );

const propTypes = {
  challengeMounted: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  description: PropTypes.string,
  openCompletionModal: PropTypes.func.isRequired,
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.object
  }),
  updateChallengeMeta: PropTypes.func.isRequired,
  updateProjectFormValues: PropTypes.func.isRequired
};

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: ''
    };
  }

  componentDidMount() {
    const {
      challengeMounted,
      data: {
        challengeNode: { title, challengeType }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    updateChallengeMeta({ ...challengeMeta, title, challengeType });
    challengeMounted(challengeMeta.id);
    this._container.focus();
  }

  componentDidUpdate(prevProps) {
    const {
      data: {
        challengeNode: { title: prevTitle }
      }
    } = prevProps;
    const {
      challengeMounted,
      data: {
        challengeNode: { title: currentTitle, challengeType }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
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
          fields: { blockName },
          title,
          description,
          videoId,
          question: { text, answers, solution }
        }
      },
      openCompletionModal,
      pageContext: {
        challengeMeta: { introPath, nextChallengePath, prevChallengePath }
      }
    } = this.props;
    const blockNameTitle = `${blockName} - ${title}`;

    return (
      <Hotkeys
        innerRef={c => (this._container = c)}
        introPath={introPath}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet title={`${blockNameTitle} | Learn | freeCodeCamp.org`} />
          <Grid>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer />
                <ChallengeTitle>{blockNameTitle}</ChallengeTitle>
                <div style={{ textAlign: 'center' }}>
                  <YouTube
                    onEnd={openCompletionModal}
                    opts={{ rel: 0 }}
                    videoId={videoId}
                  />
                  <i>
                    <a
                      href={
                        'https://www.youtube.com/timedtext_editor?action_mde_edit_form=1&v=' +
                        videoId +
                        '&lang=en&bl=watch&ui=hd&ref=wt&tab=captions'
                      }
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Help improve or add subtitles
                    </a>
                    .
                  </i>
                </div>
                <Spacer />
                <ChallengeDescription description={description} />

                <Button
                  block={true}
                  bsSize='large'
                  bsStyle='primary'
                  onClick={openCompletionModal}
                >
                  Complete
                </Button>
                <Spacer />
              </Col>
              <CompletionVideoModal
                answers={answers}
                blockName={blockName}
                question={text}
                solution={solution}
              />
              <HelpModal />
            </Row>
          </Grid>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

Project.displayName = 'Project';
Project.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

export const query = graphql`
  query VideoChallenge($slug: String!) {
    challengeNode(fields: { slug: { eq: $slug } }) {
      videoId
      title
      description
      challengeType
      fields {
        blockName
        slug
      }
      question {
        text
        answers
        solution
      }
    }
  }
`;
