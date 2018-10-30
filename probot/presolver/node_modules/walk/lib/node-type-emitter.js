/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true*/
(function () {
  "use strict";

  // "FIFO" isn't easy to convert to camelCase and back reliably
  var isFnodeTypes = [
      "isFile", "isDirectory",  "isSymbolicLink", "isBlockDevice",  "isCharacterDevice", "isFIFO", "isSocket"
    ],
    fnodeTypes = [
      "file",   "directory",    "symbolicLink",   "blockDevice",    "characterDevice",    "FIFO",   "socket"
    ],
    fnodeTypesPlural = [
      "files",  "directories",  "symbolicLinks",  "blockDevices",   "characterDevices",   "FIFOs",  "sockets"
    ];


  // 
  function createNodeGroups() {
    var nodeGroups = {};
    fnodeTypesPlural.concat("nodes", "errors").forEach(function (fnodeTypePlural) {
      nodeGroups[fnodeTypePlural] = [];
    });
    return nodeGroups;
  }


  // Determine each file node's type
  // 
  function sortFnodesByType(stat, fnodes) {
    var i, isType;

    for (i = 0; i < isFnodeTypes.length; i += 1) {
      isType = isFnodeTypes[i];
      if (stat[isType]()) {
        stat.type = fnodeTypes[i];
        fnodes[fnodeTypesPlural[i]].push(stat);
        return;
      }
    }
  }


  // Get the current number of listeners (which may change)
  // Emit events to each listener
  // Wait for all listeners to `next()` before continueing
  // (in theory this may avoid disk thrashing)
  function emitSingleEvents(emitter, path, stats, next, self) {
    var num = 1 + emitter.listeners(stats.type).length + emitter.listeners("node").length;

    function nextWhenReady() {
      num -= 1;
      if (0 === num) { next.call(self); }
    }

    emitter.emit(stats.type, path, stats, nextWhenReady);
    emitter.emit("node", path, stats, nextWhenReady);
    nextWhenReady();
  }


  // Since the risk for disk thrashing among anything
  // other than files is relatively low, all types are
  // emitted at once, but all must complete before advancing
  function emitPluralEvents(emitter, path, nodes, next, self) {
    var num = 1;

    function nextWhenReady() {
      num -= 1;
      if (0 === num) { next.call(self); }
    }

    fnodeTypesPlural.concat(["nodes", "errors"]).forEach(function (fnodeType) {
      if (0 === nodes[fnodeType].length) { return; }
      num += emitter.listeners(fnodeType).length;
      emitter.emit(fnodeType, path, nodes[fnodeType], nextWhenReady);
    });
    nextWhenReady();
  }

  module.exports = {
    emitNodeType: emitSingleEvents,
    emitNodeTypeGroups: emitPluralEvents,
    isFnodeTypes: isFnodeTypes,
    fnodeTypes: fnodeTypes,
    fnodeTypesPlural: fnodeTypesPlural,
    sortFnodesByType: sortFnodesByType,
    createNodeGroups: createNodeGroups
  };
}());
