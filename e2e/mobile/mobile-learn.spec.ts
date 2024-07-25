import { expect, test } from '@playwright/test';

import currData from '../../shared/config/curriculum.json';
import { orderedSuperBlockInfo } from '../../tools/scripts/build/build-external-curricula-data';

interface Curriculum {
  [key: string]: {
    blocks: {
      [key: string]: {
        challenges: {
          id: string;
          title: string;
          block: string;
          challengeType: number;
        }[];
        meta: {
          name: string;
        };
      };
    };
  };
}

const nonEditorSB = [
  'python-for-everybody',
  'data-analysis-with-python',
  'machine-learning-with-python'
];

const publicSB = orderedSuperBlockInfo
  .filter(sb => sb.public === true && !nonEditorSB.includes(sb.dashedName))
  .map(sb => sb.dashedName);

const incompatible = [
  'certifications',
  'a2-english-for-developers',
  'b1-english-for-developers'
];

const removeNonCompatibleSuperblocks = (currData: Curriculum): Curriculum => {
  const copy = currData;

  for (const superBlock of incompatible) {
    delete copy[superBlock];
  }
  return copy;
};

const typedCurriculum = removeNonCompatibleSuperblocks(currData as never);

test.describe('Test challenges in mobile', () => {
  for (const superBlock of publicSB) {
    for (const currBlock of Object.values(
      typedCurriculum[superBlock]['blocks']
    )) {
      test.describe(`SuperBlock: ${superBlock} - Block: ${currBlock['meta']['name']}`, () => {
        for (const currChallenge of currBlock['challenges']) {
          // Skip non-editor challenges
          if (![0, 1, 5, 6, 14].includes(currChallenge['challengeType'])) {
            continue;
          }

          test(`Challenge: ${currChallenge['title']}(${currChallenge['id']})`, async ({
            page
          }) => {
            const logMsges: string[] = [];
            page.on('console', msg => {
              logMsges.push(msg.text());
            });
            await page.goto(
              `/${superBlock}/${currChallenge['block']}/${currChallenge['id']}`
            );
            expect(logMsges).toContain('completed');
          });
        }
      });
    }
  }
});
