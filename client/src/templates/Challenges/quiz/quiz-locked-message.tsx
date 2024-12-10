import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer, Callout } from '@freecodecamp/ui';

import { ButtonLink, Link } from '../../../components/helpers';
import { SuperBlocks } from '../../../../../shared/config/curriculum';

interface QuizMessageProps {
  superBlock: SuperBlocks;
  reviewBlock: string;
  block: string;
  minutesUntilCooldownExpires: number;
}

export const QuizLockedMessage = ({
  superBlock,
  reviewBlock,
  block,
  minutesUntilCooldownExpires
}: QuizMessageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Callout variant='danger'>
        {
          <Trans i18nKey='learn.quiz.attempted-too-recently'>
            <span>{{ minutesUntilCooldownExpires }}</span>
            <Link to={`/learn/${superBlock}/#${reviewBlock}`}>placeholder</Link>
          </Trans>
        }
      </Callout>
      <Spacer size='m' />
      <ButtonLink block href={`/learn/${superBlock}/#${block}`}>
        {t('buttons.go-back-to-curriculum')}
      </ButtonLink>
    </>
  );
};
