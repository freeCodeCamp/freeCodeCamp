import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createSelector } from 'reselect';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

import {
  challengeMetaSelector,
  currentBlockIdsSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector
} from '../../templates/Challenges/redux/selectors';
import { liveCerts } from '../../../config/cert-and-project-map';
import { getIsDailyCodingChallenge } from '@freecodecamp/shared/config/challenge-types';
import {
  isValidDateString,
  formatDisplayDate
} from '../daily-coding-challenge/helpers';
import ProgressInner from './progress-inner';

const mapStateToProps = createSelector(
  currentBlockIdsSelector,
  challengeMetaSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector,
  (
    currentBlockIds: string[],
    {
      challengeType,
      id,
      block,
      superBlock
    }: {
      challengeType: number;
      id: string;
      block: string;
      superBlock: string;
    },
    completedChallengesInBlock: number,
    completedPercent: number
  ) => ({
    currentBlockIds,
    challengeType,
    id,
    block,
    superBlock,
    completedChallengesInBlock,
    completedPercent
  })
);

const mapDispatchToProps = {};

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ProgressProps extends PropsFromRedux {
  t: TFunction;
}
function Progress({
  currentBlockIds,
  block,
  id,
  superBlock,
  challengeType,
  completedChallengesInBlock,
  completedPercent,
  t
}: ProgressProps): JSX.Element {
  let blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
  // Always false for legacy full stack, since it has no projects.
  const isCertificationProject = liveCerts.some(cert =>
    cert.projects?.some((project: { id: string }) => project.id === id)
  );

  // Display the date of the challenge in the completion modal for daily challenges
  if (getIsDailyCodingChallenge(challengeType)) {
    const dateParam =
      new URLSearchParams(window.location.search).get('date') || '';

    if (isValidDateString(dateParam)) {
      blockTitle += `: ${formatDisplayDate(dateParam)}`;
    }
  }

  const totalChallengesInBlock = currentBlockIds?.length ?? 0;
  const meta =
    isCertificationProject && totalChallengesInBlock > 0
      ? t('learn.project-complete', {
          completedChallengesInBlock,
          totalChallengesInBlock
        })
      : t('learn.percent-complete', {
          percent: completedPercent
        });
  return (
    <div
      className='progress-bar-container'
      data-playwright-test-label='progress-bar-container'
    >
      <ProgressInner
        title={blockTitle}
        meta={meta}
        completedPercent={completedPercent}
      />
    </div>
  );
}

Progress.displayName = 'Progress';

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withTranslation()(Progress));
