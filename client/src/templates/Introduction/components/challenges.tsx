import { Link } from 'gatsby';
import React, { useState } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import DropDown from '../../../assets/icons/dropdown';
import { executeGA } from '../../../redux/actions';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { ChallengeWithCompletedNode } from '../../../redux/prop-types';
import { isNewJsCert, isNewRespCert } from '../../../utils/is-a-cert';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

interface Challenges {
  challengesWithCompleted: ChallengeWithCompletedNode[];
  isProjectBlock: boolean;
  superBlock: SuperBlocks;
  blockTitle?: string | null;
}

function Challenges({
  challengesWithCompleted,
  isProjectBlock,
  superBlock,
  blockTitle
}: Challenges): JSX.Element {
  const { t } = useTranslation();

  const renderCheckMark = (isCompleted: boolean) =>
    isCompleted ? <GreenPass /> : <GreenNotCompleted />;

  const isGridMap = isNewRespCert(superBlock) || isNewJsCert(superBlock);

  const firstIncompleteChallenge = challengesWithCompleted.find(
    challenge => !challenge.isCompleted
  );

  const isChallengeStarted = !!challengesWithCompleted.find(
    challenge => challenge.isCompleted
  );

  const [allTopics, newTopic] = useState<string[]>([]);
  const [activeTags, updateTags] = useState<string[]>([]);
  const [isExpanded, toggleExpanded] = useState<boolean>(false);

  function getAllTopics() {
    challengesWithCompleted.map(challenge => {
      if (challenge.tags != null) {
        challenge.tags.map(tag => {
          if (!allTopics.includes(tag)) {
            allTopics.unshift(tag);
            newTopic(allTopics.sort());
          }
        });
      }
    });
  }

  function handleRemoveTag(topic: string) {
    const clone = [...activeTags];
    const index = clone.indexOf(topic);
    if (index !== -1) {
      clone.splice(index, 1);
      updateTags(clone);
    }
  }

  function handleAddTag(topic: string) {
    toggleExpanded(false);
    activeTags.unshift(topic);
    updateTags(activeTags);
  }

  function filterByTag(challengeTags: string[]) {
    if (activeTags.length == 0) {
      return true;
    }

    if (challengeTags == null) {
      return false;
    }

    return activeTags.every(tag => challengeTags.includes(tag));
  }

  getAllTopics();

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

      <section className='topic-filter'>
        <button
          className={`btn topic-filter-button ${
            isExpanded
              ? 'topic-filter-button-open'
              : 'topic-filter-button-closed'
          }`}
          onClick={() => toggleExpanded(!isExpanded)}
        >
          Topics
          <DropDown />
        </button>

        <ul
          className={`topic-filter-select ${isExpanded ? '' : 'filter-closed'}`}
        >
          {allTopics.map(topic => {
            if (!activeTags.includes(topic)) {
              return (
                <li key={topic}>
                  <button
                    className='btn topic-select-btn'
                    onClick={() => handleAddTag(topic)}
                  >
                    {topic}
                  </button>
                </li>
              );
            }
          })}
        </ul>

        <div className='active-tags'>
          {activeTags.map(topic => (
            <button
              key={topic}
              className='btn topic-tag'
              onClick={() => handleRemoveTag(topic)}
            >
              <span>{topic}</span>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          ))}
        </div>
      </section>

      <nav
        aria-label={
          blockTitle ? t('aria.steps-for', { blockTitle }) : t('aria.steps')
        }
      >
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
                  to={challenge.fields.slug}
                  className={`map-grid-item ${
                    +challenge.isCompleted ? 'challenge-completed' : ''
                  } ${filterByTag(challenge.tags) ? '' : 'filtered-out'}`}
                >
                  <span className='sr-only'>{t('aria.step')}</span>
                  <span>{i + 1}</span>
                  <span className='sr-only'>
                    {challenge.isCompleted
                      ? t('icons.passed')
                      : t('icons.not-passed')}
                  </span>
                </Link>
              ) : (
                <Link to={challenge.fields.slug}>
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
            <Link to={challenge.fields.slug}>
              <span className='badge map-badge'>
                {renderCheckMark(challenge.isCompleted)}
              </span>
              {challenge.title}
            </Link>
          ) : (
            <Link to={challenge.fields.slug}>
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
