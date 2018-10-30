### Version 0.5.2 (2018-05-10) ###

- Improved: Updated the version range of `atob` to disallow depending on `2.0.3`
  which as a [security
  vulnerability](https://snyk.io/test/npm/atob/2.0.3?severity=high&severity=medium&severity=low).

### Version 0.5.1 (2017-10-21) ###

- Fixed: URLs are now decoded before being passed to `read` in Node.js. This
  allows reading files with spaces, for example.
- Fixed: Missing or empty `sources` fields (such as `sources: []`) in source
  maps are now handled. Previously, such source maps would cause crashes or
  callbacks never bing called. Now, an empty result is produced:

  ```js
  sourcesResolved: [],
  sourcesContent: []
  ```

### Version 0.5.0 (2016-02-28) ###

- Improved: Errors now have a `sourceMapData` property that contain as much as
  possible of the intended result of the function up until the error occurred.
- Changed: `resolveSources` and `resolve`, as well as their `*Sync`
  alternatives, no longer fail when one single source fails to be fetched.
  Instead, the `sourcesContent` array in the result object will contain error
  objects for all failed sources, and strings otherwise. (Backwards-incompatible
  change.)

### Version 0.4.0 (2015-08-29) ###

- Removed: The `ignoreSourceRoot` option of `resolveSources`. It has been
  replaced with `sourceRoot: false`. (Backwards-incompatible change.)
- Added: The `sourceRoot` option of `resolveSources`. It not only allows to
  ignore the source root, it also lets you replace it.
- Added: The `parseMapToJSON` method.
- Added: The `resolve` method now accepts `null, mapUrl, ...` as arguments, in
  addition to the existing signature, which will read `mapUrl` instead of
  looking for a sourceMappingURL in the code.

### Version 0.3.1 (2014-08-16) ###

- Improved: Updated the source-map-url dependency to 0.3.0.


### Version 0.3.0 (2014-07-02) ###

- Removed: Argument checking. It’s not worth it. (Possibly
  backwards-incompatible change.)
- Added: The `sourceRoot` property of source maps may now be ignored, which can
  be useful when resolving sources outside of the browser.
- Added: It is now possible to resolve only the URLs of sources, without
  reading them.


### Version 0.2.0 (2014-06-22) ###

- Changed: The result of `resolveSources` is now an object, not an array. The
  old result array is available in the `sourcesContent` property.
  (Backwards-incompatible change.)
- Changed: `sources` has been renamed to `sourcesContent` in the result object
  of `resolve`. (Backwards-incompatible change.)
- Added: `resolveSources` now also returns all sources fully resolved, in the
  `sourcesResolved` property.
- Added: The result object of `resolve` now contains the `sourcesResolved`
  property from `resolveSources`.


### Version 0.1.4 (2014-06-16) ###

- Fixed: `sourcesContent` was mis-typed as `sourceContents`, which meant that
  the `sourcesContent` property of source maps never was used when resolving
  sources.


### Version 0.1.3 (2014-05-06) ###

- Only documentation and meta-data changes.


### Version 0.1.2 (2014-03-23) ###

- Improved: Source maps starting with `)]}'` are now parsed correctly. The spec
  allows source maps to start with that character sequence to prevent XSSI
  attacks.


### Version 0.1.1 (2014-03-06) ###

- Improved: Make sourceRoot resolving more sensible.

  A source root such as `/scripts/subdir` is now treated as `/scripts/subdir/`
  — that is, as a directory called “subdir”, not a file called “subdir”.
  Pointing to a file as source root does not makes sense.



### Version 0.1.0 (2014-03-03) ###

- Initial release.
