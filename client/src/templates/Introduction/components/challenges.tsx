import { Link } from 'gatsby';
import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { executeGA } from '../../../redux/actions';
import { ChallengeWithCompletedNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/superblocks';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

interface Challenges {
  challengesWithCompleted: ChallengeWithCompletedNode[];
  isProjectBlock: boolean;
  isGridMap?: boolean;
  blockTitle?: string | null;
}

const CheckMark = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <GreenPass /> : <GreenNotCompleted />;

function Challenges({
  challengesWithCompleted,
  isProjectBlock,
  isGridMap = false,
  blockTitle
}: Challenges): JSX.Element {
  const { t } = useTranslation();

  const firstIncompleteChallenge = challengesWithCompleted.find(
    challenge => !challenge.isCompleted
  );

  const isChallengeStarted = !!challengesWithCompleted.find(
    challenge => challenge.isCompleted
  );

  function gridRenderer() {
    const challengesGrid: JSX.Element[] = [];
    let stepOrTaskNumber = 1;

    for (let i = 0; i < challengesWithCompleted.length; i++) {
      if (challengesWithCompleted[i].challengeType === 21) {
        challengesGrid.push(
          <li
            className={'map-challenge-title map-challenge-wrap'}
            id={challengesWithCompleted[i].dashedName}
            key={'map-challenge' + challengesWithCompleted[i].fields.slug}
          >
            <Link to={challengesWithCompleted[i].fields.slug}>
              <span className='badge map-badge'>
                <CheckMark
                  isCompleted={challengesWithCompleted[i].isCompleted}
                />
              </span>
              {challengesWithCompleted[i].title}
            </Link>
          </li>
        );
      } else {
        const stepsOrTasks: JSX.Element[] = [];

        while (
          i < challengesWithCompleted.length &&
          challengesWithCompleted[i].challengeType !== 21
        ) {
          stepsOrTasks.push(
            <li
              className={`map-challenge-title map-challenge-title-grid ${
                isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
              }`}
              id={challengesWithCompleted[i].dashedName}
              key={`map-challenge ${challengesWithCompleted[i].fields.slug}`}
            >
              {!isProjectBlock ? (
                <Link
                  to={challengesWithCompleted[i].fields.slug}
                  className={`map-grid-item ${
                    +challengesWithCompleted[i].isCompleted
                      ? 'challenge-completed'
                      : ''
                  }`}
                >
                  <span className='sr-only'>
                    {challengesWithCompleted[i].superBlock ===
                    SuperBlocks.A2English
                      ? t('aria.task')
                      : t('aria.step')}
                  </span>
                  <span>{stepOrTaskNumber}</span>
                  <span className='sr-only'>
                    {challengesWithCompleted[i].isCompleted
                      ? t('icons.passed')
                      : t('icons.not-passed')}
                  </span>
                </Link>
              ) : (
                <Link to={challengesWithCompleted[i].fields.slug}>
                  {challengesWithCompleted[i].title}
                  <span className=' badge map-badge map-project-checkmark'>
                    <CheckMark
                      isCompleted={challengesWithCompleted[i].isCompleted}
                    />
                  </span>
                </Link>
              )}
            </li>
          );

          i++;
          stepOrTaskNumber++;
        }
        challengesGrid.push(
          <ul className={`map-challenges-ul map-challenges-grid `}>
            {stepsOrTasks}
          </ul>
        );
        i--;
      }
    }
    return challengesGrid;
  }

  return isGridMap ? (
    <>
      {firstIncompleteChallenge && (
        <div className='challenge-jump-link'>
          <Link
            className='btn btn-primary'
            to={firstIncompleteChallenge.fields.slug}
          >
            {!isChallengeStarted
              ? t('buttons.start-project')
              : t('buttons.resume-project')}{' '}
            {blockTitle && <span className='sr-only'>{blockTitle}</span>}
          </Link>
        </div>
      )}
      <nav
        aria-label={
          blockTitle
            ? challengesWithCompleted[0].superBlock === SuperBlocks.A2English
              ? t('aria.dialogues-and-tasks-for', { blockTitle })
              : t('aria.steps-for', { blockTitle })
            : t('aria.steps')
        }
      >
        {gridRenderer()}
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
            <Link to={challenge.fields.slug}>
              <span className='badge map-badge'>
                <CheckMark isCompleted={challenge.isCompleted} />
              </span>
              {challenge.title}
            </Link>
          ) : (
            <Link to={challenge.fields.slug}>
              {challenge.title}
              <span className='badge map-badge map-project-checkmark'>
                <CheckMark isCompleted={challenge.isCompleted} />
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
