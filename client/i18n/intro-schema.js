/* eslint-disable camelcase */
/* This is used for testing to make sure the intro.json files
 * in each language have the correct structure
 */
const {
  arrayOfItems,
  strictObject,
  stringType
} = require('jest-json-schema-extended');

const introSchema = strictObject({
  'responsive-web-design': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'basic-html-and-html5': arrayOfItems(stringType, { minItems: 1 }),
      'basic-css': arrayOfItems(stringType, { minItems: 1 }),
      'applied-visual-design': arrayOfItems(stringType, { minItems: 1 }),
      'applied-accessibility': arrayOfItems(stringType, { minItems: 1 }),
      'responsive-web-design-principles': arrayOfItems(stringType, {
        minItems: 1
      }),
      'css-flexbox': arrayOfItems(stringType, { minItems: 1 }),
      'css-grid': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'javascript-algorithms-and-data-structures': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'basic-javascript': arrayOfItems(stringType, { minItems: 1 }),
      es6: arrayOfItems(stringType, { minItems: 1 }),
      'regular-expressions': arrayOfItems(stringType, { minItems: 1 }),
      debugging: arrayOfItems(stringType, { minItems: 1 }),
      'basic-data-structures': arrayOfItems(stringType, {
        minItems: 1
      }),
      'object-oriented-programming': arrayOfItems(stringType, { minItems: 1 }),
      'functional-programming': arrayOfItems(stringType, { minItems: 1 }),
      'intermediate-algorithm-scripting': arrayOfItems(stringType, {
        minItems: 1
      })
    })
  }),
  'front-end-libraries': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      bootstrap: arrayOfItems(stringType, { minItems: 1 }),
      jquery: arrayOfItems(stringType, { minItems: 1 }),
      sass: arrayOfItems(stringType, { minItems: 1 }),
      react: arrayOfItems(stringType, {
        minItems: 1
      }),
      redux: arrayOfItems(stringType, { minItems: 1 }),
      'react-and-redux': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'data-visualization': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'data-visualization-with-d3': arrayOfItems(stringType, { minItems: 1 }),
      'json-apis-and-ajax': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'apis-and-microservices': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'managing-packages-with-npm': arrayOfItems(stringType, { minItems: 1 }),
      'basic-node-and-express': arrayOfItems(stringType, { minItems: 1 }),
      'mongodb-and-mongoose': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'quality-assurance': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'quality-assurance-and-testing-with-chai': arrayOfItems(stringType, {
        minItems: 1
      }),
      'advanced-node-and-express': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'scientific-computing-with-python': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'python-for-everybody': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'data-analysis-with-python': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'data-analysis-with-python-course': arrayOfItems(stringType, {
        minItems: 1
      }),
      numpy: arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'information-security': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      'information-security-with-helmetjs': arrayOfItems(stringType, {
        minItems: 1
      }),
      'python-for-penetration-testing': arrayOfItems(stringType, {
        minItems: 1
      })
    })
  }),
  'machine-learning-with-python': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      tensorflow: arrayOfItems(stringType, { minItems: 1 }),
      'how-neural-networks-work': arrayOfItems(stringType, { minItems: 1 })
    })
  }),
  'coding-interview-prep': strictObject({
    intro: arrayOfItems(stringType, { minItems: 1 }),
    image: stringType,
    blocks: strictObject({
      algorithms: arrayOfItems(stringType, { minItems: 1 }),
      'data-structures': arrayOfItems(stringType, { minItems: 1 }),
      'take-home-projects': arrayOfItems(stringType, { minItems: 1 }),
      'rosetta-code': arrayOfItems(stringType, { minItems: 1 }),
      'project-euler': arrayOfItems(stringType, { minItems: 1 })
    })
  })
});

exports.introSchema = introSchema;
