const Joi = require('joi');

const schema = Joi.object().keys({
  certifications: Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'responsive-web-design': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'javascript-algorithms-and-data-structures': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'front-end-development-libraries': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'data-visualization': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'back-end-development-and-apis': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'quality-assurance': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'scientific-computing-with-python': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'data-analysis-with-python': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'information-security': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'machine-learning-with-python': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'coding-interview-prep': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'relational-database': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'javascript-algorithms-and-data-structures-v8': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'full-stack-developer': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'semantic-html': Joi.object()
    .keys({
      blocks: Joi.object()
    })
    .required(),
  'a2-professional-chinese': Joi.object().keys({
    blocks: Joi.object()
  }),
  'b1-english-for-developers': Joi.object().keys({
    blocks: Joi.object()
  }),
  'dev-playground': Joi.object().keys({
    blocks: Joi.object()
  }),
  'python-for-everybody': Joi.object().keys({
    blocks: Joi.object()
  }),
  'a2-professional-spanish': Joi.object().keys({
    blocks: Joi.object()
  }),
  'basic-html': Joi.object().keys({
    blocks: Joi.object()
  }),
  'a2-english-for-developers': Joi.object().keys({
    blocks: Joi.object()
  }),
  'rosetta-code': Joi.object().keys({
    blocks: Joi.object()
  }),
  'foundational-c-sharp-with-microsoft': Joi.object().keys({
    blocks: Joi.object()
  }),
  'college-algebra-with-python': Joi.object().keys({
    blocks: Joi.object()
  }),
  'project-euler': Joi.object().keys({
    blocks: Joi.object()
  }),
  '2022/responsive-web-design': Joi.object().keys({
    blocks: Joi.object()
  }),
  'the-odin-project': Joi.object().keys({
    blocks: Joi.object()
  })
});

exports.curriculumSchemaValidator = curriculum => {
  return schema.validate(curriculum, {
    abortEarly: false
  });
};
