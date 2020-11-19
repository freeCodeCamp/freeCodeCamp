import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'gatsby-plugin-react-i18next';

import { ButtonSpacer } from '../helpers';
import { Button, Modal } from '@freecodecamp/react-bootstrap';

const propTypes = {
  onHide: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  show: PropTypes.bool
};

function ResetModal(props) {
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
        <Modal.Title id='modal-title'>
          <Trans>settings.danger.reset-heading</Trans>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Trans>settings.danger.reset-p1</Trans>
        </p>
        <p>
          <Trans>settings.danger.reset-p2</Trans>
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
          <Trans>settings.danger.nevermind-2</Trans>
        </Button>
        <ButtonSpacer />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='danger'
          className='btn-danger'
          onClick={props.reset}
          type='button'
        >
          <Trans>settings.danger.reset-confirm</Trans>
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

ResetModal.displayName = 'ResetModal';
ResetModal.propTypes = propTypes;

export default ResetModal;
