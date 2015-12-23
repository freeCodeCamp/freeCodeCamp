import React, { PropTypes } from 'react';
import {
  Col,
  Panel,
  Row
} from 'react-bootstrap';

import Lecture from './Lecture.jsx';
import Questions from './Questions.jsx';

export default React.createClass({
  displayName: 'Hike',

  propTypes: {
    showQuestions: PropTypes.bool,
    currentHike: PropTypes.object
  },

  renderBody(showQuestions, currentHike) {
    if (showQuestions) {
      return (
        <Questions hike={ currentHike }/>
      );
    }

    const {
      challengeSeed: [ id ] = ['1'],
      description = []
    } = currentHike;

    return (
      <Lecture
        description={ description }
        id={ id } />
    );
  },

  render() {
    const { currentHike, showQuestions } = this.props;
    const { title } = currentHike;

    const videoTitle = <h2>{ title }</h2>;

    return (
      <Col xs={ 12 }>
        <Row>
          <Panel
            className={ 'text-center' }
            title={ videoTitle }>
            { this.renderBody(showQuestions, currentHike) }
          </Panel>
        </Row>
      </Col>
    );
  }
});
