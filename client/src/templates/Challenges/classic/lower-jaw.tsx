import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Fail from '../../../assets/icons/fail';
import LightBulb from '../../../assets/icons/lightbulb';
import GreenPass from '../../../assets/icons/green-pass';

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted?: boolean;
  openHelpModal: () => void;
  tryToExecuteChallenge: () => void;
  tryToSubmitChallenge: () => void;
  showFeedback?: boolean;
  isEditorInFocus?: boolean;
  challengeHasErrors?: boolean;
  testsLength?: number;
  attemptsNumber?: number;
}

const LowerJaw = ({
  openHelpModal,
  challengeIsCompleted,
  challengeHasErrors,
  hint,
  tryToExecuteChallenge,
  tryToSubmitChallenge,
  attemptsNumber,
  testsLength,
  isEditorInFocus
}: LowerJawProps): JSX.Element => {
  const [previousHint, setpreviousHint] = useState('');
  const [runningTests, setRunningTests] = useState(false);
  const [testFeedbackheight, setTestFeedbackheight] = useState(0);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(false);
  const [testBtnariaHidden, setTestBtnariaHidden] = useState(false);
  const { t } = useTranslation();
  const submitButtonRef = React.createRef<HTMLButtonElement>();
  const testFeedbackRef = React.createRef<HTMLDivElement>();

  const [challengeHasBeenCompleted, setChallengeHasBennCompleted] =
    useState(false);

  useEffect(() => {
    if (attemptsNumber && attemptsNumber > 0) {
      //hide the feedback from SR untill the "Running tests" are displayed and removed.
      setIsFeedbackHidden(true);

      //allow the lower jaw height to be picked up by the editor.
      setTimeout(() => {
        setRunningTests(true);
      }, 200);

      //display the test feedback contents.
      setTimeout(() => {
        setRunningTests(false);
        setIsFeedbackHidden(false);
      }, 300);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptsNumber]);

  useEffect(() => {
    // only save error hints
    if (challengeHasErrors && hint && previousHint !== hint) {
      setpreviousHint(hint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeHasErrors, hint]);

  useEffect(() => {
    if (challengeHasBeenCompleted && submitButtonRef?.current) {
      submitButtonRef.current.focus();
      setTimeout(() => {
        setTestBtnariaHidden(true);
      }, 500);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeHasBeenCompleted]);

  useEffect(() => {
    if (!challengeHasBeenCompleted) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setChallengeHasBennCompleted(challengeIsCompleted!);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeIsCompleted]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackheight(testFeedbackRef.current.clientHeight);
    }
  });

  const renderTestFeedbackContainer = () => {
    if (attemptsNumber === 0) {
      return '';
    } else if (runningTests) {
      return <span className='sr-only'>{t('aria.running-tests')}</span>;
    } else if (challengeHasBeenCompleted) {
      const submitKeyboardInstructions = isEditorInFocus ? (
        <span className='sr-only'>{t('aria.submit')}</span>
      ) : (
        ''
      );
      return (
        <div className='test-status fade-in' aria-hidden={isFeedbackHidden}>
          <div className='status-icon' aria-hidden='true'>
            <span>
              <GreenPass />
            </span>
          </div>
          <div className='test-status-description'>
            <h2>{t('learn.test')}</h2>
            <p className='status'>
              {t('learn.congradulations')}
              {submitKeyboardInstructions}
            </p>
          </div>
        </div>
      );

      // show the hint if the previousHint is not set
    } else if (hint || previousHint) {
      const hintDiscription = `<h2 class="hint">${t('learn.hint')}</h2> ${
        hint || previousHint
      }`;
      return (
        <>
          <div className='test-status fade-in' aria-hidden={isFeedbackHidden}>
            <div className='status-icon' aria-hidden='true'>
              <span>
                <Fail />
              </span>
            </div>
            <div className='test-status-description'>
              <h2>{t('learn.test')}</h2>
              <p>{t(sentencePicker())}</p>
            </div>
          </div>
          <div className='hint-status fade-in' aria-hidden={isFeedbackHidden}>
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

  const sentencePicker = () => {
    const sentenceArray = [
      'learn.sorry-try-again',
      'learn.sorry-keep-trying',
      'learn.sorry-getting-there',
      'learn.sorry-hang-in-there',
      'learn.sorry-dont-giveup'
    ];
    return attemptsNumber
      ? sentenceArray[attemptsNumber % sentenceArray.length]
      : sentenceArray[0];
  };

  const renderHelpButton = () => {
    const isAtteptsLargerThanTest =
      attemptsNumber && testsLength && attemptsNumber >= testsLength;

    if (isAtteptsLargerThanTest && !challengeHasBeenCompleted)
      return (
        <button
          className='btn-block btn fade-in'
          id='help-button'
          onClick={openHelpModal}
        >
          {t('buttons.ask-for-help')}
        </button>
      );
  };

  const renderButtons = () => {
    return (
      <>
        <button
          id='test-button'
          className={`btn-block btn ${
            challengeHasBeenCompleted ? 'sr-only' : ''
          }`}
          aria-hidden={testBtnariaHidden}
          onClick={tryToExecuteChallenge}
        >
          {t('buttons.check-code')}
        </button>
        <div id='action-buttons-container'>
          <button
            id='submit-button'
            aria-hidden={!challengeHasBeenCompleted}
            className='btn-block btn'
            onClick={tryToSubmitChallenge}
            ref={submitButtonRef}
          >
            {t('buttons.submit-and-go')}
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
        style={runningTests ? { height: `${testFeedbackheight}px` } : {}}
        className={`test-feedback`}
        id='test-feedback'
        aria-live='assertive'
        ref={testFeedbackRef}
      >
        {renderTestFeedbackContainer()}
      </div>
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;
