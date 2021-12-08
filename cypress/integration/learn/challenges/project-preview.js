const practiceProjectUrls = [
  '/learn/responsive-web-design/css-variables-skyline/',
  '/learn/responsive-web-design/basic-html-cat-photo-app/',
  '/learn/responsive-web-design/basic-css-cafe-menu/',
  '/learn/responsive-web-design/css-picasso-painting/',
  '/learn/responsive-web-design/css-box-model/',
  '/learn/responsive-web-design/css-piano/',
  '/learn/responsive-web-design/registration-form/',
  '/learn/responsive-web-design/accessibility-quiz/'
];

const legacyFirstChallengeUrls = [
  '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
  '/learn/responsive-web-design/basic-css/change-the-color-of-text',
  '/learn/responsive-web-design/applied-visual-design/create-visual-balance-using-the-text-align-property',
  '/learn/responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility',
  '/learn/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes',
  '/learn/responsive-web-design/css-grid/create-your-first-css-grid'
];

describe('project preview', () => {
  if (Cypress.env('SHOW_UPCOMING_CHANGES') === 'true') {
    it('should appear on the first challenges of each practice project', () => {
      practiceProjectUrls.forEach(url => {
        cy.visit(url + 'part-1');
        cy.contains('Complete project demo.');
        cy.get('[data-cy="project-preview-modal"]').should('be.focused');
      });
    });

    // Tests for the absence of an element are tricky, if, as is the case here,
    // the element is not rendered straight away. So, instead, we test for a
    // side effect of not showing the modal: an editor is allowed to get focus.
    it('should NOT appear on the second challenges of each practice project', () => {
      practiceProjectUrls.forEach(url => {
        cy.visit(url + 'part-2');
        cy.focused()
          .parents()
          .should('have.class', 'react-monaco-editor-container');
      });
    });
  }

  it('should NOT appear on the first challenges of legacy blocks', () => {
    legacyFirstChallengeUrls.forEach(url => {
      cy.visit(url);
      // if no modals are showing, then the editor should have focus:
      cy.focused()
        .parents()
        .should('have.class', 'react-monaco-editor-container');
    });
  });
});
