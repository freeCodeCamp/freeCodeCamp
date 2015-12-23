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
    currentHike: PropTypes.object,
    params: PropTypes.object
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
      challengeSeed = ['1'],
      description = []
    } = this.props.currentHike;
    const { dashedName } = this.props.params;

    const [ id ] = challengeSeed;

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
