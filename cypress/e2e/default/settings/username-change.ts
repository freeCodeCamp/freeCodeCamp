describe('Username input field', () => {
  beforeEach(() => {
    cy.login();
    cy.goToSettings();
  });

  it('Should be able to close the shown flash message', () => {
    cy.typeUsername('bjorno');
    cy.contains('Username is available');

    cy.get('@usernameInput').type('{enter}', { force: true, release: false });

    cy.contains('We have updated your username to bjorno').within(() => {
      cy.get('button').click();
    });

    cy.contains('We have updated your username to bjorno').should('not.exist');

    cy.resetUsername();
  });
});
