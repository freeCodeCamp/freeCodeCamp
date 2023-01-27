import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';
import { API_LOCATION, handleRequest } from '../../utils/handleRequest';

const UpdateStepTitles = ({ superblock, block }: BlockRequiredProps) => {
  const click = handleRequest(() =>
    fetch(`${API_LOCATION}/${superblock}/${block}/_tools/update-step-titles`, {
      method: 'POST'
    })
  );

  return <button onClick={click}>Reorder Steps</button>;
};

export default UpdateStepTitles;
