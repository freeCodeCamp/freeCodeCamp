const langSelectors = {
  button: '#toggle-lang-button',
  english: '[data-value="english"]',
  espanol: '[data-value="espanol"]',
  chinese: '[data-value="chinese"]'
};

const langOpts = [
  'english',
  'espanol',
  'chinese',
  'chinese-traditional',
  'italian',
  'portuguese',
  'ukrainian',
  'japanese',
  'german'
];

describe('language selector', () => {
  it('should render the button', () => {
    cy.visit('/learn');
    cy.get(langSelectors.button).should('be.visible');
  });

  it('should render all lang options', () => {
    cy.visit('/learn');
    cy.get(langSelectors.button).click();
    langOpts.forEach(lang => {
      cy.get(`[data-value="${lang}"]`).should('be.visible');
    });
  });

  it('should navigate to another language', () => {
    cy.visit('/learn');
    cy.get(langSelectors.button).click();
    cy.get(langSelectors.espanol).click();
    cy.url().should('include', '/espanol');
    cy.get(langSelectors.button).click();
    cy.get(langSelectors.chinese).click();
    cy.url().should('include', '/chinese');
  });
});
