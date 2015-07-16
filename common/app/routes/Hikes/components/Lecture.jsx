import React, { PropTypes } from 'react';
import { Button, Col, Row, Panel } from 'react-bootstrap';
import { Navigation } from 'react-router';
import { contain } from 'thundercats-react';
import stampit from 'react-stampit';
import Vimeo from 'react-vimeo';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes');

export default contain(
  {
    store: 'hikesStore',
    fetchAction: 'hikesActions.fetchCurrentHike',
    getPayload({ currentHike, params: { dashedName } }) {
      const filterRegex = new RegExp(dashedName, 'i');
      if (currentHike && filterRegex.test(currentHike.dashedName)) {
        return {
          isPrimed: true,
          dashedName
        };
      }
      return {
        isPrimed: false,
        dashedName: dashedName
      };
    }
  },
  stampit(React, {
    displayName: 'Lecture',

    propTypes: {
      currentHike: PropTypes.object,
      dashedName: PropTypes.string,
      params: PropTypes.object
    },

    handleError: debug,

    handleFinish() {
      debug('loading questions');
      const { dashedName } = this.props.params;
      this.transitionTo(`/hikes/${dashedName}/questions/1`);
    },

    renderTranscript(transcript) {
      return transcript.map((line, index) => (
          <p key={ index }>{ line }</p>
        )
      );
    },

    render() {
      const {
        title,
        challengeSeed = ['1'],
        description = []
      } = this.props.currentHike;

      const [ id ] = challengeSeed;

      const videoTitle = <h2>{ title }</h2>;
      return (
        <Col xs={ 12 }>
          <Row>
            <Panel className={ 'text-center' } title={ videoTitle }>
              <Vimeo
                onError={ this.handleError }
                onFinish= { ::this.handleFinish }
                videoId={ id } />
            </Panel>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Panel>
                <p>
                  { this.renderTranscript(description) }
                </p>
              </Panel>
              <Panel>
                <Button
                  block={ true }
                  bsSize='large'
                  onClick={ ::this.handleFinish }>
                  Take me to the Questions
                </Button>
              </Panel>
            </Col>
          </Row>
        </Col>
      );
    }
  }).compose(Navigation)
);
