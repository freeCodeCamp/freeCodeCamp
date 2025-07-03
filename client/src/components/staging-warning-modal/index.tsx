import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';

import store from 'store';

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
    <Modal onClose={handleModalHide} open={show} size='large'>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        <span style={{ fontWeight: 'bold' }}>
          {t('staging-warning.heading')}
        </span>
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
        <Spacer size='xs' />
      </Modal.Body>
    </Modal>
  );
}

export default StagingWarningModal;
