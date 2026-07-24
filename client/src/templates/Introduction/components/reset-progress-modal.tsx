import React, { useEffect, useRef, useState } from 'react';
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
import Loader from '../../../components/helpers/loader';

const MIN_IN_FLIGHT_MS = 1000;
const STATE_RESET_AFTER_CLOSE_MS = 300;

type Status = 'idle' | 'in-flight' | 'success' | 'error';

type ResetProgressModalProps = {
  blockTitle: string;
  blockDashedName: string | string[];
  superBlock: SuperBlocks;
  onHide: () => void;
  onResetComplete: (removedChallengeIds: string[]) => void;
  show: boolean;
};

function ResetProgressModal({
  blockTitle,
  blockDashedName,
  superBlock: _superBlock,
  onHide,
  onResetComplete,
  show
}: ResetProgressModalProps): JSX.Element {
  const { t } = useTranslation();
  const [verifyText, setVerifyText] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const isMountedRef = useRef(true);

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  const verifyPhrase = t('learn.reset-progress-verify');
  const blockIds = Array.isArray(blockDashedName)
    ? blockDashedName
    : [blockDashedName];

  const handleDismiss = () => {
    onHide();
  };

  useEffect(() => {
    if (show) return;
    const id = window.setTimeout(() => {
      setStatus('idle');
      setVerifyText('');
    }, STATE_RESET_AFTER_CLOSE_MS);
    return () => clearTimeout(id);
  }, [show]);

  const handleVerifyTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerifyText(event.target.value);
  };

  const handleReset = async () => {
    setStatus('in-flight');
    const startedAt = Date.now();
    let nextStatus: Status = 'success';
    try {
      const { response, data } = await deleteResetModule({ blockIds });
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status} ${response.statusText}`
        );
      }
      onResetComplete(data.removedChallengeIds ?? []);
    } catch (err) {
      console.error('Failed to reset module:', err);
      nextStatus = 'error';
    }
    const elapsed = Date.now() - startedAt;
    if (elapsed < MIN_IN_FLIGHT_MS) {
      await new Promise(resolve =>
        setTimeout(resolve, MIN_IN_FLIGHT_MS - elapsed)
      );
    }
    if (isMountedRef.current) {
      setStatus(nextStatus);
    }
  };

  const handleHeaderClose = () => {
    if (status === 'in-flight') return;
    handleDismiss();
  };

  const showCloseButton = status !== 'in-flight';
  const isResolved = status === 'success' || status === 'error';

  return (
    <Modal
      size='large'
      onClose={handleHeaderClose}
      variant='danger'
      open={show}
    >
      <Modal.Header
        showCloseButton={showCloseButton}
        closeButtonClassNames='close'
      >
        {t('learn.reset-progress-heading', { label: blockTitle })}
      </Modal.Header>
      <Modal.Body alignment='start' borderless>
        <Spacer size='xs' />
        {status === 'in-flight' && (
          <div className='reset-progress-container text-center'>
            <Loader />
            <Spacer size='xs' />
            <p>{t('learn.reset-progress-in-flight')}</p>
          </div>
        )}
        {status === 'success' && (
          <Alert variant='success'>
            {t('learn.reset-progress-success', { label: blockTitle })}
          </Alert>
        )}
        {status === 'error' && (
          <Alert variant='danger'>{t('learn.reset-progress-failure')}</Alert>
        )}
        {status === 'idle' && (
          <>
            <p>
              {t('learn.reset-progress-description', { label: blockTitle })}
            </p>
            <p>{t('learn.reset-progress-warning')}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {isResolved && (
          <Button
            block={true}
            size='large'
            variant='primary'
            onClick={handleDismiss}
            type='button'
          >
            {t('learn.reset-progress-dismiss')}
          </Button>
        )}
        {status === 'idle' && (
          <>
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={handleDismiss}
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
        )}
      </Modal.Footer>
    </Modal>
  );
}

ResetProgressModal.displayName = 'ResetProgressModal';

export default ResetProgressModal;
