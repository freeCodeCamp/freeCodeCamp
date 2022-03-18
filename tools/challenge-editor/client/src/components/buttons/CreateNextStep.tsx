import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';

const CreateNextStep = ({ superblock, block }: BlockRequiredProps) => {
  const click = () => {
    fetch(`http://localhost:3200/${superblock}/${block}/_tools/create-next`, {
      method: 'POST'
    })
      .then(res => res.json() as Promise<{ stdout: string; stderr: string }>)
      .then(data => alert(JSON.stringify(data)))
      .catch(err => console.log(err));
  };

  return <button onClick={click}>Create Next Step</button>;
};

export default CreateNextStep;
