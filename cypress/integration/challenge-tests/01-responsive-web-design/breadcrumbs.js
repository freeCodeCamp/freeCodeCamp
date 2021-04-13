/* global cy */

let structure = {
  challenge: []
};

describe('Test breadcrumbs', () => {
  it('should have the correct link', () => {
    cy.task('getAllChallengePaths', {
      superBlock: '01-responsive-web-design',
      lang: 'english'
    }).then(res => {
      let { challenge } = structure;
      challenge = res;
      console.log(challenge);
    });
  });
});
