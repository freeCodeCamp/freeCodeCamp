import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import Vimeo from 'react-vimeo';
import { createSelector } from 'reselect';
import debug from 'debug';

import { hardGoTo } from '../../../redux/actions';
import { toggleQuestionView } from '../redux/actions';
import { getCurrentHike } from '../redux/selectors';

const log = debug('fcc:hikes');

const mapStateToProps = createSelector(
  getCurrentHike,
  (currentHike) => {
    const {
      dashedName,
      description,
      challengeSeed: [id] = [0]
    } = currentHike;
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
    // actions
    toggleQuestionView: PropTypes.func,
    // ui
    id: PropTypes.number,
    description: PropTypes.array,
    dashedName: PropTypes.string,
    hardGoTo: PropTypes.func
  };

  componentWillMount() {
    if (!this.props.id) {
      this.props.hardGoTo('/map');
    }
  }

  shouldComponentUpdate(nextProps) {
    const { props } = this;
    return nextProps.id !== props.id;
  }

  handleError: log;

  renderTranscript(transcript, dashedName) {
    return transcript.map((line, index) => (
      <p
        className='lead text-left'
        key={ dashedName + index }
        dangerouslySetInnerHTML={{__html: line}} />
    ));
  }

  render() {
    const {
      id = '1',
      description = [],
      toggleQuestionView
    } = this.props;

    const dashedName = 'foo';

    return (
      <Col xs={ 12 }>
        <Row>
          <Vimeo
            onError={ this.handleError }
            onFinish= { toggleQuestionView }
            videoId={ '' + id } />
        </Row>
        <Row>
          <article>
            { this.renderTranscript(description, dashedName) }
          </article>
          <Button
            block={ true }
            bsSize='large'
            bsStyle='primary'
            onClick={ toggleQuestionView }>
            Take me to the Questions
          </Button>
        </Row>
      </Col>
    );
  }
}

export default connect(
  mapStateToProps,
  { hardGoTo, toggleQuestionView }
)(Lecture);
