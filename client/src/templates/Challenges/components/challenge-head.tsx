import React from 'react';
import { useTranslation } from 'react-i18next';

import PageHead from '../../../components/page-head';
import type { ChallengeNode } from '../../../redux/prop-types';

export type ChallengeHeadData = {
  challengeNode: {
    challenge: Pick<
      ChallengeNode['challenge'],
      'block' | 'superBlock' | 'title'
    >;
  };
};

interface ChallengeHeadProps {
  challenge: ChallengeHeadData['challengeNode']['challenge'];
  includeLearn?: boolean;
}

function ChallengeHead({
  challenge,
  includeLearn = false
}: ChallengeHeadProps) {
  const { t } = useTranslation();
  const { block, superBlock, title } = challenge;
  const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
  const windowTitle = includeLearn
    ? `${blockTitle} - ${title} | ${t('learn.learn')} | freeCodeCamp.org`
    : `${blockTitle}: ${title} | freeCodeCamp.org`;

  return <PageHead title={windowTitle} noindex />;
}

export default ChallengeHead;
