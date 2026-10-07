/*
 * Service lock: handles service discovery for Gatsby develop processes
 * The problem:  the develop process starts a proxy server, the actual develop process and a websocket server for communication. The two latter ones have random ports that need to be discovered. We also cannot run multiple of the same site at the same time.
 * The solution: lockfiles! We create a folder in `.config/gatsby/sites/${sitePathHash} and then for each service write a JSON file with its data (e.g. developstatusserver.json) and lock that file (with developstatusserver.json.lock) so nobody can start the same service again.
 *
 * NOTE(@mxstbr): This is NOT EXPORTED from the main index.ts due to this relying on Node.js-specific APIs but core-utils also being used in browser environments. See https://github.com/jprichardson/node-fs-extra/issues/743
 */
import path from "path";
import tmp from "tmp";
import fs from "fs-extra";
import xdgBasedir from "xdg-basedir";
import { createContentDigest } from "./create-content-digest";
import { isCI } from "./ci";
const globalConfigPath = xdgBasedir.config || tmp.fileSync().name;
const getSiteDir = programPath => {
  const hash = createContentDigest(programPath);
  return path.join(globalConfigPath, `gatsby`, `sites`, hash);
};
const DATA_FILE_EXTENSION = `.json`;
const getDataFilePath = (siteDir, serviceName) => path.join(siteDir, `${serviceName}${DATA_FILE_EXTENSION}`);
const lockfileOptions = {
  // Use the minimum stale duration
  stale: 5000
};
// proper-lockfile has a side-effect that we only want to set when needed
function getLockFileInstance() {
  return import(`proper-lockfile`);
}
const memoryServices = {};
export const createServiceLock = async (programPath, serviceName, content) => {
  // NOTE(@mxstbr): In CI, we cannot reliably access the global config dir and do not need cross-process coordination anyway
  // so we fall back to storing the services in memory instead!
  if (isCI()) {
    if (memoryServices[serviceName]) return null;
    memoryServices[serviceName] = content;
    return async () => {
      delete memoryServices[serviceName];
    };
  }
  const siteDir = getSiteDir(programPath);
  await fs.ensureDir(siteDir);
  const serviceDataFile = getDataFilePath(siteDir, serviceName);
  try {
    await fs.writeFile(serviceDataFile, JSON.stringify(content));
    const lockfile = await getLockFileInstance();
    const unlock = await lockfile.lock(serviceDataFile, lockfileOptions);
    return unlock;
  } catch (err) {
    return null;
  }
};
export const getService = async (programPath, serviceName, ignoreLockfile = false) => {
  if (isCI()) return memoryServices[serviceName] || null;
  const siteDir = getSiteDir(programPath);
  const serviceDataFile = getDataFilePath(siteDir, serviceName);
  try {
    const lockfile = await getLockFileInstance();
    if (ignoreLockfile || (await lockfile.check(serviceDataFile, lockfileOptions))) {
      return JSON.parse(await fs.readFile(serviceDataFile, `utf8`).catch(() => `null`));
    }
    return null;
  } catch (err) {
    return null;
  }
};
export const getServices = async programPath => {
  if (isCI()) return memoryServices;
  const siteDir = getSiteDir(programPath);
  const serviceNames = (await fs.readdir(siteDir)).filter(file => file.endsWith(DATA_FILE_EXTENSION)).map(file => file.replace(DATA_FILE_EXTENSION, ``));
  const services = {};
  await Promise.all(serviceNames.map(async service => {
    services[service] = await getService(programPath, service, true);
  }));
  return services;
};