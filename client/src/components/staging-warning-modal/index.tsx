import React, { useState } from 'react';
import { Modal } from '@freecodecamp/react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

import store from 'store';
import { Spacer } from '../helpers';

function StagingWarningModal(): JSX.Element {
  const { t } = useTranslation();
  const [show, setShow] = useState(!store.get('acceptedStagingWarning'));
  const handleModalHide = () => {
    setShow(false);
  };
  const handleClick = () => {
    store.set('acceptedStagingWarning', true);
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
      data-testid={'staging-warning-modal'}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='modal-title' bsSize='lg'>
          <span style={{ fontWeight: 'bold' }}>
            {t('staging-warning.heading')}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-justify'>{t('staging-warning.p1')}</p>
        <p className='text-justify'>{t('staging-warning.p2')}</p>
        <p className='text-justify'>
          <Trans i18nKey='staging-warning.p3'>
            <a
              href='https://contribute.freecodecamp.org/#/devops?id=known-limitations'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              link
            </a>
          </Trans>
        </p>
        <hr />
        <Button
          block={true}
          variant='danger'
          data-testid='accepts-warning'
          onClick={handleClick}
        >
          {t('staging-warning.certain')}
        </Button>
        <Spacer size='small' />
      </Modal.Body>
    </Modal>
  );
}

export default StagingWarningModal;
