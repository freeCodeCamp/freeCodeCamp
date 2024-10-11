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
import ChallegeExplanation from '../components/challenge-explanation';
import MultipleChoiceQuestions from '../components/multiple-choice-questions';
import Assignments from '../components/assignments';
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
            instructions,
            explanation,
            superBlock,
            block,
            videoId,
            videoLocaleIds,
            bilibiliIds,
            fields: { blockName },
            questions,
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

    const question = questions[0];
    const { solution } = question;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

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
                  <VideoPlayer
                    bilibiliIds={bilibiliIds}
                    onVideoLoad={this.onVideoLoad}
                    title={title}
                    videoId={videoId}
                    videoIsLoaded={this.state.videoIsLoaded}
                    videoLocaleIds={videoLocaleIds}
                  />
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
                <Scene
                  scene={scene}
                  isPlaying={this.state.isScenePlaying}
                  setIsPlaying={this.setIsScenePlaying}
                />
              )}

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                {instructions && (
                  <PrismFormatted
                    className={'line-numbers'}
                    text={instructions}
                  />
                )}

                <ObserveKeys>
                  {assignments.length > 0 && (
                    <Assignments
                      assignments={assignments}
                      allAssignmentsCompleted={
                        this.state.allAssignmentsCompleted
                      }
                      handleAssignmentChange={this.handleAssignmentChange}
                    />
                  )}

                  <MultipleChoiceQuestions
                    questions={question}
                    selectedOption={this.state.selectedOption}
                    isWrongAnswer={this.state.isWrongAnswer}
                    handleOptionChange={this.handleOptionChange}
                  />
                </ObserveKeys>

                {explanation ? (
                  <ChallegeExplanation explanation={explanation} />
                ) : (
                  <Spacer size='medium' />
                )}

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
  query TheOdinProject($id: String!) {
    challengeNode(id: { eq: $id }) {
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
        instructions
        explanation
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
        questions {
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
