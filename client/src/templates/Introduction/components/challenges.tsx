import { Link } from 'gatsby';
import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { executeGA } from '../../../redux';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { ExecuteGaArg } from '../../../pages/donate';
import { ChallengeWithCompletedNode } from '../../../redux/prop-types';
import { isNewJsCert, isNewRespCert } from '../../../utils/is-a-cert';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

interface Challenges {
  challengesWithCompleted: ChallengeWithCompletedNode[];
  executeGA: (payload: ExecuteGaArg) => void;
  isProjectBlock: boolean;
  superBlock: SuperBlocks;
  blockTitle?: string | null;
}

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

function Challenges({
  challengesWithCompleted,
  executeGA,
  isProjectBlock,
  superBlock,
  blockTitle
}: Challenges): JSX.Element {
  const { t } = useTranslation();
  const handleChallengeClick = (slug: string) =>
    executeGA({
      type: 'event',
      data: {
        category: 'Map Challenge Click',
        action: slug
      }
    });

  const renderCheckMark = (isCompleted: boolean) =>
    isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );

  const isGridMap = isNewRespCert(superBlock) || isNewJsCert(superBlock);

  const firstIncompleteChallenge = challengesWithCompleted.find(
    challenge => !challenge.isCompleted
  );

  return isGridMap ? (
    <>
      {firstIncompleteChallenge && (
        <div className='challenge-jump-link'>
          <Link
            className='btn btn-primary'
            onClick={() =>
              handleChallengeClick(firstIncompleteChallenge.fields.slug)
            }
            to={firstIncompleteChallenge.fields.slug}
          >
            Jump to next incomplete step
          </Link>
        </div>
      )}
      <nav aria-label={`Steps ${blockTitle ? `for ${blockTitle}` : ''}`}>
        <ul className={`map-challenges-ul map-challenges-grid `}>
          {challengesWithCompleted.map((challenge, i) => (
            <li
              className={`map-challenge-title map-challenge-title-grid ${
                isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
              }`}
              id={challenge.dashedName}
              key={`map-challenge ${challenge.fields.slug}`}
            >
              {!isProjectBlock ? (
                <Link
                  onClick={() => handleChallengeClick(challenge.fields.slug)}
                  to={challenge.fields.slug}
                  className={`map-grid-item ${
                    +challenge.isCompleted ? 'challenge-completed' : ''
                  }`}
                >
                  <span>{i + 1}</span>
                  <span className='sr-only'>
                    {challenge.isCompleted
                      ? t('icons.passed')
                      : t('icons.not-passed')}
                  </span>
                </Link>
              ) : (
                <Link
                  onClick={() => handleChallengeClick(challenge.fields.slug)}
                  to={challenge.fields.slug}
                >
                  {challenge.title}
                  <span className=' badge map-badge map-project-checkmark'>
                    {renderCheckMark(challenge.isCompleted)}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  ) : (
    <ul className={`map-challenges-ul`}>
      {challengesWithCompleted.map(challenge => (
        <li
          className={`map-challenge-title ${
            isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
          }`}
          id={challenge.dashedName}
          key={'map-challenge' + challenge.fields.slug}
        >
          {!isProjectBlock ? (
            <Link
              onClick={() => handleChallengeClick(challenge.fields.slug)}
              to={challenge.fields.slug}
            >
              <span className='badge map-badge'>
                {renderCheckMark(challenge.isCompleted)}
              </span>
              {challenge.title}
            </Link>
          ) : (
            <Link
              onClick={() => handleChallengeClick(challenge.fields.slug)}
              to={challenge.fields.slug}
            >
              {challenge.title}
              <span className='badge map-badge map-project-checkmark'>
                {renderCheckMark(challenge.isCompleted)}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

Challenges.displayName = 'Challenges';

export default connect(null, mapDispatchToProps)(withTranslation()(Challenges));
