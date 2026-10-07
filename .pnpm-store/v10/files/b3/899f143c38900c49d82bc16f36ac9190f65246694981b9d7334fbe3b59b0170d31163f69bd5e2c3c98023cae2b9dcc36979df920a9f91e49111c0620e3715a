// @flow

import open from 'open';
import {execSync} from 'child_process';
import logger from '@parcel/logger';

// Chrome app name is platform dependent. we should not hard code it.
// https://github.com/react-native-community/cli/blob/e2be8a905285d9b37512fc78c9755b9635ecf805/packages/cli/src/commands/server/launchDebugger.ts#L28
function getChromeAppName(): string {
  switch (process.platform) {
    case 'darwin':
      return 'google chrome';
    case 'win32':
      return 'chrome';
    case 'linux':
      if (commandExistsUnixSync('google-chrome')) {
        return 'google-chrome';
      }
      if (commandExistsUnixSync('chromium-browser')) {
        return 'chromium-browser';
      }
      return 'chromium';

    default:
      return 'google-chrome';
  }
}

function commandExistsUnixSync(commandName: string) {
  try {
    const stdout = execSync(
      `command -v ${commandName} 2>/dev/null` +
        ` && { echo >&1 '${commandName} found'; exit 0; }`,
    );
    return !!stdout;
  } catch (error) {
    return false;
  }
}

function getAppName(appName: string): string {
  if (['google', 'chrome'].includes(appName)) {
    return getChromeAppName();
  } else if (['brave', 'Brave'].includes(appName)) {
    return 'Brave Browser';
  } else return appName;
}

export default async function openInBrowser(url: string, browser: string) {
  try {
    const options =
      typeof browser === 'string' && browser.length > 0
        ? {app: [getAppName(browser)]}
        : undefined;

    await open(url, options);
  } catch (err) {
    logger.error(
      `Unexpected error while opening in browser: ${browser}`,
      '@parcel/utils',
    );
    logger.error(err, '@parcel/utils');
  }
}
