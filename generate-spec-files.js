const { readdirSync, readFileSync, writeFileSync } = require('fs');

console.log('Creating challenge specfiles...');

function createSpecFiles() {
  // Get blocks in directory

  const challengesFiles = readdirSync(
    '.\\cypress\\fixtures\\pathData\\challenges'
  );

  const projectsFiles = readdirSync(
    '.\\cypress\\fixtures\\pathData\\projectsAndBackChallenges'
  );

  const blockExist = readdirSync(
    `.\\cypress\\integration\\challenge-tests\\blocks`
  );

  // Split the extensions

  let blockInDir = [];
  blockExist.forEach(block => {
    blockInDir.push(block.split('.')[0]);
  });

  function devider(files, project) {
    files.forEach(file => {
      let files = JSON.parse(
        readFileSync(
          `.\\cypress\\fixtures\\pathData\\${
            project ? 'projectsAndBackChallenges' : 'challenges'
          }\\${file}`,
          'utf-8'
        )
      );

      let challengeBlocks = Object.keys(files['blocks']);

      challengeBlocks.forEach(block => {
        if (!blockInDir.includes(block)) {
          writeFileSync(
            `.\\cypress\\integration\\challenge-tests\\blocks\\${block}.js`,
            `/* global cy */
            const superBlockPath = require('../../../fixtures/pathData/${
              project ? 'projectsAndBackChallenges' : 'challenges'
            }/${file}');
    
            const blocks = Object.entries(superBlockPath['blocks']['${block}'])
    
            for(const [challengeName , challengePath] of blocks){
              describe('loading challenge', () => {
                before(() => {
                  cy.visit(challengePath)
                })
    
                it('Challenge' + challengeName + ' should work correctly', () => {
                  ${
                    project
                      ? 'cy.checkProjectsAndBackend(challengePath)'
                      : 'cy.testChallenges(challengePath)'
                  }
                })
              });
            }
            `
          );
        }
      });
    });
  }

  devider(challengesFiles, false);
  devider(projectsFiles, true);

  return null;
}

createSpecFiles();

console.log('specfiles generated!');
