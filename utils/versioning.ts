/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Util functions for handling client/api versions
 */

/**
 * **Premise**
 *
 * On every request, client sends server current version. POST /<path> "Version: '1.0.0'"
 * - If client version < server version:
 *   - Server tells client to refresh, and mentions if request was valid (if not, client needs to re-request with new format?)
 *   - Client refreshes
 * - If client version == server version, request continues
 *
 * Server patches do not require client to refresh. Minor (^) changes require client refreshes
 *
 * **Future Feature**
 *
 * Client also has SemVer.
 * Client patch can be >=< server patch. Client minor must be >= server minor. Client major must == server major.
 */

/**
 * Returns the major, minor, and patch components of a SemVer string
 * @param version SemVer string
 * @returns [major, minor, patch]
 */
export function semVer(version: string): [number, number, number] {
  // @ts-ignore Go home TS, you're drunk
  const mat = version.match(/(\d+)\.?(\d+)?\.?(\d+)?/);
  if (!mat) {
    return [0, 0, 0];
  }
  // @ts-ignore Go home TS, you're drunk
  const major = Number(mat[1]);
  // @ts-ignore Go home TS, you're drunk
  const minor = Number(mat?.[2]) || 0;
  // @ts-ignore Go home TS, you're drunk
  const patch = Number(mat?.[3]) || 0;
  return [major, minor, patch];
}
