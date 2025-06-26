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
import envData from '../../../config/env.json';
import { isValidDateParam } from '../../components/daily-coding-challenge/helpers';

const { dailyChallengeApiLocation } = envData;

/* Types for data coming from Daily Challenge API */
interface ChallengeTests {
  text: string;
  testString: string;
}

interface ChallengeFiles {
  fileKey: string;
  contents: string;
}
interface ChallengeLanguageData {
  tests: ChallengeTests[];
  challengeFiles: ChallengeFiles[];
  disableLoopProtectTests?: boolean;
}

interface ChallengeDataFromDb {
  _id: string;
  challengeNumber: number;
  title: string;
  date: string;
  description: string;
  instructions?: string;
  javascript: ChallengeLanguageData;
  python: ChallengeLanguageData;
}

/* Types for use in the show classic component */
interface Data {
  data: {
    challengeNode: DailyCodingChallengeNode;
  };
  pageContext: DailyCodingChallengePageContext;
}

interface FormattedChallengeData {
  javascript: Data;
  python: Data;
}

// These are not included in the data from the DB (Daily Challenge API) - so we add them in
function formatDescription(str: string) {
  return `<section id="description">\n${str}\n</section>`;
}

function formatInstructions(str: string) {
  return `<section id="instructions">\n<p>${str}</p>\n</section>`;
}

function formatChallengeData({
  date,
  _id,
  challengeNumber,
  title,
  description,
  instructions,
  javascript,
  python
}: ChallengeDataFromDb) {
  const baseChallengeProps = {
    date,
    id: _id,
    challengeNumber,
    title,
    description: formatDescription(description),
    instructions: instructions && formatInstructions(instructions),
    superBlock: 'daily-coding-challenge',
    block: 'daily-coding-challenge',
    usesMultifileEditor: true,

    // props to satisfy the show classic component
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
      id: _id,
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
        `${dailyChallengeApiLocation}/api/daily-challenge/date/${date}`
      );
      const challengeData = await response.json();

      // Todo: validate challenge data

      if (challengeData) {
        const formattedChallengeData = formatChallengeData(
          challengeData as ChallengeDataFromDb
        );
        setChallengeProps(formattedChallengeData as FormattedChallengeData);
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
