"use strict";

exports.__esModule = true;
exports.mett = mett;
// This is a simple event emitter based on mitt.js
// It mainly changes the data model to use a Map and Set, rather than a
// regular object and an array.

function mett() {
  const mettEvents = new Map();
  return {
    on(eventName, callback) {
      const set = mettEvents.get(eventName);
      if (set) {
        set.add(callback);
      } else {
        mettEvents.set(eventName, new Set([callback]));
      }
    },
    off(eventName, callback) {
      const set = mettEvents.get(eventName);
      if (set) {
        set.delete(callback);
      }
    },
    emit(eventName, e) {
      const setName = mettEvents.get(eventName);
      if (setName) {
        setName.forEach(function mettEmitEachC(callback) {
          callback(e, eventName);
        });
      }
      const setStar = mettEvents.get(`*`);
      if (setStar) {
        setStar.forEach(function mettEmitEachStar(callback) {
          callback(e, eventName);
        });
      }
    }
  };
}
//# sourceMappingURL=mett.js.map