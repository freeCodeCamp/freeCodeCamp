"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSSOTokenFilepath = void 0;
const crypto_1 = require("crypto");
const path_1 = require("path");
const getHomeDir_1 = require("./getHomeDir");
const getSSOTokenFilepath = (id) => {
    const hasher = (0, crypto_1.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
};
exports.getSSOTokenFilepath = getSSOTokenFilepath;
