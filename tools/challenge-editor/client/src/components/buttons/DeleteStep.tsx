import React, { useState } from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';

const DeleteStep = ({ superblock, block }: BlockRequiredProps) => {
  const [start, setStart] = useState(0);

  const click = () => {
    fetch(`http://localhost:3200/${superblock}/${block}/_tools/delete-step`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ start })
    })
      .then(res => res.json() as Promise<{ stdout: string; stderr: string }>)
      .then(data => alert(JSON.stringify(data)))
      .catch(err => console.log(err));
  };

  const changeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor='start'>
        Step to delete:
        <input id='start' type='number' onChange={changeStart} />
      </label>
      <button onClick={click}>Delete Step</button>
    </div>
  );
};

export default DeleteStep;
