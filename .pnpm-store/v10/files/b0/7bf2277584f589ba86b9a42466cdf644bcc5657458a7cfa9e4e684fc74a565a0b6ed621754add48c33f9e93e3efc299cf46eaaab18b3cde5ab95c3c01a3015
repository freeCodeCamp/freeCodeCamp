"use strict";

// See https://github.com/jsdom/jsdom/pull/2743#issuecomment-562991955 for background.
exports.copyToArrayBufferInNewRealm = (nodejsBuffer, newRealm) => {
  const newAB = new newRealm.ArrayBuffer(nodejsBuffer.byteLength);
  const view = new Uint8Array(newAB);
  view.set(nodejsBuffer);
  return newAB;
};
