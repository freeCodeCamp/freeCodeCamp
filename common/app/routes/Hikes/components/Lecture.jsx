import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Col, Row, Panel } from 'react-bootstrap';
import stampit from 'react-stampit';
import Vimeo from 'react-vimeo';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes');

export default contain(
  {
    store: 'hikesStore',
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
    displayName: 'Lecture',

    propTypes: {
      params: PropTypes.object
    },

    handleError: debug,
    handleFinish() {
      debug('loading questions');
    },

    renderQuestions(questions) {
      return questions.map(([question]) => {
        return (
          <Panel>
            <p>{ question }</p>
          </Panel>
        );
      });
    },

    render() {
      const {
        title,
        challengeSeed = ['1']
      } = this.props.currentHike;

      const [ id ] = challengeSeed;

      const videoTitle = <h2>{ title }</h2>;
      return (
        <Col xs={ 12 }>
          <Row>
            <Panel className={ 'text-center' } title={ videoTitle }>
              <Vimeo
                onError={ this.handleError }
                onFinish= { this.handleFinish }
                videoId={ id } />
            </Panel>
          </Row>
        </Col>
      );
    }
  })
);
