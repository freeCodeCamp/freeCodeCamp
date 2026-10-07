
# file-entry-cache - Changelog
## v6.0.1
- **Other changes**
  - Delete previous mtime when checksum is used and vice versa - [abcf0f9]( https://github.com/royriojas/file-entry-cache/commit/abcf0f9 ), [Milos Djermanovic](https://github.com/Milos Djermanovic), 19/02/2021 18:19:43

    
  - Adds travis jobs on ppc64le - [92e4d4a]( https://github.com/royriojas/file-entry-cache/commit/92e4d4a ), [dineshks1](https://github.com/dineshks1), 25/11/2020 04:52:11

    
## v6.0.0
- **Refactoring**
  - Align file-entry-cache with latest eslint - [4c6f1fb]( https://github.com/royriojas/file-entry-cache/commit/4c6f1fb ), [Roy Riojas](https://github.com/Roy Riojas), 08/11/2020 02:43:09

    
  - Upgrade deps - [8ab3257]( https://github.com/royriojas/file-entry-cache/commit/8ab3257 ), [Roy Riojas](https://github.com/Roy Riojas), 08/11/2020 02:41:53

    
  - updated packages - [3dd4231]( https://github.com/royriojas/file-entry-cache/commit/3dd4231 ), [Roy Riojas](https://github.com/Roy Riojas), 08/11/2020 02:29:37

    
  - Upgrade flat-cache to version 3 - [d7c60ef]( https://github.com/royriojas/file-entry-cache/commit/d7c60ef ), [Roy Riojas](https://github.com/Roy Riojas), 08/11/2020 01:18:04

    
## v5.0.1
- **Bug Fixes**
  - Fix missing checksum comparison from reconcile since now we use mtime and size by default. - [e858aa9]( https://github.com/royriojas/file-entry-cache/commit/e858aa9 ), [Roy Riojas](https://github.com/Roy Riojas), 04/02/2019 09:30:22

    Old mode using checkSum can still be used by passing the `useCheckSum` parameter to the `create` or `createFromFile` methods.
    
## v5.0.0
- **Refactoring**
  - Make checksum comparison optional - [b0f9ae0]( https://github.com/royriojas/file-entry-cache/commit/b0f9ae0 ), [Roy Riojas](https://github.com/Roy Riojas), 03/02/2019 18:17:39

    To determine if a file has changed we were using the checksum in the newer versions, but eslint was relying on the old behavior where we use the mtime and file size to determine if a file changed. That's why we decided to make the checksum check optional.
    
    To use it:
    
    ```js
    // to make the cache use the checkSum check do the following:
    var fCache = fileEntryCache.create(cacheName, dir, useCheckSum); // pass the third parameter as true
    var otherCache = fileEntryCache.createFromFile(cacheName, useCheckSum); // pass the second parameter as true
    ```
    
## v4.0.0
- **Build Scripts Changes**
  - use the same node versions eslint use - [563cfee]( https://github.com/royriojas/file-entry-cache/commit/563cfee ), [Roy Riojas](https://github.com/Roy Riojas), 08/01/2019 20:29:34

    
- **Other changes**
  - Remove object-assign dependency. - [d0f598e]( https://github.com/royriojas/file-entry-cache/commit/d0f598e ), [Corey Farrell](https://github.com/Corey Farrell), 08/01/2019 20:09:51

    node.js >=4 is required so object-assign is no longer needed, the native
    Object.assign can be used instead.
    
## v3.0.0
- **Build Scripts Changes**
  - Upgrade flat-cache dep to latest - [078b0df]( https://github.com/royriojas/file-entry-cache/commit/078b0df ), [Roy Riojas](https://github.com/Roy Riojas), 08/01/2019 18:54:40

    
  - Commit new package-lock.json file - [245fe62]( https://github.com/royriojas/file-entry-cache/commit/245fe62 ), [Roy Riojas](https://github.com/Roy Riojas), 08/01/2019 17:56:21

    
- **Refactoring**
  - add eslintrc file - [6dd32d8]( https://github.com/royriojas/file-entry-cache/commit/6dd32d8 ), [Roy Riojas](https://github.com/Roy Riojas), 22/08/2018 09:58:17

    
- **Other changes**
  - Move variable definition out of else block - [ea05441]( https://github.com/royriojas/file-entry-cache/commit/ea05441 ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 25/04/2017 11:19:00

    
  - Add script and cmd to test hash/checksum performance - [7f60e0a]( https://github.com/royriojas/file-entry-cache/commit/7f60e0a ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 24/04/2017 14:43:12

    
  - Calculate md5 hexdigest instead of Adler-32 checksum - [f9e5c69]( https://github.com/royriojas/file-entry-cache/commit/f9e5c69 ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 24/04/2017 14:43:12

    
  - How to reproduce - [4edc2dc]( https://github.com/royriojas/file-entry-cache/commit/4edc2dc ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 24/04/2017 13:49:32

    
  - Test handling of removed files - [09d9ec5]( https://github.com/royriojas/file-entry-cache/commit/09d9ec5 ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 19/04/2017 19:51:50

    
  - Use content checksum instead of mtime and fsize - [343b340]( https://github.com/royriojas/file-entry-cache/commit/343b340 ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 19/04/2017 19:51:47

    
- **Revert**
  - Revert "How to reproduce" - [4b4e54a]( https://github.com/royriojas/file-entry-cache/commit/4b4e54a ), [Zakhar Shapurau](https://github.com/Zakhar Shapurau), 25/04/2017 11:15:36

    This reverts commit 4edc2dcec01574247bfc2e0a2fe26527332b7df3.
    
## v2.0.0
- **Features**
  - do not persist and prune removed files from cache. Relates to [#2](https://github.com/royriojas/file-entry-cache/issues/2) - [408374d]( https://github.com/royriojas/file-entry-cache/commit/408374d ), [Roy Riojas](https://github.com/Roy Riojas), 16/08/2016 13:47:58

    
## v1.3.1
- **Build Scripts Changes**
  - remove older node version - [0a26ac4]( https://github.com/royriojas/file-entry-cache/commit/0a26ac4 ), [Roy Riojas](https://github.com/Roy Riojas), 01/08/2016 04:09:17

    
## v1.3.0
- **Features**
  - Add an option to not prune non visited keys. Closes [#2](https://github.com/royriojas/file-entry-cache/issues/2) - [b1a64db]( https://github.com/royriojas/file-entry-cache/commit/b1a64db ), [Roy Riojas](https://github.com/Roy Riojas), 01/08/2016 03:52:12

    
## v1.2.4
- **Enhancements**
  - Expose the flat-cache instance - [f34c557]( https://github.com/royriojas/file-entry-cache/commit/f34c557 ), [royriojas](https://github.com/royriojas), 23/09/2015 18:26:33

    
## v1.2.3
- **Build Scripts Changes**
  - update flat-cache dep - [cc7b9ce]( https://github.com/royriojas/file-entry-cache/commit/cc7b9ce ), [royriojas](https://github.com/royriojas), 11/09/2015 16:04:44

    
## v1.2.2
- **Build Scripts Changes**
  - Add changelogx section to package.json - [a3916ff]( https://github.com/royriojas/file-entry-cache/commit/a3916ff ), [royriojas](https://github.com/royriojas), 11/09/2015 16:00:26

    
## v1.2.1
- **Build Scripts Changes**
  - update flat-cache dep - [e49b0d4]( https://github.com/royriojas/file-entry-cache/commit/e49b0d4 ), [royriojas](https://github.com/royriojas), 11/09/2015 15:55:25

    
- **Other changes**
  - Update dependencies Replaced lodash.assign with smaller object-assign Fixed tests for windows - [0ad3000]( https://github.com/royriojas/file-entry-cache/commit/0ad3000 ), [Bogdan Chadkin](https://github.com/Bogdan Chadkin), 11/09/2015 15:44:18

    
## v1.2.0
- **Features**
  - analyzeFiles now returns also the files that were removed - [6ac2431]( https://github.com/royriojas/file-entry-cache/commit/6ac2431 ), [royriojas](https://github.com/royriojas), 04/09/2015 12:40:53

    
## v1.1.1
- **Features**
  - Add method to check if a file hasChanged - [3640e2b]( https://github.com/royriojas/file-entry-cache/commit/3640e2b ), [Roy Riojas](https://github.com/Roy Riojas), 30/08/2015 05:33:32

    
## v1.1.0
- **Features**
  - Create the cache directly from a file path - [a23de61]( https://github.com/royriojas/file-entry-cache/commit/a23de61 ), [Roy Riojas](https://github.com/Roy Riojas), 30/08/2015 04:41:33

    
  - Add a method to remove an entry from the filecache - [7af29fc]( https://github.com/royriojas/file-entry-cache/commit/7af29fc ), [Roy Riojas](https://github.com/Roy Riojas), 02/03/2015 23:25:32

    
  - cache module finished - [1f95544]( https://github.com/royriojas/file-entry-cache/commit/1f95544 ), [Roy Riojas](https://github.com/Roy Riojas), 02/03/2015 01:08:08

    
- **Build Scripts Changes**
  - set the version for the first release - [7472eaa]( https://github.com/royriojas/file-entry-cache/commit/7472eaa ), [Roy Riojas](https://github.com/Roy Riojas), 02/03/2015 01:29:54

    
- **Documentation**
  - Updated documentation - [557358f]( https://github.com/royriojas/file-entry-cache/commit/557358f ), [Roy Riojas](https://github.com/Roy Riojas), 02/03/2015 01:29:29

    
- **Other changes**
  - Initial commit - [3d5f42b]( https://github.com/royriojas/file-entry-cache/commit/3d5f42b ), [Roy Riojas](https://github.com/Roy Riojas), 01/03/2015 21:58:29

    
