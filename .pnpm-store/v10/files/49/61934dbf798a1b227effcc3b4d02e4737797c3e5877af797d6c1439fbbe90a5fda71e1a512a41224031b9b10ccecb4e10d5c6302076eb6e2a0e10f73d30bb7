/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const SignedSource = require('signedsource');

import type CodegenDirectory from '../codegen/CodegenDirectory';
import type {Schema} from '../core/Schema';

function writeForSchema(
  schema: Schema,
  licenseHeader: $ReadOnlyArray<string>,
  codegenDir: CodegenDirectory,
  getModuleName: (enumName: string) => string,
): void {
  const header =
    '/**\n' +
    licenseHeader.map(line => ` * ${line}\n`).join('') +
    ' *\n' +
    ` * ${SignedSource.getSigningToken()}\n` +
    ' * @flow strict\n' +
    ' */\n' +
    '\n';

  const enumTypes = schema.getTypes().filter(type => schema.isEnum(type));

  for (const type of enumTypes) {
    const enumType = schema.assertEnumType(type);
    const name = schema.getTypeString(type);
    const values = [...schema.getEnumValues(enumType)].sort();
    const enumFileContent =
      header +
      `export type ${name} =\n  | '` +
      values.join("'\n  | '") +
      "'\n  | '%future added value';\n";
    codegenDir.writeFile(
      `${getModuleName(name)}.js`,
      SignedSource.signFile(enumFileContent),
    );
  }
}

module.exports = {
  writeForSchema,
};
