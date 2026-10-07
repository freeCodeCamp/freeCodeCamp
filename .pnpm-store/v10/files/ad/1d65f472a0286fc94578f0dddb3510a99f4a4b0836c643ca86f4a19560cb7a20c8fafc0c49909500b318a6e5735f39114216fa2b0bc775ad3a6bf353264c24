import { createMD5 } from "hash-wasm";
import * as fs from "fs-extra";

/**
 * Create a MD5 hash from a given filePath
 * @param filePath Absolute path to the file
 * @returns MD5 hash in hex format
 */
export const md5File = async filePath => {
  const md5hasher = await createMD5();
  return new Promise((resolve, reject) => {
    md5hasher.init();
    const fileInput = fs.createReadStream(filePath);
    fileInput.on(`error`, err => {
      reject(err);
    });
    fileInput.on(`data`, data => {
      md5hasher.update(data);
    });
    fileInput.on(`end`, () => {
      resolve(md5hasher.digest(`hex`));
    });
  });
};