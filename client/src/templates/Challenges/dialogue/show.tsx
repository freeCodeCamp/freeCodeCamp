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
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import Hotkeys from '../components/hotkeys';
import CompletionModal from '../components/completion-modal';
import ChallengeTitle from '../components/challenge-title';
import ChallengeHeading from '../components/challenge-heading';
import HelpModal from '../components/help-modal';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import Scene from '../components/scene/scene';

// Styles
import '../odin/show.css';
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
      openCompletionModal: () => openModal('completion'),
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

// Types
interface ShowDialogueProps {
  challengeMounted: (arg0: string) => void;
  data: { challengeNode: ChallengeNode };
  description: string;
  isChallengeCompleted: boolean;
  openCompletionModal: () => void;
  openHelpModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

interface ShowDialogueState {
  subtitles: string;
  downloadURL: string | null;
  assignmentsCompleted: number;
  allAssignmentsCompleted: boolean;
  videoIsLoaded: boolean;
  isScenePlaying: boolean;
}

// Component
class ShowDialogue extends Component<ShowDialogueProps, ShowDialogueState> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  constructor(props: ShowDialogueProps) {
    super(props);
    this.state = {
      isScenePlaying: false,
      subtitles: '',
      downloadURL: null,
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
    this.container.current?.focus();
  }

  componentDidUpdate(prevProps: ShowDialogueProps): void {
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

  handleSubmit() {
    const { openCompletionModal } = this.props;
    if (this.state.allAssignmentsCompleted) {
      openCompletionModal();
    }
  }

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
            fields: { blockName },
            assignments,
            translationPending,
            scene
          }
        }
      },
      openHelpModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      isChallengeCompleted,
      t
    } = this.props;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )} - ${title}`;

    return (
      <Hotkeys
        executeChallenge={() => this.handleSubmit()}
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
                <Spacer size='medium' />
                <ObserveKeys>
                  <ChallengeHeading heading={t('learn.assignments')} />
                  <div className='video-quiz-options'>
                    {assignments.map((assignment, index) => (
                      <label className='video-quiz-option-label' key={index}>
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
                  </div>
                  <Spacer size='medium' />
                </ObserveKeys>

                <div
                  style={{
                    textAlign: 'center'
                  }}
                >
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
                  variant='primary'
                  disabled={!this.state.allAssignmentsCompleted}
                  onClick={() => this.handleSubmit()}
                >
                  {t('buttons.submit')}
                </Button>
                <Spacer size='xxSmall' />
                <Button block={true} variant='primary' onClick={openHelpModal}>
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

ShowDialogue.displayName = 'ShowDialogue';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowDialogue));

export const query = graphql`
  query Dialogue($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        videoId
        title
        description
        challengeType
        helpCategory
        superBlock
        block
        fields {
          slug
          blockName
        }
        translationPending
        assignments
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
      }
    }
  }
`;
