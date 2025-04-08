import React, { useEffect, useState } from 'react';
import ShowClassic from '../../templates/Challenges/classic/show';
import { Loader } from '../../components/helpers';
import { ChallengeNode } from '../../redux/prop-types';
import DailyCodingChallengeNotFound from '../../components/daily-coding-challenge/not-found';
import envData from '../../../config/env.json';

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
  date: string;
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
    helpCategory: 'Daily Coding Challenges',
    description,
    instructions,
    superBlock: 'daily-coding-challenges',
    block: 'daily-coding-challenge',
    usesMultifileEditor: true
  };

  const pageContext = {
    challengeMeta: {
      id: challengeId
    }
  };

  const props = {
    javascript: {
      data: {
        challengeNode: {
          challenge: {
            ...baseChallengeProps,
            // challengeType: 26,
            challengeType: 27,
            fields: {
              blockName: 'daily-coding-challenges',
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
            // challengeType: 23,
            challengeType: 28,
            fields: {
              blockName: 'daily-coding-challenges',
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

function isValidDate(dateString: string) {
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!regex.test(dateString)) return false;

  const [month, day, year] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function DailyCodingChallenge(): JSX.Element {
  // const [challengeData, setChallengeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [challengeFound, setChallengeFound] = useState(false);
  const [challengeProps, setChallengeProps] =
    useState<null | FormattedChallengeData>(null);
  const [dailyCodingChallengeLanguage, setDailyCodingChallengeLanguage] =
    useState<'javascript' | 'python'>('javascript');

  const dateParam = new URLSearchParams(window.location.search).get('date');

  const fetchChallenge = async (date: string) => {
    try {
      const response = await fetch(
        `${dailyChallengeApiLocation}/api/daily-challenge/date/${date}`
      );
      const challengeData = await response.json();

      // Todo: validate challenge data

      if (challengeData) {
        // && isChallengeValid(result)) {
        console.log(challengeData);
        const formattedChallengeData = formatChallengeData(
          challengeData as ChallengeDataFromDb
        );
        setChallengeProps(formattedChallengeData as FormattedChallengeData);

        // setChallengeData(result);
        setChallengeFound(true);
      } else {
        setChallengeFound(false);
        // setIsLoading(false);
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
    if (!dateParam || !isValidDate(dateParam)) {
      setIsLoading(false);
      setChallengeFound(false);
      return;
    }

    void fetchChallenge(dateParam);
  }, [dateParam]);

  return isLoading ? (
    <Loader />
  ) : !challengeFound || !challengeProps ? (
    <DailyCodingChallengeNotFound />
  ) : (
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
