import React, { useState } from 'react';
import { Button, Panel } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { FullWidthRow } from '../helpers';
import { generateExamToken } from '../../utils/ajax';

function ExamToken(): JSX.Element {
  const [examToken, setExamToken] = useState('');
  const [examTokenError, setExamTokenError] = useState('');

  const { t } = useTranslation();

  const getToken = async () => {
    try {
      const response = await generateExamToken();

      const {
        data: { data: token }
      } = response;
      setExamToken(token.examEnvironmentAuthorizationToken);
      setExamTokenError('');
    } catch (e) {
      setExamTokenError(t('exam-token.exam-token-error'));
    }

    return;
  };

  return (
    <FullWidthRow>
      <Panel variant='info'>
        <Panel.Heading>{t('exam-token.exam-token')}</Panel.Heading>
        <Panel.Body>
          <p>{t('exam-token.exam-token-note')}</p>
          {examToken && (
            <p style={{ wordBreak: 'break-word' }}>
              {t('exam-token.your-exam-token', {
                token: examToken
              })}
            </p>
          )}
          {examTokenError && <p style={{ color: 'red' }}>{examTokenError}</p>}
          <Button
            block={true}
            onClick={() => {
              getToken().catch(e => console.log(e));
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
