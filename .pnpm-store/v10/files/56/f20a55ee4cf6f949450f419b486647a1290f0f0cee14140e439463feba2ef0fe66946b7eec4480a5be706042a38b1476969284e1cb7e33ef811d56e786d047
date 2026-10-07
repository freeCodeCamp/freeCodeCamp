function run(workerApi, ref) {
  let sharedReference = workerApi.getSharedReference(ref);
  return sharedReference || 'Shared reference does not exist';
}

exports.run = run;
