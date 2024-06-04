const { writeFile } = require('fs');
const { getChallengesForLang } = require('../../../curriculum/get-challenges');

const updateCertUser = async () => {
  const updatedCompletedChallenges = [];

  const curriculum = await getChallengesForLang('english');

  const excluded = [
    'foundational-c-sharp-with-microsoft',
    'certifications',
    'a2-english-for-developers',
    'example-certification'
  ];

  for (const superBlock in curriculum) {
    if (excluded.includes(superBlock)) continue;

    const blocks = curriculum[superBlock]['blocks'];
    for (const block in blocks) {
      const challenges = blocks[block]['challenges'];

      for (const challenge in challenges) {
        updatedCompletedChallenges.push({
          id: challenges[challenge]['id'],
          completedDate: Date.now(),
          files: []
        });
      }
    }
  }

  const data = JSON.stringify(updatedCompletedChallenges, null, 3);

  writeFile('./tools/scripts/seed/user-data.json', data, err => {
    if (err) console.log(err);
    else {
      console.log('File written successfully\n');
    }
  });
};

updateCertUser();
