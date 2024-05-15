import { Link } from 'gatsby';
import React from 'react';
import { ProgressionTilesWithCompleted as ProgressionTilesWithCompleted } from '../../../redux/prop-types';
import { CheckMark } from './check-mark';

export const ProjectTile = ({
  tile: tileData
}: {
  tile: ProgressionTilesWithCompleted;
}) => (
  <Link to={tileData.fields.slug}>
    {tileData.title}
    <span className=' badge map-badge map-project-checkmark'>
      <CheckMark isCompleted={tileData.isCompleted} />
    </span>
  </Link>
);
