import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'gatsby-plugin-react-i18next';

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
          <Trans>settings.danger.delete-p1</Trans>
        </p>
        <p>
          <Trans>settings.danger.delete-p2</Trans>
        </p>
        <p>
          <Trans>settings.danger.delete-p3</Trans> &thinsp;
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
          <Trans>settings.danger.nevermind</Trans>
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
          <Trans>settings.danger.certain</Trans>
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <Trans>buttons.close</Trans>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';
DeleteModal.propTypes = propTypes;

export default DeleteModal;
