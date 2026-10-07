import path from "path";
import crypto from "crypto";
import Url from "url";

/**
 * getParsedPath
 * --
 * Parses remote url to a path object
 *
 */
function getParsedPath(url) {
  return path.parse(Url.parse(url).pathname || ``);
}

/**
 * getRemoteFileExtension
 * --
 * Parses remote url to retrieve remote file extension
 *
 */
export function getRemoteFileExtension(url) {
  return getParsedPath(url).ext;
}

/**
 * getRemoteFileName
 * --
 * Parses remote url to retrieve remote file name
 *
 */
export function getRemoteFileName(url) {
  return decodeURIComponent(getParsedPath(url).name);
}
export function createFileHash(input, length = 8) {
  return crypto.createHash(`sha1`).update(input).digest(`hex`).substring(0, length);
}
const filenamePurgeRegex = /:|\/|\*|\?|"|<|>|\||\\/g;

/**
 * createFilePath
 * --
 * Gets full file path while replacing forbidden characters with a `-`
 */
export function createFilePath(directory, filename, ext) {
  directory = decodeURIComponent(directory);
  filename = decodeURIComponent(filename);
  const purgedFileName = filename.replace(filenamePurgeRegex, `-`);
  const shouldAddHash = purgedFileName !== filename;
  if (shouldAddHash) {
    return path.join(directory, `${purgedFileName}-${createFileHash(filename)}${ext}`);
  } else {
    return path.join(directory, `${filename}${ext}`);
  }
}