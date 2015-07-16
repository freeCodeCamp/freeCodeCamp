import React, { PropTypes } from 'react';
import { Navigation } from 'react-router';
import stampit from 'react-stampit';
import { contain } from 'thundercats-react';
import {
  Button,
  Col,
  Row,
  Panel
} from 'react-bootstrap';
import debugFactory from 'debug';

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
    displayName: 'Question',

    propTypes: {
      params: PropTypes.object,
      currentHike: PropTypes.object,
      dashedName: PropTypes.string,
      tests: PropTypes.array
    },

    onAnswer(answer, userAnswer, e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      if (answer === userAnswer) {
        debug('correct answer!');
        return this.onCorrectAnswer();
      }
      return debug('incorrect');
    },

    onCorrectAnswer() {
      const { dashedName, number } = this.props.params;
      const nextQ = +number + 1;
      this.transitionTo(`/hikes/${ dashedName }/questions/${ nextQ }`);
    },

    render() {
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
            <Panel>
              <Button
                bsSize='large'
                className='pull-left'
                onClick={ this.onAnswer.bind(this, answer, false) }>
                false
              </Button>
              <Button
                bsSize='large'
                className='pull-right'
                onClick={ this.onAnswer.bind(this, answer, true) }>
                true
              </Button>
            </Panel>
          </Row>
        </Col>
      );
    }
  }).compose(Navigation)
);
