let superBlock = '2022/responsive-web-design';
let block = 'learn-html-by-building-a-cat-photo-app';
let challenges = ['5dc17d3bf86c76b9248c6eb4', '5dc17dc8f86c76b9248c6eb5'];

describe('Test challenges in mobile', () => {
  for (let challenge of challenges) {
    it('Challenge: ${challenge}', () => {
      cy.visit(`/${superBlock}/${block}/${challenge}`, {
        onBeforeLoad(win) {
          cy.spy(win.console, 'log').as('consoleLog');
        }
      });
      cy.get('@consoleLog').should('be.calledWith', 'completed');
    });
  }
});
