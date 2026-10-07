let warningEmitted = false;
export const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.

More information can be found at: https://a.co/dzr2AJd`);
    }
};
