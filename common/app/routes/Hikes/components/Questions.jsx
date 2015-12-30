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

const ANSWER_THRESHOLD = 200;

export default contain(
  {
    store: 'appStore',
    actions: ['hikesActions'],
    map({ hikesApp }) {
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
        shake
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
      hikesActions: PropTypes.object
    },

    handleMouseDown({ pageX, pageY, touches }) {
      if (touches) {
        ({ pageX, pageY } = touches[0]);
      }
      const { mouse: [pressX, pressY], hikesActions } = this.props;
      hikesActions.grabQuestion({ pressX, pressY, pageX, pageY });
    },

    handleMouseUp() {
      if (!this.props.isPressed) {
        return null;
      }
      this.props.hikesActions.releaseQuestion();
    },

    handleMouseMove(answer) {
      if (!this.props.isPressed) {
        return () => {};
      }

      return (e) => {
        let { pageX, pageY, touches } = e;

        if (touches) {
          e.preventDefault();
          // these re-assigns the values of pageX, pageY from touches
          ({ pageX, pageY } = touches[0]);
        }

        const { delta: [dx, dy], hikesActions } = this.props;
        const mouse = [pageX - dx, pageY - dy];

        if (mouse[0] >= ANSWER_THRESHOLD) {
          return this.onAnswer(answer, true)();
        }

        if (mouse[0] <= -ANSWER_THRESHOLD) {
          return this.onAnswer(answer, false)();
        }

        return hikesActions.moveQuestion(mouse);
      };
    },

    onAnswer(answer, userAnswer) {
      const { hikesActions } = this.props;
      return (e) => {
        if (e && e.preventDefault) {
          e.preventDefault();
        }

        return hikesActions.answer({ answer, userAnswer, props: this.props });
      };
    },

    routerWillLeave(nextState, router, cb) {
      // TODO(berks): do animated transitions here stuff here
      this.setState({
        showInfo: false,
        isCorrect: false,
        mouse: [0, 0]
      }, cb);
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
            onMouseDown={ this.handleMouseDown }
            onMouseLeave={ this.handleMouseUp }
            onMouseMove={ this.handleMouseMove(answer) }
            onMouseUp={ this.handleMouseUp }
            onTouchEnd={ this.handleMouseUp }
            onTouchMove={ this.handleMouseMove(answer) }
            onTouchStart={ this.handleMouseDown }
            style={ style }>
            <p>{ question }</p>
          </Panel>
        );
      };
    },

    render() {
      const { showInfo, shake } = this.props;
      const {
        hike: { tests = [] } = {},
        mouse: [x],
        currentQuestion,
        hikesActions
      } = this.props;

      const [ question, answer, info ] = tests[currentQuestion - 1] || [];

      return (
        <Col
          onMouseUp={ this.handleMouseUp }
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
