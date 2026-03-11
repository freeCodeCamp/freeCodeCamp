import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';

import { examEnvironmentAuthorizationTokenApi } from '../../../utils/ajax';
import { Loader } from '../../../components/helpers';
import envData from '../../../../config/env.json';

const { deploymentEnv } = envData;

interface ExamTokenControlsProps {
  email: string;
}

export function ExamTokenControls({
  email
}: ExamTokenControlsProps): JSX.Element {
  const { t } = useTranslation();

  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const [generateToken, generateMutation] =
    examEnvironmentAuthorizationTokenApi.usePostGenerateExamEnvironmentAuthorizationTokenMutation();

  const getTokenQuery =
    examEnvironmentAuthorizationTokenApi.useGetExamEnvironmentAuthorizationTokenQuery();
  const existingToken = getTokenQuery.data?.examEnvironmentAuthorizationToken;
  const updatedToken = generateMutation.data?.examEnvironmentAuthorizationToken;
  const token = updatedToken ?? existingToken;

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

  const nonStaffTesting =
    deploymentEnv !== 'production' && !email.endsWith('@freecodecamp.org');

  return (
    <>
      <h3>{t('exam-token.exam-token')}</h3>
      <p>{t('exam-token.token-usage')}</p>
      {generateMutation.isError && (
        <p style={{ color: 'var(--danger-color)' }}>{t('exam-token.error')}</p>
      )}
      {generateMutation.isSuccess && (
        <p style={{ color: 'var(--success-color)' }}>
          {t('exam-token.generated')}
        </p>
      )}
      {!!token && generateMutation.isSuccess && (
        <p style={{ color: 'var(--yellow-color)' }}>
          {t('exam-token.invalidation-2')}
        </p>
      )}
      {!!token && !generateMutation.isSuccess && (
        <p style={{ color: 'var(--yellow-color)' }}>
          {t('exam-token.invalidation-1')}
        </p>
      )}
      {getTokenQuery.isError && !token && (
        <p style={{ color: 'var(--highlight-color)' }}>
          {t('exam-token.no-token')}
        </p>
      )}
      {nonStaffTesting && <p>{t('exam-token.non-staff-testing')}</p>}
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
            nonStaffTesting
          }
          onClick={() => void generateToken()}
        >
          {t('exam-token.generate-exam-token')}
        </Button>
      )}
      <Spacer size='s' />
      {copySuccess && (
        <p style={{ color: 'var(--success-color)' }}>{copySuccess}</p>
      )}
      {copyError && <p style={{ color: 'var(--danger-color)' }}>{copyError}</p>}
      {generateMutation.isLoading || getTokenQuery.isLoading ? (
        <Button block={true}>
          <Loader />
        </Button>
      ) : (
        <Button block={true} disabled={!token} onClick={handleCopyExamToken}>
          {t('exam-token.copy')}
        </Button>
      )}
      <Spacer size='m' />
    </>
  );
}

export default ExamTokenControls;
