import React, { PropTypes } from 'react';
import { Navigation, TransitionHook } from 'react-router';
import stampit from 'react-stampit';
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

export default contain(
  {
    store: 'hikesStore',
    map({ hikes, currentHike }) {
      const { tests = [] } = currentHike;
      return {
        hikes,
        currentHike,
        tests
      };
    },
    fetchAction: 'hikesActions.getHike',
    getPayload({ currentHike, hikes, params: { dashedName } }) {
      const filterRegex = new RegExp(dashedName, 'i');
      if (currentHike && filterRegex.test(currentHike.dashedName)) {
        return {
          hikes: [],
          isPrimed: true,
          dashedName
        };
      }
      return {
        hikes,
        isPrimed: false,
        dashedName: dashedName
      };
    }
  },
  stampit(React, {
    state: { showInfo: false },
    displayName: 'Question',

    propTypes: {
      params: PropTypes.object,
      currentHike: PropTypes.object,
      dashedName: PropTypes.string,
      tests: PropTypes.array
    },

    onAnswer(answer, userAnswer, info, e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      if (answer === userAnswer) {
        debug('correct answer!');
        this.setState({ showInfo: true });
      }
      return debug('incorrect');
    },

    onCorrectAnswer() {
      const { hikes, currentHike } = this.props;
      const { dashedName, number } = this.props.params;
      const { difficulty, tests } = currentHike;
      const nextQuestionIndex = +number;
      this.setState({ showInfo: false }, () => {
        if (tests[nextQuestionIndex]) {
          return this.transitionTo(
            `/hikes/${ dashedName }/questions/${ nextQuestionIndex + 1 }`
          );
        }
        // next questions does not exit
        // find next hike
        //
        const nextHike = hikes
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
          return this.transitionTo(`${ nextHike.dashedName }`);
        }
        debug('next Hike was not found');
      });
    },

    routerWillLeave(/* nextState, router, cb[optional] */) {
      // TODO(berks): do animated transitions here stuff here
    },

    renderInfo(showInfo, info) {
      return (
        <Modal
          backdrop={ false }
          onHide={ ::this.onCorrectAnswer }
          show={ showInfo }>
          <Modal.Body>
            <h3>
              { info || 'correct!' }
            </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button
              block={ true }
              bsSize='large'
              onClick={ ::this.onCorrectAnswer }>
              To next questions
            </Button>
          </Modal.Footer>
        </Modal>
      );
    },

    render() {
      const { showInfo } = this.state;
      const { tests } = this.props;
      const { number = '1' } = this.props.params;

      const [question, answer, info] = tests[number - 1] || [];

      return (
        <Col
          xs={ 8 }
          xsOffset={ 2 }>
          <Row>
            <Panel>
              <p>{ question }</p>
            </Panel>
            { this.renderInfo(showInfo, info) }
            <Panel>
              <Button
                bsSize='large'
                className='pull-left'
                onClick={ this.onAnswer.bind(this, answer, false, info) }>
                false
              </Button>
              <Button
                bsSize='large'
                className='pull-right'
                onClick={ this.onAnswer.bind(this, answer, true, info) }>
                true
              </Button>
            </Panel>
          </Row>
        </Col>
      );
    }
  })
    .compose(Navigation)
    .compose(TransitionHook)
);
