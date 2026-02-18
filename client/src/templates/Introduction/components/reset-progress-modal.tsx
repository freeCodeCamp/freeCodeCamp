import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal,
  Spacer
} from '@freecodecamp/ui';
import { type SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { deleteResetModule } from '../../../utils/ajax';
import { ProgressBar } from '../../../components/Progress/progress-bar';

const RATE_LIMIT_DELAY_MS = 500;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type ResetProgressModalProps = {
  blockTitle: string;
  blockDashedName: string | string[];
  superBlock: SuperBlocks;
  onHide: () => void;
  onResetComplete: () => void;
  show: boolean;
};

function ResetProgressModal({
  blockTitle,
  blockDashedName,
  superBlock,
  onHide,
  onResetComplete,
  show
}: ResetProgressModalProps): JSX.Element {
  const { t } = useTranslation();
  const [verifyText, setVerifyText] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [error, setError] = useState<{
    message: string;
    completedBlocks: string[];
  } | null>(null);
  const [resetProgress, setResetProgress] = useState({
    current: 0,
    total: 0,
    currentBlockName: ''
  });

  const verifyPhrase = t('learn.reset-progress-verify');
  const blockIds = Array.isArray(blockDashedName)
    ? blockDashedName
    : [blockDashedName];

  const handleVerifyTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerifyText(event.target.value);
  };

  const handleReset = async () => {
    setIsResetting(true);
    setError(null);
    setResetProgress({
      current: 0,
      total: blockIds.length,
      currentBlockName: ''
    });

    const completedBlocks: string[] = [];

    try {
      for (let i = 0; i < blockIds.length; i++) {
        const currentBlock = blockIds[i];
        setResetProgress({
          current: i + 1,
          total: blockIds.length,
          currentBlockName: t(
            `intro:${superBlock}.blocks.${currentBlock}.title`
          )
        });
        const { response } = await deleteResetModule({ blockId: currentBlock });
        if (!response.ok) {
          throw new Error(
            `HTTP Error: ${response.status} ${response.statusText}`
          );
        }
        completedBlocks.push(currentBlock);
        if (i < blockIds.length - 1) {
          await delay(RATE_LIMIT_DELAY_MS);
        }
      }
      setIsResetting(false);
      setResetProgress({ current: 0, total: 0, currentBlockName: '' });
      setVerifyText('');
      onHide();
      onResetComplete();
    } catch (err) {
      console.error('Failed to reset module:', err);
      setIsResetting(false);
      setResetProgress({ current: 0, total: 0, currentBlockName: '' });
      setError({
        message: t('learn.reset-progress-error'),
        completedBlocks
      });
      if (completedBlocks.length > 0) {
        onResetComplete();
      }
    }
  };

  const handleClose = () => {
    if (isResetting) return;
    setVerifyText('');
    setError(null);
    onHide();
  };

  return (
    <Modal size='large' onClose={handleClose} variant='danger' open={show}>
      <Modal.Header
        showCloseButton={!isResetting}
        closeButtonClassNames='close'
      >
        {t('learn.reset-progress-heading', { label: blockTitle })}
      </Modal.Header>
      <Modal.Body alignment='start' borderless>
        <Spacer size='xs' />
        {error ? (
          <div className='reset-error-container'>
            <Alert variant='danger'>{error.message}</Alert>
            {error.completedBlocks.length > 0 && (
              <>
                <Spacer size='xs' />
                <p>
                  {t('learn.reset-progress-partial', {
                    count: error.completedBlocks.length,
                    total: blockIds.length
                  })}
                </p>
              </>
            )}
          </div>
        ) : isResetting ? (
          <div className='reset-progress-container text-center'>
            <p>
              <strong>
                {t('learn.resetting-progress', {
                  current: resetProgress.current,
                  total: resetProgress.total
                })}
              </strong>
            </p>
            <Spacer size='xs' />
            <p>{resetProgress.currentBlockName}</p>
            <Spacer size='xs' />
            <div className='progress-bar-wrap'>
              <ProgressBar
                now={Math.round(
                  (resetProgress.current / resetProgress.total) * 100
                )}
              />
            </div>
          </div>
        ) : (
          <>
            <p>
              {t('learn.reset-progress-description', { label: blockTitle })}
            </p>
            <p>{t('learn.reset-progress-warning')}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!isResetting &&
          (error ? (
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={handleClose}
              type='button'
            >
              {t('buttons.close')}
            </Button>
          ) : (
            <>
              <Button
                block={true}
                size='large'
                variant='primary'
                onClick={handleClose}
                type='button'
              >
                {t('learn.reset-progress-nevermind')}
              </Button>
              <Spacer size='xs' />
              <FormGroup controlId='verify-reset-progress'>
                <ControlLabel htmlFor='verify-reset-progress-input'>
                  {t('settings.danger.verify-text', {
                    verifyText: verifyPhrase
                  })}
                </ControlLabel>
                <Spacer size='xs' />
                <FormControl
                  onChange={handleVerifyTextChange}
                  value={verifyText}
                  id='verify-reset-progress-input'
                />
              </FormGroup>
              <Spacer size='xs' />
              <Button
                block={true}
                size='large'
                variant='danger'
                disabled={verifyText !== verifyPhrase}
                onClick={() => void handleReset()}
                type='button'
              >
                {t('learn.reset-progress-confirm')}
              </Button>
            </>
          ))}
      </Modal.Footer>
    </Modal>
  );
}

ResetProgressModal.displayName = 'ResetProgressModal';

export default ResetProgressModal;
