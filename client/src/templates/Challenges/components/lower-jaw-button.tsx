import React from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import { apiLocation } from '../../../../../config/env.json';

interface LowerJawButtonProps {
  signed: boolean;
  completeChallenge: boolean;
  signInText: string;
  excuteChallenge: () => void;
  submitChallenge: () => void;
  checkButtonText: string;
  submitButtonText: string;
}

export const LowerJawButtons = ({
  signed,
  completeChallenge,
  signInText,
  excuteChallenge,
  submitChallenge,
  checkButtonText,
  submitButtonText
}: LowerJawButtonProps) => {
  return (
    <div id='action-buttons-container'>
      {!signed && completeChallenge && (
        <Button block={true} href={`${apiLocation}/signin`} className='btn-cta'>
          {signInText}
        </Button>
      )}
      <button
        className={'btn-block btn'}
        id='lowerJaw-button'
        data-cy='lowerJaw-button'
        onClick={completeChallenge ? submitChallenge : excuteChallenge}
      >
        {completeChallenge ? submitButtonText : checkButtonText}
      </button>
    </div>
  );
};
