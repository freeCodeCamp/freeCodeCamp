
# flat-cache - Changelog
## v1.3.0
- **Other changes**
  - Added #all method ([#16](https://github.com/royriojas/flat-cache/issues/16)) - [12293be]( https://github.com/royriojas/flat-cache/commit/12293be ), [Ozair Patel](https://github.com/Ozair Patel), 25/09/2017 16:46:38

    * Added #all method
    
    * Added #all method test
    
    * Updated readme
    
    * Added yarn.lock
    
    * Added more keys for #all test
    
    * Beautified file
    
  - fix changelog title style ([#14](https://github.com/royriojas/flat-cache/issues/14)) - [af8338a]( https://github.com/royriojas/flat-cache/commit/af8338a ), [前端小武](https://github.com/前端小武), 19/12/2016 23:34:48

    
## v1.2.2
- **Bug Fixes**
  - Do not crash if cache file is invalid JSON. ([#13](https://github.com/royriojas/flat-cache/issues/13)) - [87beaa6]( https://github.com/royriojas/flat-cache/commit/87beaa6 ), [Roy Riojas](https://github.com/Roy Riojas), 19/12/2016 21:03:35

    Fixes <a target="_blank" class="info-link" href="https://github.com/royriojas/flat-cache/issues/12"><span>#12</span></a>
    
    Not sure under which situations a cache file might exist that does
    not contain a valid JSON structure, but just in case to cover
    the possibility of this happening a try catch block has been added
    
    If the cache is somehow not valid the cache will be discarded an a
    a new cache will be stored instead
- **Other changes**
  - Added travis ci support for modern node versions ([#11](https://github.com/royriojas/flat-cache/issues/11)) - [1c2b1f7]( https://github.com/royriojas/flat-cache/commit/1c2b1f7 ), [Amila Welihinda](https://github.com/Amila Welihinda), 11/11/2016 02:47:52

    
  - Bumping `circular-son` version ([#10](https://github.com/royriojas/flat-cache/issues/10)) - [4d5e861]( https://github.com/royriojas/flat-cache/commit/4d5e861 ), [Andrea Giammarchi](https://github.com/Andrea Giammarchi), 02/08/2016 09:13:52

    As mentioned in https://github.com/WebReflection/circular-json/issues/25 `circular-json` wan't rightly implementing the license field.
    
    Latest version bump changed only that bit so that ESLint should now be happy.
## v1.2.1
- **Bug Fixes**
  - Add missing utils.js file to the package. closes [#8](https://github.com/royriojas/flat-cache/issues/8) - [ec10cf2]( https://github.com/royriojas/flat-cache/commit/ec10cf2 ), [Roy Riojas](https://github.com/Roy Riojas), 01/08/2016 04:18:57

    
## v1.2.0
- **Documentation**
  - Add documentation about noPrune option - [23e11f9]( https://github.com/royriojas/flat-cache/commit/23e11f9 ), [Roy Riojas](https://github.com/Roy Riojas), 01/08/2016 04:06:49

    
## v1.0.11
- **Features**
  - Add noPrune option to cache.save() method. closes [#7](https://github.com/royriojas/flat-cache/issues/7) - [2c8016a]( https://github.com/royriojas/flat-cache/commit/2c8016a ), [Roy Riojas](https://github.com/Roy Riojas), 01/08/2016 04:00:29

    
  - Add json read and write utility based on circular-json - [c31081e]( https://github.com/royriojas/flat-cache/commit/c31081e ), [Jean Ponchon](https://github.com/Jean Ponchon), 28/07/2016 10:58:17

    
- **Bug Fixes**
  - Remove UTF16 BOM stripping - [4a41e22]( https://github.com/royriojas/flat-cache/commit/4a41e22 ), [Jean Ponchon](https://github.com/Jean Ponchon), 29/07/2016 04:18:06

    Since we control both writing and reading of JSON stream, there no needs 
    to handle unicode BOM.
  - Use circular-json to handle circular references (fix [#5](https://github.com/royriojas/flat-cache/issues/5)) - [cd7aeed]( https://github.com/royriojas/flat-cache/commit/cd7aeed ), [Jean Ponchon](https://github.com/Jean Ponchon), 25/07/2016 13:11:59

    
- **Tests Related fixes**
  - Add missing file from eslint test - [d6fa3c3]( https://github.com/royriojas/flat-cache/commit/d6fa3c3 ), [Jean Ponchon](https://github.com/Jean Ponchon), 29/07/2016 04:15:51

    
  - Add test for circular json serialization / deserialization - [07d2ddd]( https://github.com/royriojas/flat-cache/commit/07d2ddd ), [Jean Ponchon](https://github.com/Jean Ponchon), 28/07/2016 10:59:36

    
- **Refactoring**
  - Remove unused read-json-sync - [2be1c24]( https://github.com/royriojas/flat-cache/commit/2be1c24 ), [Jean Ponchon](https://github.com/Jean Ponchon), 28/07/2016 10:59:18

    
- **Build Scripts Changes**
  - travis tests on 0.12 and 4x - [3a613fd]( https://github.com/royriojas/flat-cache/commit/3a613fd ), [royriojas](https://github.com/royriojas), 15/11/2015 17:34:40

    
## v1.0.10
- **Build Scripts Changes**
  - add eslint-fix task - [fd29e52]( https://github.com/royriojas/flat-cache/commit/fd29e52 ), [royriojas](https://github.com/royriojas), 01/11/2015 18:04:08

    
  - make sure the test script also verify beautification and linting of files before running tests - [e94e176]( https://github.com/royriojas/flat-cache/commit/e94e176 ), [royriojas](https://github.com/royriojas), 01/11/2015 14:54:48

    
- **Other changes**
  - add clearAll for cacheDir - [97383d9]( https://github.com/royriojas/flat-cache/commit/97383d9 ), [xieyaowu](https://github.com/xieyaowu), 31/10/2015 23:02:18

    
## v1.0.9
- **Bug Fixes**
  - wrong default values for changelogx user repo name - [7bb52d1]( https://github.com/royriojas/flat-cache/commit/7bb52d1 ), [royriojas](https://github.com/royriojas), 11/09/2015 17:59:30

    
## v1.0.8
- **Build Scripts Changes**
  - test against node 4 - [c395b66]( https://github.com/royriojas/flat-cache/commit/c395b66 ), [royriojas](https://github.com/royriojas), 11/09/2015 17:51:39

    
## v1.0.7
- **Other changes**
  - Move dependencies into devDep - [7e47099]( https://github.com/royriojas/flat-cache/commit/7e47099 ), [Bogdan Chadkin](https://github.com/Bogdan Chadkin), 11/09/2015 17:10:57

    
- **Documentation**
  - Add missing changelog link - [f51197a]( https://github.com/royriojas/flat-cache/commit/f51197a ), [royriojas](https://github.com/royriojas), 11/09/2015 16:48:05

    
## v1.0.6
- **Build Scripts Changes**
  - Add helpers/code check scripts - [bdb82f3]( https://github.com/royriojas/flat-cache/commit/bdb82f3 ), [royriojas](https://github.com/royriojas), 11/09/2015 16:44:31

    
## v1.0.5
- **Documentation**
  - better description for the module - [436817f]( https://github.com/royriojas/flat-cache/commit/436817f ), [royriojas](https://github.com/royriojas), 11/09/2015 16:35:33

    
- **Other changes**
  - Update dependencies - [be88aa3]( https://github.com/royriojas/flat-cache/commit/be88aa3 ), [Bogdan Chadkin](https://github.com/Bogdan Chadkin), 11/09/2015 15:47:41

    
## v1.0.4
- **Refactoring**
  - load a cache file using the full filepath - [b8f68c2]( https://github.com/royriojas/flat-cache/commit/b8f68c2 ), [Roy Riojas](https://github.com/Roy Riojas), 30/08/2015 06:19:14

    
- **Documentation**
  - Add documentation about `clearAll` and `clearCacheById` - [13947c1]( https://github.com/royriojas/flat-cache/commit/13947c1 ), [Roy Riojas](https://github.com/Roy Riojas), 02/03/2015 02:44:05

    
- **Features**
  - Add methods to remove the cache documents created - [af40443]( https://github.com/royriojas/flat-cache/commit/af40443 ), [Roy Riojas](https://github.com/Roy Riojas), 02/03/2015 02:39:27

    
## v1.0.1
- **Other changes**
  - Update README.md - [c2b6805]( https://github.com/royriojas/flat-cache/commit/c2b6805 ), [Roy Riojas](https://github.com/Roy Riojas), 26/02/2015 07:28:07

    
## v1.0.0
- **Refactoring**
  - flat-cache v.1.0.0 - [c984274]( https://github.com/royriojas/flat-cache/commit/c984274 ), [Roy Riojas](https://github.com/Roy Riojas), 26/02/2015 07:11:50

    
- **Other changes**
  - Initial commit - [d43cccf]( https://github.com/royriojas/flat-cache/commit/d43cccf ), [Roy Riojas](https://github.com/Roy Riojas), 26/02/2015 04:12:16

    
