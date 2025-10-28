import { describe, it, expect } from 'vitest';
import envData from '../../config/env.json';
import { getVersion, getVersionObject } from './version';

describe('version utility', () => {
  it('should return version string', () => {
    const version = getVersion();
    expect(typeof version).toBe('string');
    expect(version).toBe(envData.deploymentVersion);
  });

  it('should return version object with correct shape', () => {
    const result = getVersionObject();
    expect(result).toHaveProperty('version');
    expect(typeof result.version).toBe('string');
    expect(result.version).toBe(envData.deploymentVersion);
  });

  it('should return consistent version between getVersion() and getVersionObject()', () => {
    const versionString = getVersion();
    const versionObject = getVersionObject();
    expect(versionObject.version).toBe(versionString);
  });

  it('should match format from env.json', () => {
    const version = getVersion();
    // Version should either be a valid string or the default "unknown"
    expect(version).toBeTruthy();
    expect(version.length).toBeGreaterThan(0);
  });

  it('should return version object in API-compatible format', () => {
    const result = getVersionObject();
    // Should match the API's /status/version response format
    expect(Object.keys(result)).toEqual(['version']);
    expect(typeof result.version).toBe('string');
  });
});
