describe('Help Button', () => {
  it('should show three menus on challenges without videos', () => {
    cy.visit(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );

    // it should toggle the dropdown menu
    cy.get('#get-help-dropdown').click();
    cy.get('.tool-panel-group [role="menu"]').should('be.visible');

    // it should render three links when video is available
    cy.get('.tool-panel-group [role="menu"]')
      .children()
      .should('have.length', 3);
    cy.get('.tool-panel-group [role="menu"]').within(() => {
      cy.get('a').contains('Get a Hint');
      cy.get('button').contains('Watch a Video');
      cy.get('button').contains('Ask for Help');
    });
  });

  it('should render two links when video is not available', () => {
    cy.visit(
      '/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style'
    );

    cy.get('#get-help-dropdown').click();
    cy.get('.tool-panel-group [role="menu"]')
      .children()
      .should('have.length', 2);
    cy.get('.tool-panel-group [role="menu"]').within(() => {
      cy.get('a').contains('Get a Hint');
      cy.get('button').contains('Ask for Help');
    });
  });
});
