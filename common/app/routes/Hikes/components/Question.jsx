import React, { PropTypes } from 'react';
import { Spring } from 'react-motion';
import { Navigation, TransitionHook } from 'react-router';
import debugFactory from 'debug';
import {
  Button,
  Col,
  Modal,
  Panel,
  Row
} from 'react-bootstrap';

const debug = debugFactory('freecc:hikes');
const ANSWER_THRESHOLD = 250;


export default React.createClass({
  displayName: 'Question',

  mixins: [
    Navigation,
    TransitionHook
  ],

  propTypes: {
    currentHike: PropTypes.object,
    dashedName: PropTypes.string,
    hikes: PropTypes.array,
    params: PropTypes.object
  },

  getInitialState: () => ({
    mouse: [0, 0],
    delta: [0, 0],
    isPressed: false,
    showInfo: false,
    shake: false
  }),

  getTweenValues() {
    const { mouse: [x, y] } = this.state;
    return {
      val: { x, y },
      config: [120, 17]
    };
  },

  handleMouseDown({ pageX, pageY }) {
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
    this.setState({
      isPressed: false,
      mouse: [0, 0],
      delta: [0, 0]
    });
  },

  handleMouseMove(answer) {
    return ({ pageX, pageY }) => {
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
      if (answer === userAnswer) {
        debug('correct answer!');
        return this.onCorrectAnswer();
      }
      debug('incorrect');
      this.setState({
        showInfo: true,
        shake: true
      });

      if (this.disposeTimeout) {
        clearTimeout(this.disposeTimeout);
        this.disposeTimeout = null;
      }
      this.disposeTimeout = setTimeout(
        () => this.setState({ shake: false }),
        500
      );
    };
  },

  onCorrectAnswer() {
    const { hikes, currentHike } = this.props;
    const { dashedName, number } = this.props.params;
    const { difficulty, tests } = currentHike;
    const nextQuestionIndex = +number;

    if (tests[nextQuestionIndex]) {
      return this.transitionTo(
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
      return this.transitionTo(`/hikes/${ nextHike.dashedName }`);
    }
    debug('next Hike was not found, currentHike %s', currentHike.dashedName);
    this.transitionTo('/hikes');
  },

  routerWillLeave(/* nextState, router, cb[optional] */) {
    // TODO(berks): do animated transitions here stuff here
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

  renderQuestion(question, answer, shake) {
    return ({ val: { x } }) => {
      const style = {
        WebkitTransform: `translate3d(${ x }px, 0, 0)`,
        transform: `translate3d(${ x }px, 0, 0)`
      };
      return (
        <Panel
          className={ shake ? 'animated swing shake' : '' }
          onMouseDown={ this.handleMouseDown }
          onMouseLeave={ this.handleMouseUp }
          onMouseMove={ this.handleMouseMove(answer) }
          onMouseUp={ this.handleMouseUp }
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
          <Spring endValue={ this.getTweenValues }>
            { this.renderQuestion(question, answer, shake) }
          </Spring>
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
