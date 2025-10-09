import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';

import { examEnvironmentAuthorizationTokenApi } from '../../../utils/ajax';
import { updateExamEnvironmentAuthorizationToken } from '../../../redux/actions';
import { examEnvironmentAuthorizationTokenSelector } from '../../../redux/selectors';

export function ExamTokenControls(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const selectExamToken = (state: unknown): string | null => {
    const selector = examEnvironmentAuthorizationTokenSelector as unknown as (
      s: unknown
    ) => string | null;
    return selector(state);
  };

  const examEnvironmentAuthorizationToken = useSelector(selectExamToken);

  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const [postGenerateExamEnvironmentAuthorizationToken, generateMutation] =
    examEnvironmentAuthorizationTokenApi.usePostGenerateExamEnvironmentAuthorizationTokenMutation();

  useEffect(() => {
    const data = generateMutation.data;
    if (!data) return;

    dispatch(
      updateExamEnvironmentAuthorizationToken(
        data.examEnvironmentAuthorizationToken
      )
    );
  }, [generateMutation.data, dispatch]);

  function handleCopyExamToken() {
    navigator.clipboard.writeText(examEnvironmentAuthorizationToken ?? '').then(
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
        <p style={{ color: 'green' }}>{t('exam-token.exam-token-generated')}</p>
      )}
      <Button
        block={true}
        disabled={generateMutation.isLoading}
        onClick={() => void postGenerateExamEnvironmentAuthorizationToken()}
      >
        {t('exam-token.generate-exam-token')}
      </Button>
      <Spacer size='s' />
      {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
      {copyError && <p style={{ color: 'red' }}>{copyError}</p>}
      <Button
        block={true}
        disabled={!examEnvironmentAuthorizationToken}
        onClick={handleCopyExamToken}
      >
        {t('buttons.copy')}
      </Button>
      <Spacer size='m' />
    </>
  );
}

export default ExamTokenControls;
