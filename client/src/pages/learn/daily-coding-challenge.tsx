import React, { useEffect, useState } from 'react';
import ShowClassic from '../../templates/Challenges/classic/show';
import { Loader } from '../../components/helpers';
import { ChallengeNode } from '../../redux/prop-types';
import DailyCodingChallengeNotFound from '../../components/daily-coding-challenge/not-found';
import { formatDateUsCentral } from '../../components/daily-coding-challenge/helpers';

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
  console.log('formatting challenge data...');

  const props = {
    javascript: {
      data: {
        challengeNode: {
          challenge: {
            date,
            id: challengeId,
            title,
            // challengeType: 26,
            challengeType: 27,
            helpCategory: 'Daily Coding Challenges',
            description,
            instructions,
            fields: {
              blockName: 'daily-coding-challenges',
              tests: javascript.tests
            },
            usesMultifileEditor: true,
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
      pageContext: {
        challengeMeta: {
          id: challengeId
        }
      }
    },
    python: {
      data: {
        challengeNode: {
          challenge: {
            date,
            id: challengeId,
            title,
            // challengeType: 23,
            challengeType: 28,
            helpCategory: 'Daily Coding Challenges',
            description,
            instructions,
            fields: {
              blockName: 'daily-coding-challenges',
              tests: python.tests
            },
            usesMultifileEditor: true,
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
            ],
            pageContext: {
              challengeMeta: {
                id: challengeId
              }
            }
          }
        }
      },
      pageContext: {
        challengeMeta: {
          id: challengeId
        }
      }
    }
  };

  console.log(props);
  return props;
}

function isValidDate(dateString: string) {
  console.log(`isValidDate? ${dateString}`);
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!regex.test(dateString)) return false;

  const [month, day, year] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  // Check if date is valid
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function dateHasChallenge(firstDay: string, today: string, dateString: string) {
  console.log(`dateHasChallenge? ${dateString}`);
  return dateString >= firstDay && dateString <= today;
}

function DailyCodingChallenge(): JSX.Element {
  // const [challengeData, setChallengeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [challengeFound, setChallengeFound] = useState(false);
  const [challengeProps, setChallengeProps] =
    useState<null | FormattedChallengeData>(null);
  const [dailyChallengeLanguage, setDailyChallengeLanguage] = useState<
    'javascript' | 'python'
  >('javascript');

  // dates in US Central time
  // firstDay is the first day a daily challenge became available
  const firstDay = formatDateUsCentral(new Date('03-08-2025'));
  const today = formatDateUsCentral(new Date());

  const dateParam = new URLSearchParams(window.location.search).get('date');

  const fetchChallenge = async (date: string) => {
    try {
      console.log('fetching challenge...');
      const response = await fetch(
        // Todo: move this to env
        `http://localhost:3400/api/daily-challenge/date/${date}`
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
    if (
      !dateParam ||
      !isValidDate(dateParam) ||
      !dateHasChallenge(firstDay, today, dateParam)
    ) {
      setIsLoading(false);
      setChallengeFound(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchChallenge(dateParam);
  }, [dateParam, firstDay, today]); // Ensure useEffect re-runs if these dependencies change

  return isLoading ? (
    <Loader />
  ) : !challengeFound || !challengeProps ? (
    <DailyCodingChallengeNotFound />
  ) : (
    <ShowClassic
      isDailyChallenge={true}
      dailyChallengeLanguage={dailyChallengeLanguage}
      setDailyChallengeLanguage={setDailyChallengeLanguage}
      {...challengeProps[dailyChallengeLanguage]}
    />
  );
}

DailyCodingChallenge.displayName = 'DailyCodingChallenge';

export default DailyCodingChallenge;
