const Joi = require('joi');

const blocksSchema = Joi.object().pattern(
  /./,
  Joi.object().keys({ challenges: Joi.array().required() })
);

const superblocks = [
  'certifications',
  'responsive-web-design',
  'javascript-algorithms-and-data-structures',
  'front-end-development-libraries',
  'data-visualization',
  'back-end-development-and-apis',
  'quality-assurance',
  'scientific-computing-with-python',
  'data-analysis-with-python',
  'information-security',
  'machine-learning-with-python',
  'coding-interview-prep',
  'relational-database',
  'javascript-algorithms-and-data-structures-v8',
  'semantic-html',
  'a2-professional-chinese',
  'b1-english-for-developers',
  'dev-playground',
  'python-for-everybody',
  'a2-professional-spanish',
  'basic-html',
  'a2-english-for-developers',
  'rosetta-code',
  'foundational-c-sharp-with-microsoft',
  'college-algebra-with-python',
  'project-euler',
  '2022/responsive-web-design',
  'the-odin-project',
  'introduction-to-algorithms-and-data-structures',
  'introduction-to-precalculus',
  'lab-survey-form',
  'html-and-accessibility',
  'computer-basics',
  'basic-css',
  'design-for-developers',
  'absolute-and-relative-units',
  'pseudo-classes-and-elements',
  'css-colors',
  'styling-forms',
  'css-box-model',
  'css-flexbox',
  'lab-page-of-playing-cards',
  'css-typography',
  'css-and-accessibility',
  'css-positioning',
  'attribute-selectors',
  'lab-book-inventory-app',
  'responsive-design',
  'lab-technical-documentation-page',
  'css-variables',
  'css-grid',
  'lab-product-landing-page',
  'css-animations',
  'learn-rag-mcp-fundamentals',
  'introduction-to-bash',
  'introduction-to-sql-and-postgresql',
  'learn-bash-scripting',
  'learn-sql-and-bash',
  'introduction-to-nano',
  'introduction-to-git-and-github',
  'learn-prompting-fundamentals',
  'introduction-to-variables-and-strings-in-javascript',
  'introduction-to-booleans-and-numbers-in-javascript',
  'introduction-functions-in-javascript',
  'introduction-to-arrays-in-javascript',
  'introduction-to-objects-in-javascript',
  'introduction-to-loops-in-javascript',
  'javascript-fundamentals-review',
  'introduction-to-higher-order-functions-and-callbacks-in-javascript',
  'learn-dom-manipulation-and-events-with-javascript',
  'introduction-to-javascript-and-accessibility',
  'learn-javascript-debugging',
  'learn-basic-regex-with-javascript',
  'introduction-to-dates-in-javascript',
  'learn-audio-and-video-events-with-javascript',
  'introduction-to-maps-and-sets-in-javascript',
  'learn-localstorage-and-crud-operations-with-javascript',
  'introduction-to-javascript-classes',
  'learn-recursion-with-javascript',
  'introduction-to-functional-programming-with-javascript',
  'introduction-to-asynchronous-javascript'
];

const schema = Joi.object().keys(
  superblocks.reduce((acc, superblock) => {
    acc[superblock] = Joi.object()
      .keys({
        blocks: blocksSchema
      })
      .required();
    return acc;
  }, {})
);

exports.curriculumSchemaValidator = curriculum => {
  return schema.validate(curriculum, {
    abortEarly: false
  });
};
