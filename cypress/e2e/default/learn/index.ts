const challengerSelector = {
  curriculumMap: "[data-test-label='curriculum-map']"
} as const;

const learnUrl = {
  index: '/learn'
} as const;

const superBlockNames = [
  'Responsive Web Design Certification',
  'JavaScript Algorithms and Data Structures Certification',
  'Front End Development Libraries Certification',
  'Data Visualization Certification',
  'Relational Database Certification',
  'Back End Development and APIs Certification',
  'Quality Assurance Certification',
  'Scientific Computing with Python Certification',
  'Data Analysis with Python Certification',
  'Information Security Certification',
  'Machine Learning with Python Certification',
  'College Algebra with Python Certification',
  '(New) Foundational C# with Microsoft Certification',
  'Coding Interview Prep',
  'Project Euler'
];

// TODO: None of the tests in this spec test behaviour and would be better as a
// unit tests.
describe('Learn Landing page', () => {
  before(() => {
    cy.task('seed');
  });
  describe('for signed out user', () => {
    it('should render', () => {
      cy.visit(learnUrl.index);

      cy.title().should(
        'eq',
        'Learn to Code — For Free — Coding Courses for Busy People'
      );

      cy.contains('h1', "Welcome to freeCodeCamp's curriculum.");

      cy.document().then(document => {
        const superBlocks = document.querySelectorAll<HTMLAnchorElement>(
          `${challengerSelector.curriculumMap} > ul > li > a`
        );
        expect(superBlocks).to.have.length(15);

        superBlocks.forEach((superBlock, idx) => {
          expect(superBlock.innerText).to.have.string(superBlockNames[idx]);
        });
      });

      // quotes are only shown to logged in users
      cy.get('blockquote').should('not.exist');
    });
  });

  describe('for signed in user', () => {
    it('should render', () => {
      cy.login();
      cy.visit(learnUrl.index);

      cy.title().should(
        'eq',
        'Learn to Code — For Free — Coding Courses for Busy People'
      );

      cy.contains('h1', 'Welcome back, Development User.');

      // quote
      cy.get('blockquote').within(() => {
        cy.get('q').should('be.visible');
      });

      // quote author
      cy.get('blockquote').within(() => {
        cy.get('cite').should('be.visible');
      });
    });
  });
});
