import React, { useState } from 'react';
import { Button, Panel, Modal, Spacer } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { FullWidthRow } from '../helpers';
import { generateExamToken } from '../../utils/ajax';

function ExamToken(): JSX.Element {
  const [examToken, setExamToken] = useState<string | null>(null);
  const [examTokenError, setExamTokenError] = useState<string | null>(null);

  const [recentlyGenerated, setRecentlyGenerated] = useState(false);
  const [generatedExamToken, setGeneratedExamToken] = useState(false);

  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const debouncedSetRecentlyGenerated = () => {
    setRecentlyGenerated(true);
    setTimeout(() => setRecentlyGenerated(false), 10000);
  };
  const { t } = useTranslation();

  const getToken = async () => {
    try {
      const response = await generateExamToken();

      const {
        data: {
          data: { examEnvironmentAuthorizationToken }
        }
      } = response;
      setExamToken(examEnvironmentAuthorizationToken);
      setExamTokenError('');
    } catch (e) {
      setExamTokenError(t('exam-token.error'));
    }

    debouncedSetRecentlyGenerated();
  };

  return (
    <FullWidthRow>
      <Modal
        open={generatedExamToken}
        onClose={() => {
          setGeneratedExamToken(false);
          setCopySuccess(null);
          setCopyError(null);
        }}
      >
        <Modal.Header>{t('exam-token.exam-token')}</Modal.Header>
        <Modal.Body>
          {examToken && (
            <p style={{ wordBreak: 'break-word' }}>
              {t('exam-token.your-exam-token', {
                token: examToken
              })}
            </p>
          )}
          {examTokenError && <p style={{ color: 'red' }}>{examTokenError}</p>}
          {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
          {copyError && <p style={{ color: 'red' }}>{copyError}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(examToken ?? '').then(
                () => {
                  setCopySuccess(t('exam-token.copied'));
                  setCopyError('');
                },
                () => {
                  setCopyError(t('exam-token.copy-error'));
                  setCopySuccess('');
                }
              );
            }}
          >
            {t('buttons.copy')}
          </Button>
          <Spacer size='s' />
          <Button
            onClick={() => {
              setGeneratedExamToken(false);
              setCopySuccess(null);
              setCopyError(null);
            }}
          >
            {t('buttons.close')}
          </Button>
        </Modal.Footer>
      </Modal>
      <Panel variant='info' id='exam-environment-authorization-token'>
        <Panel.Heading>{t('exam-token.exam-token')}</Panel.Heading>
        <Panel.Body>
          <p>{t('exam-token.note')}</p>
          <strong>{t('exam-token.invalidation')}</strong>
          <Spacer size='s' />
          <Button
            block={true}
            disabled={recentlyGenerated}
            onClick={() => {
              setGeneratedExamToken(true);
              void getToken();
            }}
          >
            {t('exam-token.generate-exam-token')}
          </Button>
        </Panel.Body>
      </Panel>
    </FullWidthRow>
  );
}

ExamToken.displayName = 'ExamToken';

export default ExamToken;
