/* global cy */

const projects = {
  superBlock: 'machine-learning-with-python',
  block: 'machine-learning-with-python-projects',
  challenges: [
    'book-recommendation-engine-using-knn',
    'cat-and-dog-image-classifier',
    'linear-regression-health-costs-calculator',
    'neural-network-sms-text-classifier',
    'rock-paper-scissors'
  ]
};
describe('project submission', () => {
  // NOTE: this will fail once challenge tests are added.
  it('Should be possible to submit Python projects', () => {
    const { superBlock, block, challenges } = projects;
    challenges.forEach(challenge => {
      cy.visit(`/learn/${superBlock}/${block}/${challenge}`);
      cy.get('#dynamic-front-end-form')
        .get('#solution')
        .type('https://repl.it/@camperbot/python-project#main.py');

      cy.contains("I've completed this challenge").click();
      cy.contains('Go to next challenge').click();
    });
  });
});
