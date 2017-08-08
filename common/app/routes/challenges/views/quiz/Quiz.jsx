import React, { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Col, Row } from 'react-bootstrap';
import Choice from './Choice.jsx';

import {
  currentIndexSelector,
  selectedChoiceSelector,
  nextQuestion,
  selectChoice,
  correctSelector,
  incrementCorrect,
  resetQuiz,
  resetChoice
} from './redux';

import { submitChallenge, challengeMetaSelector } from '../../redux';
import { challengeSelector } from '../../../../redux';

const mapStateToProps = createSelector(
  challengeSelector,
  challengeMetaSelector,
  currentIndexSelector,
  selectedChoiceSelector,
  correctSelector,
  (
    {
      description = [],
      title
    },
    meta,
    currentIndex,
    selectedChoice,
    correct
  ) => ({
    title,
    description,
    meta,
    currentIndex,
    selectedChoice,
    correct
  })
);

function mapDispatchToProps(dispatch) {
  return () => bindActionCreators({
    nextQuestion,
    selectChoice,
    incrementCorrect,
    resetQuiz,
    resetChoice,
    submitChallenge
  }, dispatch);
}

const propTypes = {
  correct: PropTypes.number,
  currentIndex: PropTypes.number,
  description: PropTypes.string,
  meta: PropTypes.object,
  nextQuestion: PropTypes.fun,
  resetChoice: PropTypes.fun,
  resetQuiz: PropTypes.fun,
  selectedChoice: PropTypes.number,
  submitChallenge: PropTypes.fun
};

export class QuizChallenge extends PureComponent {

  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.submitChallenge = this.submitChallenge.bind(this);
  }

  nextQuestion() {
    this.props.resetChoice();
    this.props.nextQuestion();
  }

  submitChallenge() {
    this.props.resetQuiz();
    this.props.submitChallenge();
  }

  renderTitle() {
    return (
      <Row className='quizTitle'>
        <Col md={12}>
          <h4>{this.props.meta.title}</h4>
          <hr/>
        </Col>
      </Row>
    );
  }

  renderResults() {
    const isQuizPassed = this.props.correct === this.props.description.length;
    return (
      <div>
        {this.renderTitle()}
        <Row className='quizResults'>
          <Col md={12}>
            <h2>Quiz Results:</h2>

            <p>
              You got {this.props.correct} out of
               {this.props.description.length} correct!
            </p>

            {isQuizPassed === false ? (
              <div>
                <p>
                  You will need to get all the questions
                  correct in order to mark this quiz as completed.
                </p>
                <button
                  className='btn btn-lg btn-primary'
                  onClick={this.props.resetQuiz}
                  > Try Again
                </button>
              </div>
            ) : (
              <button
                className='btn btn-lg btn-primary'
                onClick={this.submitChallenge}
                > Finish Quiz
              </button>
            )}
          </Col>
        </Row>
      </div>
    );
  }

  renderQuiz() {
    const currentIndex = this.props.currentIndex;
    const question = this.props.description[currentIndex];
    return (
      <div>
        {this.renderTitle()}
        <Row>
          <Col md={6}>
            <h2 className='textCenter'>
              Question {currentIndex + 1} of {this.props.description.length}:
            </h2>

            <h3>
              {question.subtitle}:
            </h3>

            <p dangerouslySetInnerHTML={{__html: question.question}} />
          </Col>

          <Col md={6}>
            <h2 className='textCenter'>Choices</h2>

            {question.choices.map((choice, i) => (
              <Choice
                choice={choice}
                choiceIndex={i}
                isChoiceSelected={this.props.selectedChoice !== null}
                isCorrectChoice={question.answer === i}
                key={choice}
                selected={i === this.props.selectedChoice}
              />
            ))}
          </Col>
        </Row>

        {this.props.selectedChoice !== null &&
          <Row className='quizResults'>
            <Col md={6} mdPush={3}>
              <div className='messageDiv'>
                {this.props.selectedChoice === question.answer
                  ? <h2 className='correctAnswer'>
                      Correct, great work!
                    </h2>
                  : <h2 className='wrongAnswer'>
                      Sorry, that is not correct!
                    </h2>}
              </div>
              {this.props.selectedChoice !== question.answer &&
              <div className='explanation'>
                <h2>Explanation:</h2>
                <p dangerouslySetInnerHTML={{__html: question.explanation}} />
              </div>}
            </Col>

            <Col md={12}>
              <button
                className='btn btn-lg btn-primary'
                onClick={this.nextQuestion}
                >
                {currentIndex + 1 === this.props.description.length ?
                  'View Results' : 'Next Question'}
              </button>
            </Col>
          </Row>}
      </div>
    );
  }

  render() {
    return (
      <div className='quiz'>{
        this.props.currentIndex >= this.props.description.length ?
        this.renderResults() : this.renderQuiz()}
      </div>
    );
  }
}

QuizChallenge.displayName = 'QuizChallenge';
QuizChallenge.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizChallenge);
