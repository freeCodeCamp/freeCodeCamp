import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { userSelector } from '../../../redux';

const mapStateToProps = createSelector(
  userSelector,
  ({ portfolio }) => ({ portfolio })
);

function Portfolio({ portfolio = [] }) {
  if (!portfolio.length) {
    return null;
  }
  return (
    <Row className='achievement-container'>
      <Col>
        <h2 className='text-center'>Portfolio</h2>
        <p>
            Maecenas condimentum tincidunt lorem. Vestibulum vel tellus.
            Sed vulputate. Morbi massa nunc, convallis a, commodo
            gravida, tincidunt sed, turpis. Aenean ornare viverra
        </p>
        <a href={ 'url' }>url</a>
      </Col>
    </Row>
  );
}

Portfolio.displayName = 'Portfolio';

export default connect(mapStateToProps)(Portfolio);
