import React from 'react';
import { Link } from 'gatsby';
import { TFunction } from 'i18next';
import { challengeTypes } from '../../../../../shared/config/challenge-types'; // Update the import path as necessary
import { ProgressionTilesWithCompleted as ProgressionTilesWithCompleted } from '../../../redux/prop-types'; // Update the import path as necessary
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { ChallengeTile } from './challenge-tile';
import { ProjectTile } from './project-tile';

interface ChallengeOrProjectTilesListProps {
  tiles: ProgressionTilesWithCompleted[];
  isProject: boolean;
  getStepNumber: (dashedName: string) => string;
  t: TFunction;
}

const ChallengeOrProjectTilesList: React.FC<
  ChallengeOrProjectTilesListProps
> = ({ tiles: tiles, isProject, getStepNumber, t }) => {
  return (
    <ul className={`map-challenges-ul map-challenges-grid `}>
      {tiles.map(tileData => (
        <li
          className={`map-challenge-title map-challenge-title-grid ${
            isProject
              ? 'map-project-wrap'
              : tileData.challengeType === challengeTypes.dialogue
                ? 'map-dialogue-wrap'
                : 'map-challenge-wrap'
          }`}
          id={tileData.dashedName}
          key={`map-challenge ${tileData.fields.slug}`}
        >
          {!isProject && tileData.challengeType !== challengeTypes.dialogue ? (
            // Step or Task challenge
            <Link
              to={tileData.fields.slug}
              className={`map-grid-item ${
                tileData.isCompleted ? 'challenge-completed' : ''
              }`}
            >
              <span className='sr-only'>
                {tileData.superBlock === SuperBlocks.A2English
                  ? t('aria.task')
                  : t('aria.step')}
              </span>
              <span>{getStepNumber(tileData.dashedName)}</span>
              <span className='sr-only'>
                {tileData.isCompleted
                  ? t('icons.passed')
                  : t('icons.not-passed')}
              </span>
            </Link>
          ) : tileData.challengeType === challengeTypes.dialogue ? (
            <ChallengeTile tile={tileData} />
          ) : (
            <ProjectTile tile={tileData} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChallengeOrProjectTilesList;
