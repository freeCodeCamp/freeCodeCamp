const Joi = require('joi');
const {
  availableCharacters,
  availableBackgrounds,
  availableAudios
} = require('./scene-assets');

const PositionJoi = Joi.object().keys({
  x: Joi.number().required(),
  y: Joi.number().required(),
  z: Joi.number().required()
});

const SetupCharacterJoi = Joi.object().keys({
  character: Joi.string()
    .valid(...availableCharacters)
    .required(),
  position: PositionJoi.required(),
  opacity: Joi.number()
});

const SetupAudioJoi = Joi.object().keys({
  filename: Joi.string()
    .valid(...availableAudios)
    .required(),
  startTime: Joi.number().required(),
  startTimestamp: Joi.number(),
  finishTimestamp: Joi.number()
});

const SetupJoi = Joi.object().keys({
  background: Joi.string()
    .valid(...availableBackgrounds)
    .required(),
  characters: Joi.array().items(SetupCharacterJoi).min(1).required(),
  audio: SetupAudioJoi.required(),
  alwaysShowDialogue: Joi.boolean()
});

const DialogueJoi = Joi.object().keys({
  text: Joi.string().required(),
  align: Joi.string()
});

const CommandJoi = Joi.object().keys({
  background: Joi.string().valid(...availableBackgrounds),
  character: Joi.string()
    .valid(...availableCharacters)
    .required(),
  position: PositionJoi,
  opacity: Joi.number(),
  startTime: Joi.number().required(),
  finishTime: Joi.number(),
  dialogue: DialogueJoi
});

const schema = Joi.object().keys({
  setup: SetupJoi.required(),
  commands: Joi.array().items(CommandJoi)
});

function validateSceneSchema(sceneJson) {
  return schema.validate(sceneJson);
}

module.exports = validateSceneSchema;
