import React, { PropTypes } from 'react';
import { Col, Row, Panel } from 'react-bootstrap';
import stampit from 'react-stampit';
import Vimeo from 'react-vimeo';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes');

export default stampit(React, {
  displayName: 'Lecture',

  propTypes: {
    params: PropTypes.object
  },

  handleError: debug,
  handleFinish() {
    debug('loading questions');
  },

  render() {
    const {
      id
    } = this.props.params;

    return (
      <Col xs={ 12 }>
        <Row>
          <Panel className={ 'text-center' }>
            <h2>Title</h2>
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
});
