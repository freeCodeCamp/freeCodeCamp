/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @emails oncall+relay
 * @format
 */

'use strict';

import type {
  IEnvironment,
  MissingRequiredFields,
} from '../store/RelayStoreTypes';

function reportMissingRequiredFields(
  environment: IEnvironment,
  missingRequiredFields: MissingRequiredFields,
) {
  switch (missingRequiredFields.action) {
    case 'THROW': {
      const {path, owner} = missingRequiredFields.field;
      // This gives the consumer the chance to throw their own error if they so wish.
      environment.requiredFieldLogger({
        kind: 'missing_field.throw',
        owner,
        fieldPath: path,
      });
      throw new Error(
        `Relay: Missing @required value at path '${path}' in '${owner}'.`,
      );
    }
    case 'LOG':
      missingRequiredFields.fields.forEach(({path, owner}) => {
        environment.requiredFieldLogger({
          kind: 'missing_field.log',
          owner,
          fieldPath: path,
        });
      });
      break;
    default: {
      (missingRequiredFields.action: empty);
    }
  }
}

module.exports = reportMissingRequiredFields;
