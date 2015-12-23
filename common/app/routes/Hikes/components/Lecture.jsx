import React, { PropTypes } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { History } from 'react-router';
import Vimeo from 'react-vimeo';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes');

export default React.createClass({
  displayName: 'Lecture',
  mixins: [History],

  propTypes: {
    dashedName: PropTypes.string,
    description: PropTypes.array,
    id: PropTypes.string
  },

  handleError: debug,

  handleFinish() {
    debug('loading questions');
  },

  renderTranscript(transcript, dashedName) {
    return transcript.map((line, index) => (
      <p key={ dashedName + index }>{ line }</p>
    ));
  },

  render() {
    const {
      id = '1',
      dashedName,
      description = []
    } = this.props;

    return (
      <Col xs={ 12 }>
        <Row>
          <Vimeo
            onError={ this.handleError }
            onFinish= { this.handleFinish }
            videoId={ id } />
        </Row>
        <Row>
          { this.renderTranscript(description, dashedName) }
          <Button
            block={ true }
            bsSize='large'
            onClick={ this.handleFinish }>
            Take me to the Questions
          </Button>
        </Row>
      </Col>
    );
  }
});
