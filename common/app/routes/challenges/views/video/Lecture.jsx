import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import Youtube from 'react-youtube';
import { createSelector } from 'reselect';
import debug from 'debug';

import { toggleQuestionView } from '../../redux/actions';
import { challengeSelector } from '../../redux/selectors';

const log = debug('fcc:videos');

const mapStateToProps = createSelector(
  challengeSelector,
  ({
    challenge: {
      id = 'foo',
      dashedName,
      description,
      challengeSeed: [ videoId ] = [ '1' ]
    }
  }) => ({
    id,
    videoId,
    dashedName,
    description
  })
);

const embedOpts = {
  width: '853',
  height: '480'
};
const propTypes = {
  dashedName: PropTypes.string,
  description: PropTypes.array,
  id: PropTypes.string,
  toggleQuestionView: PropTypes.func,
  videoId: PropTypes.string
};

export class Lecture extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { props } = this;
    return nextProps.id !== props.id;
  }

  handleError: log;

  renderTranscript(transcript, dashedName) {
    return transcript.map((line, index) => (
      <p
        className='lead text-left'
        dangerouslySetInnerHTML={{__html: line}}
        key={ dashedName + index }
      />
    ));
  }

  render() {
    const {
      id,
      videoId,
      description = [],
      toggleQuestionView
    } = this.props;

    const dashedName = 'foo';

    return (
      <Col xs={ 12 }>
        <Row>
          <Youtube
            id={ id }
            onError={ this.handleError }
            opts={ embedOpts }
            videoId={ videoId }
          />
        </Row>
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }
            xs={ 12 }
            >
            <div className='spacer' />
            <article>
              { this.renderTranscript(description, dashedName) }
            </article>
            <Button
              block={ true }
              bsSize='large'
              bsStyle='primary'
              onClick={ toggleQuestionView }
              >
              Take me to the Questions
            </Button>
            <div className='spacer' />
          </Col>
        </Row>
      </Col>
    );
  }
}

Lecture.displayName = 'Lecture';
Lecture.propTypes = propTypes;

export default connect(
  mapStateToProps,
  { toggleQuestionView }
)(Lecture);
