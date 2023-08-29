import React, { useState } from 'react';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import store from 'store';
import { Spacer } from '../helpers';

function StagingWarningModal(): JSX.Element {
  const { t } = useTranslation();
  const [show, setShow] = useState(
    !((store.get('isStagingEnv') as boolean) === true)
  );
  const handleModalHide = () => {
    setShow(false);
  };
  const handleClick = () => {
    store.set('isStagingEnv', true);
    setShow(false);
  };
  return (
    <Modal
      aria-labelledby='modal-title'
      backdrop={true}
      bsSize='lg'
      className='text-center'
      keyboard={true}
      onHide={handleModalHide}
      onClose={handleModalHide}
      show={show}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='modal-title' bsSize='lg'>
          <span style={{ fontWeight: 'bold' }}>
            {t('staging-warning.heading')}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span style={{ fontWeight: 'bold' }}>{t('staging-warning.p1')}</span>
        </p>
        <p>{t('staging-warning.p2')}</p>
        <hr />
        <Button
          block={true}
          bsStyle='danger'
          data-test-label='cancel-signout'
          className='btn-invert'
          onClick={handleClick}
          type='button'
        >
          {t('staging-warning.certain')}
        </Button>
        <Spacer size='small' />
      </Modal.Body>
    </Modal>
  );
}

export default StagingWarningModal;
