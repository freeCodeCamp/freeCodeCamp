import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button, Modal } from 'react-bootstrap';

import { isResetModalOpenSelector, closeModal, resetChallenge } from '../redux';

const propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired
};

const mapStateToProps = createSelector(isResetModalOpenSelector, isOpen => ({
  isOpen
}));

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { close: () => closeModal('reset'), reset: () => resetChallenge() },
    dispatch
  );

function withActions(...fns) {
  return () => fns.forEach(fn => fn());
}

function ResetModal({ reset, close, isOpen }) {
  return (
    <Modal
      animation={false}
      dialogClassName={'reset-modal'}
      keyboard={true}
      onHide={close}
      show={isOpen}
      >
      <Modal.Header className={'challenge-list-header'} closeButton={true}>
        <Modal.Title>Reset this lesson?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='text-center'>
          <p>
            Are you sure you wish to reset this lesson? The editors and tests
            will be reset.
          </p>
          <p>
            <em>This cannot be undone</em>.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          bsSize='large'
          bsStyle='danger'
          onClick={withActions(reset, close)}
          >
          Reset this Lesson
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';
ResetModal.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ResetModal);
