const Joi = require('joi');
const path = require('path');
// require and configure dotenv, will load vars in .env in PROCESS.ENV
const envPath = path.resolve(__dirname, '../probot/.env');
require('dotenv').config({ path: envPath });

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
  REPOSITORY_OWNER: Joi.string().required(),
  REPOSITORY: Joi.string().required(),
  PRODUCTION_RUN: Joi.boolean()
    .default(false),
  WEBHOOK_PROXY_URL: Joi.string().required(),
  APP_ID: Joi.number().required(),
  WEBHOOK_SECRET: Joi.string().required()
})
  .unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  },
  github: {
    id: envVars.GITHUB_USERNAME,
    secret: envVars.GITHUB_ACCESS_TOKEN,
    owner: envVars.REPOSITORY_OWNER,
    repo: envVars.REPOSITORY,
    probot: {
      webhookUrl: envVars.WEBHOOK_PROXY_URL,
      webhookSecret: envVars.WEBHOOK_SECRET,
      appID: envVars.APP_ID
    }
  },
  oneoff: {
    productionRun: envVars.PRODUCTION_RUN
  }
};

module.exports = config;
