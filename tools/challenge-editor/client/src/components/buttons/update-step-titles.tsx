import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/prop-types';
import { API_LOCATION, handleRequest } from '../../utils/handle-request';

const UpdateStepTitles = ({ superblock, block }: BlockRequiredProps) => {
  const click = handleRequest(() =>
    fetch(`${API_LOCATION}/${superblock}/${block}/_tools/update-step-titles`, {
      method: 'POST'
    })
  );

  return <button onClick={click}>Reorder Steps</button>;
};

export default UpdateStepTitles;
