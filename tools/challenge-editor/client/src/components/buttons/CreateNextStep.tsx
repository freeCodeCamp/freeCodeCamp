import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';
import { handleRequest } from '../../utils/handleRequest';

const CreateNextStep = ({ superblock, block }: BlockRequiredProps) => {
  const click = handleRequest(() =>
    fetch(
      `http://localhost:3200/${superblock}/${block}/_tools/create-next-step`,
      {
        method: 'POST'
      }
    )
  );

  return <button onClick={click}>Create Next Step</button>;
};

export default CreateNextStep;
