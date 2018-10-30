- 2.9.0 2018-03-26
  - Fix store's this context for isCacheableValue method (#119). -@alexandrusavin

- 2.8.0 2018-02-28
  - Added link to node-cache-manager-fs-hash - @rolandstarke
  - Bugfix for options object in multiCache.set (#115) - @sebelga
  - Bugfix for keysToFetch in getFromHighestProrityCache (#117) - @sebelga

- 2.7.0 2018-02-13
  - allow setting, getting and deleting multiple keys (#114) - @sebelga
  - allow passing in a function to determine TTL based on store - @sebelga

- 2.6.0 2017-12-08
  - fix multicaching when result is not cacheable (#106) - @gswalden

- 2.5.0 2017-10-09
  - Add explicit return in wrapPromise (#109) - @jeff-kilbride

- 2.4.0 2017-01-17
  - Added ability to use a dynamic cache ttl (#65) - @philippeauriach

- 2.3.0 2016-12-22
  - Updating isCacheableValue description in README; README syntax error fix (#70, #71) - @lukechilds
  - Calling back with null as first argument in memory store to keep style consistent (#72) - @defcc

- 2.2.0 2016-10-19
  - Adding multi_caching.reset() (#63) - @disjunction

- 2.1.2 2016-06-08
  - Checking that callback array exists before iterating over it (#57).

- 2.1.1 2016-05-24
  - Fixing version number in package.json.

- 2.1.0 2016-05-24
  - Allow passing in a promise dependency (#55). - @siddharthkchatterjee

- 2.0.1 2016-04-18
  - Fixed triggering callback in wrap after it was queued (#48) - @theorm

- 2.0.0 2016-03-13
  - Removing domain integration (#38), no longer actively supporting node 0.10.x.

- 1.5.0 2016-03-13
  - npm bumps, making sure global.Promise is not defined in node 0.10 memory store test.

- 1.4.1 2016-03-13
  - Fixing backward-compatibility Promise issue with node 0.10.x in memory store.

- 1.4.0 2016-02-03
  - Passing ttl of 0 to lruCache, upgrading to lru-cache 4.0.0

- 1.3.0 2016-01-26
  - Promise support (#39, #24) - @PuKoren

- 1.2.2 2015-10-19
  - Bugfix: Fixing domain error issues when error is thrown inside 'work' function (#28).

- 1.2.1 2015-10-17
  - Bugfix: multi-caching: using underlying store's isCacheableValue function when it exists (#34).

- 1.2.0 2015-10-07
  - using `isCacheableValue` in `getFromHighestPriorityCache` and `getAndPassUp` (#32).

- 1.1.0 2015-07-22
  - Allow stores to override isCacheableValue. - @PuKoren
  - Allow overriding ttl in memory cache's set function. - @zhudan

- 1.0.0 2015-05-23
  - Added JSDOC generation (`make docs`)
  - (Breaking change) By default, cache falsey values like `false`, `0`, and `null`, but not `undefined` (#25).
  - Allow users to pass in callback function `isCacheableValue` to specify what to cache.
  - (Breaking change) Removed deprecated lower-case `multi_caching` export (use `multiCaching` instead).
  - (Breaking change) Removed `multiCaching#get_and_pass_up` (use `getAndPassUp` instead).
  - (Breaking change) Cache store methods must accept an `options` param (which can be ignored). Eg.,
       `function set(key, val, options, cb) { }`
  - (Breaking change) caching/multicaching methods no longer accept a `ttl` param. You must instead pass
     in an options object which will be passed to the cache store's `set` method.
  - (Breaking change) caching.js no longer accepts a path to cache store. Pass in an object or 'memory' instead.

- 0.19.0 2015-03-29
  - Pass dispose, length & stale options to lru-cache (#22). - @gmaclennan

- 0.18.0 2015-02-12
  - Minor changes and refactorings including:
    - converting to camelcase
    - hiding queues inside CallbackFiller
    - general example updates
    - updated redis example to use latest redis npm
    - not trying to pass ttl into cache.set() in getAndPassUp() (this didn't
      work anyway)

- 0.17.0 2015-02-05
  - Add Additional Options Parameter (#20) - @seanzx85
  - Fixing bug with nested calls to wrap() (#21)

- 0.16.0 2015-01-07
  - Get and pass up feature to update higher caches. (#19) - raadad
  - Minor style tweaks/jscs update.

- 0.15.0 2014-12-18
  - Moved cache queue before the store get function (up to 2x performance boost). (#18) - aletorrado
  - Added domain support to make sure the wrap callback function is always called - aletorrado

- 0.14.0 2014-10-15
  - Set ttl in wrap #14 - nguyenchr
  - Added JSCS for style checking

- 0.13.0 2014-10-14
  - Applied work function locking for multi_caching (#13). -aletorrado

- 0.12.0 2014-10-09
  - Checking for existence of del() method before binding to it. Fixes #11.

- 0.11.0 2014-09-18
  - Prevent stalemate by executing callbacks on error. Fixes #10 - elliotttf

- 0.10.1 2014-09-10
  - Fixed tag/version mismatch

- 0.10.0 2014-09-10
  - Fixing Use call instead of apply for cached results, issue #9 (thanks elliotttf)

- 0.9.0 2014-08-19
  - Fixing issue #8 - parallel requests to a wrapped function were calling the
    function multiple times. (Thanks alex-whitney).

- 0.8.0 2014-07-07
  - Adding setex() (Thanks evanlucas)

- 0.7.1 2014-06-15
  - Adding link to Express.js cache-manager example app

- 0.7.0 2014-06-15
  - Bumping package versions, mostly devDependencies

- 0.6.0 2014-06-15
  - Adding caching.keys() function (issue #6)
  - Updating examples/redis_example/example.js with cache.keys() usage
  - Allow calling memory store get() without callback

- 0.5.0 2014-05-02
  - Adding reset() function to caching.js.  Closes #5.

- 0.4.0 2014-05-02
  - New arg to ignore cache errors. if set cache errors will be ignored
    and the cache_manager will go to the backing store. (Thanks londonjamo).

- 0.3.0 2013-12-08
  - Bound the get, set and del functions to their original “this” context when assigning a store.
    (Thanks to Boyan Rabchev)

- 0.2.0 2013-10-31
  - Better examples, version bump.

- 0.1.3 2013-10-31
  - Fixing unreleased connection in redis example.

- 0.1.2 2013-10-13
  - Wrapping synchronous memory cache callbacks in process.nextTick() for the purists.

- 0.1.1 2013-10-13
  - Travis and Coveralls integration testing.

- 0.1.0 2013-10-13
  - Removing built-in Redis store to emphasize that you should plug in your own
    cache store.

- 0.0.5 2013-10-13
  - Removing hiredis requirement.

- 0.0.4 2013-08-01
  - Better error checking in multi_cache.wrap();

- 0.0.3 2013-07-10
  - Better error checking in cache.wrap();

- 0.0.2 2013-04-08
  - Added ability to pass in a store module that isn't already instantiated. E.g.,

  ```javascript
  var store = require('/path/to/my_memory_store');
  cache = caching({store: store});
  ```
- 0.0.1 2013-04-08
  - Initial release.
