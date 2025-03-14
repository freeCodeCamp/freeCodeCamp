import React, { useEffect, useState } from 'react';
import ShowClassic from '../../templates/Challenges/classic/show';
import { Loader } from '../../components/helpers';
import { ChallengeNode } from '../../redux/prop-types';
import DailyCodingChallengeNotFound from '../../components/daily-coding-challenge/not-found';
import { formatDateUsCentral } from '../../components/daily-coding-challenge/helpers';

// javascript
/*const props = {
  data: {
    challengeNode: {
      challenge: {
        // dashedName: 'problem-1-multiples-of-3-or-5',
        // block: 'project-euler-problems-1-to-100', // don't need
        // demoType: null,
        id: '5900f36e1000cf542c50fe80',
        title: 'V  A  P  O  R  W  A  V  E',
        challengeType: 26,
        helpCategory: 'JavaScript',
        description: '<section id="instructions">\n<p>Given a string, remove all spaces from the string, then insert two spaces between every character and uppercase all letters.</p>\n</section>',
        // hasEditableBoundaries: false,
        // videoUrl: null,
        // superBlock: 'project-euler' as SuperBlocks,
        // translationPending: false,
        // forumTopicId: 301722,
        fields: {
          blockName: 'v-a-p-o-r-w-a-v-e', // don't need
          // slug: '/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5',
          tests: [
            {
              text: '<p><code>vaporwave(\'Hello World\')</code> should return a <code>H  E  L  L  O  W  O  R  L  D</code>.</p>',
              testString: 'assert.strictEqual(vaporwave(\'Hello World\'), \'H  E  L  L  O  W  O  R  L  D\');'
            }
          ]
        },
        // required: [],
        // usesMultifileEditor: false,
        challengeFiles: [
          {
            fileKey: 'scriptjs',
            ext: 'js' as Ext,
            name: 'script',
            contents:
              'function vaporwave(str) {\n\n  return str;\n}\n\nconsole.log(vaporwave(\'hello world\'));',
            head: '',
            tail: '',
            editableRegionBoundaries: [],
            history: ['script.js']
          }
        ]
      }
    }
  },
  pageContext: {
    challengeMeta: {
      // blockHashSlug: '/learn/project-euler/#project-euler-problems-1-to-100',
      // dashedName: 'problem-1-multiples-of-3-or-5',
      // certification: 'project-euler',
      disableLoopProtectTests: true,
      // disableLoopProtectPreview: false,
      // superBlock: 'project-euler',
      // block: 'project-euler-problems-1-to-100', // don't need
      // isFirstStep: true,
      // template: null,
      // required: [],
      // isLastChallengeInBlock: false,
      // nextChallengePath:
      //   '/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers',
      // prevChallengePath:
      //   '/learn/coding-interview-prep/take-home-projects/build-a-light-bright-app',
      id: '5900f36e1000cf542c50fe80' // don't need cause we have it? or do we - lets keep it for now. Seems like we need it for the page/challenge meta to submit
    }
    // projectPreview: {
    //   challengeData: {
    //     challengeType: 1,
    //     challengeFiles: [
    //       {
    //         name: 'script',
    //         ext: 'js',
    //         contents:
    //           'function arrangedProbability(limit) {\n  // Based on https://www.mathblog.dk/project-euler-100-blue-discs-two-blue/\n  let blue = 15;\n  let discs = 21;\n\n  while (discs < limit) {\n    const nextBlue = 3 * blue + 2 * discs - 2;\n    const nextDiscs = 4 * blue + 3 * discs - 3;\n\n    blue = nextBlue;\n    discs = nextDiscs;\n  }\n  return blue;\n}',
    //         head: '',
    //         tail: '',
    //         history: ['script.js'],
    //         fileKey: 'scriptjs'
    //       }
    //     ]
    //   }
    // },
    // id: '/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5'
  }
};*/

// python
// const props = {
//   data: {
//     challengeNode: {
//       challenge: {
//         id: '5900f36e1000cf542c50fe80',
//         title: 'V  A  P  O  R  W  A  V  E',
//         challengeType: 23,
//         helpCategory: 'Python',
//         description: null,
//         instructions:
//           '<section id="instructions">\n<p>Given a string, remove all spaces from the string, then insert two spaces between every character and uppercase all letters.</p>\n</section>',
//         fields: {
//           blockName: 'v-a-p-o-r-w-a-v-e',
//           tests: [
//             {
//               text: '<p><code>vaporwave("hello world")</code> should return <code>H  E  L  L  O  W  O  R  L  D</code>.</p>',
//               testString:
//                 '({\n  test: () => {\n    runPython(`\nfrom unittest import TestCase\n\nTestCase().assertEqual(vaporwave("hello world"), \'H  E  L  L  O  W  O  R  L  D\')`);\n  }\n})'
//             }
//           ]
//         },
//         // required: [],
//         usesMultifileEditor: true,
//         challengeFiles: [
//           {
//             fileKey: 'mainpy',
//             ext: 'py' as Ext,
//             name: 'main',
//             contents:
//               'def vaporwave(str):\n\n    return str\n\nprint(f\'\\n{vaporwave("hello world")}\')',
//             head: '',
//             tail: '',
//             editableRegionBoundaries: [],
//             history: ['main.py']
//           }
//         ]
//       }
//     }
//   },
//   pageContext: {
//     challengeMeta: {
//       // disableLoopProtectTests: true,
//       id: '5900f36e1000cf542c50fe80'
//     }
//   }
// };

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
            // challengeType: 27,
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

  // dates in US Central time
  // firstDay is the first day a daily challenge became available
  const firstDay = formatDateUsCentral(new Date('03-08-2025'));
  const today = formatDateUsCentral(new Date());

  const dateParam = new URLSearchParams(window.location.search).get('date');

  const fetchChallenge = async (date: string) => {
    try {
      console.log('fetching challenge...');
      const response = await fetch(
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
    <ShowClassic {...challengeProps.python} />
  );
}

DailyCodingChallenge.displayName = 'DailyCodingChallenge';

export default DailyCodingChallenge;
