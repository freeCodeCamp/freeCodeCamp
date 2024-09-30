import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal
} from '@freecodecamp/ui';

import { Spacer } from '../helpers';

type ResetModalProps = {
  onHide: () => void;
  reset: () => void;
  show: boolean;
};

function ResetModal(props: ResetModalProps): JSX.Element {
  const { t } = useTranslation();
  const { show, onHide } = props;
  const [verifyText, setVerifyText] = useState('');

  const handleVerifyTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerifyText(event.target.value);
  };

  return (
    <Modal size='large' onClose={onHide} variant='danger' open={show}>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('settings.danger.reset-heading')}
      </Modal.Header>
      <Modal.Body alignment='start'>
        <p>{t('settings.danger.reset-p1')}</p>
        <ul>
          <li>{t('settings.danger.reset-item-1')}</li>
          <li>{t('settings.danger.reset-item-2')}</li>
          <li>{t('settings.danger.reset-item-3')}</li>
        </ul>
        <p>{t('settings.danger.reset-p2')}</p>
        <p>{t('settings.danger.reset-p3')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='large'
          variant='primary'
          onClick={props.onHide}
          type='button'
        >
          {t('settings.danger.nevermind-2')}
        </Button>
        <Spacer size='small' />
        <FormGroup controlId='verify-reset'>
          <ControlLabel htmlFor='verify-reset-input'>
            {t('settings.danger.verify-text', {
              verifyText: t('settings.danger.verify-reset-text')
            })}
          </ControlLabel>
          <Spacer size='small' />
          <FormControl
            onChange={handleVerifyTextChange}
            value={verifyText}
            id='verify-reset-input'
          />
        </FormGroup>
        <Spacer size='small' />
        <Button
          block={true}
          size='large'
          variant='danger'
          disabled={verifyText !== t('settings.danger.verify-reset-text')}
          onClick={props.reset}
          type='button'
        >
          {t('settings.danger.reset-confirm')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';

export default ResetModal;
