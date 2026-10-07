const WorkerFarm = require('../../../src/WorkerFarm').default;
const Logger = require('@parcel/logger').default;

function run() {
  if (WorkerFarm.isWorker()) {
    // Only test this behavior in workers. Logging in the main process will
    // always work.
    Logger.info({
      origin: 'logging-worker',
      message: 'omg it works'
    });
    Logger.error({
      origin: 'logging-worker',
      message: 'errors objects dont work yet'
    });
  }
}

exports.run = run;
