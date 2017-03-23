import React, { PropTypes } from 'react';
import { spring, Motion } from 'react-motion';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import { createSelector } from 'reselect';

import {
  answerQuestion,
  moveQuestion,
  releaseQuestion,
  grabQuestion
} from '../../redux/actions';
import { challengeSelector } from '../../redux/selectors';

const answerThreshold = 100;
const springProperties = { stiffness: 120, damping: 10 };
const actionsToBind = {
  answerQuestion,
  moveQuestion,
  releaseQuestion,
  grabQuestion
};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp,
  state => state.app.isSignedIn,
  (
    { challenge: { tests = [ ] }},
    {
      currentQuestion = 1,
      mouse = [ 0, 0 ],
      delta = [ 0, 0 ],
      isCorrect = false,
      isPressed = false,
      shouldShakeQuestion = false
    },
    isSignedIn
  ) => ({
    tests,
    currentQuestion,
    isCorrect,
    mouse,
    delta,
    isPressed,
    shouldShakeQuestion,
    isSignedIn
  })
);
const propTypes = {
  answerQuestion: PropTypes.func,
  currentQuestion: PropTypes.number,
  delta: PropTypes.array,
  grabQuestion: PropTypes.func,
  isCorrect: PropTypes.bool,
  isPressed: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  mouse: PropTypes.array,
  moveQuestion: PropTypes.func,
  releaseQuestion: PropTypes.func,
  shouldShakeQuestion: PropTypes.bool,
  tests: PropTypes.array
};

class Question extends React.Component {
  handleMouseUp(e, answer, info) {
    e.stopPropagation();
    if (!this.props.isPressed) {
      return null;
    }

    const {
      releaseQuestion,
      answerQuestion
    } = this.props;

    releaseQuestion();
    return answerQuestion({
      e,
      answer,
      info,
      threshold: answerThreshold
    });
  }

  handleMouseMove(isPressed, { delta, moveQuestion }) {
    if (!isPressed) {
      return null;
    }
    return e => moveQuestion({ e, delta });
  }

  onAnswer(answer, userAnswer, info) {
    const { isSignedIn, answerQuestion } = this.props;
    return e => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      answerQuestion({
        answer,
        userAnswer,
        info,
        isSignedIn
      });
    };
  }

  renderQuestion(number, question, answer, shouldShakeQuestion, info) {
    const { grabQuestion, isPressed } = this.props;
    const mouseUp = e => this.handleMouseUp(e, answer, info);
    return ({ x }) => {
      const style = {
        WebkitTransform: `translate3d(${ x }px, 0, 0)`,
        transform: `translate3d(${ x }px, 0, 0)`
      };
      return (
        <article
          className={ shouldShakeQuestion ? 'animated swing shake' : '' }
          onMouseDown={ grabQuestion }
          onMouseLeave={ mouseUp }
          onMouseMove={ this.handleMouseMove(isPressed, this.props) }
          onMouseUp={ mouseUp }
          onTouchEnd={ mouseUp }
          onTouchMove={ this.handleMouseMove(isPressed, this.props) }
          onTouchStart={ grabQuestion }
          style={ style }
          >
          <h4>Question { number }</h4>
          <p>{ question }</p>
        </article>
      );
    };
  }

  render() {
    const {
      tests = [],
      mouse: [xPosition],
      currentQuestion,
      shouldShakeQuestion
    } = this.props;

    const [ question, answer, info ] = tests[currentQuestion - 1] || [];
    const questionElement = this.renderQuestion(
      currentQuestion,
      question,
      answer,
      shouldShakeQuestion,
      info
    );

    return (
      <Col
        onMouseUp={ e => this.handleMouseUp(e, answer, info) }
        xs={ 8 }
        xsOffset={ 2 }
        >
        <Row>
          <Motion style={{ x: spring(xPosition, springProperties) }}>
            { questionElement }
          </Motion>
          <div className='spacer' />
          <hr />
          <div>
            <Button
              bsSize='large'
              bsStyle='primary'
              className='pull-left'
              onClick={ this.onAnswer(answer, false, info) }
              >
              false
            </Button>
            <Button
              bsSize='large'
              bsStyle='primary'
              className='pull-right'
              onClick={ this.onAnswer(answer, true, info) }
              >
              true
            </Button>
          </div>
        </Row>
      </Col>
    );
  }
}

Question.displayName = 'Question';
Question.propTypes = propTypes;

export default connect(mapStateToProps, actionsToBind)(Question);
