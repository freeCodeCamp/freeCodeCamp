import React, { useState } from 'react';
import { BlockRequiredProps } from '../../../interfaces/prop-types';
import { API_LOCATION, handleRequest } from '../../utils/handle-request';

const DeleteStep = ({ superblock, block }: BlockRequiredProps) => {
  const [num, setNum] = useState(0);

  const click = handleRequest(() =>
    fetch(`${API_LOCATION}/${superblock}/${block}/_tools/delete-step`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num })
    })
  );

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
