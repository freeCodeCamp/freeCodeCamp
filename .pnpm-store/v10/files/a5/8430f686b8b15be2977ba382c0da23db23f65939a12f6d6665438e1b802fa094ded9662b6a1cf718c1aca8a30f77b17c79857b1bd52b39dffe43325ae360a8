// @flow
import type {FilePath, PackageName, Semver, SemverRange} from '@parcel/types';
import type {ParcelOptions} from './types';

import path from 'path';
import semver from 'semver';
import logger from '@parcel/logger';
import nullthrows from 'nullthrows';
import ThrowableDiagnostic, {
  generateJSONCodeHighlights,
  md,
} from '@parcel/diagnostic';
import {
  findAlternativeNodeModules,
  loadConfig,
  resolveConfig,
} from '@parcel/utils';
import {type ProjectPath, toProjectPath} from './projectPath';
import {version as PARCEL_VERSION} from '../package.json';

const NODE_MODULES = `${path.sep}node_modules${path.sep}`;
const CONFIG = Symbol.for('parcel-plugin-config');

export default async function loadPlugin<T>(
  pluginName: PackageName,
  configPath: FilePath,
  keyPath?: string,
  options: ParcelOptions,
): Promise<{|
  plugin: T,
  version: Semver,
  resolveFrom: ProjectPath,
  range: ?SemverRange,
|}> {
  let resolveFrom = configPath;
  let range;
  if (resolveFrom.includes(NODE_MODULES)) {
    let configPkg = await loadConfig(
      options.inputFS,
      resolveFrom,
      ['package.json'],
      options.projectRoot,
    );
    if (
      configPkg != null &&
      configPkg.config.dependencies?.[pluginName] == null
    ) {
      // If not in the config's dependencies, the plugin will be auto installed with
      // the version declared in "parcelDependencies".
      range = configPkg.config.parcelDependencies?.[pluginName];

      if (range == null) {
        let contents = await options.inputFS.readFile(
          configPkg.files[0].filePath,
          'utf8',
        );
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: md`Could not determine version of ${pluginName} in ${path.relative(
              process.cwd(),
              resolveFrom,
            )}. Either include it in "dependencies" or "parcelDependencies".`,
            origin: '@parcel/core',
            codeFrames:
              configPkg.config.dependencies ||
              configPkg.config.parcelDependencies
                ? [
                    {
                      filePath: configPkg.files[0].filePath,
                      language: 'json5',
                      code: contents,
                      codeHighlights: generateJSONCodeHighlights(contents, [
                        {
                          key: configPkg.config.parcelDependencies
                            ? '/parcelDependencies'
                            : '/dependencies',
                          type: 'key',
                        },
                      ]),
                    },
                  ]
                : undefined,
          },
        });
      }

      // Resolve from project root if not in the config's dependencies.
      resolveFrom = path.join(options.projectRoot, 'index');
    }
  }

  let resolved, pkg;
  try {
    ({resolved, pkg} = await options.packageManager.resolve(
      pluginName,
      resolveFrom,
      {
        shouldAutoInstall: options.shouldAutoInstall,
        range,
      },
    ));
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      throw err;
    }

    let configContents = await options.inputFS.readFile(configPath, 'utf8');
    let alternatives = await findAlternativeNodeModules(
      options.inputFS,
      pluginName,
      path.dirname(resolveFrom),
    );
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: md`Cannot find Parcel plugin "${pluginName}"`,
        origin: '@parcel/core',
        codeFrames: keyPath
          ? [
              {
                filePath: configPath,
                language: 'json5',
                code: configContents,
                codeHighlights: generateJSONCodeHighlights(configContents, [
                  {
                    key: keyPath,
                    type: 'value',
                    message: md`Cannot find module "${pluginName}"${
                      alternatives[0]
                        ? `, did you mean "${alternatives[0]}"?`
                        : ''
                    }`,
                  },
                ]),
              },
            ]
          : undefined,
      },
    });
  }

  // Validate the engines.parcel field in the plugin's package.json
  let parcelVersionRange = pkg && pkg.engines && pkg.engines.parcel;
  if (!parcelVersionRange) {
    logger.warn({
      origin: '@parcel/core',
      message: `The plugin "${pluginName}" needs to specify a \`package.json#engines.parcel\` field with the supported Parcel version range.`,
    });
  }

  if (
    parcelVersionRange &&
    !semver.satisfies(PARCEL_VERSION, parcelVersionRange)
  ) {
    let pkgFile = nullthrows(
      await resolveConfig(
        options.inputFS,
        resolved,
        ['package.json'],
        options.projectRoot,
      ),
    );
    let pkgContents = await options.inputFS.readFile(pkgFile, 'utf8');
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: md`The plugin "${pluginName}" is not compatible with the current version of Parcel. Requires "${parcelVersionRange}" but the current version is "${PARCEL_VERSION}".`,
        origin: '@parcel/core',
        codeFrames: [
          {
            filePath: pkgFile,
            language: 'json5',
            code: pkgContents,
            codeHighlights: generateJSONCodeHighlights(pkgContents, [
              {
                key: '/engines/parcel',
              },
            ]),
          },
        ],
      },
    });
  }

  let plugin = await options.packageManager.require(pluginName, resolveFrom, {
    shouldAutoInstall: options.shouldAutoInstall,
  });
  plugin = plugin.default ? plugin.default : plugin;
  if (!plugin) {
    throw new Error(`Plugin ${pluginName} has no exports.`);
  }
  plugin = plugin[CONFIG];
  if (!plugin) {
    throw new Error(
      `Plugin ${pluginName} is not a valid Parcel plugin, should export an instance of a Parcel plugin ex. "export default new Reporter({ ... })".`,
    );
  }
  return {
    plugin,
    version: nullthrows(pkg).version,
    resolveFrom: toProjectPath(options.projectRoot, resolveFrom),
    range,
  };
}
