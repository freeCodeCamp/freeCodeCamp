import React, { useState } from 'react';
import { BlockRequiredProps } from '../../../interfaces/PropTypes';

const DeleteStep = ({ superblock, block }: BlockRequiredProps) => {
  const [num, setNum] = useState(0);

  const click = () => {
    fetch(`http://localhost:3200/${superblock}/${block}/_tools/delete-step`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num })
    })
      .then(res => res.json() as Promise<{ stdout: string; stderr: string }>)
      .then(data => alert(JSON.stringify(data)))
      .catch(err => console.log(err));
  };

  const changeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor='num'>
        Step to delete:
        <input id='num' type='number' onChange={changeNum} />
      </label>
      <button onClick={click}>Delete Step</button>
    </div>
  );
};

export default DeleteStep;
