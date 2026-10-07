// @flow strict-local

import type SourceMap from '@parcel/source-map';
import type {
  Async,
  Blob,
  Bundle,
  BundleGraph,
  Dependency,
  NamedBundle,
} from '@parcel/types';

import {Readable} from 'stream';
import nullthrows from 'nullthrows';
import invariant from 'assert';
import URL from 'url';
import {bufferStream, relativeBundlePath, urlJoin} from './';

type ReplacementMap = Map<
  string /* dependency id */,
  {|from: string, to: string|},
>;

/*
 * Replaces references to dependency ids for URL dependencies with:
 *   - in the case of an unresolvable url dependency, the original specifier.
 *     These are external requests that Parcel did not bundle.
 *   - in the case of a reference to another bundle, the relative url to that
 *     bundle from the current bundle.
 */
export function replaceURLReferences({
  bundle,
  bundleGraph,
  contents,
  map,
  getReplacement = s => s,
  relative = true,
}: {|
  bundle: NamedBundle,
  bundleGraph: BundleGraph<NamedBundle>,
  contents: string,
  relative?: boolean,
  map?: ?SourceMap,
  getReplacement?: string => string,
|}): {|+contents: string, +map: ?SourceMap|} {
  let replacements = new Map();
  let urlDependencies = [];
  bundle.traverse(node => {
    if (node.type === 'dependency' && node.value.specifierType === 'url') {
      urlDependencies.push(node.value);
    }
  });

  for (let dependency of urlDependencies) {
    if (dependency.specifierType !== 'url') {
      continue;
    }

    let placeholder = dependency.meta?.placeholder ?? dependency.id;
    invariant(typeof placeholder === 'string');

    let resolved = bundleGraph.getReferencedBundle(dependency, bundle);
    if (resolved == null) {
      replacements.set(placeholder, {
        from: placeholder,
        to: getReplacement(dependency.specifier),
      });
      continue;
    }

    if (resolved.bundleBehavior === 'inline') {
      // If a bundle is inline, it should be replaced with inline contents,
      // not a URL.
      continue;
    }

    replacements.set(
      placeholder,
      getURLReplacement({
        dependency,
        fromBundle: bundle,
        toBundle: resolved,
        relative,
        getReplacement,
      }),
    );
  }

  return performReplacement(replacements, contents, map);
}

/*
 * Replaces references to dependency ids for inline bundles with the packaged
 * contents of that bundle.
 */
export async function replaceInlineReferences({
  bundle,
  bundleGraph,
  contents,
  map,
  getInlineReplacement,
  getInlineBundleContents,
}: {|
  bundle: Bundle,
  bundleGraph: BundleGraph<NamedBundle>,
  contents: string,
  getInlineReplacement: (
    Dependency,
    ?'string',
    string,
  ) => {|from: string, to: string|},
  getInlineBundleContents: (
    Bundle,
    BundleGraph<NamedBundle>,
  ) => Async<{|contents: Blob|}>,
  map?: ?SourceMap,
|}): Promise<{|+contents: string, +map: ?SourceMap|}> {
  let replacements = new Map();

  let dependencies = [];
  bundle.traverse(node => {
    if (node.type === 'dependency') {
      dependencies.push(node.value);
    }
  });

  for (let dependency of dependencies) {
    let entryBundle = bundleGraph.getReferencedBundle(dependency, bundle);
    if (entryBundle?.bundleBehavior !== 'inline') {
      continue;
    }

    let packagedBundle = await getInlineBundleContents(
      entryBundle,
      bundleGraph,
    );
    let packagedContents = (
      packagedBundle.contents instanceof Readable
        ? await bufferStream(packagedBundle.contents)
        : packagedBundle.contents
    ).toString();

    let inlineType = nullthrows(entryBundle.getMainEntry()).meta.inlineType;
    if (inlineType == null || inlineType === 'string') {
      let placeholder = dependency.meta?.placeholder ?? dependency.id;
      invariant(typeof placeholder === 'string');
      replacements.set(
        placeholder,
        getInlineReplacement(dependency, inlineType, packagedContents),
      );
    }
  }

  return performReplacement(replacements, contents, map);
}

export function getURLReplacement({
  dependency,
  fromBundle,
  toBundle,
  relative,
  getReplacement,
}: {|
  dependency: Dependency,
  fromBundle: NamedBundle,
  toBundle: NamedBundle,
  relative: boolean,
  getReplacement?: string => string,
|}): {|from: string, to: string|} {
  let to;

  let orig = URL.parse(dependency.specifier);

  if (relative) {
    to = URL.format({
      pathname: relativeBundlePath(fromBundle, toBundle, {
        leadingDotSlash: false,
      }),
      hash: orig.hash,
    });

    // If the resulting path includes a colon character and doesn't start with a ./ or ../
    // we need to add one so that the first part before the colon isn't parsed as a URL protocol.
    if (to.includes(':') && !to.startsWith('./') && !to.startsWith('../')) {
      to = './' + to;
    }
  } else {
    to = urlJoin(
      toBundle.target.publicUrl,
      URL.format({
        pathname: nullthrows(toBundle.name),
        hash: orig.hash,
      }),
    );
  }

  let placeholder = dependency.meta?.placeholder ?? dependency.id;
  invariant(typeof placeholder === 'string');

  return {
    from: placeholder,
    to: getReplacement ? getReplacement(to) : to,
  };
}

function performReplacement(
  replacements: ReplacementMap,
  contents: string,
  map?: ?SourceMap,
): {|+contents: string, +map: ?SourceMap|} {
  let finalContents = contents;
  for (let {from, to} of replacements.values()) {
    // Perform replacement
    finalContents = finalContents.split(from).join(to);
  }

  return {
    contents: finalContents,
    // TODO: Update sourcemap with adjusted contents
    map,
  };
}
