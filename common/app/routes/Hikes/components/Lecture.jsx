import React, { PropTypes } from 'react';
import { Button, Col, Row, Panel } from 'react-bootstrap';
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
    const { dashedName } = this.props.params;
    this.history.pushState(null, `/hikes/${dashedName}/questions/1`);
  },

  renderTranscript(transcript, dashedName) {
    return transcript.map((line, index) => (
      <p key={ dashedName + index }>{ line }</p>
    ));
  },

  render() {
    const {
      title,
      challengeSeed = ['1'],
      description = []
    } = this.props.currentHike;
    const { dashedName } = this.props.params;

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
        <Row>
          <Col xs={ 12 }>
            <Panel>
              { this.renderTranscript(description, dashedName) }
            </Panel>
            <Panel>
              <Button
                block={ true }
                bsSize='large'
                onClick={ this.handleFinish }>
                Take me to the Questions
              </Button>
            </Panel>
          </Col>
        </Row>
      </Col>
    );
  }
});
