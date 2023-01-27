import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';
import { API_LOCATION, handleRequest } from '../../utils/handleRequest';

const CreateNextStep = ({ superblock, block }: BlockRequiredProps) => {
  const click = handleRequest(() =>
    fetch(`${API_LOCATION}/${superblock}/${block}/_tools/create-next-step`, {
      method: 'POST'
    })
  );

  return <button onClick={click}>Create Next Step</button>;
};

export default CreateNextStep;
