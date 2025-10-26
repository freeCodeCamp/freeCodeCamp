import path from 'node:path';

import sirv from 'sirv';
import polka from 'polka';
import puppeteer from 'puppeteer';

import { helperVersion } from '../../../client/src/templates/Challenges/utils/frame';

const clientPath = path.resolve(__dirname, '../../../client');

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

async function startServer() {
  const host = '127.0.0.1';
  const port = 8080;

  const app = polka();

  // Mount static files used by the tests
  app.use(
    '/dist',
    sirv(path.join(clientPath, `static/js/test-runner/${helperVersion}`))
  );
  app.use('/js', sirv(path.join(clientPath, 'static/js')));
  app.use('/', sirv(path.resolve(__dirname, 'stubs')));
  app.listen(port, host);
  return app.server;
}

export async function setup() {
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
