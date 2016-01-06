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
    currentHike: PropTypes.object,
    showQuestions: PropTypes.bool
  },

  renderBody(showQuestions) {
    if (showQuestions) {
      return <Questions />;
    }
    return <Lecture />;
  },

  render() {
    const {
      currentHike: { title } = {},
      showQuestions
    } = this.props;

    const videoTitle = <h4>{ title }</h4>;

    return (
      <Col xs={ 12 }>
        <Row>
          <Panel
            className={ 'text-center' }
            header={ videoTitle }
            title={ title }>
            { this.renderBody(showQuestions) }
          </Panel>
        </Row>
      </Col>
    );
  }
});
