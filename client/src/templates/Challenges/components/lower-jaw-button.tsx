import React from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import { apiLocation } from '../../../../../config/env.json';

interface LowerJawButtonProps {
  signed: boolean;
  buttonText: string;
  signInText: string;
  onClick: () => void;
  challengeIsCompleted: boolean;
}

export const LowerJawButtons = ({
  signed,
  challengeIsCompleted,
  buttonText,
  signInText,
  onClick
}: LowerJawButtonProps) => {
  return (
    <>
      {!signed && challengeIsCompleted && (
        <Button block={true} href={`${apiLocation}/signin`} className='btn-cta'>
          {signInText}
        </Button>
      )}
      <button
        className={'btn-block btn'}
        data-cy='lowerJaw-button'
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};
