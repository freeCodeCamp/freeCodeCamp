const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

const filePath = path.resolve('..', '.env');
const env = dotenv.parse(fs.readFileSync(filePath));

const ports = env.API_PORTS.split(',').map(s => s.trim());

module.exports = {
  apps: ports.map(port => ({
    script: `./lib/production-start.js`,
    env: { ...env, API_PORT: port, PORT: port },
    max_memory_restart: '600M',
    name: 'org-' + port
  }))
};
