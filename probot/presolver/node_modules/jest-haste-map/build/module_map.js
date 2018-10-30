'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants;

function _load_constants() {
  return _constants = _interopRequireDefault(require('./constants'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EMPTY_MAP = {}; /**
                       * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                       *
                       * This source code is licensed under the MIT license found in the
                       * LICENSE file in the root directory of this source tree.
                       *
                       * 
                       */

class ModuleMap {

  constructor(raw) {
    this._raw = raw;
  }

  getModule(name, platform, supportsNativePlatform, type) {
    if (!type) {
      type = (_constants || _load_constants()).default.MODULE;
    }
    const module = this._getModuleMetadata(name, platform, !!supportsNativePlatform);
    if (module && module[(_constants || _load_constants()).default.TYPE] === type) {
      return module[(_constants || _load_constants()).default.PATH];
    }
    return null;
  }

  getPackage(name, platform, supportsNativePlatform) {
    return this.getModule(name, platform, null, (_constants || _load_constants()).default.PACKAGE);
  }

  getMockModule(name) {
    return this._raw.mocks[name];
  }

  getRawModuleMap() {
    return {
      duplicates: this._raw.duplicates,
      map: this._raw.map,
      mocks: this._raw.mocks
    };
  }

  /**
   * When looking up a module's data, we walk through each eligible platform for
   * the query. For each platform, we want to check if there are known
   * duplicates for that name+platform pair. The duplication logic normally
   * removes elements from the `map` object, but we want to check upfront to be
   * extra sure. If metadata exists both in the `duplicates` object and the
   * `map`, this would be a bug.
   */
  _getModuleMetadata(name, platform, supportsNativePlatform) {
    const map = this._raw.map[name] || EMPTY_MAP;
    const dupMap = this._raw.duplicates[name] || EMPTY_MAP;
    if (platform != null) {
      this._assertNoDuplicates(name, platform, supportsNativePlatform, dupMap[platform]);
      if (map[platform] != null) {
        return map[platform];
      }
    }
    if (supportsNativePlatform) {
      this._assertNoDuplicates(name, (_constants || _load_constants()).default.NATIVE_PLATFORM, supportsNativePlatform, dupMap[(_constants || _load_constants()).default.NATIVE_PLATFORM]);
      if (map[(_constants || _load_constants()).default.NATIVE_PLATFORM]) {
        return map[(_constants || _load_constants()).default.NATIVE_PLATFORM];
      }
    }
    this._assertNoDuplicates(name, (_constants || _load_constants()).default.GENERIC_PLATFORM, supportsNativePlatform, dupMap[(_constants || _load_constants()).default.GENERIC_PLATFORM]);
    if (map[(_constants || _load_constants()).default.GENERIC_PLATFORM]) {
      return map[(_constants || _load_constants()).default.GENERIC_PLATFORM];
    }
    return null;
  }

  _assertNoDuplicates(name, platform, supportsNativePlatform, set) {
    if (set == null) {
      return;
    }
    throw new DuplicateHasteCandidatesError(name, platform, supportsNativePlatform, set);
  }
}

exports.default = ModuleMap;
class DuplicateHasteCandidatesError extends Error {

  constructor(name, platform, supportsNativePlatform, duplicatesSet) {
    const platformMessage = getPlatformMessage(platform);
    super(`The name \`${name}\` was looked up in the Haste module map. It ` + `cannot be resolved, because there exists several different ` + `files, or packages, that provide a module for ` + `that particular name and platform. ${platformMessage} You must ` + `delete or blacklist files until there remains only one of these:\n\n` + Object.keys(duplicatesSet).sort().map(dupFilePath => {
      const typeMessage = getTypeMessage(duplicatesSet[dupFilePath]);
      return `  * \`${dupFilePath}\` (${typeMessage})\n`;
    }).join(''));
    this.hasteName = name;
    this.platform = platform;
    this.supportsNativePlatform = supportsNativePlatform;
    this.duplicatesSet = duplicatesSet;
  }
}

function getPlatformMessage(platform) {
  if (platform === (_constants || _load_constants()).default.GENERIC_PLATFORM) {
    return 'The platform is generic (no extension).';
  }
  return `The platform extension is \`${platform}\`.`;
}

function getTypeMessage(type) {
  switch (type) {
    case (_constants || _load_constants()).default.MODULE:
      return 'module';
    case (_constants || _load_constants()).default.PACKAGE:
      return 'package';
  }
  return 'unknown';
}

ModuleMap.DuplicateHasteCandidatesError = DuplicateHasteCandidatesError;