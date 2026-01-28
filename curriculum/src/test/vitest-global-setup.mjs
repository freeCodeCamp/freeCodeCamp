import path from 'node:path';

import sirv from 'sirv';
import polka from 'polka';
import puppeteer from 'puppeteer';
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { version } from '@freecodecamp/browser-scripts/test-runner';

async function createBrowser() {
  return puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ],
    headless: 'new'
  });
}

let browser, server;

function setupStubs() {
  const browserScriptDist = path.resolve(
    __dirname,
    '../../../tools/client-plugins/browser-scripts/dist'
  );
  const destArtifactsDir = path.resolve(__dirname, 'stubs/js');

  rmSync(destArtifactsDir, { recursive: true, force: true });
  mkdirSync(destArtifactsDir, { recursive: true });
  cpSync(path.resolve(browserScriptDist, 'artifacts'), destArtifactsDir, {
    recursive: true
  });
}

async function startServer() {
  const host = '127.0.0.1';
  const port = 8080;

  const app = polka();

  // Mount static files used by the tests
  app.use(
    '/dist', // the runner is mounted at dist so we don't need to specify the asset path when initializing
    sirv(path.resolve(__dirname, `stubs/js/test-runner/${version}`))
  );
  app.use('/', sirv(path.resolve(__dirname, 'stubs')));
  app.listen(port, host);
  return app.server;
}

export async function setup() {
  setupStubs();
  server = await startServer();
  browser = await createBrowser();
  // Sharing the Websocket endpoint so that setup files can connect. This allows
  // us to do as much work as possible once in the global setup while allowing
  // each test pool to maintain its own connection.
  process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
}

export async function teardown() {
  await browser.close();
  await server.close();
}
