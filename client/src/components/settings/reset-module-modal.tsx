import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal,
  Spacer
} from '@freecodecamp/ui';

type ResetModuleModalProps = {
  onHide: () => void;
  reset: (blockId: string) => void;
  show: boolean;
};

function ResetModuleModal(props: ResetModuleModalProps): JSX.Element {
  const { t } = useTranslation();
  const { show, onHide } = props;
  const [verifyText, setVerifyText] = useState('');
  const [blockId, setBlockId] = useState('');

  const handleVerifyTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerifyText(event.target.value);
  };

  const handleBlockIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlockId(event.target.value);
  };

  const handleReset = () => {
    if (blockId) {
      props.reset(blockId);
      setVerifyText('');
      setBlockId('');
    }
  };

  const handleClose = () => {
    setVerifyText('');
    setBlockId('');
    onHide();
  };

  return (
    <Modal size='large' onClose={handleClose} variant='danger' open={show}>
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('settings.danger.reset-module-heading')}
      </Modal.Header>
      <Modal.Body alignment='start'>
        <p>{t('settings.danger.reset-module-p1')}</p>
        <ul>
          <li>{t('settings.danger.reset-module-item-1')}</li>
          <li>{t('settings.danger.reset-module-item-2')}</li>
        </ul>
        <p>{t('settings.danger.reset-module-p2')}</p>
        <p>{t('settings.danger.reset-module-p3')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='large'
          variant='primary'
          onClick={handleClose}
          type='button'
        >
          {t('settings.danger.nevermind-3')}
        </Button>
        <Spacer size='xs' />
        <FormGroup controlId='block-id-input'>
          <ControlLabel htmlFor='block-id-input-field'>
            {t('settings.danger.block-id-label')}
          </ControlLabel>
          <Spacer size='xs' />
          <FormControl
            onChange={handleBlockIdChange}
            value={blockId}
            id='block-id-input-field'
            placeholder='basic-html-and-html5'
          />
        </FormGroup>
        <Spacer size='xs' />
        <FormGroup controlId='verify-reset-module'>
          <ControlLabel htmlFor='verify-reset-module-input'>
            {t('settings.danger.verify-text', {
              verifyText: t('settings.danger.verify-reset-module-text')
            })}
          </ControlLabel>
          <Spacer size='xs' />
          <FormControl
            onChange={handleVerifyTextChange}
            value={verifyText}
            id='verify-reset-module-input'
          />
        </FormGroup>
        <Spacer size='xs' />
        <Button
          block={true}
          size='large'
          variant='danger'
          disabled={
            verifyText !== t('settings.danger.verify-reset-module-text') ||
            !blockId.trim()
          }
          onClick={handleReset}
          type='button'
        >
          {t('settings.danger.reset-module-confirm')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModuleModal.displayName = 'ResetModuleModal';

export default ResetModuleModal;
