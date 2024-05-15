import { Link } from 'gatsby';
import React from 'react';
import { ProgressionTilesWithCompleted } from '../../../redux/prop-types';
import { CheckMark } from './check-mark';

export const ChallengeTile = ({
  tile: tileData
}: {
  tile: ProgressionTilesWithCompleted;
}) => (
  <Link to={tileData.fields.slug}>
    <span className='badge map-badge'>
      <CheckMark isCompleted={tileData.isCompleted} />
    </span>
    {tileData.title}
  </Link>
);
