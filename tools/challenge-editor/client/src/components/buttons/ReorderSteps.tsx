import React from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';

const ReorderSteps = ({ superblock, block }: BlockRequiredProps) => {
  const click = () => {
    fetch(`http://localhost:3200/${superblock}/${block}/_tools/reorder`, {
      method: 'POST'
    })
      .then(res => res.json() as Promise<{ stdout: string; stderr: string }>)
      .then(data => alert(JSON.stringify(data)))
      .catch(err => console.log(err));
  };

  return <button onClick={click}>Reorder Steps</button>;
};

export default ReorderSteps;
