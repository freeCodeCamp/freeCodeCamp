'use strict';

const lockfile = require('./lib/lockfile');
const { toPromise, toSync, toSyncOptions } = require('./lib/adapter');

async function lock(file, options) {
    const release = await toPromise(lockfile.lock)(file, options);

    return toPromise(release);
}

function lockSync(file, options) {
    const release = toSync(lockfile.lock)(file, toSyncOptions(options));

    return toSync(release);
}

function unlock(file, options) {
    return toPromise(lockfile.unlock)(file, options);
}

function unlockSync(file, options) {
    return toSync(lockfile.unlock)(file, toSyncOptions(options));
}

function check(file, options) {
    return toPromise(lockfile.check)(file, options);
}

function checkSync(file, options) {
    return toSync(lockfile.check)(file, toSyncOptions(options));
}

module.exports = lock;
module.exports.lock = lock;
module.exports.unlock = unlock;
module.exports.lockSync = lockSync;
module.exports.unlockSync = unlockSync;
module.exports.check = check;
module.exports.checkSync = checkSync;
