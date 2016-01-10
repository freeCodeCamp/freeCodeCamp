import React, { PropTypes } from 'react';
import { spring, Motion } from 'react-motion';
import { contain } from 'thundercats-react';
import {
  Button,
  Col,
  Modal,
  Panel,
  Row
} from 'react-bootstrap';

const answerThreshold = 200;

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
        showInfo = false,
        shake = false
      } = hikesApp;
      return {
        hike: currentHike,
        currentQuestion,
        mouse,
        isCorrect,
        delta,
        isPressed,
        showInfo,
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
      showInfo: PropTypes.bool,
      shake: PropTypes.bool,
      isSignedIn: PropTypes.bool,
      hikesActions: PropTypes.object
    },

    handleMouseUp(e, answer) {
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

    onAnswer(answer, userAnswer) {
      const { isSignedIn, hike, hikesActions } = this.props;
      return (e) => {
        if (e && e.preventDefault) {
          e.preventDefault();
        }

        return hikesActions.answer({
          answer,
          userAnswer,
          hike,
          isSignedIn
        });
      };
    },

    renderInfo(showInfo, info, hideInfo) {
      if (!info) {
        return null;
      }
      return (
        <Modal
          backdrop={ true }
          onHide={ hideInfo }
          show={ showInfo }>
          <Modal.Body>
            <h3>
              { info }
            </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button
              block={ true }
              bsSize='large'
              onClick={ hideInfo }>
              hide
            </Button>
          </Modal.Footer>
        </Modal>
      );
    },

    renderQuestion(number, question, answer, shake) {
      const { hikesActions } = this.props;
      const mouseUp = e => this.handleMouseUp(e, answer);
      return ({ x }) => {
        const style = {
          WebkitTransform: `translate3d(${ x }px, 0, 0)`,
          transform: `translate3d(${ x }px, 0, 0)`
        };
        const title = <h4>Question { number }</h4>;
        return (
          <Panel
            className={ shake ? 'animated swing shake' : '' }
            header={ title }
            onMouseDown={ hikesActions.grabQuestion }
            onMouseLeave={ mouseUp }
            onMouseMove={ this.handleMouseMove }
            onMouseUp={ mouseUp }
            onTouchEnd={ mouseUp }
            onTouchMove={ this.handleMouseMove }
            onTouchStart={ hikesActions.grabQuestion }
            style={ style }>
            <p>{ question }</p>
          </Panel>
        );
      };
    },

    render() {
      const {
        hike: { tests = [] } = {},
        mouse: [x],
        currentQuestion,
        hikesActions,
        showInfo,
        shake
      } = this.props;

      const [ question, answer, info ] = tests[currentQuestion - 1] || [];

      return (
        <Col
          onMouseUp={ e => this.handleMouseUp(e, answer) }
          xs={ 8 }
          xsOffset={ 2 }>
          <Row>
            <Motion style={{ x: spring(x, [120, 10]) }}>
              { this.renderQuestion(currentQuestion, question, answer, shake) }
            </Motion>
            { this.renderInfo(showInfo, info, hikesActions.hideInfo) }
            <Panel>
              <Button
                bsSize='large'
                className='pull-left'
                onClick={ this.onAnswer(answer, false) }>
                false
              </Button>
              <Button
                bsSize='large'
                className='pull-right'
                onClick={ this.onAnswer(answer, true) }>
                true
              </Button>
            </Panel>
          </Row>
        </Col>
      );
    }
  })
);
