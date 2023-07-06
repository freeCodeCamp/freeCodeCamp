// Package Utilities
import { Grid, Col, Row, Button } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React, { Component, RefObject } from 'react';
import Helmet from 'react-helmet';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

// Local Utilities
import Spacer from '../../../components/helpers/spacer';
import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import PrismFormatted from '../components/prism-formatted';
import CompletionModal from '../components/completion-modal';
import HelpModal from '../components/help-modal';
import Hotkeys from '../components/hotkeys';
import { startExam, stopExam } from '../../../redux/actions';
import {
  completedChallengesSelector,
  partiallyCompletedChallengesSelector,
  isSignedInSelector,
  examInProgressSelector
} from '../../../redux/selectors';
import {
  challengeMounted,
  updateChallengeMeta,
  openModal,
  closeModal,
  submitChallenge,
  setExamResults,
  updateSolutionFormValues
} from '../redux/actions';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { createFlashMessage } from '../../../components/Flash/redux';
import {
  ChallengeNode,
  ChallengeMeta,
  CompletedChallenge
} from '../../../redux/prop-types';
import FinishExamModal from './components/finish-exam-modal';
import ExamResults from './components/exam-results';

import './exam.css';

// Redux
const mapStateToProps = createSelector(
  completedChallengesSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  partiallyCompletedChallengesSelector,
  examInProgressSelector,
  (
    completedChallenges: CompletedChallenge[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    partiallyCompletedChallenges: CompletedChallenge[],
    examInProgress: boolean
  ) => ({
    completedChallenges,
    isChallengeCompleted,
    isSignedIn,
    partiallyCompletedChallenges,
    examInProgress
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      challengeMounted,
      createFlashMessage,
      openFinishExamModal: () => openModal('finishExam'),
      closeFinishExamModal: () => closeModal('finishExam'),
      startExam,
      stopExam,
      setExamResults,
      submitChallenge,
      updateChallengeMeta,
      updateSolutionFormValues
    },
    dispatch
  );

// Types
interface ShowExamProps {
  challengeMounted: (arg0: string) => void;
  completedChallenges: CompletedChallenge[];
  createFlashMessage: typeof createFlashMessage;
  data: { challengeNode: ChallengeNode };
  examInProgress: boolean;
  isChallengeCompleted: boolean;
  isSignedIn: boolean;
  openFinishExamModal: () => void;
  closeFinishExamModal: () => void;
  pageContext: {
    challengeMeta: ChallengeMeta;
  };
  t: TFunction;
  startExam: () => void;
  stopExam: () => void;
  submitChallenge: () => void;
  setExamResults: (arg0: ExamResults) => void;
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
}

interface ShowExamState {
  currentQuestionIndex: number;
  examTimeInSeconds: number;
  generatedExam: GeneratedExamQuestion[];
  userExam: UserExamQuestion[];
  showResults: boolean;
}

interface GeneratedExamQuestion {
  question: string;
  answers: string[];
}

interface UserExamQuestion {
  question: string;
  answer: string | null;
}

interface ExamResultQuestion {
  question: string;
  answer: string;
  correct: boolean;
}

interface ExamResults {
  timeInSeconds: number;
  results: ExamResultQuestion[];
}

const examInDatabase = [
  {
    question: 'Which of the following is a programming language?',
    wrongAnswers: ['Apple', 'Orange', 'Banana', 'Mango'],
    correctAnswer: 'Python'
  },
  {
    question: 'What does CSS stand for?',
    wrongAnswers: [
      'Computer Style Sheets',
      'Complete Style Sheets',
      'Cool Style Sheets',
      'Creative Style Sheets'
    ],
    correctAnswer: 'Cascading Style Sheets'
  },
  {
    question: 'What is the extension for a JavaScript file?',
    wrongAnswers: ['.txt', '.doc', '.html', '.css'],
    correctAnswer: '.js'
  },
  {
    question: 'What is the purpose of the "if" statement in programming?',
    wrongAnswers: [
      'To repeat a set of instructions',
      'To define a function',
      'To assign a value to a variable',
      'To declare a loop'
    ],
    correctAnswer: 'To check a condition'
  },
  {
    question:
      'What is the symbol used to represent addition in most programming languages?',
    wrongAnswers: ['-', '*', '=', '%'],
    correctAnswer: '+'
  },
  {
    question: 'Which of the following is NOT a programming language?',
    wrongAnswers: ['Java', 'Ruby', 'Swift', 'PHP'],
    correctAnswer: 'Spanish'
  }
];

Object.freeze(examInDatabase);

// TODO: move helper functions to utility file
// helper functions
function shuffleArray(
  array: string[] | GeneratedExamQuestion[]
): string[] | GeneratedExamQuestion[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

function formatSecondsToTime(s: number) {
  const hourInSeconds = 60 * 60;
  const minuteInSeconds = 60;
  const h = Math.floor(s / hourInSeconds);
  s -= h * hourInSeconds;

  const minutes = Math.floor(s / minuteInSeconds);
  s -= minutes * minuteInSeconds;

  const mm = minutes < 10 && h >= 1 ? `0${minutes}` : minutes;
  const seconds = s % 60;
  const ss = seconds < 10 ? `0${seconds}` : seconds;

  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

// TODO: generate exam on server
function generateExam(): GeneratedExamQuestion[] {
  const NUMBER_OF_ANSWERS_PER_QUESTION = 4;
  const NUMBER_OF_QUESTIONS_IN_EXAM = 5;
  const generatedExam: GeneratedExamQuestion[] = [];
  const examFromDatabase = Array.from(examInDatabase);

  while (generatedExam.length < NUMBER_OF_QUESTIONS_IN_EXAM) {
    const randomIndex = Math.floor(
      Math.random() * (examFromDatabase.length - 1)
    );
    const randomQuestion = examFromDatabase.splice(randomIndex, 1)[0];
    const wrongAnswers = randomQuestion.wrongAnswers;
    const answers = [randomQuestion.correctAnswer];

    while (answers.length < NUMBER_OF_ANSWERS_PER_QUESTION) {
      const index = Math.floor(Math.random() * (wrongAnswers.length - 1));
      const randomAnswer = wrongAnswers.splice(index, 1)[0];
      answers.push(randomAnswer);
    }

    const newExamQuestion: GeneratedExamQuestion = {
      question: randomQuestion.question,
      answers: shuffleArray(answers) as string[]
    };

    generatedExam.push(newExamQuestion);
  }

  return shuffleArray(generatedExam) as GeneratedExamQuestion[];
}

/* const exampleGeneratedExam = [
  {
    "question": "What is the extension for a JavaScript file?",
    "answers": ['.txt', '.js', '.html', '.css']
  },
  ...rest_of_questions
]*/

/* const exampleUserExam = [
  {
    "question": "What is the extension for a JavaScript file?",
    "answer": ".doc"
  },
  ...rest_of_questions
]*/

/* const exampleExamResults = [
    {
      "question": "What is the extension for a JavaScript file?",
      "answer": ".doc",
      "correct": false
    }
    ...rest_of_questions
  ]
 */

/* example item added to completedChalleges array
  {
    "id": "645147516c245de4d11eb7ba",
    "completedDate": 1644532946064,
    "exam": {
      "completionTimeInSeconds": number,
      "results": [
        {
          "question": "What is the extension for a JavaScript file?",
          "answer": ".doc",
          "correct": false
        },
        ...rest_of_questions
      ]
    }
  }*/

const generatedExam = generateExam();
Object.freeze(generatedExam);

class ShowExam extends Component<ShowExamProps, ShowExamState> {
  static displayName: string;
  private _container: RefObject<HTMLElement> | undefined;
  timerInterval!: NodeJS.Timeout;

  constructor(props: ShowExamProps) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      generatedExam: generatedExam,
      examTimeInSeconds: 0,
      userExam: [],
      showResults: false
    };

    this.runExam = this.runExam.bind(this);
    this.goToPreviousQuestion = this.goToPreviousQuestion.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.finishExam = this.finishExam.bind(this);
    this.createExamResults = this.createExamResults.bind(this);
    this.submitExamResults = this.submitExamResults.bind(this);
  }

  componentDidMount(): void {
    const {
      challengeMounted,
      data: {
        challengeNode: {
          challenge: { challengeType, helpCategory, title }
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

    this._container?.current?.focus();
  }

  componentWillUnmount() {
    this.props.stopExam();
    clearInterval(this.timerInterval);
    window.removeEventListener('beforeunload', this.stopWindowClose);
    window.removeEventListener('unload', this.stopWindowClose);
    window.removeEventListener('popstate', this.stopBrowserBack);
  }

  stopWindowClose = (event: Event) => {
    event.preventDefault();
    alert('stop!');
  };

  stopBrowserBack = (event: Event) => {
    event.preventDefault();
    window.history.forward();
    alert('stop!');
  };

  runExam = () => {
    // TODO: show loader
    // TODO: fetch exam from server/database
    const newExam = this.state.generatedExam.map(q => {
      return { question: q.question, answer: null };
    });

    this.timerInterval = setInterval(() => {
      this.setState({
        examTimeInSeconds: this.state.examTimeInSeconds + 1
      });
    }, 1000);

    this.setState(
      {
        userExam: newExam
      },
      this.props.startExam
    );

    window.addEventListener('beforeunload', this.stopWindowClose);
    window.addEventListener('unload', this.stopWindowClose);
    window.addEventListener('popstate', this.stopBrowserBack);
  };

  selectAnswer = (index: number, option: string): void => {
    const newExam = Array.from(this.state.userExam);
    newExam[index].answer = option;
    this.setState({
      userExam: newExam
    });
  };

  goToPreviousQuestion = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex - 1
    });
  };

  goToNextQuestion = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    });
  };

  // TODO: have server check the exam
  createExamResults = () => {
    // TODO: show loader
    const { setExamResults } = this.props;
    const { userExam, examTimeInSeconds } = this.state;

    const results: ExamResultQuestion[] = [];

    userExam.forEach(userQuestion => {
      const questionInDb = examInDatabase.find(
        dbQuestion => userQuestion.question === dbQuestion.question
      );

      const questionResult = {
        question: userQuestion.question,
        answer: userQuestion.answer,
        correct: questionInDb?.correctAnswer === userQuestion.answer
      };

      results.push(questionResult as ExamResultQuestion);
    });

    const examResults = {
      timeInSeconds: examTimeInSeconds,
      results
    };

    setExamResults(examResults);
  };

  finishExam = () => {
    clearInterval(this.timerInterval);
    this.props.closeFinishExamModal();
    this.createExamResults();
    this.setState({
      showResults: true
    });
  };

  submitExamResults = () => {
    window.removeEventListener('beforeunload', this.stopWindowClose);
    window.removeEventListener('unload', this.stopWindowClose);
    window.removeEventListener('popstate', this.stopBrowserBack);
    this.props.submitChallenge();
    this.props.stopExam();
  };

  render() {
    const {
      data: {
        challengeNode: {
          challenge: {
            block,
            description,
            fields: { blockName },
            instructions,
            superBlock,
            title,
            translationPending
          }
        }
      },
      examInProgress,
      isChallengeCompleted,
      openFinishExamModal,
      pageContext: {
        challengeMeta: { nextChallengePath, prevChallengePath }
      },
      t
    } = this.props;

    const {
      examTimeInSeconds,
      currentQuestionIndex,
      generatedExam,
      userExam,
      showResults
    } = this.state;

    const blockNameTitle = `${t(
      `intro:${superBlock}.blocks.${block}.title`
    )}: ${title}`;
    const windowTitle = `${blockNameTitle} | freeCodeCamp.org`;
    const ariaLabel = t('aria.answer');

    return examInProgress ? (
      <Grid>
        <Row>
          <Spacer size='medium' />
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={12}>
            {showResults ? (
              <ExamResults
                title={title}
                submitExamResults={this.submitExamResults}
              />
            ) : (
              <div className='exam-wrapper'>
                <div className='exam-header'>
                  <div>{title}</div>
                  <span>|</span>
                  <div> Time: {formatSecondsToTime(examTimeInSeconds)}</div>
                  <span>|</span>
                  <div>
                    Question {currentQuestionIndex + 1} of{' '}
                    {generatedExam.length}
                  </div>
                </div>
                <hr />
                <Spacer size='medium' />

                <div className='exam-questions'>
                  <div>{generatedExam[currentQuestionIndex].question}</div>
                  <Spacer size='large' />
                  <div className='exam-answers'>
                    {generatedExam[currentQuestionIndex].answers.map(
                      (option, answerIndex) => (
                        <label className='exam-answer-label' key={answerIndex}>
                          <input
                            aria-label={ariaLabel}
                            checked={
                              userExam[currentQuestionIndex].answer === option
                            }
                            className='exam-answer-input-hidden'
                            name='exam'
                            onChange={() =>
                              this.selectAnswer(currentQuestionIndex, option)
                            }
                            type='radio'
                            value={option}
                          />{' '}
                          <span className='exam-answer-input-visible'>
                            {userExam[currentQuestionIndex].answer ===
                            option ? (
                              <span className='exam-answer-input-selected' />
                            ) : null}
                          </span>
                          <PrismFormatted
                            className={'exam-answer'}
                            text={option}
                          />
                        </label>
                      )
                    )}
                  </div>
                </div>
                <Spacer size='large' />

                <div className='exam-buttons'>
                  <Button
                    block={true}
                    className='exam-button'
                    disabled={currentQuestionIndex <= 0}
                    bsStyle='primary'
                    data-cy='previous-exam-question'
                    onClick={this.goToPreviousQuestion}
                  >
                    {t('buttons.previous-question')}
                  </Button>

                  {currentQuestionIndex === generatedExam.length - 1 ? (
                    <Button
                      block={true}
                      disabled={!userExam[currentQuestionIndex].answer}
                      className='exam-button'
                      bsStyle='primary'
                      data-cy='finish-exam'
                      onClick={openFinishExamModal}
                    >
                      {t('buttons.finish-exam')}
                    </Button>
                  ) : (
                    <Button
                      block={true}
                      disabled={!userExam[currentQuestionIndex].answer}
                      className='exam-button'
                      bsStyle='primary'
                      data-cy='next-exam-question'
                      onClick={this.goToNextQuestion}
                    >
                      {t('buttons.next-question')}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </Col>
          <FinishExamModal finishExam={this.finishExam} />
        </Row>
      </Grid>
    ) : (
      <Hotkeys
        innerRef={this._container}
        nextChallengePath={nextChallengePath}
        prevChallengePath={prevChallengePath}
      >
        <LearnLayout>
          <Helmet title={windowTitle} />
          <Grid>
            <Row>
              <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                <ChallengeTitle
                  isCompleted={isChallengeCompleted}
                  translationPending={translationPending}
                >
                  {title}
                </ChallengeTitle>
                <Spacer size='medium' />
                <PrismFormatted text={description} />
                <Spacer size='medium' />
                <PrismFormatted text={instructions} />

                <Button
                  block={true}
                  bsStyle='primary'
                  data-cy='start-exam'
                  onClick={this.runExam}
                >
                  {t('buttons.click-start-exam')}
                </Button>
              </Col>
              <CompletionModal />
              <HelpModal challengeTitle={title} challengeBlock={blockName} />
            </Row>
          </Grid>
        </LearnLayout>
      </Hotkeys>
    );
  }
}

ShowExam.displayName = 'ShowExam';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ShowExam));

// GraphQL
export const query = graphql`
  query ExamChallenge($slug: String!) {
    challengeNode(challenge: { fields: { slug: { eq: $slug } } }) {
      challenge {
        challengeType
        description
        fields {
          blockName
        }
        helpCategory
        id
        instructions
        superBlock
        title
        translationPending
      }
    }
  }
`;
