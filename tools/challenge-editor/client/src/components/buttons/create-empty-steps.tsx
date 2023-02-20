import React, { useState } from 'react';
import { BlockRequiredProps } from '../../../interfaces/prop-types';
import { API_LOCATION, handleRequest } from '../../utils/handle-request';

const CreateEmptySteps = ({ superblock, block }: BlockRequiredProps) => {
  const [num, setNum] = useState(0);

  const click = handleRequest(() =>
    fetch(`${API_LOCATION}/${superblock}/${block}/_tools/create-empty-steps`, {
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
        Number of steps to create:
        <input id='num' type='number' onChange={changeNum} />
      </label>
      <button onClick={click}>Create Empty Steps</button>
    </div>
  );
};

export default CreateEmptySteps;
