import React, { useEffect, useState } from 'react';
import store from 'store';
import ShowClassic from '../../templates/Challenges/classic/show';
import { Loader } from '../../components/helpers';
import {
  ChallengeNode,
  DailyCodingChallengeLanguages
} from '../../redux/prop-types';
import DailyCodingChallengeNotFound from '../../components/daily-coding-challenge/not-found';
import envData from '../../../config/env.json';
import { isValidDateParam } from '../../components/daily-coding-challenge/helpers';

const { dailyChallengeApiLocation } = envData;

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
  challengeId: string;
  title: string;
  date: Date;
  description?: string;
  instructions?: string;
  javascript: ChallengeLanguageData;
  python: ChallengeLanguageData;
}

interface Node {
  challengeNode: ChallengeNode;
}

interface Data {
  data: Node;
  pageContext: PageContext;
}

interface ChallengeMeta {
  id: string;
}
interface PageContext {
  challengeMeta: ChallengeMeta;
}

interface FormattedChallengeData {
  javascript: Data;
  python: Data;
}

function formatChallengeData({
  date,
  challengeId,
  title,
  description,
  instructions,
  javascript,
  python
}: ChallengeDataFromDb) {
  const baseChallengeProps = {
    date,
    id: challengeId,
    title,
    // helpCategory: 'Daily Coding Challenges',
    description,
    instructions,
    superBlock: 'daily-coding-challenge',
    block: 'daily-coding-challenge',
    usesMultifileEditor: true
  };

  const pageContext = {
    challengeMeta: {
      id: challengeId,
      superBlock: 'daily-coding-challenge',
      block: 'daily-coding-challenge'
    }
  };

  const props = {
    javascript: {
      data: {
        challengeNode: {
          challenge: {
            ...baseChallengeProps,
            helpCategory: 'JavaScript',
            // challengeType: 26,
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
            // challengeType: 23,
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
    // If the date param is invalid, stop loading/fetching and show the not found page
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
