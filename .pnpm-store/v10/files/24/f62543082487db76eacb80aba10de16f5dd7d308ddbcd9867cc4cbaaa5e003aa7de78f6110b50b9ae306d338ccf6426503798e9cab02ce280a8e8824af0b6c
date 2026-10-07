"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _assert = _interopRequireDefault(require("assert"));
var _emit = require("./emit");
var _util = require("util");
var _util2 = require("./util");
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function Entry() {
  _assert["default"].ok(this instanceof Entry);
}
function FunctionEntry(returnLoc) {
  Entry.call(this);
  (0, _util2.getTypes)().assertLiteral(returnLoc);
  this.returnLoc = returnLoc;
}
(0, _util.inherits)(FunctionEntry, Entry);
exports.FunctionEntry = FunctionEntry;
function LoopEntry(breakLoc, continueLoc, label) {
  Entry.call(this);
  var t = (0, _util2.getTypes)();
  t.assertLiteral(breakLoc);
  t.assertLiteral(continueLoc);
  if (label) {
    t.assertIdentifier(label);
  } else {
    label = null;
  }
  this.breakLoc = breakLoc;
  this.continueLoc = continueLoc;
  this.label = label;
}
(0, _util.inherits)(LoopEntry, Entry);
exports.LoopEntry = LoopEntry;
function SwitchEntry(breakLoc) {
  Entry.call(this);
  (0, _util2.getTypes)().assertLiteral(breakLoc);
  this.breakLoc = breakLoc;
}
(0, _util.inherits)(SwitchEntry, Entry);
exports.SwitchEntry = SwitchEntry;
function TryEntry(firstLoc, catchEntry, finallyEntry) {
  Entry.call(this);
  var t = (0, _util2.getTypes)();
  t.assertLiteral(firstLoc);
  if (catchEntry) {
    _assert["default"].ok(catchEntry instanceof CatchEntry);
  } else {
    catchEntry = null;
  }
  if (finallyEntry) {
    _assert["default"].ok(finallyEntry instanceof FinallyEntry);
  } else {
    finallyEntry = null;
  }

  // Have to have one or the other (or both).
  _assert["default"].ok(catchEntry || finallyEntry);
  this.firstLoc = firstLoc;
  this.catchEntry = catchEntry;
  this.finallyEntry = finallyEntry;
}
(0, _util.inherits)(TryEntry, Entry);
exports.TryEntry = TryEntry;
function CatchEntry(firstLoc, paramId) {
  Entry.call(this);
  var t = (0, _util2.getTypes)();
  t.assertLiteral(firstLoc);
  t.assertIdentifier(paramId);
  this.firstLoc = firstLoc;
  this.paramId = paramId;
}
(0, _util.inherits)(CatchEntry, Entry);
exports.CatchEntry = CatchEntry;
function FinallyEntry(firstLoc, afterLoc) {
  Entry.call(this);
  var t = (0, _util2.getTypes)();
  t.assertLiteral(firstLoc);
  t.assertLiteral(afterLoc);
  this.firstLoc = firstLoc;
  this.afterLoc = afterLoc;
}
(0, _util.inherits)(FinallyEntry, Entry);
exports.FinallyEntry = FinallyEntry;
function LabeledEntry(breakLoc, label) {
  Entry.call(this);
  var t = (0, _util2.getTypes)();
  t.assertLiteral(breakLoc);
  t.assertIdentifier(label);
  this.breakLoc = breakLoc;
  this.label = label;
}
(0, _util.inherits)(LabeledEntry, Entry);
exports.LabeledEntry = LabeledEntry;
function LeapManager(emitter) {
  _assert["default"].ok(this instanceof LeapManager);
  _assert["default"].ok(emitter instanceof _emit.Emitter);
  this.emitter = emitter;
  this.entryStack = [new FunctionEntry(emitter.finalLoc)];
}
var LMp = LeapManager.prototype;
exports.LeapManager = LeapManager;
LMp.withEntry = function (entry, callback) {
  _assert["default"].ok(entry instanceof Entry);
  this.entryStack.push(entry);
  try {
    callback.call(this.emitter);
  } finally {
    var popped = this.entryStack.pop();
    _assert["default"].strictEqual(popped, entry);
  }
};
LMp._findLeapLocation = function (property, label) {
  for (var i = this.entryStack.length - 1; i >= 0; --i) {
    var entry = this.entryStack[i];
    var loc = entry[property];
    if (loc) {
      if (label) {
        if (entry.label && entry.label.name === label.name) {
          return loc;
        }
      } else if (entry instanceof LabeledEntry) {
        // Ignore LabeledEntry entries unless we are actually breaking to
        // a label.
      } else {
        return loc;
      }
    }
  }
  return null;
};
LMp.getBreakLoc = function (label) {
  return this._findLeapLocation("breakLoc", label);
};
LMp.getContinueLoc = function (label) {
  return this._findLeapLocation("continueLoc", label);
};