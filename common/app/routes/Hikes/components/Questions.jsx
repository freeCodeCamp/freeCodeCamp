import React, { PropTypes } from 'react';
import { Motion } from 'react-motion';
import { History, Lifecycle } from 'react-router';
import debugFactory from 'debug';
import {
  Button,
  Col,
  Modal,
  Panel,
  Row
} from 'react-bootstrap';

import { postJSON$ } from '../../../../utils/ajax-stream.js';

const debug = debugFactory('freecc:hikes');
const ANSWER_THRESHOLD = 200;

export default React.createClass({
  displayName: 'Questions',

  mixins: [
    History,
    Lifecycle
  ],

  propTypes: {
    currentHike: PropTypes.object,
    dashedName: PropTypes.string,
    hikes: PropTypes.array,
    params: PropTypes.object
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
    const { hikes, currentHike } = this.props;
    const { dashedName, number } = this.props.params;
    const { id, name, difficulty, tests } = currentHike;
    const nextQuestionIndex = +number;

    postJSON$('/completed-challenge', { id, name }).subscribeOnCompleted(() => {
      if (tests[nextQuestionIndex]) {
        return this.history.pushState(
          null,
          `/hikes/${ dashedName }/questions/${ nextQuestionIndex + 1 }`
        );
      }
      // next questions does not exist;
      debug('finding next hike');
      const nextHike = [].slice.call(hikes)
        // hikes is in oder of difficulty, lets get reverse order
        .reverse()
        // now lets find the hike with the difficulty right above this one
        .reduce((lowerHike, hike) => {
          if (hike.difficulty > difficulty) {
            return hike;
          }
          return lowerHike;
        }, null);

      if (nextHike) {
        return this.history.pushState(null, `/hikes/${ nextHike.dashedName }`);
      }
      debug(
        'next Hike was not found, currentHike %s',
        currentHike.dashedName
      );
      this.history.pushState(null, '/hikes');
    });
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
    const { currentHike: { tests = [] } } = this.props;
    const { number = '1' } = this.props.params;

    const [question, answer, info] = tests[number - 1] || [];

    return (
      <Col
        onMouseUp={ this.handleMouseUp }
        xs={ 8 }
        xsOffset={ 2 }>
        <Row>
          <Motion style={{ x: this.getTweenValues }}>
            { this.renderQuestion(number, question, answer, shake) }
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
});
