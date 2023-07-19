const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

function generateChallengeCompletedObjects() {
  const curriculumPath = resolve(__dirname, '../../../config/curriculum.json');
  const curriculum = JSON.parse(readFileSync(curriculumPath, 'utf8'));

  const blocks = Object.keys(curriculum['2022/responsive-web-design'].blocks);

  const writeArr = [];

  for (let i = 0; i < blocks.length; i++) {
    const challenges =
      curriculum['2022/responsive-web-design']['blocks'][blocks[i]]['meta'][
        'challengeOrder'
      ];

    for (let j = 0; j < challenges.length; j++) {
      writeArr.push({
        id: challenges[j].id,
        completedDate: Date.now(),
        files: []
      });
    }
  }

  const outputPath = resolve(__dirname, 'completed-challenges.json');
  writeFileSync(outputPath, JSON.stringify(writeArr, null, 2));
}

generateChallengeCompletedObjects();
