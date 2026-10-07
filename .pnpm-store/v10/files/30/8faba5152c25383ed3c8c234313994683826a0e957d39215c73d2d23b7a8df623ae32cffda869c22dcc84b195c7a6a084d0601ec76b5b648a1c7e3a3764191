"use strict";

const path = require('path');

const fs = require('fs');

const http = require('http');

const WebSocket = require('ws');

const sirv = require('sirv');

const {
  bold
} = require('picocolors');

const Logger = require('./Logger');

const analyzer = require('./analyzer');

const {
  open
} = require('./utils');

const {
  renderViewer
} = require('./template');

const projectRoot = path.resolve(__dirname, '..');

function resolveTitle(reportTitle) {
  if (typeof reportTitle === 'function') {
    return reportTitle();
  } else {
    return reportTitle;
  }
}

module.exports = {
  startServer,
  generateReport,
  generateJSONReport,
  getEntrypoints,
  // deprecated
  start: startServer
};

async function startServer(bundleStats, opts) {
  const {
    port = 8888,
    host = '127.0.0.1',
    openBrowser = true,
    bundleDir = null,
    logger = new Logger(),
    defaultSizes = 'parsed',
    excludeAssets = null,
    reportTitle,
    analyzerUrl
  } = opts || {};
  const analyzerOpts = {
    logger,
    excludeAssets
  };
  let chartData = getChartData(analyzerOpts, bundleStats, bundleDir);
  const entrypoints = getEntrypoints(bundleStats);
  if (!chartData) return;
  const sirvMiddleware = sirv(`${projectRoot}/public`, {
    // disables caching and traverse the file system on every request
    dev: true
  });
  const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      const html = renderViewer({
        mode: 'server',
        title: resolveTitle(reportTitle),
        chartData,
        entrypoints,
        defaultSizes,
        enableWebSocket: true
      });
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(html);
    } else {
      sirvMiddleware(req, res);
    }
  });
  await new Promise(resolve => {
    server.listen(port, host, () => {
      resolve();
      const url = analyzerUrl({
        listenPort: port,
        listenHost: host,
        boundAddress: server.address()
      });
      logger.info(`${bold('Webpack Bundle Analyzer')} is started at ${bold(url)}\n` + `Use ${bold('Ctrl+C')} to close it`);

      if (openBrowser) {
        open(url, logger);
      }
    });
  });
  const wss = new WebSocket.Server({
    server
  });
  wss.on('connection', ws => {
    ws.on('error', err => {
      // Ignore network errors like `ECONNRESET`, `EPIPE`, etc.
      if (err.errno) return;
      logger.info(err.message);
    });
  });
  return {
    ws: wss,
    http: server,
    updateChartData
  };

  function updateChartData(bundleStats) {
    const newChartData = getChartData(analyzerOpts, bundleStats, bundleDir);
    if (!newChartData) return;
    chartData = newChartData;
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          event: 'chartDataUpdated',
          data: newChartData
        }));
      }
    });
  }
}

async function generateReport(bundleStats, opts) {
  const {
    openBrowser = true,
    reportFilename,
    reportTitle,
    bundleDir = null,
    logger = new Logger(),
    defaultSizes = 'parsed',
    excludeAssets = null
  } = opts || {};
  const chartData = getChartData({
    logger,
    excludeAssets
  }, bundleStats, bundleDir);
  const entrypoints = getEntrypoints(bundleStats);
  if (!chartData) return;
  const reportHtml = renderViewer({
    mode: 'static',
    title: resolveTitle(reportTitle),
    chartData,
    entrypoints,
    defaultSizes,
    enableWebSocket: false
  });
  const reportFilepath = path.resolve(bundleDir || process.cwd(), reportFilename);
  fs.mkdirSync(path.dirname(reportFilepath), {
    recursive: true
  });
  fs.writeFileSync(reportFilepath, reportHtml);
  logger.info(`${bold('Webpack Bundle Analyzer')} saved report to ${bold(reportFilepath)}`);

  if (openBrowser) {
    open(`file://${reportFilepath}`, logger);
  }
}

async function generateJSONReport(bundleStats, opts) {
  const {
    reportFilename,
    bundleDir = null,
    logger = new Logger(),
    excludeAssets = null
  } = opts || {};
  const chartData = getChartData({
    logger,
    excludeAssets
  }, bundleStats, bundleDir);
  if (!chartData) return;
  await fs.promises.mkdir(path.dirname(reportFilename), {
    recursive: true
  });
  await fs.promises.writeFile(reportFilename, JSON.stringify(chartData));
  logger.info(`${bold('Webpack Bundle Analyzer')} saved JSON report to ${bold(reportFilename)}`);
}

function getChartData(analyzerOpts, ...args) {
  let chartData;
  const {
    logger
  } = analyzerOpts;

  try {
    chartData = analyzer.getViewerData(...args, analyzerOpts);
  } catch (err) {
    logger.error(`Could't analyze webpack bundle:\n${err}`);
    logger.debug(err.stack);
    chartData = null;
  } // chartData can either be an array (bundleInfo[]) or null. It can't be an plain object anyway


  if ( // analyzer.getViewerData() doesn't failed in the previous step
  chartData && !Array.isArray(chartData)) {
    logger.error("Could't find any javascript bundles in provided stats file");
    chartData = null;
  }

  return chartData;
}

function getEntrypoints(bundleStats) {
  if (bundleStats === null || bundleStats === undefined || !bundleStats.entrypoints) {
    return [];
  }

  return Object.values(bundleStats.entrypoints).map(entrypoint => entrypoint.name);
}