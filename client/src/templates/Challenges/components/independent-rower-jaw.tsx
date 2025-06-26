import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';
import { Test } from '../../../redux/prop-types';
import { challengeTestsSelector } from '../redux/selectors';
import { isSignedInSelector } from '../../../redux/selectors';
import { apiLocation } from '../../../../config/env.json';
import { openModal, submitChallenge, executeChallenge } from '../redux/actions';
import Help from '../../../assets/icons/help';
import callGA from '../../../analytics/call-ga';

import './independent-lower-jaw.css';
import Reset from '../../../assets/icons/reset';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  isSignedInSelector,
  (tests: Test[], isSignedIn: boolean) => ({
    tests,
    isSignedIn
  })
);

const mapDispatchToProps = {
  openHelpModal: () => openModal('help'),
  openResetModal: () => openModal('reset'),
  executeChallenge,
  submitChallenge
};

interface IndependentLowerJawProps {
  openHelpModal: () => void;
  openResetModal: () => void;
  executeChallenge: () => void;
  submitChallenge: () => void;
  tests: Test[];
  isSignedIn: boolean;
}
export function IndependentLowerJaw({
  openHelpModal,
  openResetModal,
  executeChallenge,
  submitChallenge,
  tests,
  isSignedIn
}: IndependentLowerJawProps): JSX.Element {
  console.log(isSignedIn, 'isSignedIn in IndependentLowerJaw');
  const { t } = useTranslation();
  const firstFailedTest = tests.find(test => !!test.err);
  const hint = firstFailedTest?.message;
  const [showHint, setShowHint] = React.useState(false);
  const [showSubmissionHint, setShowSubmissionHint] = React.useState(true);

  const isChallengeComplete = tests.every(test => test.pass);

  React.useEffect(() => {
    setShowHint(!!hint);
  }, [hint]);

  const isMacOS = navigator.userAgent.includes('Mac OS');
  const checkButtonText = isMacOS ? t('⌘ + Enter') : t('ctrl-enter');

  return (
    <div className='independent-lower-jaw' tabIndex={-1}>
      {showHint && hint && (
        <div className='hint-container'>
          <div dangerouslySetInnerHTML={{ __html: hint }} />
          <button className={'tooltip'} onClick={() => setShowHint(false)}>
            ×<span className='tooltiptext'> {t('buttons.close')}</span>
          </button>
        </div>
      )}
      {isChallengeComplete && showSubmissionHint && (
        <div className='hint-container'>
          <div>
            <p>{t('learn.congratulations-code-passes')}</p>
            {!isSignedIn && (
              <a
                href={`${apiLocation}/signin`}
                className='btn-cta btn btn-block'
                onClick={() => {
                  callGA({
                    event: 'sign_in'
                  });
                }}
              >
                {t('learn.sign-in-save')}
              </a>
            )}
          </div>
          <button
            className={'tooltip'}
            onClick={() => setShowSubmissionHint(false)}
          >
            ×<span className='tooltiptext'> {t('buttons.close')}</span>
          </button>
        </div>
      )}

      <div className='buttons-row-container'>
        <div className='action-row-left'>
          {isChallengeComplete ? (
            <Button
              block
              className={`${isSignedIn && 'btn-cta'} tooltip`}
              onClick={() => submitChallenge()}
            >
              {t('buttons.submit-continue')}
              <span className='tooltiptext left-tooltip '>
                {checkButtonText}
              </span>
            </Button>
          ) : (
            <button
              type='button'
              className='btn-cta tooltip'
              onClick={() => executeChallenge()}
            >
              {t('buttons.check-code')}
              <span className='tooltiptext left-tooltip '>
                {checkButtonText}
              </span>
            </button>
          )}
        </div>
        <div className='action-row-right'>
          <button
            type='button'
            className='icon-botton tooltip'
            onClick={openResetModal}
          >
            <Reset />
            <span className='tooltiptext'> {t('buttons.reset')}</span>
          </button>
          <button
            type='button'
            className='icon-botton tooltip'
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
