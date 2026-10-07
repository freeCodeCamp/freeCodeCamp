// Stores whether the warning was already emitted.
let warningEmitted = false;

/**
 * @internal
 *
 * Emits warning if the provided Node.js version string is
 * pending deprecation by AWS SDK JSv3.
 *
 * @param version - The Node.js version string.
 */
export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
    warningEmitted = true;
    process.emitWarning(
      `NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.

More information can be found at: https://a.co/dzr2AJd`
    );
  }
};
