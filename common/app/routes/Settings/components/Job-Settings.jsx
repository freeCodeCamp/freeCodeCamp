import PropTypes from 'prop-types';
import React from 'react';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import { userSelector } from '../../../redux/index';
import {
  toggleUserFlag,
  updateUserBackend
} from '../../../entities/user';

const mapStateToProps = createSelector(
  userSelector,
  ({ isAvailableForHire, username }) => ({
    isAvailableForHire,
    username
  })
);

function mapDistachToProps(dispatch) {
  return bindActionCreators({
    toggleUserFlag,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  isAvailableForHire: PropTypes.bool,
  toggleUserFlag: PropTypes.func.isRequired,
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string
};

function JobSettings({
  isAvailableForHire,
  toggleUserFlag,
  updateUserBackend,
  username
}) {
  const className = classnames({
    active: isAvailableForHire,
    'btn-toggle': true
  });
  const toggleHireState = () => {
    toggleUserFlag('isAvailableForHire', username);
    updateUserBackend({ flag: 'isAvailableForHire' });
  };
  return (
    <Row>
      <Col xs={ 9 }>
        <p className='large-p'>
          Available for hire?
        </p>
      </Col>
      <Col xs={ 3 }>
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          className={ className }
          onClick={ toggleHireState }
          >
          { isAvailableForHire ? 'Yes' : 'No' }
        </Button>
      </Col>
    </Row>
  );
}

JobSettings.displayName = 'JobSettings';
JobSettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDistachToProps)(JobSettings);
