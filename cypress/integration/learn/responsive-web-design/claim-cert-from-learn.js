describe('Responsive Web Design Superblock', () => {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
    cy.visit('/learn/responsive-web-design');
  });
  describe('Before submitting projects', () => {
    it('should have a card with href "claim-cert-block"', () => {
      cy.get('a[href="#claim-cert-block"]').scrollIntoView();
      cy.get('a[href="#claim-cert-block"]').should('be.visible');
    });

    it('should have an unordered list with class "map-challenges-ul" containing 4 items', () => {
      cy.get('[data-cy=claim-cert-steps]').should('be.visible');
      cy.get('[data-cy=claim-cert-steps]').children().should('have.length', 4);
    });
  });
  describe('After submitting all 5 projects', () => {
    beforeEach(() => {
      cy.exec('npm run seed');
      cy.login();
      cy.visit('/settings');
      cy.togglePrivacySettingsToPublicAndAcceptHonestyPolicy();
      cy.submitResponsiveWebDesignProjects();
    });
    it('should be possible to claim and view certifications from the superBlock page', () => {
      cy.location().should(loc => {
        expect(loc.pathname).to.eq(`/learn/responsive-web-design/`);
      });
      cy.get('.donation-modal').should('be.visible');
      cy.contains('Ask me later').click();
      cy.get('.donation-modal').should('not.exist');
      // directed to claim-cert-block section
      cy.url().should('include', '#claim-cert-block');
      // make sure that the window has not snapped to the top (a weird bug that
      // we never figured out and so could randomly reappear)
      cy.window().its('scrollY').should('not.equal', 0);
      cy.contains('Claim Certification').click();
      cy.contains('Share Certification').click();
      cy.location().should(loc => {
        expect(loc.pathname).to.eq(
          '/certification/developmentuser/responsive-web-design'
        );
      });
    });
  });
});
