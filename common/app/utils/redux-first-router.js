import invariant from 'invariant';
import { redirect as createRedirect } from 'redux-first-router';

import routesMap from '../routes-map.js';
import { langSelector } from '../Router/redux';

const firstChallenges = {
   'basic-html-and-html5': 'learn-how-freecodecamp-works',
   'css-flexbox': 'introduction-to-the-css-flexbox-challenges',
   'basic-data-structures': 'introduction-to-arrays',
   'functional-programming':
      'introduction-to-the-functional-programming-challenges',
   bootstrap: 'introduction-to-the-bootstrap-challenges',
   redux: 'create-a-redux-store',
   'api-and-microservice-projects': 'new-backend-format',
   'information-security-with-helmetjs':
      'introduction-to-information-security-with-helmetjs-challenges',
   'typed-arrays': 'coding-interview-data-structure-questions',
   'apis-and-microservices-certificate': 'apis-and-microservices-certificate',
   'legacy-back-end-certificate': 'legacy-back-end-certificate',
   'applied-visual-design':
      'introduction-to-the-applied-visual-design-challenges',
   'responsive-web-design-principles':
      'introduction-to-the-responsive-web-design-challenges',
   debugging: 'introduction-to-the-debugging-challenges',
   'object-oriented-programming':
      'introduction-to-the-object-oriented-programming-challenges',
   'react-and-redux': 'getting-started-with-react-redux',
   'data-visualization-with-d3':
      'introduction-to-the-data-visualization-with-d3-challenges',
   'mongodb-and-mongoose':
      'introduction-to-the-mongodb-and-mongoose-challenges',
   'mail-for-good': 'open-source-for-good',
   'system-design-and-concept-questions': 'arrayprototypemap',
   'information-securtiy-and-quality-assurance-certificate':
      'information-securtiy-and-quality-assurance-certificate',
   'responsive-web-design-certificate': 'responsive-web-design-certificate',
   'applied-accessibility':
      'introduction-to-the-applied-accessibility-challenges',
   'css-grid': 'introduction-to-the-css-grid-challenges',
   'basic-javascript': 'introduction-to-javascript',
   'intermediate-algorithm-scripting': 'sum-all-numbers-in-a-range',
   'front-end-libraries-projects': 'build-a-random-quote-machine',
   sass: 'introduction-to-the-sass-challenges',
   'basic-node-and-express':
      'introduction-to-the-basic-node-and-express-challenges',
   'information-security-and-quality-assurance-projects':
      'metricimperial-converter',
   'project-euler-problems': 'problem-1-multiples-of-3-and-5',
   'data-visualization-certificate': 'data-visualization-certificate',
   'legacy-data-visualization-certificate':
      'legacy-data-visualization-certificate',
   'basic-css': 'introduction-to-basic-css',
   'basic-algorithm-scripting': 'get-set-for-our-algorithm-lessons',
   es6: 'introduction-to-the-es6-challenges',
   'regular-expressions': 'introduction-to-the-regular-expression-challenges',
   react: 'create-a-simple-jsx-element',
   'json-apis-and-ajax': 'introduction-to-the-json-apis-and-ajax-challenges',
   'advanced-node-and-express': 'advanced-nodeexpress-introduction',
   'coding-interview-algorithm-questions': 'symmetric-difference',
   'coding-interview-take-home-projects': 'show-the-local-weather',
   'javascript-algorithms-and-data-structures-certificate':
      'javascript-algorithms-and-data-structures-certificate',
   'applied-responsive-web-design-projects':
      'get-set-for-our-responsive-web-design-projects',
   'claim-your-javascript-algorithms-and-data-structures-certificate':
      'claim-your-javascript-algorithms-and-data-structures-certificate',
   'javascript-algorithms-and-data-structures-projects': 'palindrome-checker',
   jquery: 'introduction-to-jquery',
   'data-visualization-projects': 'visualize-data-with-a-bar-chart',
   'managing-packages-with-npm':
      'introduction-to-the-managing-packages-with-npm-challenges',
   'quality-assurance-and-testing-with-chai': 'quality-assurance-introduction',
   'rosetta-code-problems': '100-doors',
   'legacy-front-end-certificate': 'legacy-front-end-certificate',
   'front-end-libraries-certificate': 'front-end-libraries-certificate'
};

export function onBeforeChange(dispatch, getState, action) {
  const route = routesMap[action.type];
  const lang = langSelector(getState());
  if (route && route.redirect) {
    invariant(
      typeof route.redirect === 'function',
      `
        route redirect should be a function but got %s
        check the redirect method of route %s
      `,
      route.redirect,
      route
    );
    if (route.type === 'challenges.onRouteChallengesBlock') {
      const block = action.payload.block;
      let dashedName = firstChallenges[block];
      dashedName = dashedName ? dashedName : '';
      return dispatch(createRedirect(route.redirect({
          lang, block, dashedName })));
    }
    return dispatch(createRedirect(route.redirect({ lang })));
  }
  return action;
}

// prevent function from serializing during SSR
onBeforeChange.toString = () => 'onBeforeChange';
