const practiceProjects = [
  {
    title: 'Accessibility Quiz',
    url: '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/'
  },
  {
    title: 'Cafe Menu',
    url: '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/'
  },
  {
    title: 'Ferris Wheel',
    url: '/learn/2022/responsive-web-design/learn-css-animation-by-building-a-ferris-wheel/'
  },
  {
    title: 'Colored Markers',
    url: '/learn/2022/responsive-web-design/learn-css-colors-by-building-a-set-of-colored-markers/'
  },
  {
    title: 'Photo Gallery',
    url: '/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/'
  },
  {
    title: 'Magazine',
    url: '/learn/2022/responsive-web-design/learn-css-grid-by-building-a-magazine/'
  },
  {
    title: 'Penguin',
    url: '/learn/2022/responsive-web-design/learn-css-transforms-by-building-a-penguin/'
  },
  {
    title: 'City Skyline',
    url: '/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/'
  },
  {
    title: 'CatPhotoApp',
    url: '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/'
  },
  {
    title: 'Registration Form',
    url: '/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/'
  },
  {
    title: 'Picasso Painting',
    url: '/learn/2022/responsive-web-design/learn-intermediate-css-by-building-a-picasso-painting/'
  },
  {
    title: 'Balance Sheet',
    url: '/learn/2022/responsive-web-design/learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet/'
  },
  {
    title: 'Piano',
    url: '/learn/2022/responsive-web-design/learn-responsive-web-design-by-building-a-piano/'
  },
  {
    title: 'Rothko Painting',
    url: '/learn/2022/responsive-web-design/learn-the-css-box-model-by-building-a-rothko-painting/'
  },
  {
    title: 'Nutrition Label',
    url: '/learn/2022/responsive-web-design/learn-typography-by-building-a-nutrition-label/'
  }
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
  it('should appear on the first challenges of each practice project', () => {
    practiceProjects.forEach(({ url, title }) => {
      cy.visit(url + 'step-1');
      cy.contains("Here's a preview of what you will build");
      cy.get('[data-cy="project-preview-modal"]')
        .should('be.focused')
        .find('iframe')
        .should('have.attr', 'title', title + ' preview');
    });
  });

  // Tests for the absence of an element are tricky, if, as is the case here,
  // the element is not rendered straight away. So, instead, we test for a
  // side effect of not showing the modal: an editor is allowed to get focus.
  it('should NOT appear on the second challenges of each practice project', () => {
    practiceProjects.forEach(({ url }) => {
      cy.visit(url + 'step-2');
      cy.focused()
        .parents()
        .should('have.class', 'react-monaco-editor-container');
    });
  });

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
