// Package Utilities
import { Button } from '@freecodecamp/react-bootstrap';
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
import { Container, Col, Row } from '@freecodecamp/ui';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import { ChallengeNode, ChallengeMeta } from '../../../redux/prop-types';
import ChallengeDescription from '../components/challenge-description';
import Hotkeys from '../components/hotkeys';
import ChallengeTitle from '../components/challenge-title';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import PrismFormatted from '../components/prism-formatted';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  updateSolutionFormValues
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';

// Styles
import '../video.css';
import './show.css';

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
      openCompletionModal: () => openModal('completion'),
      openHelpModal: () => openModal('help')
    },
    dispatch
  );

// Types
interface ShowFillInTheBlankProps {
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
  updateSolutionFormValues: () => void;
}

interface ShowFillInTheBlankState {
  subtitles: string;
  downloadURL: string | null;
  selectedOption: number | null;
  answer: number;
  showWrong: boolean;
  userAnswers: (string | undefined)[];
  answersCorrect: (boolean | undefined)[];
  allBlanksFilled: boolean;
}

// Component
class ShowFillInTheBlank extends Component<
  ShowFillInTheBlankProps,
  ShowFillInTheBlankState
> {
  static displayName: string;
  private container: React.RefObject<HTMLElement> = React.createRef();

  constructor(props: ShowFillInTheBlankProps) {
    super(props);
    this.state = {
      subtitles: '',
      downloadURL: null,
      selectedOption: null,
      answer: 1,
      showWrong: false,
      userAnswers: [],
      answersCorrect: [],
      allBlanksFilled: false
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

    const blanks = ['', '', ''];

    const emptyArray = [];
    for (let i = 0; i < blanks.length; i++) {
      emptyArray.push(undefined);
    }

    this.setState({
      userAnswers: emptyArray,
      answersCorrect: emptyArray
    });
  }

  componentDidUpdate(prevProps: ShowFillInTheBlankProps): void {
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
    const { userAnswers } = this.state;
    const blanks = ['You', 'are', 'right'];

    const newAnswersCorrect = userAnswers.map((userAnswer, i) => {
      if (userAnswer === blanks[i]) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      answersCorrect: newAnswersCorrect
    });

    const hasWrongAnswer = newAnswersCorrect.some(a => a === false);
    if (!hasWrongAnswer) {
      openCompletionModal();
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { userAnswers, answersCorrect } = this.state;
    const inputIndex = parseInt(e.target.getAttribute('data-index') as string);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[inputIndex] = e.target.value;

    const newAnswersCorrect = [...answersCorrect];
    newAnswersCorrect[inputIndex] = undefined;

    const blankNotFilled = newUserAnswers.some(a => a === undefined);

    this.setState({
      userAnswers: newUserAnswers,
      answersCorrect: newAnswersCorrect,
      allBlanksFilled: blankNotFilled ? false : true
    });
  };

  addCodeTags(str: string, index: number, numberOfBlanks: number): string {
    if (index === 0) {
      return `${str}</code>`;
    } else if (index < numberOfBlanks) {
      return `<code>${str}</code>`;
    } else {
      return `<code>${str}`;
    }
  }

  addPrismClass(index: number, numberOfBlanks: number): string {
    if (index === 0) {
      return `first-code-tag`;
    } else if (index < numberOfBlanks) {
      return `middle-code-tag`;
    } else {
      return `last-code-tag`;
    }
  }

  addInputClass(index: number): string {
    const { answersCorrect } = this.state;

    if (answersCorrect[index] === true) {
      return 'green-underline';
    } else if (answersCorrect[index] === false) {
      return 'red-underline';
    } else {
      return '';
    }
  }

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            title,
            description,
            superBlock,
            block,
            translationPending,
            fields: { blockName },
            question: { text, answers },
            audioPath
          }
        }
      },
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

    const fillInTheBlank = {
      sentence:
        // '<p><code>Hello! You</code> _ <code>the new graphic designer,</code> _ <code>?</code></p>',
        //'<p><code>Hello! You _ the new graphic designer, _?</code></p>',
        '<p><code>Hello! _ _ the new graphic designer, _?</code></p>',

      blanks: ['You', 'are', 'right']
    };

    /*
      # --fillInTheBlank--

      ## --sentence--

      `Hello! _ _ the new graphic designer, _ ?`

      ## --blanks--

      You

      ---

      are

      ---

      right
    */

    const sentence = fillInTheBlank.sentence
      .replace(/^<p>|<\/p>$/g, '')
      .split('_');

    console.log(this.state);
    const { blanks } = fillInTheBlank;

    const { allBlanksFilled } = this.state;

    return (
      <Hotkeys
        executeChallenge={() => this.handleSubmit()}
        containerRef={this.container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet
            title={`${blockNameTitle} | ${t('learn.learn')} | freeCodeCamp.org`}
          />
          <Container>
            <Row>
              <Spacer size='medium' />
              <ChallengeTitle
                isCompleted={isChallengeCompleted}
                translationPending={translationPending}
              >
                {title}
              </ChallengeTitle>

              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                {audioPath && (
                  <>
                    {' '}
                    <Spacer size='medium' />
                    {/* TODO: Add tracks for audio elements */}
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption*/}
                    <audio className='audio' controls>
                      <source
                        src={`https://cdn.freecodecamp.org/${audioPath}`}
                        type='audio/mp3'
                      ></source>
                    </audio>
                  </>
                )}
                <ChallengeDescription description={description} />
                <span>Fill in the blank</span>
                <PrismFormatted className={'line-numbers'} text={text} />
                <Spacer size='medium' />
                <ObserveKeys>
                  <div>
                    <h5>Here&apos;s the sentence:</h5>
                    <p>
                      {sentence.map((s, i) => {
                        return (
                          <>
                            <PrismFormatted
                              text={this.addCodeTags(s, i, blanks.length)}
                              className={`code-tag ${this.addPrismClass(
                                i,
                                blanks.length
                              )}`}
                              useSpan
                              noAria
                            />
                            {blanks[i] && (
                              <input
                                type='text'
                                maxLength={blanks[i].length + 3}
                                className={`fill-in-the-blank-input ${this.addInputClass(
                                  i
                                )}`}
                                onChange={this.handleInputChange}
                                data-index={i}
                                style={{
                                  width: `${blanks[i].length * 11 + 11}px`
                                }}
                              />
                            )}
                          </>
                        );
                      })}
                    </p>
                  </div>
                </ObserveKeys>
                <Spacer size='medium' />
                <div
                  style={{
                    textAlign: 'center'
                  }}
                >
                  {this.state.showWrong ? (
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
                  ) : (
                    <span>{t('learn.check-answer')}</span>
                  )}
                </div>
                <Spacer size='medium' />
                <Button
                  block={true}
                  bsStyle='primary'
                  disabled={!allBlanksFilled}
                  onClick={() => this.handleSubmit()}
                >
                  {t('buttons.check-answer')}
                </Button>
                <Button
                  block={true}
                  bsStyle='primary'
                  className='btn-invert'
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
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowFillInTheBlank.displayName = 'ShowFillInTheBlank';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowFillInTheBlank));

export const query = graphql`
  query FillInTheBlankChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        title
        description
        challengeType
        helpCategory
        superBlock
        block
        fields {
          blockName
          slug
        }
        question {
          text
          answers {
            answer
            feedback
          }
          solution
        }
        translationPending
        audioPath
      }
    }
  }
`;
