import path from "path";
import os from "os";

/**
 * Joins all given segments and converts using a forward slash (/) as a delimiter
 * @param segments A sequence of segments
 */
export function urlResolve(...segments) {
  const joinedPath = path.join(...segments);
  if (os.platform() === `win32`) {
    return joinedPath.replace(/\\/g, `/`);
  }
  return joinedPath;
}