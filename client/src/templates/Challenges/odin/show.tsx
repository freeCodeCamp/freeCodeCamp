// Package Utilities
import { graphql } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ObserveKeys } from 'react-hotkeys';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Button } from '@freecodecamp/ui';
import ShortcutsModal from '../components/shortcuts-modal';

// Local Utilities
import Loader from '../../../components/helpers/loader';
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta, Test } from '../../../redux/prop-types';
import Hotkeys from '../components/hotkeys';
import VideoPlayer from '../components/video-player';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import Scene from '../components/scene/scene';
import PrismFormatted from '../components/prism-formatted';
import ChallengeTitle from '../components/challenge-title';
import ChallengeHeading from '../components/challenge-heading';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues,
  initTests
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
      initTests,
      updateChallengeMeta,
      challengeMounted,
      updateSolutionFormValues,
      openCompletionModal: () => openModal('completion'),
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

// Types
interface ShowOdinProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  initTests: (xs: Test[]) => void;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  openHelpModal: () => void;
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
  isScenePlaying: boolean;
}

// Component
class ShowOdin extends Component<ShowOdinProps, ShowOdinState> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

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
      videoIsLoaded: false,
      isScenePlaying: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: {
            fields: { tests },
            title,
            challengeType,
            helpCategory
          }
        }
      },
      pageContext: { challengeMeta },
      initTests,
      updateChallengeMeta
    } = this.props;
    initTests(tests);
    updateChallengeMeta({
      ...challengeMeta,
      title,
      challengeType,
      helpCategory
    });
    challengeMounted(challengeMeta.id);
    this.container.current?.focus();
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

  setIsScenePlaying = (shouldPlay: boolean) => {
    this.setState({
      isScenePlaying: shouldPlay
    });
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            description,
            superBlock,
            block,
            videoId,
            videoLocaleIds,
            bilibiliIds,
            fields: { blockName },
            question: { text, answers, solution },
            assignments,
            translationPending,
            scene
          }
        }
      },
      openCompletionModal,
      openHelpModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t,
      isChallengeCompleted
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    const feedback =
      this.state.selectedOption !== null
        ? answers[this.state.selectedOption].feedback
        : undefined;

    return (
      <Hotkeys
        executeChallenge={() => {
          this.handleSubmit(solution, openCompletionModal, assignments);
        }}
        containerRef={this.container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
        playScene={() => this.setIsScenePlaying(true)}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Container>
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
                <ChallengeTitle
                  isCompleted={isChallengeCompleted}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <PrismFormatted className={'line-numbers'} text={description} />
                <Spacer size='medium' />
              </Col>

              {scene && (
                <>
                  <Scene
                    scene={scene}
                    isPlaying={this.state.isScenePlaying}
                    setIsPlaying={this.setIsScenePlaying}
                  />{' '}
                  <Spacer size='medium' />
                </>
              )}

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <ObserveKeys>
                  {assignments.length > 0 && (
                    <>
                      <ChallengeHeading heading={t('learn.assignments')} />
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

                  <ChallengeHeading heading={t('learn.question')} />
                  <PrismFormatted className={'line-numbers'} text={text} />
                  <div className='video-quiz-options'>
                    {answers.map(({ answer }, index) => (
                      <label className='video-quiz-option-label' key={index}>
                        <input
                          aria-label={t('aria.answer')}
                          checked={this.state.selectedOption === index}
                          className='sr-only'
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
                          text={answer}
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
                    <span>
                      {feedback ? (
                        <PrismFormatted
                          className={'multiple-choice-feedback'}
                          text={feedback}
                        />
                      ) : (
                        t('learn.wrong-answer')
                      )}
                    </span>
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
                  size='medium'
                  variant='primary'
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
                <Spacer size='xxSmall' />
                <Button
                  block={true}
                  size='medium'
                  variant='primary'
                  onClick={openHelpModal}
                >
                  {t('buttons.ask-for-help')}
                </Button>
                <Spacer size='large' />
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Container>
          <ShortcutsModal />
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
        block
        fields {
          slug
          blockName
          tests {
            text
            testString
          }
        }
        question {
          text
          answers {
            answer
            feedback
          }
          solution
        }
        scene {
          setup {
            background
            characters {
              character
              position {
                x
                y
                z
              }
              opacity
            }
            audio {
              filename
              startTime
              startTimestamp
              finishTimestamp
            }
            alwaysShowDialogue
          }
          commands {
            background
            character
            position {
              x
              y
              z
            }
            opacity
            startTime
            finishTime
            dialogue {
              text
              align
            }
          }
        }
        translationPending
        assignments
      }
    }
  }
`;
