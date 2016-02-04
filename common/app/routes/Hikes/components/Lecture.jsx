import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import Vimeo from 'react-vimeo';
import { createSelector } from 'reselect';
import debug from 'debug';

const log = debug('fcc:hikes');

const mapStateToProps = createSelector(
  state => state.hikesApp.hikes.entities,
  state => state.hikesApp.currentHike,
  (hikes, currentHikeDashedName) => {
    const currentHike = hikes[currentHikeDashedName];
    const {
      dashedName,
      description,
      challengeSeed: [id] = [0]
    } = currentHike || {};
    return {
      id,
      dashedName,
      description
    };
  }
);

export class Lecture extends React.Component {
  static displayName = 'Lecture';

  static propTypes = {
    dashedName: PropTypes.string,
    description: PropTypes.array,
    id: PropTypes.string,
    hikesActions: PropTypes.object
  };

  shouldComponentUpdate(nextProps) {
    const { props } = this;
    return nextProps.id !== props.id;
  }

  handleError: log;

  handleFinish(hikesActions) {
    debug('loading questions');
    hikesActions.toggleQuestions();
  }

  renderTranscript(transcript, dashedName) {
    return transcript.map((line, index) => (
      <p
        className='lead text-left'
        key={ dashedName + index }>
        { line }
      </p>
    ));
  }

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
          <article>
            { this.renderTranscript(description, dashedName) }
          </article>
          <Button
            block={ true }
            bsSize='large'
            bsStyle='primary'
            onClick={ () => this.handleFinish(hikesActions) }>
            Take me to the Questions
          </Button>
        </Row>
      </Col>
    );
  }
}

export default connect(mapStateToProps)(Lecture);
