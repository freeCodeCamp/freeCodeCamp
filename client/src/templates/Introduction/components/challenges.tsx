import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faCaretDown,
  faCaretUp,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { executeGA } from '../../../redux/actions';
import { SuperBlocks } from '../../../../../shared/config/superblocks';
import { ChallengeWithCompletedNode } from '../../../redux/prop-types';
import { isNewJsCert, isNewRespCert } from '../../../utils/is-a-cert';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

const getUniqueTags = (challenges: ChallengeWithCompletedNode[]) => {
  const tagNames = challenges.map(challenge => challenge.tags).flat(1);
  const uniqueTagNames = [...new Set(tagNames)];
  const uniqueTags = uniqueTagNames.map(
    (name, idx) => ({ name, id: idx, active: false }) as Tag
  );
  return uniqueTags;
};

const challengeTitleToStepNumber = (challengeTitle: string) => {
  const [_, stepNum] = challengeTitle.split(' ');
  return Number(stepNum);
};

interface Challenges {
  challengesWithCompleted: ChallengeWithCompletedNode[];
  isProjectBlock: boolean;
  superBlock: SuperBlocks;
  blockTitle?: string | null;
}

interface Tag {
  name: string;
  active: boolean;
  id: number;
}

const CheckMark = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <GreenPass /> : <GreenNotCompleted />;

function Challenges({
  challengesWithCompleted,
  isProjectBlock,
  superBlock,
  blockTitle
}: Challenges): JSX.Element {
  const { t } = useTranslation();

  const [tags, setTags] = useState(getUniqueTags(challengesWithCompleted));
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [challenges, setChallenges] = useState(challengesWithCompleted);

  const isGridMap = isNewRespCert(superBlock) || isNewJsCert(superBlock);

  const firstIncompleteChallenge = challenges.find(
    challenge => !challenge.isCompleted
  );

  const isChallengeStarted = !!challenges.find(
    challenge => challenge.isCompleted
  );

  useEffect(() => {
    const selectedTags = tags.filter(tag => tag.active);

    if (selectedTags.length === 0) {
      setChallenges(challengesWithCompleted);
      return;
    }

    const filteredChallenges = challengesWithCompleted.filter(challenge => {
      const challengeTags = challenge.tags;
      return selectedTags.some(tag => challengeTags.includes(tag.name));
    });
    setChallenges(filteredChallenges);
  }, [challengesWithCompleted, tags]);

  function setTagStatus(id: number, status: boolean) {
    setTags(tags => {
      const updateTag = tags.at(id);
      if (!updateTag) return tags;
      updateTag.active = status;
      return [...tags.slice(0, id), updateTag, ...tags.slice(id + 1)];
    });
  }

  function resetTagStatuses() {
    tags.map(tag => setTagStatus(tag.id, false));
  }

  return isGridMap ? (
    <>
      <div className='challenge-jump-link'>
        {firstIncompleteChallenge ? (
          <Link
            className='btn btn-primary'
            to={firstIncompleteChallenge.fields.slug}
          >
            {!isChallengeStarted
              ? t('buttons.start-project')
              : t('buttons.resume-project')}{' '}
            {blockTitle && <span className='sr-only'>{blockTitle}</span>}
          </Link>
        ) : (
          <button className='btn btn-primary unselected'>
            {!isChallengeStarted
              ? t('buttons.start-project')
              : t('buttons.resume-project')}{' '}
          </button>
        )}
      </div>

      {tags.length !== 0 ? (
        <div className='topics-list'>
          <span>
            <button
              onClick={() => setDropDownOpen(!dropDownOpen)}
              aria-expanded={dropDownOpen ? 'true' : 'false'}
            >
              <span className='topics-name'>{t('buttons.topics')}</span>
              <FontAwesomeIcon icon={dropDownOpen ? faCaretUp : faCaretDown} />
            </button>
            &nbsp;
            <button
              className={
                tags.filter(tag => tag.active).length > 0 ? '' : 'unselected'
              }
              aria-pressed={tags.some(tag => tag.active) ? 'true' : 'false'}
              onClick={() => resetTagStatuses()}
            >
              {t('buttons.clear-filter')}
            </button>
            {dropDownOpen ? (
              <div className='topic-selections'>
                {tags.map(tag => (
                  <div key={tag.id} className='topics-button'>
                    <button
                      className={tag.active ? '' : 'unselected'}
                      onClick={() => setTagStatus(tag.id, !tag.active)}
                      aria-pressed={tag.active ? 'true' : 'false'}
                    >
                      <span className='topics-name'>{tag.name}</span>
                      <FontAwesomeIcon
                        icon={tag.active ? faCheck : faXmark}
                        size='xs'
                      />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </span>
        </div>
      ) : null}

      <nav
        aria-label={
          blockTitle ? t('aria.steps-for', { blockTitle }) : t('aria.steps')
        }
      >
        <ul className={`map-challenges-ul map-challenges-grid `}>
          {challenges.map(challenge => (
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
                  }`}
                >
                  <span className='sr-only'>{t('aria.step')}</span>
                  <span>{challengeTitleToStepNumber(challenge.title)}</span>
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
                    <CheckMark isCompleted={challenge.isCompleted} />
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
