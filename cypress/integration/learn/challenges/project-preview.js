const practiceProjectsFirstSteps = [
  {
    title: 'Accessibility Quiz',
    url: '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-1/MVPV/'
  },
  {
    title: 'Cafe Menu',
    url: '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1/hFCk/'
  },
  {
    title: 'Ferris Wheel',
    url: '/learn/2022/responsive-web-design/learn-css-animation-by-building-a-ferris-wheel/step-1/r5pC/'
  },
  {
    title: 'Colored Markers',
    url: '/learn/2022/responsive-web-design/learn-css-colors-by-building-a-set-of-colored-markers/step-1/5nWc/'
  },
  {
    title: 'Photo Gallery',
    url: '/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/step-1/2Tw5/'
  },
  {
    title: 'Magazine',
    url: '/learn/2022/responsive-web-design/learn-css-grid-by-building-a-magazine/step-1/jl2k/'
  },
  {
    title: 'Penguin',
    url: '/learn/2022/responsive-web-design/learn-css-transforms-by-building-a-penguin/step-1/rYHN/'
  },
  {
    title: 'City Skyline',
    url: '/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/step-1/qMqs/'
  },
  {
    title: 'CatPhotoApp',
    url: '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1/9Qb7/'
  },
  {
    title: 'Registration Form',
    url: '/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/step-1/wBSk/'
  },
  {
    title: 'Picasso Painting',
    url: '/learn/2022/responsive-web-design/learn-intermediate-css-by-building-a-picasso-painting/step-1/JzCF/'
  },
  {
    title: 'Balance Sheet',
    url: '/learn/2022/responsive-web-design/learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet/step-1/LpRs/'
  },
  {
    title: 'Piano',
    url: '/learn/2022/responsive-web-design/learn-responsive-web-design-by-building-a-piano/step-1/cRMp/'
  },
  {
    title: 'Rothko Painting',
    url: '/learn/2022/responsive-web-design/learn-the-css-box-model-by-building-a-rothko-painting/step-1/FfV5/'
  },
  {
    title: 'Nutrition Label',
    url: '/learn/2022/responsive-web-design/learn-typography-by-building-a-nutrition-label/step-1/JV9R/'
  }
];

const practiceProjectsSecondSteps = [
  {
    title: 'Accessibility Quiz',
    url: '/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2/myqT/'
  },
  {
    title: 'Cafe Menu',
    url: '/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-2/nVVT/'
  },
  {
    title: 'Ferris Wheel',
    url: '/learn/2022/responsive-web-design/learn-css-animation-by-building-a-ferris-wheel/step-2/lXxg/'
  },
  {
    title: 'Colored Markers',
    url: '/learn/2022/responsive-web-design/learn-css-colors-by-building-a-set-of-colored-markers/step-2/t5FB/'
  },
  {
    title: 'Photo Gallery',
    url: '/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/step-2/vBwt/'
  },
  {
    title: 'Magazine',
    url: '/learn/2022/responsive-web-design/learn-css-grid-by-building-a-magazine/step-2/h692/'
  },
  {
    title: 'Penguin',
    url: '/learn/2022/responsive-web-design/learn-css-transforms-by-building-a-penguin/step-2/KrBb/'
  },
  {
    title: 'City Skyline',
    url: '/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/step-2/Yk5M/'
  },
  {
    title: 'CatPhotoApp',
    url: '/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-2/HJ9V/'
  },
  {
    title: 'Registration Form',
    url: '/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/step-2/W5dR/'
  },
  {
    title: 'Picasso Painting',
    url: '/learn/2022/responsive-web-design/learn-intermediate-css-by-building-a-picasso-painting/step-2/tQrm/'
  },
  {
    title: 'Balance Sheet',
    url: '/learn/2022/responsive-web-design/learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet/step-2/TZpL/'
  },
  {
    title: 'Piano',
    url: '/learn/2022/responsive-web-design/learn-responsive-web-design-by-building-a-piano/step-2/Zgkg/'
  },
  {
    title: 'Rothko Painting',
    url: '/learn/2022/responsive-web-design/learn-the-css-box-model-by-building-a-rothko-painting/step-2/7Rwf/'
  },
  {
    title: 'Nutrition Label',
    url: '/learn/2022/responsive-web-design/learn-typography-by-building-a-nutrition-label/step-2/WTMD/'
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
    practiceProjectsFirstSteps.forEach(({ url, title }) => {
      cy.visit(url);
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
    practiceProjectsSecondSteps.forEach(({ url }) => {
      cy.visit(url);
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
