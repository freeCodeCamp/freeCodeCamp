/* global cy */
const superblockPathData = require('../../fixtures/pathData/apis-and-microservices.json');

const blocks = Object.keys(superblockPathData['blocks']);

blocks.forEach(block => {
  describe(`visit block ${block}`, () => {
    let challengePaths = superblockPathData['blocks'][block];

    challengePaths.forEach(challenge => {
      let name = challenge.split('/');

      it(`The challenge ${name[name.length - 1]} shoud work correctly`, () => {
        cy.visit(challenge);
      });
    });
  });
});
