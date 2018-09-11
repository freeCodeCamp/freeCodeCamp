const chokidar = require('chokidar');
const { createChallengeNodes } = require('./create-Challenge-nodes');

exports.sourceNodes = ({ actions, reporter }, pluginOptions) => {

  if (typeof pluginOptions.source !== 'function') {
    reporter.panic(`
"source" is a required option for fcc-source-challenges. It must be a function
that delivers challenge files to the plugin
      `);
  }
  // TODO: Add live seed updates
  const { createNode } = actions;

  let ready = false;

  const watcher = chokidar.watch(pluginOptions.path, {
    ignored: [
      '**/*.un~',
      '**/.gitignore',
      '**/.npmignore',
      '**/.babelrc',
      '**/yarn.lock',
      '**/node_modules',
      '../**/dist/**'
    ]
  });
  const { source } = pluginOptions;
  const createAndProcessNodes = () =>
    source()
      .filter(nodes => nodes.some(node => node.superBlock !== 'Certificates'))
      .map(nodes => nodes.map(node => createChallengeNodes(node, reporter)))
      .map(nodes => nodes.map(node => createNode(node)))
      .subscribe();

  createAndProcessNodes();
  // For every path that is reported before the 'ready' event, we throw them
  // into a queue and then flush the queue when 'ready' event arrives.
  // After 'ready', we handle the 'add' event without putting it into a queue.
  let pathQueue = [];
  const flushPathQueue = () => {
    let queue = pathQueue.slice();
    pathQueue = [];
    return Promise.all(queue.map(createAndProcessNodes));
  };

  // watcher.on('change', path => {
  //   reporter.info(`changed file at ${path}`);
  //   createAndProcessNodes().catch(err => reporter.error(err));
  // });

  // watcher.on('unlink', path => {
  //   reporter.info(`file deleted at ${path}`);
  //   const node = getNode(createId(path));
  //   // It's possible the file node was never created as sometimes tools will
  //   // write and then immediately delete temporary files to the file system.
  //   if (node) {
  //     deleteNode(node.id, node);
  //   }
  // });

  return new Promise((resolve, reject) => {
    watcher.on('ready', () => {
      if (ready) {
        return;
      }
      ready = true;
      flushPathQueue().then(resolve, reject);
    });
  });
};
