describe('Editor scrollbar width', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/settings');
  });

  let upperJawWidth;

  it('Default editor scrollbar width should be 5px', () => {
    cy.get('#scrollbar-width-slider').should('have.value', '5');
    cy.visit(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
    );
    cy.get('.editor-upper-jaw').then($editorUpperJaw => {
      upperJawWidth = Number($editorUpperJaw.outerWidth());
    });
    cy.get('#editor-lower-jaw').should($editorLowerJaw => {
      expect(upperJawWidth).to.equal(Number($editorLowerJaw.outerWidth()));
    });
    cy.get('.monaco-scrollable-element').should($scrollable => {
      expect(upperJawWidth).to.equal(Number($scrollable.outerWidth()) - 5);
    });
  });

  it('Should allow you to change editor scrollbar width to 25px', () => {
    cy.get('.scrollbar-width-numbers > [data-value="25"]').click();
    cy.get('#scrollbar-width-slider').should('have.value', '25');
    cy.visit(
      '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2'
    );
    cy.get('.editor-upper-jaw').then($editorUpperJaw => {
      upperJawWidth = Number($editorUpperJaw.outerWidth());
    });
    cy.get('#editor-lower-jaw').should($editorLowerJaw => {
      expect(upperJawWidth).to.equal(Number($editorLowerJaw.outerWidth()));
    });
    cy.get('.monaco-scrollable-element').should($scrollable => {
      expect(upperJawWidth).to.equal(Number($scrollable.outerWidth()) - 25);
    });
  });
});
