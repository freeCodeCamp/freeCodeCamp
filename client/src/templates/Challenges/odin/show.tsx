// Package Utilities
import { Button, Grid, Col, Row } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

// Local Utilities
import Loader from '../../../components/helpers/loader';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import Hotkeys from '../components/hotkeys';
import VideoPlayer from '../components/video-player';
import CompletionModal from '../components/completion-modal';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';

// Styles
import './show.css';
import '../video.css';

// Redux Setup
const mapStateToProps = createSelector(
  isChallengeCompletedSelector,
  (isChallengeCompleted: boolean) => ({
    isChallengeCompleted
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      openCompletionModal: () => openModal('completion')
    },
    dispatch
  );

// Types
interface ShowOdinProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  updateSolutionFormValues: () => void;
}

interface ShowOdinState {
  subtitles: string;
  downloadURL: string | null;
  selectedOption: number | null;
  answer: number;
  isWrongAnswer: boolean;
  assignmentsCompleted: number;
  allAssignmentsCompleted: boolean;
  videoIsLoaded: boolean;
}

// Component
class ShowOdin extends Component<ShowOdinProps, ShowOdinState> {
  static displayName: string;
  private _container: HTMLElement | null | undefined;

  constructor(props: ShowOdinProps) {
    super(props);
    this.state = {
      subtitles: '',
      downloadURL: null,
      selectedOption: null,
      answer: 1,
      isWrongAnswer: false,
      assignmentsCompleted: 0,
      allAssignmentsCompleted: false,
      videoIsLoaded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    this._container?.focus();
  }

  componentDidUpdate(prevProps: ShowOdinProps): void {
    const {
      data: {
        challengeNode: {
          challenge: { title: prevTitle }
        }
      }
    } = prevProps;
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { title: currentTitle, challengeType, helpCategory }
        }
      },
      pageContext: { challengeMeta },
      updateChallengeMeta
    } = this.props;
    if (prevTitle !== currentTitle) {
      updateChallengeMeta({
        ...challengeMeta,
        title: currentTitle,
        challengeType,
        helpCategory
      });
      challengeMounted(challengeMeta.id);
    }
  }

  handleSubmit(
    solution: number,
    openCompletionModal: () => void,
    assignments: string[]
  ) {
    const hasAssignments = assignments.length > 0;
    const completed = this.state.allAssignmentsCompleted;
    const isCorrect = solution - 1 === this.state.selectedOption;

    if (isCorrect) {
      this.setState({
        isWrongAnswer: false
      });
      if (!hasAssignments || completed) openCompletionModal();
    } else {
      this.setState({
        isWrongAnswer: true
      });
    }
  }

  handleOptionChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({
      isWrongAnswer: false,
      selectedOption: parseInt(changeEvent.target.value, 10)
    });
  };

  handleAssignmentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    totalAssignments: number
  ): void => {
    const assignmentsCompleted = event.target.checked
      ? this.state.assignmentsCompleted + 1
      : this.state.assignmentsCompleted - 1;
    const allAssignmentsCompleted = totalAssignments === assignmentsCompleted;

    this.setState({
      assignmentsCompleted,
      allAssignmentsCompleted
    });
  };

  onVideoLoad = () => {
    this.setState({
      videoIsLoaded: true
    });
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            fields: { blockName },
            title,
            description,
            superBlock,
            certification,
            block,
            videoId,
            videoLocaleIds,
            bilibiliIds,
            question: { text, answers, solution },
            assignments
          }
        }
      },
      openCompletionModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;
    return (
      <Hotkeys
        executeChallenge={() => {
          this.handleSubmit(solution, openCompletionModal, assignments);
        }}
        innerRef={(c: HTMLElement | null) => (this._container = c)}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Grid>
            <Row>
              {videoId && (
                <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
                  <Spacer size='medium' />
                  <div className='video-wrapper'>
                    {!this.state.videoIsLoaded ? (
                      <div className='video-placeholder-loader'>
                        <Loader />
                      </div>
                    ) : null}
                    <VideoPlayer
                      bilibiliIds={bilibiliIds}
                      onVideoLoad={this.onVideoLoad}
                      title={title}
                      videoId={videoId}
                      videoIsLoaded={this.state.videoIsLoaded}
                      videoLocaleIds={videoLocaleIds}
                    />
                  </div>
                </Col>
              )}
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <Spacer size='medium' />
                <h2>{title}</h2>
                <PrismFormatted className={'line-numbers'} text={description} />
                <Spacer size='medium' />
                <ObserveKeys>
                  {assignments.length > 0 && (
                    <>
                      <h2>{t('learn.assignments')}</h2>
                      <div className='video-quiz-options'>
                        {assignments.map((assignment, index) => (
                          <label
                            className='video-quiz-option-label'
                            key={index}
                          >
                            <input
                              name='assignment'
                              type='checkbox'
                              onChange={event =>
                                this.handleAssignmentChange(
                                  event,
                                  assignments.length
                                )
                              }
                            />

                            <PrismFormatted
                              className={'video-quiz-option'}
                              text={assignment}
                            />
                            <Spacer size='medium' />
                          </label>
                        ))}
                      </div>{' '}
                      <Spacer size='medium' />
                    </>
                  )}

                  <h2>{t('learn.question')}</h2>
                  <PrismFormatted className={'line-numbers'} text={text} />
                  <div className='video-quiz-options'>
                    {answers.map((option, index) => (
                      <label className='video-quiz-option-label' key={index}>
                        <input
                          aria-label={t('aria.answer')}
                          checked={this.state.selectedOption === index}
                          className='video-quiz-input-hidden'
                          name='quiz'
                          onChange={this.handleOptionChange}
                          type='radio'
                          value={index}
                        />{' '}
                        <span className='video-quiz-input-visible'>
                          {this.state.selectedOption === index ? (
                            <span className='video-quiz-selected-input' />
                          ) : null}
                        </span>
                        <PrismFormatted
                          className={'video-quiz-option'}
                          text={option}
                        />
                      </label>
                    ))}
                  </div>
                </ObserveKeys>
                <Spacer size='medium' />
                <div
                  style={{
                    textAlign: 'center'
                  }}
                >
                  {this.state.isWrongAnswer && (
                    <span>{t('learn.wrong-answer')}</span>
                  )}
                  {!this.state.allAssignmentsCompleted &&
                    assignments.length > 0 && (
                      <>
                        <br />
                        <span>{t('learn.assignment-not-complete')}</span>
                      </>
                    )}
                </div>
                <Spacer size='medium' />
                <Button
                  block={true}
                  bsSize='large'
                  bsStyle='primary'
                  onClick={() =>
                    this.handleSubmit(
                      solution,
                      openCompletionModal,
                      assignments
                    )
                  }
                >
                  {t('buttons.check-answer')}
                </Button>
                <Spacer size='large' />
              </Col>
              <CompletionModal
                block={block}
                blockName={blockName}
                certification={certification}
                superBlock={superBlock}
              />
            </Row>
          </Grid>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowOdin.displayName = 'ShowOdin';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowOdin));

export const query = graphql`
  query TheOdinProject($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        videoId
        videoLocaleIds {
          espanol
          italian
          portuguese
        }
        bilibiliIds {
          aid
          bvid
          cid
        }
        title
        description
        challengeType
        helpCategory
        superBlock
        certification
        block
        fields {
          blockName
          slug
        }
        question {
          text
          answers
          solution
        }
        translationPending
        assignments
      }
    }
  }
`;
