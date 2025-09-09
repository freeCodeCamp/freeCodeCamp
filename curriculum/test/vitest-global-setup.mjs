import path from 'node:path';

import liveServer from '@compodoc/live-server';
import puppeteer from 'puppeteer';

import { helperVersion } from '../../client/src/templates/Challenges/utils/frame';

const clientPath = path.resolve(__dirname, '../../client');

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

async function startLiveServer() {
  const host = '127.0.0.1';
  const port = 8080;
  liveServer.start({
    host,
    port: String(8080),
    root: path.resolve(__dirname, 'stubs'),
    mount: [
      [
        '/dist',
        path.join(clientPath, `static/js/test-runner/${helperVersion}`)
      ],
      ['/js', path.join(clientPath, 'static/js')]
    ],
    open: false,
    logLevel: 0
  });
  return {
    baseUrl: `http://${host}:${port}`,
    shutdown: () => liveServer.shutdown()
  };
}

let server, browser;

export async function setup() {
  console.log('Setting up test environment');
  server = await startLiveServer();
  browser = await createBrowser();
  process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
}

export async function teardown() {
  console.log('Tearing down test environment');
  await server.shutdown();
  await browser.close();
}
