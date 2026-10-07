// @flow strict-local

import type {ModuleRequest} from './types';
import type {FilePath} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';

import invariant from 'assert';
import ThrowableDiagnostic from '@parcel/diagnostic';
import {resolveConfig} from '@parcel/utils';

export function npmSpecifierFromModuleRequest(
  moduleRequest: ModuleRequest,
): string {
  return moduleRequest.range != null
    ? [moduleRequest.name, moduleRequest.range].join('@')
    : moduleRequest.name;
}

export function moduleRequestsFromDependencyMap(dependencyMap: {|
  [string]: string,
|}): Array<ModuleRequest> {
  return Object.entries(dependencyMap).map(([name, range]) => {
    invariant(typeof range === 'string');
    return {
      name,
      range,
    };
  });
}

export async function getConflictingLocalDependencies(
  fs: FileSystem,
  name: string,
  local: FilePath,
  projectRoot: FilePath,
): Promise<?{|json: string, filePath: FilePath, fields: Array<string>|}> {
  let pkgPath = await resolveConfig(fs, local, ['package.json'], projectRoot);
  if (pkgPath == null) {
    return;
  }

  let pkgStr = await fs.readFile(pkgPath, 'utf8');
  let pkg;
  try {
    pkg = JSON.parse(pkgStr);
  } catch (e) {
    // TODO: codeframe
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: 'Failed to parse package.json',
        origin: '@parcel/package-manager',
      },
    });
  }

  if (typeof pkg !== 'object' || pkg == null) {
    // TODO: codeframe
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: 'Expected package.json contents to be an object.',
        origin: '@parcel/package-manager',
      },
    });
  }

  let fields = [];
  for (let field of ['dependencies', 'devDependencies', 'peerDependencies']) {
    if (
      typeof pkg[field] === 'object' &&
      pkg[field] != null &&
      pkg[field][name] != null
    ) {
      fields.push(field);
    }
  }

  if (fields.length > 0) {
    return {
      filePath: pkgPath,
      json: pkgStr,
      fields,
    };
  }
}
