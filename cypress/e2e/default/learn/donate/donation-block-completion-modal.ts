describe('Donate page', () => {
  before(() => {
    cy.clearCookies();
    cy.exec('pnpm run seed');
    cy.login();
  });

  after(() => {
    cy.exec('pnpm run seed');
  });

  const projects = [
    'random-quote-machine',
    'markdown-previewer',
    'drum-machine',
    'javascript-calculator',
    '25--5-clock'
  ];

  it('Should be able to submit projects', () => {
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
  });

  it('Should have a pop up modal', () => {
    cy.contains(
      'Nicely done. You just completed Front End Development Libraries Projects.'
    );
  });
});
