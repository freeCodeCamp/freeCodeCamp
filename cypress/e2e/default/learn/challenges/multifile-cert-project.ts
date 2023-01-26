const save1text = 'save 1';
const save2text = 'save 2';

const editorElements = {
  editor: '.react-monaco-editor-container',
  saveCodeBtn: '[data-cy="save-code-to-database-btn"]',
  closeFlash: '.close'
};

describe('multifileCertProjects', function () {
  before(() => {
    cy.exec('npm run seed');
    cy.login();
    cy.visit(
      'learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page'
    );
  });

  beforeEach(() => {
    cy.preserveSession();
  });

  it('should save and reload user code', function () {
    // save to database (savedChallenges) when clicking save code button
    cy.get(editorElements.editor).click().focused().clear().type(save1text);
    cy.get(editorElements.saveCodeBtn).click();
    cy.contains('Your code was saved to the database.');
    // load saved code on a hard refresh
    cy.reload();
    cy.contains(save1text);
  });

  it('should save using ctrl+s hotkey and persist through navigation', function () {
    // since rapid clicks will cause the save requests to be ignored, we have to
    // purge the db:
    cy.exec('npm run seed');
    // and the redux store:
    cy.reload();
    cy.get(editorElements.editor)
      .click()
      .focused()
      .clear()
      .type(`${save2text}{ctrl+s}`);
    cy.contains('Your code was saved to the database.');
    cy.get(editorElements.closeFlash).click();
    // load saved code when navigating site (no hard refresh)'
    cy.contains('Responsive Web Design Projects').click();
    cy.contains('In this Responsive Web Design Certification');
    cy.contains('Build a Tribute Page').click();
    cy.contains(save2text);
    // trigger the warning about saving too quickly
    cy.reload();
    cy.get(editorElements.editor)
      .click()
      .focused()
      .type(`{ctrl+s}`)
      // wait a few ms or it's too fast
      .wait(500)
      .type(`{ctrl+s}`);
    cy.contains('Your code was not saved.');
  });

  it('should not add editable region boundaries to help post', () => {
    cy.get(editorElements.editor).click().focused().clear().type(save1text);
    cy.get('#get-help-dropdown').scrollIntoView().click();
    cy.get('.tool-panel-group ul[role="menu"]').within(() => {
      cy.get('a').eq(1).contains('Ask for Help').click();
      cy.contains('Create a help post on the forum').click();
      // https://forum.freecodecamp.org/new-topic?category=HTML-CSS&title=Survey%20Form%20-%20Build%20a%20Survey%20Form&body=**Tell%20us%20what%27s%20happening%3A**%0ADescribe%20your%20issue%20in%20detail%20here.%0A%0A**Your%20code%20so%20far**%0A%0A%0A%60%60%60html%0A%3C!--%20file%3A%20index.html%20--%3E%0A%3Ch1%3EHello%20World%3C%2Fh1%3E%0A%60%60%60%0A%0A%60%60%60css%0A%2F*%20file%3A%20styles.css%20*%2F%0A%0A%60%60%60%0A%0A**Your%20browser%20information%3A**%0A%0AUser%20Agent%20is%3A%20%3Ccode%3EMozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F109.0.0.0%20Safari%2F537.36%3C%2Fcode%3E%0A%0A**Challenge%3A**%20%20Survey%20Form%20-%20Build%20a%20Survey%20Form%0A%0A**Link%20to%20the%20challenge%3A**%0Ahttps%3A%2F%2F8000-shaunshamil-freecodecam-tw1hygqrrsu.ws-eu84.gitpod.io%2Flearn%2F2022%2Fresponsive-web-design%2Fbuild-a-survey-form-project%2Fbuild-a-survey-form
      cy.location().should(loc => {
        expect(loc).to.include(Cypress.env('FORUM_LOCATION'));
        expect(loc).to.not.include('%3C!--%20User%20Editable%20Region%20--%3E');
      });
    });
  });
});
