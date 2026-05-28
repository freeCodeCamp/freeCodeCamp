import { rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const installArgs = ['browsers', 'install', 'chrome'];

const runInstall = () =>
  spawnSync('puppeteer', installArgs, {
    encoding: 'utf8',
    shell: process.platform === 'win32'
  });

const writeOutput = ({ stdout, stderr }) => {
  if (stdout) process.stdout.write(stdout);
  if (stderr) process.stderr.write(stderr);
};

let result = runInstall();
writeOutput(result);

if (result.status === 0) process.exit(0);

const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
const corruptFolder = output.match(
  /The browser folder \((?<folder>.+?)\) exists but the executable/
)?.groups?.folder;

if (!corruptFolder) process.exit(result.status ?? 1);

console.warn(`Removing incomplete Puppeteer browser install: ${corruptFolder}`);
rmSync(corruptFolder, { force: true, recursive: true, maxRetries: 3 });

result = runInstall();
writeOutput(result);
process.exit(result.status ?? 1);
