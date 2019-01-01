const Joi = require('joi');
// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();
// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number().default(3001),
  MONGO_HOST: Joi.string()
    .required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017),
  GITHUB_USERNAME: Joi.string().required(),
  GITHUB_ACCESS_TOKEN: Joi.string().required(),
  HOST: Joi.string().required()
})
  .unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  host: envVars.HOST,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  },
  github: {
    id: envVars.GITHUB_USERNAME,
    secret: envVars.GITHUB_ACCESS_TOKEN
  }
};

module.exports = config;
