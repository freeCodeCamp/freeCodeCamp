// ChallengeList.tsx
import React from 'react';
import { ProgressionTilesWithCompleted } from '../../../redux/prop-types'; // Update the import path as necessary
import { ChallengeTile } from './challenge-tile';
import { ProjectTile } from './project-tile';

interface ChallengeTilesListProps {
  tiles: ProgressionTilesWithCompleted[];
  isProject: boolean;
}

const ChallengeTilesList: React.FC<ChallengeTilesListProps> = ({
  tiles: tilesData,
  isProject: isProjectBlock
}) => {
  return (
    <ul className={`map-challenges-ul`}>
      {tilesData.map(tileData => (
        <li
          className={`map-challenge-title ${isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'}`}
          id={tileData.dashedName}
          key={'map-challenge' + tileData.fields.slug}
        >
          {!isProjectBlock ? (
            <ChallengeTile tile={tileData} />
          ) : (
            <ProjectTile tile={tileData} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChallengeTilesList;
