import { Link } from 'gatsby';
import React from 'react';
import { ProgressionNodesWithCompleted } from '../../../redux/prop-types';
import { CheckMark } from './check-mark';

export const ProjectNodeTile = ({
  node
}: {
  node: ProgressionNodesWithCompleted;
}) => (
  <Link to={node.fields.slug}>
    {node.title}
    <span className=' badge map-badge map-project-checkmark'>
      <CheckMark isCompleted={node.isCompleted} />
    </span>
  </Link>
);
