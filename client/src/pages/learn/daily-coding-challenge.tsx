import React, { useEffect, useState } from 'react';
import ShowClassic from '../../templates/Challenges/classic/show';
import { Loader } from '../../components/helpers';
import { Ext } from '../../redux/prop-types';
import DailyCodingChallengeNotFound from '../../components/daily-coding-challenge/not-found';

// python
const props = {
  data: {
    challengeNode: {
      challenge: {
        title: 'Build an Arithmetic Formatter Project',
        description:
          '<section id="description">\n<p>Students in primary school often arrange arithmetic problems vertically to make them easier to solve. For example, "235 + 52" becomes:</p>\n<pre><code class="language-py">  235\n+  52\n-----\n</code></pre>\n<p>Finish the <code>arithmetic_arranger</code> function that receives a list of strings which are arithmetic problems, and returns the problems arranged vertically and side-by-side. The function should optionally take a second argument. When the second argument is set to <code>True</code>, the answers should be displayed.</p>\n<h2>Example</h2>\n<p>Function Call:</p>\n<pre><code class="language-py">arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])\n</code></pre>\n<p>Output:</p>\n<pre><code class="language-py">   32      3801      45      123\n+ 698    -    2    + 43    +  49\n-----    ------    ----    -----\n</code></pre>\n<p>Function Call:</p>\n<pre><code class="language-py">arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)\n</code></pre>\n<p>Output:</p>\n<pre><code class="language-py">  32         1      9999      523\n+  8    - 3801    + 9999    -  49\n----    ------    ------    -----\n  40     -3800     19998      474\n</code></pre>\n<h2>Rules</h2>\n<p>The function will return the correct conversion if the supplied problems are properly formatted, otherwise, it will <strong>return</strong> a <strong>string</strong> that describes an error that is meaningful to the user.</p>\n<ul>\n<li>Situations that will return an error:\n<ul>\n<li>If there are <strong>too many problems</strong> supplied to the function. The limit is <strong>five</strong>, anything more will return:\n<code>\'Error: Too many problems.\'</code></li>\n<li>The appropriate operators the function will accept are <strong>addition</strong> and <strong>subtraction</strong>. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be:\n<code>"Error: Operator must be \'+\' or \'-\'."</code></li>\n<li>Each number (operand) should only contain digits. Otherwise, the function will return:\n<code>\'Error: Numbers must only contain digits.\'</code></li>\n<li>Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be:\n<code>\'Error: Numbers cannot be more than four digits.\'</code></li>\n</ul>\n</li>\n<li>If the user supplied the correct format of problems, the conversion you return will follow these rules:\n<ul>\n<li>There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).</li>\n<li>Numbers should be right-aligned.</li>\n<li>There should be four spaces between each problem.</li>\n<li>There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)</li>\n</ul>\n</li>\n</ul>\n<p>Note: open the browser console with F12 to see a more verbose output of the tests.</p>\n</section>',
        id: '5e44412c903586ffb414c94c',
        challengeType: 23,
        helpCategory: 'Python',
        fields: {
          blockName: 'build-an-arithmetic-formatter-project',
          tests: [
            {
              text: '<p><code>arithmetic_arranger(["3801 - 2", "123 + 49"])</code> should return <code>  3801      123\\n-    2    +  49\\n------    -----</code>.</p>',
              testString:
                '({\n  test: () => {\n    runPython(`\nfrom unittest import TestCase\n\nTestCase().assertEqual(arithmetic_arranger(["3801 - 2", "123 + 49"]), \'  3801      123\\\\n-    2    +  49\\\\n------    -----\')`);\n  }\n})'
            },
            {
              text: '<p><code>arithmetic_arranger(["1 + 2", "1 - 9380"])</code> should return <code>  1         1\\n+ 2    - 9380\\n---    ------</code>.</p>',
              testString:
                '({\n  test: () => {\n    runPython(`\nfrom unittest import TestCase\n\nTestCase().assertEqual(arithmetic_arranger(["1 + 2", "1 - 9380"]), \'  1         1\\\\n+ 2    - 9380\\\\n---    ------\')`);\n  }\n})'
            }
          ]
        },
        // required: [],
        usesMultifileEditor: true,
        challengeFiles: [
          {
            fileKey: 'mainpy',
            ext: 'py' as Ext,
            name: 'main',
            contents:
              'def arithmetic_arranger(problems, show_answers=False):\n\n    return problems\n\nprint(f\'\\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}\')',
            head: '',
            tail: '',
            editableRegionBoundaries: [],
            history: ['main.py']
          }
        ]
      }
    }
  },
  pageContext: {
    challengeMeta: {
      // disableLoopProtectTests: true,
      id: '5e44412c903586ffb414c94c'
    }
  }
};

// javascript
/* const props = {
  data: {
    challengeNode: {
      challenge: {
        // dashedName: 'problem-1-multiples-of-3-or-5',
        // block: 'project-euler-problems-1-to-100', // don't need
        // demoType: null,
        title: 'Problem 1: Multiples of 3 or 5',
        description:
          '<section id="description">\n<p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>\n<p>Find the sum of all the multiples of 3 or 5 below the provided parameter value <code>number</code>.</p>\n</section>',
        id: '5900f36e1000cf542c50fe80',
        // hasEditableBoundaries: false,
        // instructions: '',
        challengeType: 26,
        helpCategory: 'Euler',
        // videoUrl: null,
        // superBlock: 'project-euler' as SuperBlocks,
        // translationPending: false,
        // forumTopicId: 301722,
        fields: {
          blockName: 'project-euler-problems-1-to-100', // don't need
          // slug: '/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5',
          tests: [
            {
              text: '<p><code>multiplesOf3Or5(10)</code> should return a number.</p>',
              testString: "assert(typeof multiplesOf3Or5(10) === 'number');"
            },
            {
              text: '<p><code>multiplesOf3Or5(49)</code> should return 543.</p>',
              testString: 'assert.strictEqual(multiplesOf3Or5(49), 543);'
            },
            {
              text: '<p><code>multiplesOf3Or5(19564)</code> should return 89301183.</p>',
              testString:
                'assert.strictEqual(multiplesOf3Or5(19564), 89301183);'
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
              'function multiplesOf3Or5(number) {\n\n  return true;\n}\n\nmultiplesOf3Or5(1000);',
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
};
*/

function isValidDate(dateString: string) {
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

function dateHasChallenge(firstDay, today, dateString: string) {
  return dateString > today && dateString < firstDay;
}

function formatDateUsCentral(dateObj: Date) {
  return dateObj
    .toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\//g, '-');
}

function DailyCodingChallenge(): JSX.Element {
  // const [challengeData, setChallengeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [challengeNotFound, setChallengeNotFound] = useState(false);

  // dates in US Central time
  // firstDay is the first day a daily challenge became available
  const firstDay = formatDateUsCentral(new Date('03-10-2025'));
  const today = formatDateUsCentral(new Date());

  const dateParam = new URLSearchParams(window.location.search).get('date');

  if (!dateParam || !isValidDate(dateParam) || !dateHasChallenge(firstDay, today, dateParam)) {
    setChallengeNotFound(true);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3400');
        const result = await response.json();

        // validate challenge data
        //

        setChallengeData(result);
        setIsLoading(false);
      } catch (error) {
        setChallengeNotFound(true);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // console.log(challengeData);

  return challengeNotFound ? <DailyCodingChallengeNotFound /> :
  isLoading ? <Loader /> : <ShowClassic {...props} />;
}

DailyCodingChallenge.displayName = 'DailyCodingChallenge';

export default DailyCodingChallenge;
