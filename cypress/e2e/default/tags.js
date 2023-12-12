const challenges = {
  responsiveWebDesign:
    '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
  rosettaCode: '/learn/coding-interview-prep/rosetta-code/100-doors',
  projectEuler:
    '/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-and-5'
};

const social = {
  description: 'Learn to Code — For Free'
};

const scripts = {
  mathjax: {
    // TODO: figure out why this is in the head in dev and in the body in prod.
    // presumably an issue with gatsby-ssr.js vs gatsby-browser.js
    selector: 'body script[id="mathjax"]',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML'
  }
};

describe('The Document Metadata', () => {
  describe('landing page', () => {
    it('has correct <meta> tags', () => {
      cy.visit('/');
      cy.get('head meta[name="description"]').should(
        'have.attr',
        'content',
        'Learn to Code — For Free'
      );

      cy.get('head meta[name="og:title"]').should(
        'have.attr',
        'content',
        'freeCodeCamp.org'
      );

      cy.get('head meta[name="og:description"]').should(
        'have.attr',
        'content',
        social.description
      );

      cy.get('head meta[name="twitter:title"]').should(
        'have.attr',
        'content',
        'freeCodeCamp.org'
      );

      cy.get('head meta[name="twitter:description"]').should(
        'have.attr',
        'content',
        social.description
      );

      cy.get(scripts.mathjax.selector).should('not.exist');
    });
  });
  describe('responsive webdesign challenges', () => {
    it('should not have mathjax body script', () => {
      cy.visit(challenges.responsiveWebDesign);
      cy.contains('Basic HTML and HTML5');
      cy.get(scripts.mathjax.selector).should('not.exist');
    });
  });
  describe('project euler challenges', () => {
    it('should have mathjax body script', () => {
      // TODO: this is flaky, because (somehow) a chunk error is thrown when
      // visiting this page and browser (somehow) ends up on
      // challenges/responsiveWebDesign
      // The second visit to this page works fine.
      cy.visit(challenges.projectEuler);
      cy.contains('Project Euler');
      cy.get(scripts.mathjax.selector).should(
        'have.attr',
        'src',
        scripts.mathjax.src
      );
    });
  });
  describe('rosetta code challenges', () => {
    it('should have mathjax body script', () => {
      cy.visit(challenges.rosettaCode);
      cy.contains('Rosetta Code');
      cy.get(scripts.mathjax.selector).should(
        'have.attr',
        'src',
        scripts.mathjax.src
      );
    });
  });
});
