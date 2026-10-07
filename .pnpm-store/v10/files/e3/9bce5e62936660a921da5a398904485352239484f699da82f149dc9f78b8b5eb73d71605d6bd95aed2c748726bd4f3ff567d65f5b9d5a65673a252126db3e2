Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const version = require('./version.js');

function applySdkMetadata(options, name, names = [name], source = "npm") {
  const sdk = (options._metadata = options._metadata || {}).sdk = options._metadata.sdk || {};
  if (!sdk.name) {
    sdk.name = `sentry.javascript.${name}`;
    sdk.packages = names.map((name2) => ({
      name: `${source}:@sentry/${name2}`,
      version: version.SDK_VERSION
    }));
    sdk.version = version.SDK_VERSION;
  }
}

exports.applySdkMetadata = applySdkMetadata;
//# sourceMappingURL=sdkMetadata.js.map
