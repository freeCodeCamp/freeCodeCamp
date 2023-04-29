import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import {
  challengeMetaSelector,
  currentBlockIdsSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector
} from '../../templates/Challenges/redux/selectors';
import { certMapWithoutFullStack } from '../../resources/cert-and-project-map';
import ProgressBarInner from './progress-bar-inner';

const mapStateToProps = createSelector(
  currentBlockIdsSelector,
  challengeMetaSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector,
  (
    currentBlockIds: string[],
    {
      id,
      block,
      superBlock
    }: {
      id: string;
      block: string;
      superBlock: string;
    },
    completedChallengesInBlock: number,
    completedPercent: number
  ) => ({
    currentBlockIds,
    id,
    block,
    superBlock,
    completedChallengesInBlock,
    completedPercent
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;

interface ProgressBarProps extends StateProps {
  t: TFunction;
}
function ProgressBar({
  currentBlockIds,
  block,
  id,
  superBlock,
  completedChallengesInBlock,
  completedPercent,
  t
}: ProgressBarProps): JSX.Element {
  const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
  const isCertificationProject = certMapWithoutFullStack.some(cert => {
    return cert.projects.some((project: { id: string }) => project.id === id);
  });

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
    <div className='progress-bar-container'>
      <ProgressBarInner
        title={blockTitle}
        meta={meta}
        completedPercent={completedPercent}
      />
    </div>
  );
}

ProgressBar.displayName = 'ProgressBar';

export default connect(mapStateToProps)(withTranslation()(ProgressBar));
