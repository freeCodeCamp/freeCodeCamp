import React, { PropTypes } from 'react';
import { Col, Row, Panel } from 'react-bootstrap';
import { contain } from 'thundercats-react';
import stampit from 'react-stampit';
// import debugFactory from 'debug';

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
      tests: PropTypes.array
    },

    render() {
      const { tests: [test =[]] } = this.props;

      const [question, answer, info] = test;
      return (
        <Col xs={ 12 }>
          <Row>
            <Panel>
              <p>{ question }</p>
            </Panel>
          </Row>
        </Col>
      );
    }
  })
);
