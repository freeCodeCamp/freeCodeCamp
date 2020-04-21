// Package Utilities
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import { createSelector } from 'reselect';

// Local Utilities
import SanitizedSpan from '../components/SanitizedSpan';
import { ChallengeNode } from '../../../redux/propTypes';
import LearnLayout from '../../../components/layouts/Learn';
import ChallengeTitle from '../components/Challenge-Title';
import ChallengeDescription from '../components/Challenge-Description';
import Spacer from '../../../components/helpers/Spacer';
import CompletionModal from '../components/CompletionModal';
import Hotkeys from '../components/Hotkeys';
import {
  isChallengeCompletedSelector,
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateProjectFormValues
} from '../redux';

// Styles
import './show.css';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  isChallengeCompleted => ({
    isChallengeCompleted
  })
);
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

// Proptypes
const propTypes = {
  challengeMounted: PropTypes.func.isRequired,
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  description: PropTypes.string,
  isChallengeCompleted: PropTypes.bool,
  openCompletionModal: PropTypes.func.isRequired,
  pageContext: PropTypes.shape({
    challengeMeta: PropTypes.object
  }),
  updateChallengeMeta: PropTypes.func.isRequired,
  updateProjectFormValues: PropTypes.func.isRequired
};

// Component
export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: '',
      downloadURL: null,
      selectedOption: 0,
      answer: 1,
      showWrong: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(solution, openCompletionModal) {
    if (solution - 1 === this.state.selectedOption) {
      this.setState({
        showWrong: false
      });
      openCompletionModal();
    } else {
      this.setState({
        showWrong: true
      });
    }
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: parseInt(changeEvent.target.value, 10)
    });
  };

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
      },
      isChallengeCompleted
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
                <ChallengeTitle isCompleted={isChallengeCompleted}>
                  {blockNameTitle}
                </ChallengeTitle>
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
                <Spacer />
                <SanitizedSpan text={text} />
                <Spacer />
                <div className='video-quiz-options'>
                  {answers.map((option, index) => (
                    <label className='video-quiz-option-label'>
                      <input
                        checked={this.state.selectedOption === index}
                        className='video-quiz-input-hidden'
                        name='quiz'
                        onChange={this.handleOptionChange}
                        type='radio'
                        value={index}
                      />{' '}
                      <span className='video-quiz-input-visible'>
                        {this.state.selectedOption === index ? (
                          <span className='video-quiz-selected-input'></span>
                        ) : null}
                      </span>
                      <SanitizedSpan text={option} />
                    </label>
                  ))}
                </div>
                <Spacer />
                <Button
                  block={true}
                  bsSize='large'
                  bsStyle='primary'
                  onClick={() =>
                    this.handleSubmit(solution, openCompletionModal)
                  }
                >
                  Check your answer
                </Button>
                <Spacer />
                <div
                  style={{
                    visibility: this.state.showWrong ? 'visible' : 'hidden'
                  }}
                >
                  Wrong. Try again.
                </div>
                <Spacer size={2} />
              </Col>
              <CompletionModal blockName={blockName} />
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
