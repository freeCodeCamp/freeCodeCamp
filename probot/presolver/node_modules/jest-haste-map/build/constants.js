'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/* eslint-disable sort-keys */

/*
 * This file exports a set of constants that are used for Jest's haste map
 * serialization. On very large repositories, the haste map cache becomes very
 * large to the point where it is the largest overhead in starting up Jest.
 *
 * This constant key map allows to keep the map smaller without having to build
 * a custom serialization library.
 */
exports.default = {
  /* file map attributes */
  ID: 0,
  MTIME: 1,
  VISITED: 2,
  DEPENDENCIES: 3,

  /* module map attributes */
  PATH: 0,
  TYPE: 1,

  /* module types */
  MODULE: 0,
  PACKAGE: 1,

  /* platforms */
  GENERIC_PLATFORM: 'g',
  NATIVE_PLATFORM: 'native'
};