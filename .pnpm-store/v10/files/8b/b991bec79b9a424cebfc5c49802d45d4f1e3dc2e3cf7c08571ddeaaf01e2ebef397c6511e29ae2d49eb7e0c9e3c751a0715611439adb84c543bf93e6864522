"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectBackend = detectBackend;
exports.getWorkerBackend = getWorkerBackend;

function detectBackend() {
  switch (process.env.PARCEL_WORKER_BACKEND) {
    case 'threads':
    case 'process':
      return process.env.PARCEL_WORKER_BACKEND;
  }

  try {
    require('worker_threads');

    return 'threads';
  } catch (err) {
    return 'process';
  }
}

function getWorkerBackend(backend) {
  switch (backend) {
    case 'threads':
      return require('./threads/ThreadsWorker').default;

    case 'process':
      return require('./process/ProcessWorker').default;

    default:
      throw new Error(`Invalid backend: ${backend}`);
  }
}