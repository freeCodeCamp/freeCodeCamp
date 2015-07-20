import React, { PropTypes } from 'react';
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

export default React.createClass({
  getInitialState: () => ({
    showInfo: false,
    shake: false
  }),
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

  render() {
    const { showInfo, shake } = this.state;
    const { currentHike: { tests = [] } } = this.props;
    const { number = '1' } = this.props.params;

    const [question, answer, info] = tests[number - 1] || [];

    return (
      <Col
        xs={ 8 }
        xsOffset={ 2 }>
        <Row>
          <Panel className={ shake ? 'animated shake' : '' }>
            <p>{ question }</p>
          </Panel>
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
