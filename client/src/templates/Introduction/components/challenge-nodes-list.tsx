// ChallengeList.tsx
import React from 'react';
import { ProgressionNodesWithCompleted } from '../../../redux/prop-types'; // Update the import path as necessary
import { ChallengeNodeTile } from './challenge-node-tile';
import { ProjectNodeTile } from './project-node-tile';

interface ChallengeNodesListProps {
  nodes: ProgressionNodesWithCompleted[];
  isProject: boolean;
}

const ChallengeNodesList: React.FC<ChallengeNodesListProps> = ({
  nodes,
  isProject: isProjectBlock
}) => {
  return (
    <ul className={`map-challenges-ul`}>
      {nodes.map(node => (
        <li
          className={`map-challenge-title ${isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'}`}
          id={node.dashedName}
          key={'map-challenge' + node.fields.slug}
        >
          {!isProjectBlock ? (
            <ChallengeNodeTile node={node} />
          ) : (
            <ProjectNodeTile node={node} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ChallengeNodesList;
