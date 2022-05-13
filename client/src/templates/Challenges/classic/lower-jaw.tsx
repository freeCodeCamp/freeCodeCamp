import React, { useState, useEffect } from 'react';

import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';
import GreenPass from '../../../assets/icons/green-pass';

interface LowerJawProps {
  hint?: string;
  isEditorInFocus?: boolean;
  challengeIsCompleted?: boolean;
  openHelpModal: () => void;
  executeChallenge: () => void;
  submitChallenge: () => void;
  showFeedback?: boolean;
  isEditorOnFocus?: boolean;
  challengeHasErrors?: boolean;
  testsLength?: number;
  attemptsNumber?: number;
  onAttempt?: () => void;
}

const LowerJaw = ({
  openHelpModal,
  challengeIsCompleted,
  challengeHasErrors,
  hint,
  isEditorInFocus,
  executeChallenge,
  submitChallenge,
  attemptsNumber,
  testsLength,
  onAttempt
}: LowerJawProps): JSX.Element => {
  const [previousHint, setpreviousHint] = useState('');
  console.log({
    previousHint,
    hint,
    challengeHasErrors,
    challengeIsCompleted,
    attemptsNumber
  });

  useEffect(() => {
    // only save error hints
    if (challengeHasErrors && hint && previousHint !== hint) {
      setpreviousHint(hint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeHasErrors, hint]);

  const renderTestFeedbackContainer = () => {
    if (attemptsNumber === 0) {
      return '';
    } else if (challengeIsCompleted) {
      const submitKeyboardInstructions = isEditorInFocus
        ? '<span class="sr-only">Use Ctrl + Enter to submit.</span>'
        : '';
      return (
        <div className='test-status'>
          <div className='status-icon' aria-hidden='true'>
            <span>
              <GreenPass />
            </span>
          </div>
          <div className='test-status-description'>
            <h2>Test</h2>
            <p className='status'>
              Congratulations, your code passes. Submit your code to complete
              this step and move on to the next one.
              {submitKeyboardInstructions}
            </p>
          </div>
        </div>
      );

      // show the hint if the previousHint is not set
    } else if (hint || previousHint) {
      const hintDiscription = `<h2 class="hint">Hint</h2> ${
        hint || previousHint
      }`;
      return (
        <>
          <div className='test-status'>
            <div className='status-icon' aria-hidden='true'>
              <span>
                <Fail />
              </span>
            </div>
            <div className='test-status-description'>
              <h2>Test</h2>
              <p>
                {`Sorry, your code does not pass.
            ${wordPicker()}`}
              </p>
            </div>
          </div>
          <div className='hint-status'>
            <div className='hint-icon' aria-hidden='true'>
              <span>
                <LightBulb />
              </span>
            </div>
            <div
              className='hint-description'
              dangerouslySetInnerHTML={{ __html: hintDiscription }}
            />
          </div>
        </>
      );
    }
  };

  const wordPicker = () => {
    const wordsArray = [
      'Try again.',
      'Keep trying.',
      "You're getting there.",
      'Hang in there.',
      "Don't give up."
    ];
    return attemptsNumber
      ? wordsArray[attemptsNumber % wordsArray.length]
      : wordsArray[0];
  };

  const onTestButtonClick = () => {
    executeChallenge();
    if (onAttempt) onAttempt();
  };

  const renderHelpButton = () => {
    if (attemptsNumber && testsLength && attemptsNumber >= testsLength)
      return (
        <button
          className='btn-block btn'
          id='help-button'
          onClick={openHelpModal}
        >
          Ask for Help
        </button>
      );
  };

  const renderButtons = () => {
    return (
      <>
        <button
          id='test-button'
          className={`btn-block btn ${challengeIsCompleted ? 'sr-only' : ''}`}
          aria-hidden={challengeIsCompleted}
          onClick={onTestButtonClick}
        >
          Check Your Code (Ctrl + Enter)
        </button>
        <div id='action-buttons-container'>
          <button
            id='submit-button'
            aria-hidden={!challengeIsCompleted}
            className='btn-block btn'
            onClick={submitChallenge}
          >
            Submit your code (Ctrl + Enter)
          </button>
          {renderHelpButton()}
        </div>
      </>
    );
  };

  return (
    <div className='action-row-container'>
      {renderButtons()}
      <div
        className='test-feedback'
        id='test-feedback'
        aria-atomic='true'
        aria-live='assertive'
      >
        {renderTestFeedbackContainer()}
      </div>
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;
