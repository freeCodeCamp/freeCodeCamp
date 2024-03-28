import { Link } from 'gatsby';
import React from 'react';
import { ProgressionNodesWithCompleted } from '../../../redux/prop-types';
import { CheckMark } from './check-mark';

export const ChallengeNodeTile = ({
  node
}: {
  node: ProgressionNodesWithCompleted;
}) => (
  <Link to={node.fields.slug}>
    <span className='badge map-badge'>
      <CheckMark isCompleted={node.isCompleted} />
    </span>
    {node.title}
  </Link>
);
