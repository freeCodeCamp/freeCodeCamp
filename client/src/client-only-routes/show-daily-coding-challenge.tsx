import React, { useEffect, useState } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import ShowClassic from '../templates/Challenges/classic/show';
import { Loader } from '../components/helpers';
import {
  DailyCodingChallengeLanguages,
  DailyCodingChallengeNode,
  DailyCodingChallengePageContext
} from '../redux/prop-types';
import DailyCodingChallengeNotFound from '../components/daily-coding-challenge/not-found';
import envData from '../../config/env.json';
import {
  isValidDateOrMonthDayString,
  toMonthDay
} from '../components/daily-coding-challenge/helpers';
import {
  validateDailyCodingChallengeSchema,
  type DailyCodingChallengeFromDb
} from '../utils/daily-coding-challenge-validator';

const { apiLocation } = envData;

interface DailyCodingChallengeLanguageData {
  data: {
    challengeNode: DailyCodingChallengeNode;
  };
  pageContext: DailyCodingChallengePageContext;
}

interface DailyCodingChallengeDataFormatted {
  javascript: DailyCodingChallengeLanguageData;
  python: DailyCodingChallengeLanguageData;
}

// This is not included in the data from the DB (Daily Challenge API) - so we add it in
function formatDescription(str: string) {
  return `<section id="description">\n${str}\n</section>`;
}

function formatChallengeData({
  date,
  id,
  challengeNumber,
  title,
  description,
  javascript,
  python
}: DailyCodingChallengeFromDb) {
  const baseChallengeProps = {
    date,
    id,
    challengeNumber,
    title,
    description: formatDescription(description),
    superBlock: 'daily-coding-challenge',
    block: 'daily-coding-challenge',
    usesMultifileEditor: true,

    // props to satisfy the show classic component
    instructions: '',
    demoType: null,
    hooks: undefined,
    hasEditableBoundaries: false,
    forumTopicId: undefined,
    notes: '',
    videoUrl: undefined,
    translationPending: false
  };

  const pageContext = {
    challengeMeta: {
      id,
      superBlock: 'daily-coding-challenge',
      block: 'daily-coding-challenge',
      disableLoopProtectTests: true,
      dashedName: `challenge-${challengeNumber}`,

      // props to satisfy the show classic component
      isFirstStep: false,
      nextChallegePath: undefined,
      prevChallengePath: undefined,
      disableLoopProtectPreview: false
    },

    // props to satisfy the show classic component
    projectPreview: {
      challengeData: undefined
    }
  };

  const props = {
    javascript: {
      data: {
        challengeNode: {
          challenge: {
            ...baseChallengeProps,
            helpCategory: 'JavaScript',
            challengeType: 28,
            tests: javascript.tests,
            challengeFiles: [
              {
                name: 'script',
                ext: 'js',
                contents: javascript.challengeFiles[0].contents,
                path: '',
                history: ['script.js'],
                fileKey: 'scriptjs'
              }
            ]
          }
        }
      },
      pageContext
    },
    python: {
      data: {
        challengeNode: {
          challenge: {
            ...baseChallengeProps,
            helpCategory: 'Python',
            challengeType: 29,
            tests: python.tests,
            challengeFiles: [
              {
                fileKey: 'mainpy',
                ext: 'py',
                name: 'main',
                contents: python.challengeFiles[0].contents,
                path: '',
                editableRegionBoundaries: [],
                history: ['main.py']
              }
            ]
          }
        }
      },
      pageContext
    }
  };

  return props;
}

function ShowDailyCodingChallenge({ date }: { date: string }): JSX.Element {
  const { t } = useTranslation();
  const initLanguage =
    (store.get(
      'dailyCodingChallengeLanguage'
    ) as DailyCodingChallengeLanguages) ?? 'javascript';

  const [isLoading, setIsLoading] = useState(true);
  const [challengeFound, setChallengeFound] = useState(false);
  const [challengeProps, setChallengeProps] =
    useState<null | DailyCodingChallengeDataFormatted>(null);
  const [dailyCodingChallengeLanguage, setDailyCodingChallengeLanguage] =
    useState<DailyCodingChallengeLanguages>(initLanguage);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setChallengeFound(false);
    setChallengeProps(null);

    const fetchChallenge = async () => {
      try {
        const monthDay = toMonthDay(date);
        const response = await fetch(
          `${apiLocation}/daily-coding-challenge/day/${monthDay}`
        );
        const challengeData = await response.json();

        if (challengeData) {
          const validDailyCodingChallenge = validateDailyCodingChallengeSchema(
            challengeData as DailyCodingChallengeFromDb
          );

          if ('error' in validDailyCodingChallenge) {
            throw new Error(
              `Challenge data validation failed: ${validDailyCodingChallenge.error?.message || 'Unknown validation error'}`
            );
          }

          if (!cancelled) {
            setChallengeProps(
              formatChallengeData(
                challengeData as DailyCodingChallengeFromDb
              ) as DailyCodingChallengeDataFormatted
            );
            setChallengeFound(true);
          }
        }
      } catch (error) {
        if (!cancelled) console.error('Error fetching data:', error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    if (!date || !isValidDateOrMonthDayString(date)) {
      setIsLoading(false);
    } else {
      void fetchChallenge();
    }

    return () => {
      cancelled = true;
    };
  }, [date]);

  // Gatsby Head owns the initial metadata. This challenge is fetched only in
  // the browser, so update its title when the request resolves or fails.
  useEffect(() => {
    if (isLoading) return;
    const challenge = challengeProps?.javascript.data.challengeNode.challenge;
    document.title =
      challengeFound && challenge
        ? `${t('intro:daily-coding-challenge.blocks.daily-coding-challenge.title')}: ${challenge.title} | freeCodeCamp.org`
        : `${t('404.page-not-found')} | freeCodeCamp.org`;
  }, [challengeFound, challengeProps, isLoading, t]);

  if (isLoading) return <Loader />;

  if (!challengeFound || !challengeProps)
    return <DailyCodingChallengeNotFound />;

  return (
    <ShowClassic
      isDailyCodingChallenge={true}
      dailyCodingChallengeLanguage={dailyCodingChallengeLanguage}
      setDailyCodingChallengeLanguage={setDailyCodingChallengeLanguage}
      {...challengeProps[dailyCodingChallengeLanguage]}
    />
  );
}

ShowDailyCodingChallenge.displayName = 'ShowDailyCodingChallenge';

export default ShowDailyCodingChallenge;
