const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

const filePath = path.resolve('..', '.env');
const env = dotenv.parse(fs.readFileSync(filePath));

module.exports = {
  apps: [
    {
      script: `./lib/production-start.js`,
      env,
      max_memory_restart: '600M',
      instances: 'max',
      exec_mode: 'cluster',
      name: 'org'
    }
  ]
};
