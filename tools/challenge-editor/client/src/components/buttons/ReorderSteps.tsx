import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';
import { handleRequest } from '../../utils/handleRequest';

const ReorderSteps = ({ superblock, block }: BlockRequiredProps) => {
  const click = handleRequest(() =>
    fetch(`http://localhost:3200/${superblock}/${block}/_tools/reorder`, {
      method: 'POST'
    })
  );

  return <button onClick={click}>Reorder Steps</button>;
};

export default ReorderSteps;
