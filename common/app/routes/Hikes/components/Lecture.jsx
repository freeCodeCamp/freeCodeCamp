import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Button, Col, Row } from 'react-bootstrap';
import { History } from 'react-router';
import Vimeo from 'react-vimeo';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes');

export default contain(
  {
    actions: ['hikesActions'],
    store: 'appStore',
    map(state) {
      const {
        currentHike: {
          dashedName,
          description,
          challengeSeed: [id] = [0]
        } = {}
      } = state.hikesApp;

      return {
        dashedName,
        description,
        id
      };
    }
  },
  React.createClass({
    displayName: 'Lecture',
    mixins: [History],

    propTypes: {
      dashedName: PropTypes.string,
      description: PropTypes.array,
      id: PropTypes.string,
      hikesActions: PropTypes.object
    },

    shouldComponentUpdate(nextProps) {
      const { props } = this;
      return nextProps.id !== props.id;
    },

    handleError: debug,

    handleFinish(hikesActions) {
      debug('loading questions');
      hikesActions.toggleQuestions();
    },

    renderTranscript(transcript, dashedName) {
      return transcript.map((line, index) => (
        <p key={ dashedName + index }>{ line }</p>
      ));
    },

    render() {
      const {
        id = '1',
        description = [],
        hikesActions
      } = this.props;
      const dashedName = 'foo';

      return (
        <Col xs={ 12 }>
          <Row>
            <Vimeo
              onError={ this.handleError }
              onFinish= { () => this.handleFinish(hikesActions) }
              videoId={ id } />
          </Row>
          <Row>
            { this.renderTranscript(description, dashedName) }
            <Button
              block={ true }
              bsSize='large'
              onClick={ () => this.handleFinish(hikesActions) }>
              Take me to the Questions
            </Button>
          </Row>
        </Col>
      );
    }
  })
);
