const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// Common Regular Expressions
const slugRE = /^[a-z0-9-]+$/;
const slugWithSlashRE = /^[a-z0-9-/]+$/;

// Shared Configurations
const { challengeTypes } = require('../../shared/config/challenge-types');
const { SuperBlocks } = require('../../shared/config/curriculum');

// Asset Lists
const { availableCharacters, availableBackgrounds, availableAudios, availableAlignments } = require('./scene-assets');

// Predefined Joi Schemas
const positionJoi = Joi.object({
  x: Joi.number().required().strict(),
  y: Joi.number().required().strict(),
  z: Joi.number().required().strict()
});

const fileJoi = Joi.object({
  fileKey: Joi.string(),
  ext: Joi.string(),
  name: Joi.string(),
  editableRegionBoundaries: Joi.array().items(Joi.number()),
  path: Joi.string(),
  error: Joi.valid(null),
  head: Joi.string().allow(''),
  tail: Joi.string().allow(''),
  seed: Joi.string().allow(''),
  contents: Joi.string().allow(''),
  id: Joi.string().allow(''),
  history: Joi.array().items(Joi.string().allow(''))
});

const prerequisitesJoi = Joi.object({
  id: Joi.objectId().required(),
  title: Joi.string().required()
});

// Scene Setup Joi Schemas
const setupCharacterJoi = Joi.object({
  character: Joi.string().valid(...availableCharacters).required(),
  position: positionJoi.required(),
  opacity: Joi.number().strict()
});

const setupAudioJoi = Joi.object({
  filename: Joi.string().valid(...availableAudios).required(),
  startTime: Joi.number().required().strict(),
  startTimestamp: Joi.number().strict(),
  finishTimestamp: Joi.number().strict()
});

const setupJoi = Joi.object({
  background: Joi.string().valid(...availableBackgrounds).required(),
  characters: Joi.array().items(setupCharacterJoi).min(1).required(),
  audio: setupAudioJoi.required(),
  alwaysShowDialogue: Joi.boolean()
});

// Dialogue and Command Joi Schemas
const DialogueJoi = Joi.object({
  text: Joi.string().required(),
  align: Joi.string().valid(...availableAlignments)
});

const commandJoi = Joi.object({
  background: Joi.string().valid(...availableBackgrounds),
  character: Joi.string().valid(...availableCharacters).required(),
  position: positionJoi,
  opacity: Joi.number().strict(),
  startTime: Joi.number().required().strict(),
  finishTime: Joi.number().strict(),
  dialogue: DialogueJoi
});

// Question and Quiz Joi Schemas
const questionJoi = Joi.object({
  text: Joi.string().required(),
  answers: Joi.array().items(
    Joi.object({
      answer: Joi.string().required(),
      feedback: Joi.string().allow(null)
    })
  ).required(),
  solution: Joi.number().required()
});

const quizJoi = Joi.object({
  questions: Joi.array().items(
    Joi.object({
      text: Joi.string().required(),
      distractors: Joi.array().items(Joi.string().required()).min(3).max(3).required(),
      answer: Joi.string().required()
    })
  ).min(20).max(20).required()
});

// Main Schema
const schema = Joi.object({
  block: Joi.string().regex(slugRE).required(),
  blockId: Joi.objectId(),
  blockType: Joi.when('superBlock', {
    is: SuperBlocks.FrontEndDevelopment,
    then: Joi.valid('workshop', 'lab', 'lecture', 'review', 'quiz', 'exam').required(),
    otherwise: Joi.valid(null)
  }),
  blockLayout: Joi.when('superBlock', {
    is: SuperBlocks.FrontEndDevelopment,
    then: Joi.valid('challenge-list', 'challenge-grid', 'link', 'project-list', 'legacy-challenge-list', 'legacy-link').required()
  }),
  challengeOrder: Joi.number(),
  certification: Joi.string().regex(slugWithSlashRE),
  challengeType: Joi.number().min(0).max(24).required(),
  checksum: Joi.number(), // Require only for normal challenges, not certificates
  dashedName: Joi.string().regex(slugRE),
  demoType: Joi.string().valid('onClick', 'onLoad'),
  description: Joi.when('challengeType', {
    is: [challengeTypes.step, challengeTypes.video, challengeTypes.multipleChoice, challengeTypes.fillInTheBlank],
    then: Joi.string().allow(''),
    otherwise: Joi.string().required()
  }),
  disableLoopProtectTests: Joi.boolean().required(),
  disableLoopProtectPreview: Joi.boolean().required(),
  explanation: Joi.when('challengeType', {
    is: [challengeTypes.multipleChoice, challengeTypes.fillInTheBlank],
    then: Joi.string()
  }),
  challengeFiles: Joi.array().items(fileJoi),
  guideUrl: Joi.string().uri({ scheme: 'https' }),
  hasEditableBoundaries: Joi.boolean(),
  helpCategory: Joi.valid('JavaScript', 'HTML-CSS', 'Python', 'Backend Development', 'C-Sharp', 'English', 'Odin', 'Euler', 'Rosetta'),
  videoUrl: Joi.string().allow(''),
  fillInTheBlank: Joi.object({
    sentence: Joi.string().required(),
    blanks: Joi.array().items(
      Joi.object({
        answer: Joi.string().required(),
        feedback: Joi.string().allow(null)
      })
    ).required()
  }),
  forumTopicId: Joi.number(),
  id: Joi.objectId().required(),
  instructions: Joi.string().allow(''),
  isComingSoon: Joi.boolean(),
  isLocked: Joi.boolean(),
  isPrivate: Joi.boolean(),
  msTrophyId: Joi.when('challengeType', { is: challengeTypes.msTrophy, then: Joi.string().required() }),
  notes: Joi.string().allow(''),
  order: Joi.number(),
  prerequisites: Joi.when('challengeType', { is: challengeTypes.exam, then: Joi.array().items(prerequisitesJoi) }),
  videoId: Joi.when('challengeType', { is: challengeTypes.video, then: Joi.string().required() }),
  videoLocaleIds: Joi.when('challengeType', {
    is: challengeTypes.video,
    then: Joi.object().keys({ espanol: Joi.string(), italian: Joi.string(), portuguese: Joi.string() })
  }),
  bilibiliIds: Joi.when('challengeType', {
    is: challengeTypes.video,
    then: Joi.object().keys({ aid: Joi.number().required(), bvid: Joi.string().required(), cid: Joi.number().required() })
  }),
  questions: Joi.when('challengeType', {
    is: [challengeTypes.video, challengeTypes.multipleChoice, challengeTypes.theOdinProject],
    then: Joi.array().items(questionJoi).min(1).required(),
    otherwise: Joi.forbidden()
  }),
  quizzes: Joi.when('challengeType', { is: challengeTypes.quiz, then: Joi.array().items(quizJoi).min(1).required(), otherwise: Joi.forbidden() }),
  required: Joi.array().items(Joi.object({ link: Joi.string(), raw: Joi.bool(), src: Joi.string(), crossDomain: Joi.bool() })),
  assignments: Joi.when('challengeType', { is: challengeTypes.dialogue, then: Joi.array().items(Joi.string()).required(), otherwise: Joi.array().items(Joi.string()) }),
  scene: Joi.object({ setup: setupJoi.required(), commands: Joi.array().items(commandJoi) }),
  solutions: Joi.array().items(Joi.array().items(fileJoi).min(1)),
  superBlock: Joi.string().regex(slugWithSlashRE),
  superOrder: Joi.number(),
  suborder: Joi.number(),
  tests: Joi.array().items(Joi.object({ id: Joi.string().allow(''), text: Joi.string().required(), testString: Joi.string().allow('').required() })).required(),
  template: Joi.string().allow(''),
  title: Joi.string().required(),
  translationPending: Joi.bool().required(),
  url: Joi.when('challengeType', { is: [challengeTypes.codeAllyPractice, challengeTypes.codeAllyCert], then: Joi.string().required() }),
  usesMultifileEditor: Joi.boolean()
}).xor('helpCategory', 'isPrivate');

// Export function for validation
exports.challengeSchemaValidator = () => challenge => schema.validate(challenge);
