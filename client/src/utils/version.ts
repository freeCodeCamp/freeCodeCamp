/**
 * Version information object matching API's /status/version format
 */
export interface VersionInfo {
  version: string;
}

import envData from '../../config/env.json';

/**
 * Get the client deployment version as a string
 *
 * @returns The deployment version or "unknown" if not set
 *
 */
export function getVersion(): string {
  return envData.deploymentVersion;
}

/**
 * Get the client deployment version as an object matching API format
 *
 * @returns Object with version field
 *
 */
export function getVersionObject(): VersionInfo {
  return { version: getVersion() };
}
