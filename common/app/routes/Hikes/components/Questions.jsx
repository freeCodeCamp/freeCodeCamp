import React, { PropTypes } from 'react';
import { Motion } from 'react-motion';
import { contain } from 'thundercats-react';
import debugFactory from 'debug';
import {
  Button,
  Col,
  Modal,
  Panel,
  Row
} from 'react-bootstrap';

const debug = debugFactory('freecc:hikes');
const ANSWER_THRESHOLD = 200;

export default contain(
  {
    store: 'appStore',
    actions: ['hikesAction'],
    map(state) {
      const { currentQuestion, currentHike } = state.hikesApp;

      return {
        hike: currentHike,
        currentQuestion
      };
    }
  },
  React.createClass({
    displayName: 'Questions',

    propTypes: {
      dashedName: PropTypes.string,
      currentQuestion: PropTypes.number,
      hike: PropTypes.object,
      hikesActions: PropTypes.object
    },

    getInitialState: () => ({
      mouse: [0, 0],
      correct: false,
      delta: [0, 0],
      isPressed: false,
      showInfo: false,
      shake: false
    }),

    getTweenValues() {
      const { mouse: [x, y] } = this.state;
      return {
        val: { x, y },
        config: [120, 10]
      };
    },

    handleMouseDown({ pageX, pageY, touches }) {
      if (touches) {
        ({ pageX, pageY } = touches[0]);
      }
      const { mouse: [pressX, pressY] } = this.state;
      const dx = pageX - pressX;
      const dy = pageY - pressY;
      this.setState({
        isPressed: true,
        delta: [dx, dy],
        mouse: [pageX - dx, pageY - dy]
      });
    },

    handleMouseUp() {
      const { correct } = this.state;
      if (correct) {
        return this.setState({
          isPressed: false,
          delta: [0, 0]
        });
      }
      this.setState({
        isPressed: false,
        mouse: [0, 0],
        delta: [0, 0]
      });
    },

    handleMouseMove(answer) {
      return (e) => {
        let { pageX, pageY, touches } = e;

        if (touches) {
          e.preventDefault();
          // these reassins the values of pageX, pageY from touches
          ({ pageX, pageY } = touches[0]);
        }

        const { isPressed, delta: [dx, dy] } = this.state;
        if (isPressed) {
          const mouse = [pageX - dx, pageY - dy];
          if (mouse[0] >= ANSWER_THRESHOLD) {
            this.handleMouseUp();
            return this.onAnswer(answer, true)();
          }
          if (mouse[0] <= -ANSWER_THRESHOLD) {
            this.handleMouseUp();
            return this.onAnswer(answer, false)();
          }
          this.setState({ mouse });
        }
      };
    },

    hideInfo() {
      this.setState({ showInfo: false });
    },

    onAnswer(answer, userAnswer) {
      return (e) => {
        if (e && e.preventDefault) {
          e.preventDefault();
        }

        if (this.disposeTimeout) {
          clearTimeout(this.disposeTimeout);
          this.disposeTimeout = null;
        }

        if (answer === userAnswer) {
          debug('correct answer!');
          this.setState({
            correct: true,
            mouse: [ userAnswer ? 1000 : -1000, 0]
          });
          this.disposeTimeout = setTimeout(() => {
            this.onCorrectAnswer();
          }, 1000);
          return;
        }

        debug('incorrect');
        this.setState({
          showInfo: true,
          shake: true
        });

        this.disposeTimeout = setTimeout(
          () => this.setState({ shake: false }),
          500
        );
      };
    },

    onCorrectAnswer() {
      const {
        hikesActions,
        hike: { id, name }
      } = this.props;

      hikesActions.completedHike({ id, name });
    },

    routerWillLeave(nextState, router, cb) {
      // TODO(berks): do animated transitions here stuff here
      this.setState({
        showInfo: false,
        correct: false,
        mouse: [0, 0]
      }, cb);
    },

    renderInfo(showInfo, info) {
      if (!info) {
        return null;
      }
      return (
        <Modal
          backdrop={ true }
          onHide={ this.hideInfo }
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
              onClick={ this.hideInfo }>
              hide
            </Button>
          </Modal.Footer>
        </Modal>
      );
    },

    renderQuestion(number, question, answer, shake) {
      return ({ x: xFunc }) => {
        const x = xFunc().val.x;
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
      const { showInfo, shake } = this.state;
      const {
        hike: { tests = [] } = {},
        currentQuestion
      } = this.props;

      const [ question, answer, info ] = tests[currentQuestion - 1] || [];

      return (
        <Col
          onMouseUp={ this.handleMouseUp }
          xs={ 8 }
          xsOffset={ 2 }>
          <Row>
            <Motion style={{ x: this.getTweenValues }}>
              { this.renderQuestion(currentQuestion, question, answer, shake) }
            </Motion>
            { this.renderInfo(showInfo, info) }
            <Panel>
              <Button
                bsSize='large'
                className='pull-left'
                onClick={ this.onAnswer(answer, false, info) }>
                false
              </Button>
              <Button
                bsSize='large'
                className='pull-right'
                onClick={ this.onAnswer(answer, true, info) }>
                true
              </Button>
            </Panel>
          </Row>
        </Col>
      );
    }
  })
);
