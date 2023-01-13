import React from 'react';
import { Button } from '@freecodecamp/react-bootstrap';
import { apiLocation } from '../../../../../config/env.json';

export const RenderButtons = ({
  signed,
  completeChallenge,
  signInText,
  buttonAriaHidden,
  excuteChallenge,
  submitChallenge,
  checkButtonText,
  submitButtonText,
  ref
}: {
  signed: boolean;
  completeChallenge: boolean;
  signInText: string;
  buttonAriaHidden: boolean;
  excuteChallenge: () => void;
  submitChallenge: () => void;
  checkButtonText: string;
  submitButtonText: string;
  ref: React.RefObject<HTMLButtonElement>;
}): JSX.Element => {
  return (
    <div id='action-buttons-container'>
      {!signed && completeChallenge && (
        <Button block={true} href={`${apiLocation}/signin`} className='btn-cta'>
          {signInText}
        </Button>
      )}
      <button
        id='test-button'
        data-cy='run-tests-button'
        className={`btn-block btn ${completeChallenge ? 'sr-only' : ''}`}
        aria-hidden={buttonAriaHidden}
        onClick={excuteChallenge}
      >
        {checkButtonText}
      </button>
      <button
        id='submit-button'
        data-cy='submit-button'
        aria-hidden={!completeChallenge}
        className='btn-block btn'
        onClick={submitChallenge}
        ref={ref}
      >
        {submitButtonText}
      </button>
    </div>
  );
};
