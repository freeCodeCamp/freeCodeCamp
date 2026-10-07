const WorkerFarm = require('../../../src/WorkerFarm').default;

function run(api, a, b) {
  return api.callMaster({
    location: require.resolve('./master-sum.js'),
    args: [a, b]
  });
}

exports.run = run;
