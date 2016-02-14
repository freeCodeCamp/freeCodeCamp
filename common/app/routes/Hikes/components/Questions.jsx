import React, { PropTypes } from 'react';
import { spring, Motion } from 'react-motion';
import { contain } from 'thundercats-react';
import { Button, Col, Row } from 'react-bootstrap';

const answerThreshold = 100;

export default contain(
  {
    store: 'appStore',
    actions: ['hikesActions'],
    map({ hikesApp, username }) {
      const {
        currentHike,
        currentQuestion = 1,
        mouse = [0, 0],
        isCorrect = false,
        delta = [0, 0],
        isPressed = false,
        shake = false
      } = hikesApp;
      return {
        hike: currentHike,
        currentQuestion,
        mouse,
        isCorrect,
        delta,
        isPressed,
        shake,
        isSignedIn: !!username
      };
    }
  },
  React.createClass({
    displayName: 'Questions',

    propTypes: {
      hike: PropTypes.object,
      currentQuestion: PropTypes.number,
      mouse: PropTypes.array,
      isCorrect: PropTypes.bool,
      delta: PropTypes.array,
      isPressed: PropTypes.bool,
      shake: PropTypes.bool,
      isSignedIn: PropTypes.bool,
      hikesActions: PropTypes.object
    },

    handleMouseUp(e, answer, info) {
      e.stopPropagation();
      if (!this.props.isPressed) {
        return null;
      }

      const {
        hike,
        currentQuestion,
        isSignedIn,
        delta
      } = this.props;

      this.props.hikesActions.releaseQuestion();
      this.props.hikesActions.answer({
        e,
        answer,
        hike,
        delta,
        currentQuestion,
        isSignedIn,
        info,
        threshold: answerThreshold
      });
    },

    handleMouseMove(e) {
      if (!this.props.isPressed) {
        return null;
      }
      const { delta, hikesActions } = this.props;

      hikesActions.moveQuestion({ e, delta });
    },

    onAnswer(answer, userAnswer, info) {
      const { isSignedIn, hike, currentQuestion, hikesActions } = this.props;
      return (e) => {
        if (e && e.preventDefault) {
          e.preventDefault();
        }

        return hikesActions.answer({
          answer,
          userAnswer,
          currentQuestion,
          hike,
          info,
          isSignedIn
        });
      };
    },

    renderQuestion(number, question, answer, shake, info) {
      const { hikesActions } = this.props;
      const mouseUp = e => this.handleMouseUp(e, answer, info);
      return ({ x }) => {
        const style = {
          WebkitTransform: `translate3d(${ x }px, 0, 0)`,
          transform: `translate3d(${ x }px, 0, 0)`
        };
        return (
          <article
            className={ shake ? 'animated swing shake' : '' }
            onMouseDown={ hikesActions.grabQuestion }
            onMouseLeave={ mouseUp }
            onMouseMove={ this.handleMouseMove }
            onMouseUp={ mouseUp }
            onTouchEnd={ mouseUp }
            onTouchMove={ this.handleMouseMove }
            onTouchStart={ hikesActions.grabQuestion }
            style={ style }>
            <h4>Question { number }</h4>
            <p>{ question }</p>
          </article>
        );
      };
    },

    render() {
      const {
        hike: { tests = [] } = {},
        mouse: [x],
        currentQuestion,
        shake
      } = this.props;

      const [ question, answer, info ] = tests[currentQuestion - 1] || [];
      const questionElement = this.renderQuestion(
        currentQuestion,
        question,
        answer,
        shake,
        info
      );

      return (
        <Col
          onMouseUp={ e => this.handleMouseUp(e, answer, info) }
          xs={ 8 }
          xsOffset={ 2 }>
          <Row>
            <Motion style={{ x: spring(x, { stiffness: 120, damping: 10 }) }}>
              { questionElement }
            </Motion>
            <div className='spacer' />
            <hr />
            <div>
              <Button
                bsSize='large'
                bsStyle='primary'
                className='pull-left'
                onClick={ this.onAnswer(answer, false, info) }>
                false
              </Button>
              <Button
                bsSize='large'
                bsStyle='primary'
                className='pull-right'
                onClick={ this.onAnswer(answer, true, info) }>
                true
              </Button>
            </div>
          </Row>
        </Col>
      );
    }
  })
);
