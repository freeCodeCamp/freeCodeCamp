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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (testFeedbackRef.current) {
      setTestFeedbackheight(testFeedbackRef.current.clientHeight);
    }
  });

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
              dangerouslySetInnerHTML={{ __html: hintDiscription }}
            />
          </div>
        </>
      );
    }
  }, [
    attemptsNumber,
    challengeHasBeenCompleted,
    hint,
    isEditorInFocus,
    isFeedbackHidden,
    previousHint,
    sentencePicker,
    t
  ]);

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
          {t('buttons.check-code')}
          {isRunningTests && '...'}
        </button>
        <div id='action-buttons-container'>
          <button
            id='submit-button'
            aria-hidden={!challengeHasBeenCompleted}
            className='btn btn-primary'
            onClick={tryToSubmitChallenge}
            ref={submitButtonRef}
          >
            {t('buttons.submit-and-go')}
          </button>
        </div>
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
