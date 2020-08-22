import React from 'react';
import PropTypes from 'prop-types';

import { ButtonSpacer } from '../helpers';
import { Button, Modal } from '@freecodecamp/react-bootstrap';

import './danger-zone.css';

const propTypes = {
  delete: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool
};

function DeleteModal(props) {
  const { show, onHide } = props;
  return (
    <Modal
      aria-labelledby='modal-title'
      backdrop={true}
      bsSize='lg'
      className='text-center'
      keyboard={true}
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='modal-title'>Delete My Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This will really delete all your data, including all your progress and
          account information.
        </p>
        <p>
          We won't be able to recover any of it for you later, even if you
          change your mind.
        </p>
        <p>
          If there's something we could do better, send us an email instead and
          we'll do our best: &thinsp;
          <a href='mailto:team@freecodecamp.org' title='team@freecodecamp.org'>
            team@freecodecamp.org
          </a>
        </p>
        <hr />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          className='btn-invert'
          onClick={props.onHide}
          type='button'
        >
          Nevermind, I don't want to delete my account
        </Button>
        <ButtonSpacer />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='danger'
          className='btn-danger'
          onClick={props.delete}
          type='button'
        >
          I am 100% certain. Delete everything related to this account
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';
DeleteModal.propTypes = propTypes;

export default DeleteModal;
