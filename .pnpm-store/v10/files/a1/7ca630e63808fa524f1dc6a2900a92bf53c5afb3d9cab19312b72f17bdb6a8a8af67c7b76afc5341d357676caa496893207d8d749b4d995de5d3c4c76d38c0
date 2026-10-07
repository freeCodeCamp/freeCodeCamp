"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.child = void 0;
exports.setChild = setChild;
// This file is imported by both the WorkerFarm and child implementation.
// When a worker is inited, it sets the state in this file.
// This way, WorkerFarm can access the state without directly importing the child code.
let child = null;
exports.child = child;

function setChild(c) {
  exports.child = child = c;
}