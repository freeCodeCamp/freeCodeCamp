import React from 'react';
import { ChallengeContentRequiredProps } from '../../../interfaces/prop-types';
import { API_LOCATION, handleRequest } from '../../utils/handle-request';

const SaveChallenge = ({
  superblock,
  block,
  challenge,
  content
}: ChallengeContentRequiredProps) => {
  const click = handleRequest(() =>
    fetch(`${API_LOCATION}/${superblock}/${block}/${challenge}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    })
  );

  return <button onClick={click}>Save Changes</button>;
};

export default SaveChallenge;
