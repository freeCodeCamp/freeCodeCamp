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

    render() {
      const { title, challengeSeed } = this.props.currentHike;
      const [ id ] = challengeSeed;

      return (
        <Col xs={ 12 }>
          <Row>
            <Panel className={ 'text-center' }>
              <h2>{ title }</h2>
            </Panel>
          </Row>
          <Row>
            <Vimeo
              onError={ this.handleError }
              onFinish= { this.handleFinish }
              videoId={ id } />
          </Row>
        </Col>
      );
    }
  })
);
