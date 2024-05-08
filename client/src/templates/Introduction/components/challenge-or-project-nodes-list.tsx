import React from 'react';
import { Link } from 'gatsby';
import { TFunction } from 'i18next';
import { challengeTypes } from '../../../../../shared/config/challenge-types'; // Update the import path as necessary
import { ProgressionNodesWithCompleted } from '../../../redux/prop-types'; // Update the import path as necessary
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { ChallengeNodeTile } from './challenge-node-tile';
import { ProjectNodeTile } from './project-node-tile';

interface ChallengeOrProjectNodesListProps {
  nodes: ProgressionNodesWithCompleted[];
  isProject: boolean;
  getStepNumber: (dashedName: string) => string;
  t: TFunction;
}

const ChallengeOrProjectNodesList: React.FC<
  ChallengeOrProjectNodesListProps
> = ({ nodes, isProject, getStepNumber, t }) => {
  return (
    <ul className={`map-challenges-ul map-challenges-grid `}>
      {nodes.map(node => (
        <li
          className={`map-challenge-title map-challenge-title-grid ${
            isProject
              ? 'map-project-wrap'
              : node.challengeType === challengeTypes.dialogue
                ? 'map-dialogue-wrap'
                : 'map-challenge-wrap'
          }`}
          id={node.dashedName}
          key={`map-challenge ${node.fields.slug}`}
        >
          {!isProject && node.challengeType !== challengeTypes.dialogue ? (
            // Step or Task challenge
            <Link
              to={node.fields.slug}
              className={`map-grid-item ${
                node.isCompleted ? 'challenge-completed' : ''
              }`}
            >
              <span className='sr-only'>
                {node.superBlock === SuperBlocks.A2English
                  ? t('aria.task')
                  : t('aria.step')}
              </span>
              <span>{getStepNumber(node.dashedName)}</span>
              <span className='sr-only'>
                {node.isCompleted ? t('icons.passed') : t('icons.not-passed')}
              </span>
            </Link>
          ) : node.challengeType === challengeTypes.dialogue ? (
            <ChallengeNodeTile node={node} />
          ) : (
            <ProjectNodeTile node={node} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChallengeOrProjectNodesList;
