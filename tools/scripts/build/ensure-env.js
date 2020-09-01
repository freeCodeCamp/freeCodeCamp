const fs = require('fs');
const path = require('path');

const env = require('../../../config/env');

const clientPath = path.resolve(__dirname, '../../../client');
const globalConfigPath = path.resolve(__dirname, '../../../config');

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
