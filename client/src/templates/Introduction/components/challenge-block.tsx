import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { ProgressionTilesWithCompleted } from '../../../redux/prop-types';
import ChallengeTilesList from './challenge-tiles-list';
import ChallengeOrProjectTilesList from './challenge-or-project-tiles-list';
import ProjectController from './project-controller';

const getStepNumber = (dashedName: string) => {
  // dashedName should be in the format 'step-1' or 'task-1'
  const match = dashedName.match(/-(\d+)/);
  return match ? match[1] : '';
};

interface ChallengeBlock {
  progressionNodes: ProgressionTilesWithCompleted[];
  isProjectBlock: boolean;
  isGridMap?: boolean;
  blockTitle?: string | null;
}

function ChallengeBlock({
  progressionNodes: progressionTiles,
  isProjectBlock,
  isGridMap = false,
  blockTitle
}: ChallengeBlock): JSX.Element {
  const { t } = useTranslation();

  const firstIncompleteChallenge = progressionTiles.find(
    tile => !tile.isCompleted
  );

  const isChallengeStarted = !!progressionTiles.find(tile => tile.isCompleted);

  const buttons = firstIncompleteChallenge
    ? [
        {
          to: firstIncompleteChallenge.fields.slug,
          text: isChallengeStarted
            ? t('buttons.resume-project')
            : t('buttons.start-project'),
          className: 'btn-primary'
        }
        // Enahnce: any additional buttons we need insert here-> Next up : Reset
      ]
    : [];

  return isGridMap ? (
    <>
      {buttons.length > 0 && <ProjectController buttons={buttons} />}
      <nav
        aria-label={
          blockTitle
            ? progressionTiles[0].superBlock === SuperBlocks.A2English
              ? t('aria.dialogues-and-tasks-for', { blockTitle })
              : t('aria.steps-for', { blockTitle })
            : t('aria.steps')
        }
      >
        <ChallengeOrProjectTilesList
          tiles={progressionTiles}
          isProject={isProjectBlock}
          getStepNumber={getStepNumber}
          t={t}
        />
      </nav>
    </>
  ) : (
    <ChallengeTilesList tiles={progressionTiles} isProject={isProjectBlock} />
  );
}

ChallengeBlock.displayName = 'ChallengeBlock';

export default withTranslation()(ChallengeBlock);
