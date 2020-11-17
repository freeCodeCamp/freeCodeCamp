import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
        <p>{t('settings.danger.delete-p1')}</p>
        <p>{t('settings.danger.delete-p2')}</p>
        <p>
          {t('settings.danger.delete-p3')} &thinsp;
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
          {t('settings.danger.nevermind')}
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
          {t('settings.danger.certain')}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t('buttons.close')}</Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteModal.displayName = 'DeleteModal';
DeleteModal.propTypes = propTypes;

export default DeleteModal;
