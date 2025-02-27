import React from 'react';
// import ShowClassic from '../../templates/Challenges/classic/show';
// import Editor, {
//   type EditorProps
// } from '../templates/Challenges/classic/editor';

// const props = {
//   data: {
//     challengeNode: {
//       challenge: {
//         block: 'basic-javascript',
//         demoType: null,
//         title: 'Comment Your JavaScript Code',
//         description:
//           '<section id="description">\n<p>Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.</p>\n<p>There are two ways to write comments in JavaScript:</p>\n<p>Using <code>//</code> will tell JavaScript to ignore the remainder of the text on the current line. This is an in-line comment:</p>\n<pre><code class="language-js">// This is an in-line comment.\n</code></pre>\n<p>You can make a multi-line comment beginning with <code>/*</code> and ending with <code>*/</code>. This is a multi-line comment:</p>\n<pre><code class="language-js">/* This is a\nmulti-line comment */\n</code></pre>\n<p><strong>NOTE:</strong> As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others <em>and</em> for your future self.</p>\n</section>',
//         id: 'bd7123c9c441eddfaeb4bdef',
//         hasEditableBoundaries: false,
//         instructions:
//           '<section id="instructions">\n<p>Try creating one of each type of comment.</p>\n</section>',
//         notes: null,
//         challengeType: 1,
//         helpCategory: 'JavaScript',
//         videoUrl: 'https://scrimba.com/c/c7ynnTp',
//         superBlock: 'javascript-algorithms-and-data-structures',
//         translationPending: false,
//         forumTopicId: 16783,
//         fields: {
//           blockName: 'basic-javascript',
//           slug: '/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code',
//           tests: [
//             {
//               text: '<p>You should create a <code>//</code> style comment that contains at least five letters.</p>',
//               testString: 'assert(code.match(/(\\/\\/)...../g));'
//             },
//             {
//               text: '<p>You should create a <code>/* */</code> style comment that contains at least five letters.</p>',
//               testString:
//                 'assert(code.match(/(\\/\\*)([^\\/]{5,})(?=\\*\\/)/gm));'
//             }
//           ]
//         },
//         required: [],
//         usesMultifileEditor: false,
//         challengeFiles: [
//           {
//             fileKey: 'scriptjs',
//             ext: 'js',
//             name: 'script',
//             contents: '',
//             head: '',
//             tail: '',
//             editableRegionBoundaries: [],
//             history: ['script.js']
//           }
//         ]
//       }
//     }
//   }
// };

function DailyCodingChallenge(): JSX.Element {
  // can I somehow suspend the loading of ShowClassic until I have the challenge info. Then pass it all to it?
  // return <ShowClassic {...props} />;
  return <div>DAILY CHALLENGE!</div>;
}

DailyCodingChallenge.displayName = 'DailyCodingChallenge';

export default DailyCodingChallenge;

/*
  cancelTests: () => void;
  challengeMounted: (arg0: string) => void;
  createFiles: (arg0: ChallengeFiles | SavedChallengeFiles) => void;
  data: { challengeNode: ChallengeNode };
  executeChallenge: (options?: { showCompletionModal: boolean }) => void;
  challengeFiles: ChallengeFiles;
  initConsole: (arg0: string) => void;
  initTests: (tests: Test[]) => void;
  initVisibleEditors: () => void;
  isChallengeCompleted: boolean;
  output: string[];
  pageContext: {
    challengeMeta: ChallengeMeta;
    projectPreview: {
      challengeData: ChallengeData;
    };
  };
  updateChallengeMeta: (arg0: ChallengeMeta) => void;
  openModal: (modal: string) => void;
  setEditorFocusability: (canFocus: boolean) => void;
  setIsAdvancing: (arg: boolean) => void;
  savedChallenges: SavedChallenge[];
*/
