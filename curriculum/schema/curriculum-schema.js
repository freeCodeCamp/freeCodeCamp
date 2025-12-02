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
  'the-odin-project'
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
