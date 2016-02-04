import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { createSelector } from 'reselect';

import Lecture from './Lecture.jsx';
import Questions from './Questions.jsx';
import { resetHike } from '../redux/actions';

const mapStateToProps = createSelector(
  state => state.hikesApp.hikes.entities,
  state => state.hikesApp.currentHike,
  (hikes, currentHikeDashedName) => {
    const currentHike = hikes[currentHikeDashedName];
    return {
      title: currentHike.title
    };
  }
);

// export plain component for testing
export class Hike extends React.Component {
  static displayName = 'Hike';

  static propTypes = {
    title: PropTypes.object,
    params: PropTypes.object,
    resetHike: PropTypes.func,
    showQuestions: PropTypes.bool
  };

  componentWillUnmount() {
    this.props.resetHike();
  }

  componentWillReceiveProps({ params: { dashedName } }) {
    if (this.props.params.dashedName !== dashedName) {
      this.props.resetHike();
    }
  }

  renderBody(showQuestions) {
    if (showQuestions) {
      return <Questions />;
    }
    return <Lecture />;
  }

  render() {
    const {
      title,
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
}

// export redux aware component
export default connect(mapStateToProps, { resetHike })(Hike);
