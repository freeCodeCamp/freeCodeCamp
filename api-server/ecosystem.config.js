const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const filePath = path.resolve(__dirname, '..', '.env');
let env = process.env;

// Load the .env file only if environment variables are not already set
if (!env.DEPLOYMENT_ENV) {
  try {
    const envFileData = fs.readFileSync(filePath);
    env = { ...env, ...dotenv.parse(envFileData) };
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      console.log("Error loading .env file. Skipping as env vars may be set in the shell.");
      console.log(e);
    }
  }
}

// Conditional module resolution hack for Loopback if needed
let loopbackModuleResolutionHack = null;
if (env.LOOPBACK_NEEDS_MODULE_RESOLUTION) {
  loopbackModuleResolutionHack = path.resolve(__dirname, '../node_modules/.pnpm/node_modules');
}

module.exports = {
  apps: [
    {
      script: './lib/production-start.js',
      cwd: __dirname,
      env: {
        ...env,
        ...(loopbackModuleResolutionHack ? { NODE_PATH: loopbackModuleResolutionHack } : {})
      },
      instances: 1, // Let Kubernetes handle scaling
      exec_mode: 'fork', // Use fork mode, as Kubernetes manages clustering
      name: env.DEPLOYMENT_ENV === 'staging' ? 'dev' : 'org',
      kill_timeout: 3000, // Optional timeouts to handle unresponsive processes
      listen_timeout: 8000,
    }
  ]
};
