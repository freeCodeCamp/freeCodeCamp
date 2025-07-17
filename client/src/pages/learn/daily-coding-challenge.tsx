import React, { useEffect, useState } from 'react';
import store from 'store';
import ShowClassic from '../../templates/Challenges/classic/show';
import { Loader } from '../../components/helpers';
import {
  DailyCodingChallengeLanguages,
  DailyCodingChallengeNode,
  DailyCodingChallengePageContext
} from '../../redux/prop-types';
import DailyCodingChallengeNotFound from '../../components/daily-coding-challenge/not-found';
import FourOhFour from '../../components/FourOhFour';
import {
  apiLocation,
  showDailyCodingChallenges
} from '../../../config/env.json';
import { isValidDateParam } from '../../components/daily-coding-challenge/helpers';
import {
  validateDailyCodingChallengeSchema,
  type ChallengeDataFromDb
} from '../../utils/daily-coding-challenge-validator';

interface ChallengeData {
  data: {
    challengeNode: DailyCodingChallengeNode;
  };
  pageContext: DailyCodingChallengePageContext;
}

interface FormattedChallengeData {
  javascript: ChallengeData;
  python: ChallengeData;
}

// These are not included in the data from the DB (Daily Challenge API) - so we add them in
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
}: ChallengeDataFromDb) {
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
            fields: {
              blockName: 'daily-coding-challenge',
              tests: javascript.tests
            },
            challengeFiles: [
              {
                name: 'script',
                ext: 'js',
                contents: javascript.challengeFiles[0].contents,
                head: '',
                tail: '',
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
            fields: {
              blockName: 'daily-coding-challenge',
              tests: python.tests
            },
            challengeFiles: [
              {
                fileKey: 'mainpy',
                ext: 'py',
                name: 'main',
                contents: python.challengeFiles[0].contents,
                head: '',
                path: '',
                tail: '',
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

function DailyCodingChallenge(): JSX.Element {
  const initLanguage =
    (store.get(
      'dailyCodingChallengeLanguage'
    ) as DailyCodingChallengeLanguages) ?? 'javascript';

  const [isLoading, setIsLoading] = useState(true);
  const [challengeFound, setChallengeFound] = useState(false);
  const [challengeProps, setChallengeProps] =
    useState<null | FormattedChallengeData>(null);
  const [dailyCodingChallengeLanguage, setDailyCodingChallengeLanguage] =
    useState<DailyCodingChallengeLanguages>(initLanguage);

  const dateParam =
    new URLSearchParams(window.location.search).get('date') || '';

  const fetchChallenge = async (date: string) => {
    try {
      const response = await fetch(
        `${apiLocation}/daily-coding-challenge/date/${date}`
      );
      const challengeData = await response.json();

      if (challengeData) {
        const validDailyCodingChallenge = validateDailyCodingChallengeSchema(
          challengeData as ChallengeDataFromDb
        );

        if ('error' in validDailyCodingChallenge) {
          throw new Error(
            `Challenge data validation failed: ${validDailyCodingChallenge.error?.message || 'Unknown validation error'}`
          );
        }

        const formattedChallengeData = formatChallengeData(
          challengeData as ChallengeDataFromDb
        ) as FormattedChallengeData;

        setChallengeProps(formattedChallengeData);
        setChallengeFound(true);
      } else {
        setChallengeFound(false);
      }
    } catch (error) {
      setChallengeFound(false);
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // If dateParam is invalid, stop loading/fetching and show the not found page
    if (!isValidDateParam(dateParam)) {
      setIsLoading(false);
      setChallengeFound(false);
      return;
    }

    void fetchChallenge(dateParam);
  }, [dateParam]);

  if (!showDailyCodingChallenges) {
    return <FourOhFour />;
  }

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

DailyCodingChallenge.displayName = 'DailyCodingChallenge';

export default DailyCodingChallenge;
