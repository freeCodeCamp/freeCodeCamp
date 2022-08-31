import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from 'react';
import { useTranslation } from 'react-i18next';

import TestFail from '../../../assets/icons/test-fail';
import TestHint from '../../../assets/icons/test-hint';
import TestPass from '../../../assets/icons/test-pass';
import { MAX_MOBILE_WIDTH } from '../../../../../config/misc';

interface LowerJawProps {
  hint?: string;
  challengeIsCompleted: boolean;
  openHelpModal: () => void;
  tryToExecuteChallenge: () => void;
  tryToSubmitChallenge: () => void;
  showFeedback?: boolean;
  isEditorInFocus?: boolean;
  challengeHasErrors?: boolean;
  testsLength?: number;
  attemptsNumber?: number;
  isRunningTests?: boolean;
}

const LowerJaw = ({
  challengeIsCompleted,
  challengeHasErrors,
  hint,
  tryToExecuteChallenge,
  tryToSubmitChallenge,
  attemptsNumber,
  isEditorInFocus,
  isRunningTests
}: LowerJawProps): JSX.Element => {
  const [previousHint, setpreviousHint] = useState('');
  const [runningTests, setRunningTests] = useState(false);
  const [testFeedbackheight, setTestFeedbackheight] = useState(0);
  const [isFeedbackHidden, setIsFeedbackHidden] = useState(false);
  const [testBtnariaHidden, setTestBtnariaHidden] = useState(false);
  const { t } = useTranslation();
  const submitButtonRef = React.createRef<HTMLButtonElement>();
  const testFeedbackRef = React.createRef<HTMLDivElement>();
  const challengeHasBeenCompletedRef = useRef(false);

  // if a challenge was ever completed keep the state as completed
  if (challengeIsCompleted) {
    challengeHasBeenCompletedRef.current = true;
  }
  // keep the value of the reference.current as a separate value for convenience
  const challengeHasBeenCompleted = challengeHasBeenCompletedRef.current;

  useEffect(() => {
    if (attemptsNumber && attemptsNumber > 0) {
      //hide the feedback from SR until the "Running tests" are displayed and removed.
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

    setTestBtnariaHidden(challengeIsCompleted);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeHasBeenCompleted]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackheight(testFeedbackRef.current.clientHeight);
    }
  });

  /*
    Return early in lifecycle based on the earliest available conditions to help the editor
    calculate the correct editor gap for the lower jaw.

    For consistency, use the persisted version if the conditions has been met before.
  */
  const earliestAvailableHint = hint || previousHint;

  const sentencePicker = useCallback(() => {
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
  }, [attemptsNumber]);

  const feedbackContent = useMemo(() => {
    if (attemptsNumber === 0) {
      return '';
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
              <TestPass />
            </span>
          </div>
          <div className='test-status-description'>
            <p className='status'>
              {t('learn.congratulations')}
              {submitKeyboardInstructions}
            </p>
          </div>
        </div>
      );
    } else if (earliestAvailableHint) {
      const hintDescription = `<h2 class="hint">${t(
        'learn.hint'
      )}</h2> ${earliestAvailableHint}`;
      return (
        <>
          <div className='test-status fade-in' aria-hidden={isFeedbackHidden}>
            <div className='status-icon' aria-hidden='true'>
              <span>
                <TestFail />
              </span>
            </div>
            <div className='test-status-description'>
              <p>{t(sentencePicker())}</p>
            </div>
          </div>
          <div className='hint-status fade-in' aria-hidden={isFeedbackHidden}>
            <div className='hint-icon' aria-hidden='true'>
              <span>
                <TestHint />
              </span>
            </div>
            <div
              className='hint-description'
              dangerouslySetInnerHTML={{ __html: hintDescription }}
            />
          </div>
        </>
      );
    }
  }, [
    attemptsNumber,
    challengeHasBeenCompleted,
    earliestAvailableHint,
    isEditorInFocus,
    isFeedbackHidden,
    sentencePicker,
    t
  ]);

  const showDesktopButton = window.innerWidth > MAX_MOBILE_WIDTH;

  const renderButtons = () => {
    return (
      <>
        <button
          id='test-button'
          className={`btn btn-primary ${
            challengeHasBeenCompleted ? 'sr-only' : ''
          }`}
          aria-hidden={testBtnariaHidden}
          onClick={tryToExecuteChallenge}
        >
          {showDesktopButton
            ? t('buttons.check-code')
            : t('buttons.check-code-2')}
          {isRunningTests && '...'}
        </button>
        <button
          id='submit-button'
          aria-hidden={!challengeHasBeenCompleted}
          className='btn btn-primary'
          onClick={tryToSubmitChallenge}
          ref={submitButtonRef}
        >
          {t('buttons.submit-and-go')}
        </button>
      </>
    );
  };

  return (
    <div className='action-row-container'>
      {!isRunningTests && feedbackContent && (
        <div
          style={runningTests ? { height: `${testFeedbackheight}px` } : {}}
          className={`test-feedback`}
          id='test-feedback'
          aria-live='assertive'
          ref={testFeedbackRef}
        >
          {feedbackContent}
        </div>
      )}
      {renderButtons()}
    </div>
  );
};

LowerJaw.displayName = 'LowerJaw';

export default LowerJaw;
