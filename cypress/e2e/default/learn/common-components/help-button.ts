describe('Help Button', () => {
  it('should be visible', () => {
    cy.visit(
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
    );
    cy.get('#get-help-dropdown').scrollIntoView().should('be.visible');
  });

  it('should toggle the dropdown menu', () => {
    cy.get('#get-help-dropdown').scrollIntoView().click();
    cy.get('.tool-panel-group ul[role="menu"]')
      .scrollIntoView()
      .should('be.visible');
  });

  it('should render three links when video is available', () => {
    cy.get('.tool-panel-group ul[role="menu"]').within(() => {
      cy.get('li').should('have.length', 3);
      cy.get('li').eq(0).should('have.text', 'Get a Hint');
      cy.get('li').eq(1).should('have.text', 'Watch a Video');
      cy.get('li').eq(2).should('have.text', 'Ask for Help');
    });
  });

  it('should render two links when video is not available', () => {
    cy.visit(
      '/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style'
    );
    cy.get('#get-help-dropdown').scrollIntoView().click();
    cy.get('.tool-panel-group ul[role="menu"]').within(() => {
      cy.get('li').should('have.length', 2);
      cy.get('li').eq(0).contains('Get a Hint');
      cy.get('li').eq(1).contains('Ask for Help');
    });
  });
});
