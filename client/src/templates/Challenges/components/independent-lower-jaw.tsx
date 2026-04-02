import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faClose,
  faZap,
  faSave,
  faClockRotateLeft,
  faRotateLeft
} from '@fortawesome/free-solid-svg-icons';
import Progress from '../../../components/Progress';
import {
  completedChallengesIdsSelector,
  isSignedInSelector
} from '../../../redux/selectors';
import { ChallengeMeta, Test } from '../../../redux/prop-types';
import {
  challengeMetaSelector,
  challengeTestsSelector,
  completedPercentageSelector,
  currentBlockIdsSelector
} from '../redux/selectors';
import { apiLocation } from '../../../../config/env.json';
import { openModal, executeChallenge } from '../redux/actions';
import { saveChallenge } from '../../../redux/actions';
import Help from '../../../assets/icons/help';
import callGA from '../../../analytics/call-ga';
import { Share } from '../../../components/share';
import { useSubmit } from '../utils/fetch-all-curriculum-data';
import sanitizeHtml from 'sanitize-html';

import './independent-lower-jaw.css';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  isSignedInSelector,
  challengeMetaSelector,
  completedPercentageSelector,
  completedChallengesIdsSelector,
  currentBlockIdsSelector,
  (
    tests: Test[],
    isSignedIn: boolean,
    challengeMeta: ChallengeMeta,
    completedPercent: number,
    completedChallengeIds: string[],
    currentBlockIds: string[]
  ) => ({
    tests,
    isSignedIn,
    challengeMeta,
    completedPercent,
    completedChallengeIds,
    currentBlockIds
  })
);

const mapDispatchToProps = {
  openHelpModal: () => openModal('help'),
  openResetModal: () => openModal('reset'),
  executeChallenge,
  saveChallenge
};

interface IndependentLowerJawProps {
  openHelpModal: () => void;
  openResetModal: () => void;
  executeChallenge: () => void;
  saveChallenge: () => void;
  tests: Test[];
  isSignedIn: boolean;
  challengeMeta: ChallengeMeta;
  completedPercent: number;
  completedChallengeIds: string[];
  currentBlockIds: string[];
}
export function IndependentLowerJaw({
  openHelpModal,
  openResetModal,
  executeChallenge,
  saveChallenge,
  tests,
  isSignedIn,
  challengeMeta,
  completedPercent,
  completedChallengeIds,
  currentBlockIds
}: IndependentLowerJawProps): JSX.Element {
  const { t } = useTranslation();
  const submitChallenge = useSubmit();
  const firstFailedTest = tests.find(test => !!test.err);
  const hint = firstFailedTest?.message;
  const sanitizedHint = hint
    ? sanitizeHtml(hint, {
        allowedTags: ['a', 'b', 'br', 'code', 'em', 'i', 'p', 'pre', 'span', 'strong', 'ul', 'ol', 'li'],
        allowedAttributes: {
          a: ['href', 'rel', 'target'],
          span: ['class'],
          pre: ['class'],
          code: ['class']
        },
        allowedSchemes: ['http', 'https', 'mailto']
      })
    : '';
  const [showHint, setShowHint] = React.useState(false);
  const [showSubmissionHint, setShowSubmissionHint] = React.useState(true);
  const signInLinkRef = React.useRef<HTMLAnchorElement>(null);
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  const [wasCheckButtonClicked, setWasCheckButtonClicked] =
    React.useState(false);

  const isChallengeComplete = tests.every(test => test.pass);
  const hasBlockIds = currentBlockIds.length > 0;
  const isLastStepInBlock =
    hasBlockIds &&
    currentBlockIds[currentBlockIds.length - 1] === challengeMeta.id;
  const isBlockCompletedByIds =
    hasBlockIds &&
    currentBlockIds.every(challengeId =>
      completedChallengeIds.includes(challengeId)
    );
  const hasCompletedPercent = Number.isFinite(completedPercent);
  const isBlockCompleted =
    isBlockCompletedByIds || (hasCompletedPercent && completedPercent === 100);
  const showShareButton =
    isChallengeComplete && isLastStepInBlock && isBlockCompleted;

  React.useEffect(() => {
    setShowHint(!!hint);
  }, [hint]);

  React.useEffect(() => {
    if (!isChallengeComplete || !wasCheckButtonClicked) return;

    const focusTarget = isSignedIn
      ? submitButtonRef.current
      : signInLinkRef.current;
    focusTarget?.focus();
    setWasCheckButtonClicked(false);
  }, [isChallengeComplete, isSignedIn, wasCheckButtonClicked]);

  const handleCheckButtonClick = () => {
    setWasCheckButtonClicked(true);
    executeChallenge();
  };

  const isMacOS = navigator.userAgent.includes('Mac OS');
  const showRevertButton = isSignedIn && challengeMeta.saveSubmissionToDB;
  const checkButtonText = isMacOS
    ? t('buttons.command-enter')
    : t('buttons.ctrl-enter');

  return (
    <div
      className='independent-lower-jaw'
      data-playwright-test-label='independentLowerJaw-container'
      tabIndex={-1}
    >
      {showHint && hint && (
        <div
          className='hint-container'
          data-playwright-test-label='independentLowerJaw-failing-hint'
        >
          <div className='hint-header'>
            <FontAwesomeIcon icon={faLightbulb} />
            <button
              className={'tooltip'}
              data-playwright-test-label='independentLowerJaw-hint-close-button'
              onClick={() => setShowHint(false)}
              aria-label={t('buttons.close')}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHint }} />
        </div>
      )}
      {isChallengeComplete && showSubmissionHint && (
        <div
          className='hint-container'
          data-playwright-test-label='independentLowerJaw-submission-hint'
        >
          <div className='hint-header'>
            <FontAwesomeIcon icon={faZap} />
            <button
              className={'tooltip'}
              aria-label={t('buttons.close')}
              data-playwright-test-label='independentLowerJaw-submission-hint-close-button'
              onClick={() => setShowSubmissionHint(false)}
            >
              <FontAwesomeIcon icon={faClose} />
              <span className='tooltiptext'> {t('buttons.close')}</span>
            </button>
          </div>
          <b>{t('learn.congratulations-code-passes')}</b>
          <div className='progress-bar-container'>
            <Progress minified={true} />
          </div>
          {isSignedIn && showShareButton && (
            <div
              className='share-button-wrapper'
              data-testid='share-button-wrapper'
            >
              <Share
                superBlock={challengeMeta.superBlock}
                block={challengeMeta.block}
                minified={true}
              />
            </div>
          )}
          {!isSignedIn && (
            <>
              <Spacer size='xxs' />
              <a
                href={`${apiLocation}/signin`}
                className='btn-cta btn btn-block'
                data-playwright-test-label='independentLowerJaw-signin-link'
                ref={signInLinkRef}
                onClick={() => {
                  callGA({
                    event: 'sign_in'
                  });
                }}
              >
                {t('learn.sign-in-save')}
              </a>
            </>
          )}
        </div>
      )}

      <div className='buttons-row-container'>
        <div className='action-row-left'>
          {isChallengeComplete ? (
            <Button
              block
              className={`${isSignedIn && 'btn-cta'} tooltip`}
              id='independent-lower-jaw-submit-button'
              data-playwright-test-label='independentLowerJaw-submit-button'
              aria-label={t('buttons.submit-continue')}
              onClick={() => submitChallenge()}
              ref={submitButtonRef}
            >
              {t('buttons.submit-continue')}
              <span className='tooltiptext left-tooltip'>
                {checkButtonText}
              </span>
            </Button>
          ) : (
            <button
              type='button'
              className='btn-cta tooltip'
              data-playwright-test-label='independentLowerJaw-check-button'
              aria-label={t('buttons.check-code')}
              onClick={handleCheckButtonClick}
            >
              {t('buttons.check-code')}
              <span className='tooltiptext left-tooltip'>
                {checkButtonText}
              </span>
            </button>
          )}
        </div>
        <div className='action-row-right'>
          {showRevertButton ? (
            <>
              <button
                type='button'
                className='icon-botton tooltip'
                data-playwright-test-label='independentLowerJaw-save-button'
                aria-label={t('buttons.save')}
                onClick={() => saveChallenge()}
              >
                <FontAwesomeIcon icon={faSave} />
                <span className='tooltiptext'> {t('buttons.save')}</span>
              </button>
              <button
                type='button'
                className='icon-botton tooltip'
                data-playwright-test-label='independentLowerJaw-revert-button'
                aria-label={t('buttons.revert')}
                onClick={openResetModal}
              >
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <span className='tooltiptext'> {t('buttons.revert')}</span>
              </button>
            </>
          ) : (
            <button
              type='button'
              className='icon-botton tooltip'
              data-playwright-test-label='independentLowerJaw-reset-button'
              aria-label={t('buttons.reset')}
              onClick={openResetModal}
            >
              <FontAwesomeIcon icon={faRotateLeft} />
              <span className='tooltiptext'> {t('buttons.reset')}</span>
            </button>
          )}
          <button
            type='button'
            className='icon-botton tooltip'
            data-playwright-test-label='independentLowerJaw-help-button'
            aria-label={t('buttons.help')}
            onClick={openHelpModal}
          >
            <Help />
            <span className='tooltiptext'> {t('buttons.help')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

IndependentLowerJaw.displayName = 'IndependentLowerJaw';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndependentLowerJaw);
