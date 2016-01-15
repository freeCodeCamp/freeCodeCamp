import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Col, Row } from 'react-bootstrap';

import Lecture from './Lecture.jsx';
import Questions from './Questions.jsx';

export default contain(
  {
    actions: ['hikesActions']
  },
  React.createClass({
    displayName: 'Hike',

    propTypes: {
      currentHike: PropTypes.object,
      hikesActions: PropTypes.object,
      params: PropTypes.object,
      showQuestions: PropTypes.bool
    },

    componentWillUnmount() {
      this.props.hikesActions.resetHike();
    },

    componentWillReceiveProps({ params: { dashedName } }) {
      if (this.props.params.dashedName !== dashedName) {
        this.props.hikesActions.resetHike();
      }
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

      return (
        <Col xs={ 12 }>
          <Row>
            <header className='text-center'>
              <h4>{ title }</h4>
            </header>
            <hr />
            <div className='spacer' />
            <section
              className={ 'text-center' }
              title={ title }>
              { this.renderBody(showQuestions) }
            </section>
          </Row>
        </Col>
      );
    }
  })
);
