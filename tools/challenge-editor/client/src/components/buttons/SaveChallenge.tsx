import React from 'react';
import { ChallengeContentRequiredProps } from '../../../interfaces/PropTypes';
import { handleRequest } from '../../utils/handleRequest';

const SaveChallenge = ({
  superblock,
  block,
  challenge,
  content
}: ChallengeContentRequiredProps) => {
  const click = handleRequest(() =>
    fetch(`http://localhost:3200/${superblock}/${block}/${challenge}`, {
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
