// @ts-check

const getError = () => new Error("Node APIs are not available in browser context.");
const throwForSync = () => {
  throw getError();
};

export const fs = {
  // @ts-ignore
  "access": (path, callback) => callback(getError()),
  "accessSync": throwForSync,
  // @ts-ignore
  "readFile": (path, options, callback) => callback(getError()),
  "readFileSync": throwForSync
};

export const os = {};

export const path = {
  "dirname": throwForSync,
  "resolve": throwForSync
};
