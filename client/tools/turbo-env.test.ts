import { describe, test, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('turbo.json env configuration', () => {
  test('setup task should include all env vars used by read-env.ts', () => {
    const readEnvPath = path.resolve(__dirname, 'read-env.ts');
    const turboJsonPath = path.resolve(__dirname, '../turbo.json');

    const readEnvContent = fs.readFileSync(readEnvPath, 'utf-8');
    const turboJson = JSON.parse(fs.readFileSync(turboJsonPath, 'utf-8')) as {
      tasks?: { setup?: { env?: string[] } };
    };

    // Extract env var names from read-env.ts destructuring pattern
    // Matches patterns like: HOME_LOCATION: homeLocation, or just HOME_LOCATION,
    const envVarPattern = /(\b[A-Z][A-Z0-9_]+)(?::\s*\w+)?[,\s]/g;
    const processEnvSection = readEnvContent.match(
      /const\s*\{[\s\S]*?\}\s*=\s*process\.env/
    );

    if (!processEnvSection) {
      throw new Error(
        'Could not find process.env destructuring in read-env.ts'
      );
    }

    const envVarsInReadEnv: string[] = [];
    let match;
    while ((match = envVarPattern.exec(processEnvSection[0])) !== null) {
      envVarsInReadEnv.push(match[1]);
    }

    // Get env array from turbo.json setup task
    const setupEnv = turboJson?.tasks?.setup?.env || [];

    // Check if FCC_* wildcard is present (which covers FCC_ prefixed vars)
    const hasFccWildcard = setupEnv.includes('FCC_*');

    // Filter out FCC_ prefixed vars if wildcard is present
    const requiredVars = envVarsInReadEnv.filter(
      v => !(hasFccWildcard && v.startsWith('FCC_'))
    );

    const missingVars = requiredVars.filter(v => !setupEnv.includes(v));

    // Provide a detailed error message if vars are missing
    if (missingVars.length > 0) {
      throw new Error(
        `Missing env vars in client/turbo.json setup.env: ${missingVars.join(', ')}\n` +
          `These variables are used in read-env.ts but not passed through by Turborepo.\n` +
          `Add them to client/turbo.json tasks.setup.env array.`
      );
    }

    expect(missingVars).toEqual([]);
  });
});
