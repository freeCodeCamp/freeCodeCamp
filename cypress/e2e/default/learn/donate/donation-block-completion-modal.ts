describe('Donate page', () => {
  before(() => {
    cy.task('seed');
    cy.login();
  });

  after(() => {
    cy.task('seed');
  });

  const projects = [
    'random-quote-machine',
    'markdown-previewer',
    'drum-machine',
    'javascript-calculator',
    '25--5-clock'
  ];

  it('Should be possible to submit projects', () => {
    const submitProject = (str: string) => {
      cy.visit(
        `/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-${str}`
      );
      cy.get('#dynamic-front-end-form')
        .get('#solution')
        .type('https://codepen.io/camperbot/full/oNvPqqo', {
          force: true
        });

      cy.contains("I've completed this challenge").click();
      cy.contains('Submit and go to next challenge').click();
    };

    projects.forEach(project => submitProject(project));

    // pop up modal
    cy.get("div[role='dialog'] img#donation-animation").should('be.visible');
  });
});
