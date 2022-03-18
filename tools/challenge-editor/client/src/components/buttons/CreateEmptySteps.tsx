import React, { useState } from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';

const CreateEmptySteps = ({ superblock, block }: BlockRequiredProps) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const click = () => {
    fetch(`http://localhost:3200/${superblock}/${block}/_tools/create-empty`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ start, end })
    })
      .then(res => res.json() as Promise<{ stdout: string; stderr: string }>)
      .then(data => alert(JSON.stringify(data)))
      .catch(err => console.log(err));
  };

  const changeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStart(parseInt(e.target.value, 10));
  };
  const changeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor='start'>
        Step to start creating at:
        <input id='start' type='number' onChange={changeStart} />
      </label>
      <label htmlFor='end'>
        Number of steps to create:
        <input id='end' type='number' onChange={changeEnd} />
      </label>
      <button onClick={click}>Create Empty Steps</button>
    </div>
  );
};

export default CreateEmptySteps;
