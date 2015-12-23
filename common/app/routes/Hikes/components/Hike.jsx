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
    dashedName: PropTypes.string,
    currentHike: PropTypes.object,
    showQuestions: PropTypes.bool
  },

  renderBody(showQuestions, currentHike, dashedName) {
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
        dashedName={ dashedName }
        description={ description }
        id={ id } />
    );
  },

  render() {
    const {
      currentHike = {},
      dashedName,
      showQuestions
    } = this.props;
    const { title } = currentHike;

    const videoTitle = <h2>{ title }</h2>;

    return (
      <Col xs={ 12 }>
        <Row>
          <Panel
            className={ 'text-center' }
            title={ videoTitle }>
            { this.renderBody(showQuestions, currentHike, dashedName) }
          </Panel>
        </Row>
      </Col>
    );
  }
});
