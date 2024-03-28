import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { ProgressionNodesWithCompleted } from '../../../redux/prop-types';
import ChallengeNodesList from './challenge-nodes-list';
import ChallengeOrProjectNodesList from './challenge-or-project-nodes-list';
import ProjectController from './project-controller';

const getStepNumber = (dashedName: string) => {
  // dashedName should be in the format 'step-1' or 'task-1'
  const match = dashedName.match(/-(\d+)/);
  return match ? match[1] : '';
};

interface ChallengeBlock {
  progressionNodes: ProgressionNodesWithCompleted[];
  isProjectBlock: boolean;
  isGridMap?: boolean;
  blockTitle?: string | null;
}

function ChallengeBlock({
  progressionNodes,
  isProjectBlock,
  isGridMap = false,
  blockTitle
}: ChallengeBlock): JSX.Element {
  const { t } = useTranslation();

  const firstIncompleteChallenge = progressionNodes.find(
    node => !node.isCompleted
  );

  const isChallengeStarted = !!progressionNodes.find(node => node.isCompleted);

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
            ? progressionNodes[0].superBlock === SuperBlocks.A2English
              ? t('aria.dialogues-and-tasks-for', { blockTitle })
              : t('aria.steps-for', { blockTitle })
            : t('aria.steps')
        }
      >
        <ChallengeOrProjectNodesList
          nodes={progressionNodes}
          isProject={isProjectBlock}
          getStepNumber={getStepNumber}
          t={t}
        />
      </nav>
    </>
  ) : (
    <ChallengeNodesList nodes={progressionNodes} isProject={isProjectBlock} />
  );
}

ChallengeBlock.displayName = 'ChallengeBlock';

export default withTranslation()(ChallengeBlock);
