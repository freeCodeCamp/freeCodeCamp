import { spawnSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';

import puppeteer from 'puppeteer';

const PLATFORMS = {
  'linux-x64': ['linux64', 'linux'],
  'darwin-arm64': ['mac-arm64', 'mac_arm'],
  'darwin-x64': ['mac-x64', 'mac'],
  'win32-x64': ['win64', 'win64'],
  'win32-ia32': ['win32', 'win32']
};

const key = `${process.platform}-${process.arch}`;
const [archive, cache] =
  PLATFORMS[key] ??
  (() => {
    throw new Error(`Unsupported: ${key}`);
  })();

const buildId = puppeteer.browserVersion;
const cacheDir = puppeteer.configuration.cacheDirectory;
const execPath = puppeteer.executablePath();

if (existsSync(execPath)) process.exit(0);

const browserRoot = path.join(cacheDir, 'chrome');
const installDir = path.join(browserRoot, `${cache}-${buildId}`);
const archivePath = path.join(browserRoot, `${buildId}-chrome-${archive}.zip`);
const url = `https://storage.googleapis.com/chrome-for-testing-public/${buildId}/${archive}/chrome-${archive}.zip`;

rmSync(installDir, { recursive: true, force: true });

const run = (cmd, args) => {
  const { status, error } = spawnSync(cmd, args, { stdio: 'inherit' });
  if (error) throw error;
  if (status !== 0) throw new Error(`${cmd} exited ${status}`);
};

try {
  run('curl', [
    '--fail',
    '--location',
    '--retry',
    '3',
    '--create-dirs',
    '--output',
    archivePath,
    url
  ]);
  run('unzip', ['-q', archivePath, '-d', installDir]);
} finally {
  rmSync(archivePath, { force: true });
}

if (!existsSync(execPath)) throw new Error(`Chrome not installed: ${execPath}`);
console.log(`chrome@${buildId} ${execPath}`);
