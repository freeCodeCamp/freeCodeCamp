// @flow strict-local

import type {Bundle, FilePath} from '@parcel/types';

import {Namer} from '@parcel/plugin';
import ThrowableDiagnostic, {md} from '@parcel/diagnostic';
import assert from 'assert';
import path from 'path';
import nullthrows from 'nullthrows';

const COMMON_NAMES = new Set(['index', 'src', 'lib']);
const ALLOWED_EXTENSIONS = {
  js: ['js', 'mjs', 'cjs'],
};

export default (new Namer({
  name({bundle, bundleGraph}) {
    let bundleGroup = bundleGraph.getBundleGroupsContainingBundle(bundle)[0];
    let bundleGroupBundles = bundleGraph.getBundlesInBundleGroup(bundleGroup, {
      includeInline: true,
    });
    let isEntry = bundleGraph.isEntryBundleGroup(bundleGroup);

    if (bundle.needsStableName) {
      let entryBundlesOfType = bundleGroupBundles.filter(
        b => b.needsStableName && b.type === bundle.type,
      );
      assert(
        entryBundlesOfType.length === 1,
        // Otherwise, we'd end up naming two bundles the same thing.
        'Bundle group cannot have more than one entry bundle of the same type',
      );
    }

    let mainBundle = nullthrows(
      bundleGroupBundles.find(b =>
        b.getEntryAssets().some(a => a.id === bundleGroup.entryAssetId),
      ),
    );

    if (
      bundle.id === mainBundle.id &&
      isEntry &&
      bundle.target &&
      bundle.target.distEntry != null
    ) {
      let loc = bundle.target.loc;
      let distEntry = bundle.target.distEntry;
      let distExtension = path.extname(bundle.target.distEntry).slice(1);
      let allowedExtensions = ALLOWED_EXTENSIONS[bundle.type] || [bundle.type];
      if (!allowedExtensions.includes(distExtension) && loc) {
        let fullName = path.relative(
          path.dirname(loc.filePath),
          path.join(bundle.target.distDir, distEntry),
        );
        let err = new ThrowableDiagnostic({
          diagnostic: {
            message: md`Target "${bundle.target.name}" declares an output file path of "${fullName}" which does not match the compiled bundle type "${bundle.type}".`,
            codeFrames: [
              {
                filePath: loc.filePath,
                codeHighlights: [
                  {
                    start: loc.start,
                    end: loc.end,
                    message: md`Did you mean "${
                      fullName.slice(0, -path.extname(fullName).length) +
                      '.' +
                      bundle.type
                    }"?`,
                  },
                ],
              },
            ],
            hints: [
              `Try changing the file extension of "${
                bundle.target.name
              }" in ${path.relative(process.cwd(), loc.filePath)}.`,
            ],
          },
        });
        throw err;
      }

      return bundle.target.distEntry;
    }

    // Base split bundle names on the first bundle in their group.
    // e.g. if `index.js` imports `foo.css`, the css bundle should be called
    //      `index.css`.
    let name = nameFromContent(
      mainBundle,
      isEntry,
      bundleGroup.entryAssetId,
      bundleGraph.getEntryRoot(bundle.target),
    );
    if (!bundle.needsStableName) {
      name += '.' + bundle.hashReference;
    }

    return name + '.' + bundle.type;
  },
}): Namer);

function nameFromContent(
  bundle: Bundle,
  isEntry: boolean,
  entryAssetId: string,
  entryRoot: FilePath,
): string {
  let entryFilePath = nullthrows(
    bundle.getEntryAssets().find(a => a.id === entryAssetId),
  ).filePath;
  let name = basenameWithoutExtension(entryFilePath);

  // If this is an entry bundle, use the original relative path.
  if (bundle.needsStableName) {
    // Match name of target entry if possible, but with a different extension.
    if (isEntry && bundle.target.distEntry != null) {
      return basenameWithoutExtension(bundle.target.distEntry);
    }

    return path
      .join(path.relative(entryRoot, path.dirname(entryFilePath)), name)
      .replace(/\.\.(\/|\\)/g, 'up_$1');
  } else {
    // If this is an index file or common directory name, use the parent
    // directory name instead, which is probably more descriptive.
    while (COMMON_NAMES.has(name)) {
      entryFilePath = path.dirname(entryFilePath);
      name = path.basename(entryFilePath);
      if (name.startsWith('.')) {
        name = name.replace('.', '');
      }
    }

    return name;
  }
}

function basenameWithoutExtension(file) {
  return path.basename(file, path.extname(file));
}
