import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';

import puppeteer from 'puppeteer';

const getPlatform = () => {
  if (process.platform === 'linux' && process.arch === 'x64') {
    return { archive: 'linux64', cache: 'linux' };
  }

  if (process.platform === 'darwin' && process.arch === 'arm64') {
    return { archive: 'mac-arm64', cache: 'mac_arm' };
  }

  if (process.platform === 'darwin' && process.arch === 'x64') {
    return { archive: 'mac-x64', cache: 'mac' };
  }

  if (process.platform === 'win32' && process.arch === 'x64') {
    return { archive: 'win64', cache: 'win64' };
  }

  if (process.platform === 'win32' && process.arch === 'ia32') {
    return { archive: 'win32', cache: 'win32' };
  }

  throw new Error(
    `Unsupported platform for Chrome download: ${process.platform}/${process.arch}`
  );
};

const run = (command, args) => {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    stdio: 'inherit'
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed`);
  }
};

const buildId = puppeteer.browserVersion;
const cacheDir = puppeteer.configuration.cacheDirectory;
const { archive, cache } = getPlatform();

const browserRoot = path.join(cacheDir, 'chrome');
const installDir = path.join(browserRoot, `${cache}-${buildId}`);
const archiveName = `chrome-${archive}.zip`;
const archivePath = path.join(browserRoot, `${buildId}-${archiveName}`);
const executablePath = puppeteer.executablePath();
const downloadUrl = `https://storage.googleapis.com/chrome-for-testing-public/${buildId}/${archive}/${archiveName}`;

if (existsSync(executablePath)) {
  console.log(`chrome@${buildId} ${executablePath}`);
  process.exit(0);
}

rmSync(installDir, { force: true, recursive: true, maxRetries: 3 });
mkdirSync(browserRoot, { recursive: true });

try {
  run('curl', [
    '--fail',
    '--location',
    '--retry',
    '3',
    '--output',
    archivePath,
    downloadUrl
  ]);
  run('unzip', ['-q', archivePath, '-d', installDir]);
} finally {
  rmSync(archivePath, { force: true });
}

if (!existsSync(executablePath)) {
  throw new Error(`Chrome executable was not installed: ${executablePath}`);
}

console.log(`chrome@${buildId} ${executablePath}`);
