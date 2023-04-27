const challengerSelector = {
  challengeMap: "[data-test-label='learn-curriculum-map']"
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
  'Coding Interview Prep',
  'Project Euler',
  'Legacy Responsive Web Design Certification'
];

describe('Learn Landing page (not logged in)', () => {
  it('Should render', () => {
    cy.visit(learnUrl.index);

    cy.title().should(
      'eq',
      'Learn to Code — For Free — Coding Courses for Busy People'
    );
  });

  it('Has the correct heading for an unauthenticated User', () => {
    cy.visit(learnUrl.index);

    cy.contains('h1', "Welcome to freeCodeCamp's curriculum.");
  });

  it('Should render a curriculum map', () => {
    cy.document().then(document => {
      const superBlocks = document.querySelectorAll<HTMLAnchorElement>(
        `${challengerSelector.challengeMap} > li > a`
      );
      expect(superBlocks).to.have.length(15);

      superBlocks.forEach((superBlock, idx) => {
        expect(superBlock.innerText).to.have.string(superBlockNames[idx]);
      });
    });
  });
});

describe('Quotes', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Should show a quote', () => {
    cy.get('blockquote').within(() => {
      cy.get('q').should('be.visible');
    });
  });

  it('Should show quote author', () => {
    cy.get('blockquote').within(() => {
      cy.get('cite').should('be.visible');
    });
  });
});

describe('Superblocks and Blocks', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Has all superblocks visible', () => {
    cy.wrap(superBlockNames.slice(1)).each((name: string) => {
      cy.contains(name).should('be.visible');
    });
  });
});
