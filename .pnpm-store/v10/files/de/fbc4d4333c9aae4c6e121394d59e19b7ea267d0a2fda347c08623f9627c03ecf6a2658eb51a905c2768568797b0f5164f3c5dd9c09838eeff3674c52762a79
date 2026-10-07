# @puppeteer/browsers

Manage and launch browsers/drivers from a CLI or programmatically.

## System requirements

- A compatible Node version (see `engines` in `package.json`).
- For Firefox downloads:
  - Linux builds: `xz` and `bzip2` utilities are required to unpack `.tar.gz` and `.tar.bz2` archives.
  - MacOS builds: `hdiutil` is required to unpack `.dmg` archives.
- For Chrome downloads:
  - On Linux/MacOS: `unzip`.
  - On Windows: `tar.exe`.

## CLI

Use `npx` to run the CLI:

```bash
# This will install and run the @puppeteer/browsers package.
# If it is already installed in the current directory, the installed
# version will be used.
npx @puppeteer/browsers --help
```

Built-in per-command `help` will provide all documentation you need to use the CLI.

```bash
npx @puppeteer/browsers --help # help for all commands
npx @puppeteer/browsers install --help # help for the install command
npx @puppeteer/browsers launch --help # help for the launch command
npx @puppeteer/browsers clear --help # help for the clear command
npx @puppeteer/browsers list --help # help for the list command
```

You can specify the version of the `@puppeteer/browsers` when using
`npx`:

```bash
# Always install and use the latest version from the registry.
npx @puppeteer/browsers@latest --help
# Always use a specifc version.
npx @puppeteer/browsers@2.4.1 --help
# Always install the latest version and automatically confirm the installation.
npx --yes @puppeteer/browsers@latest --help
```

To clear all installed browsers, use the `clear` command:

```bash
npx @puppeteer/browsers clear
```

To list all installed browsers, use the `list` command:

```bash
npx @puppeteer/browsers list
```

Some example to give an idea of what the CLI looks like (use the `--help` command for more examples):

```sh
# Download the latest available Chrome for Testing binary corresponding to the Stable channel.
npx @puppeteer/browsers install chrome@stable

# Download a specific Chrome for Testing version.
npx @puppeteer/browsers install chrome@116.0.5793.0

# Download the latest Chrome for Testing version for the given milestone.
npx @puppeteer/browsers install chrome@117

# Download the latest available ChromeDriver version corresponding to the Canary channel.
npx @puppeteer/browsers install chromedriver@canary

# Download a specific ChromeDriver version.
npx @puppeteer/browsers install chromedriver@116.0.5793.0

# On Ubuntu/Debian and only for Chrome, install the browser and required system dependencies.
# If the browser version has already been installed, the command
# will still attempt to install system dependencies.
# Requires root privileges.
npx puppeteer browsers install chrome --install-deps
```

## Known limitations

1. Launching the system browsers is only possible for Chrome/Chromium.

## Proxies

The library and CLI respect `HTTP_PROXY`, `HTTPS_PROXY` and `NO_PROXY` environment variables. For them to work, you must have the `proxy-agent` package installed:

```bash
npm install proxy-agent
```

## Custom Providers

You can implement custom browser providers to download from alternative sources like corporate mirrors, private repositories, or specialized browser builds.

```typescript
import {
  BrowserProvider,
  DownloadOptions,
  Browser,
  BrowserPlatform,
} from '@puppeteer/browsers';

class SimpleMirrorProvider implements BrowserProvider {
  constructor(private mirrorUrl: string) {}

  supports(options: DownloadOptions): boolean {
    return options.browser === Browser.CHROME;
  }

  getDownloadUrl(options: DownloadOptions): URL | null {
    const {buildId, platform} = options;
    const filenameMap = {
      [BrowserPlatform.LINUX]: 'chrome-linux64.zip',
      [BrowserPlatform.MAC]: 'chrome-mac-x64.zip',
      [BrowserPlatform.MAC_ARM]: 'chrome-mac-arm64.zip',
      [BrowserPlatform.WIN32]: 'chrome-win32.zip',
      [BrowserPlatform.WIN64]: 'chrome-win64.zip',
    };
    const filename = filenameMap[platform];
    if (!filename) return null;
    return new URL(`${this.mirrorUrl}/chrome/${buildId}/${filename}`);
  }

  getExecutablePath(options: DownloadOptions): string {
    const {platform} = options;
    if (
      platform === BrowserPlatform.MAC ||
      platform === BrowserPlatform.MAC_ARM
    ) {
      return 'chrome-mac/Chromium.app/Contents/MacOS/Chromium';
    } else if (platform === BrowserPlatform.LINUX) {
      return 'chrome-linux64/chrome';
    } else if (platform.includes('win')) {
      return 'chrome-win64/chrome.exe';
    }
    throw new Error(`Unsupported platform: ${platform}`);
  }
}
```

Use with the `install` API:

```typescript
import {install} from '@puppeteer/browsers';

const customProvider = new SimpleMirrorProvider('https://internal.company.com');

await install({
  browser: Browser.CHROME,
  buildId: '120.0.6099.109',
  platform: BrowserPlatform.LINUX,
  cacheDir: '/tmp/puppeteer-cache',
  providers: [customProvider],
});
```

Multiple providers can be chained - they're tried in order until one succeeds, with a default provider such as Chrome for Testing, as an automatic fallback.

:::caution
Custom providers are NOT officially supported by Puppeteer. You accept full responsibility for binary compatibility, testing, and maintenance.
:::

## API

The programmatic API allows installing and launching browsers from your code. See the `test` folder for examples on how to use the `install`, `canInstall`, `launch`, `computeExecutablePath`, `computeSystemExecutablePath`, and other methods.
