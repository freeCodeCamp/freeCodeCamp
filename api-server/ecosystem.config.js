const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

const filePath = path.resolve(__dirname, '..', '.env');
const env = dotenv.parse(fs.readFileSync(filePath));
// without this, loopback cannot find strong-error-handler. Node can, so we know
// there's no _real_ issue, but loopback is not able to find it.
const loopbackModuleResolutionHack = path.resolve(
  __dirname,
  '../node_modules/.pnpm/node_modules'
);

module.exports = {
  apps: [
    {
      script: `./lib/production-start.js`,
      cwd: __dirname,
      env: { ...env, NODE_PATH: loopbackModuleResolutionHack },
      max_memory_restart: '600M',
      instances: 'max',
      exec_mode: 'cluster',
      name: env.DEPLOYMENT_ENV === 'staging' ? 'dev' : 'org'
    }
  ]
};
