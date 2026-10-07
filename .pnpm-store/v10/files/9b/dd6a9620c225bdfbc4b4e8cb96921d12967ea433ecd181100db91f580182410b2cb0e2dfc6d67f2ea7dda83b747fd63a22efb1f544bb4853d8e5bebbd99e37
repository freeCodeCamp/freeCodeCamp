// @flow
import type {
  FilePath,
  Meta,
  DependencySpecifier,
  SourceLocation,
  Symbol,
  BundleBehavior as IBundleBehavior,
  SemverRange,
} from '@parcel/types';
import type {Dependency, Environment, Target} from './types';
import {hashString} from '@parcel/hash';
import {SpecifierType, Priority, BundleBehavior} from './types';

import {toInternalSourceLocation} from './utils';
import {toProjectPath} from './projectPath';

type DependencyOpts = {|
  id?: string,
  sourcePath?: FilePath,
  sourceAssetId?: string,
  specifier: DependencySpecifier,
  specifierType: $Keys<typeof SpecifierType>,
  priority?: $Keys<typeof Priority>,
  needsStableName?: boolean,
  bundleBehavior?: ?IBundleBehavior,
  isEntry?: boolean,
  isOptional?: boolean,
  loc?: SourceLocation,
  env: Environment,
  meta?: Meta,
  resolveFrom?: FilePath,
  range?: SemverRange,
  target?: Target,
  symbols?: Map<
    Symbol,
    {|local: Symbol, loc: ?SourceLocation, isWeak: boolean, meta?: ?Meta|},
  >,
  pipeline?: ?string,
|};

export function createDependency(
  projectRoot: FilePath,
  opts: DependencyOpts,
): Dependency {
  let id =
    opts.id ||
    hashString(
      (opts.sourceAssetId ?? '') +
        opts.specifier +
        opts.env.id +
        (opts.target ? JSON.stringify(opts.target) : '') +
        (opts.pipeline ?? '') +
        opts.specifierType +
        (opts.bundleBehavior ?? '') +
        (opts.priority ?? 'sync'),
    );

  return {
    ...opts,
    resolveFrom: toProjectPath(projectRoot, opts.resolveFrom),
    sourcePath: toProjectPath(projectRoot, opts.sourcePath),
    id,
    loc: toInternalSourceLocation(projectRoot, opts.loc),
    specifierType: SpecifierType[opts.specifierType],
    priority: Priority[opts.priority ?? 'sync'],
    needsStableName: opts.needsStableName ?? false,
    bundleBehavior: opts.bundleBehavior
      ? BundleBehavior[opts.bundleBehavior]
      : null,
    isEntry: opts.isEntry ?? false,
    isOptional: opts.isOptional ?? false,
    meta: opts.meta || {},
    range: opts.range,
    symbols:
      opts.symbols &&
      new Map(
        [...opts.symbols].map(([k, v]) => [
          k,
          {
            local: v.local,
            meta: v.meta,
            isWeak: v.isWeak,
            loc: toInternalSourceLocation(projectRoot, v.loc),
          },
        ]),
      ),
  };
}

export function mergeDependencies(a: Dependency, b: Dependency): void {
  let {meta, symbols, needsStableName, isEntry, isOptional, ...other} = b;
  Object.assign(a, other);
  Object.assign(a.meta, meta);
  if (a.symbols && symbols) {
    for (let [k, v] of symbols) {
      a.symbols.set(k, v);
    }
  }
  if (needsStableName) a.needsStableName = true;
  if (isEntry) a.isEntry = true;
  if (!isOptional) a.isOptional = false;
}
