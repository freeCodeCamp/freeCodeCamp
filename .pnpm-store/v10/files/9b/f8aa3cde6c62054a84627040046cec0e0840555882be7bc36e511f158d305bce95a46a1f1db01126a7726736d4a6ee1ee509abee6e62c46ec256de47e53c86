import { SDK_VERSION } from './version.js';

function applySdkMetadata(options, name, names = [name], source = "npm") {
  const sdk = (options._metadata = options._metadata || {}).sdk = options._metadata.sdk || {};
  if (!sdk.name) {
    sdk.name = `sentry.javascript.${name}`;
    sdk.packages = names.map((name2) => ({
      name: `${source}:@sentry/${name2}`,
      version: SDK_VERSION
    }));
    sdk.version = SDK_VERSION;
  }
}

export { applySdkMetadata };
//# sourceMappingURL=sdkMetadata.js.map
