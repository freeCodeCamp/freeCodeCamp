import { availableLangs, hiddenLangs } from '../../../../../config/i18n';

const buttonSelector = '#toggle-lang-button';
const toLangSelector = (lang: string) => `[data-value="${lang}"]`;

const langOpts = availableLangs.client.filter(
  lang => !hiddenLangs.includes(lang)
);

describe('language selector', () => {
  beforeEach(() => {
    cy.visit('/learn');
  });

  it('should render the button', () => {
    cy.get(buttonSelector).should('be.visible');
  });

  langOpts.forEach(lang => {
    it(`should render the ${lang} option`, () => {
      cy.get(buttonSelector).click();
      cy.get(toLangSelector(lang)).should('be.visible');
    });

    if (lang === 'english') {
      return;
    }
    it(`should navigate to ${lang}`, () => {
      cy.get(buttonSelector).click();
      cy.get(toLangSelector(lang)).click();
      cy.url().should('include', `/${lang}`);
    });
  });
});
