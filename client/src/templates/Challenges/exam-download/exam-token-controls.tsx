import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';

import { examEnvironmentAuthorizationTokenApi } from '../../../utils/ajax';
import { Loader } from '../../../components/helpers';

export function ExamTokenControls(): JSX.Element {
  const { t } = useTranslation();

  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const [generateToken, generateMutation] =
    examEnvironmentAuthorizationTokenApi.usePostGenerateExamEnvironmentAuthorizationTokenMutation();

  const getTokenQuery =
    examEnvironmentAuthorizationTokenApi.useGetExamEnvironmentAuthorizationTokenQuery();
  const [token, setToken] = useState<string | null>(
    getTokenQuery.data?.examEnvironmentAuthorizationToken ?? null
  );

  useEffect(() => {
    const data = generateMutation.data;
    if (!data) return;

    setToken(data.examEnvironmentAuthorizationToken);
  }, [generateMutation.data]);

  useEffect(() => {
    const data = getTokenQuery.data;
    if (!data) return;

    setToken(data.examEnvironmentAuthorizationToken);
  }, [getTokenQuery.data]);

  function handleCopyExamToken() {
    navigator.clipboard.writeText(token ?? '').then(
      () => {
        setCopySuccess(t('exam-token.copied'));
        setCopyError(null);
      },
      () => {
        setCopyError(t('exam-token.copy-error'));
        setCopySuccess(null);
      }
    );
  }

  return (
    <>
      <h3>{t('exam-token.exam-token')}</h3>
      <p>{t('exam-token.token-usage')}</p>
      {generateMutation.isError && (
        <p style={{ color: 'red' }}>{t('exam-token.error')}</p>
      )}
      {generateMutation.isSuccess && (
        <p style={{ color: 'green' }}>{t('exam-token.generated')}</p>
      )}
      {!!token && (
        <p style={{ color: 'orange' }}>{t('exam-token.invalidation')}</p>
      )}
      {getTokenQuery.isError && (
        <p style={{ color: 'red' }}>{t('exam-token.fetch-error')}</p>
      )}
      {generateMutation.isLoading || getTokenQuery.isLoading ? (
        <Button block={true}>
          <Loader />
        </Button>
      ) : (
        <Button
          block={true}
          disabled={
            generateMutation.isLoading ||
            getTokenQuery.isLoading ||
            getTokenQuery.isError
          }
          onClick={() => void generateToken()}
        >
          {t('exam-token.generate-exam-token')}
        </Button>
      )}
      <Spacer size='s' />
      {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
      {copyError && <p style={{ color: 'red' }}>{copyError}</p>}
      {generateMutation.isLoading || getTokenQuery.isLoading ? (
        <Button block={true}>
          <Loader />
        </Button>
      ) : (
        <Button block={true} disabled={!token} onClick={handleCopyExamToken}>
          {t('buttons.copy')}
        </Button>
      )}
      <Spacer size='m' />
    </>
  );
}

export default ExamTokenControls;
