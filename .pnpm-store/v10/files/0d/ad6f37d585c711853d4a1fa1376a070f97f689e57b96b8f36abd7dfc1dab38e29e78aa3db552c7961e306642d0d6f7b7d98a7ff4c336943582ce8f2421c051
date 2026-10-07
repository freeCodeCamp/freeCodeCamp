/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @emails oncall+relay
 * @format
 */
'use strict';

function reportMissingRequiredFields(environment, missingRequiredFields) {
  switch (missingRequiredFields.action) {
    case 'THROW':
      {
        var _missingRequiredField = missingRequiredFields.field,
            path = _missingRequiredField.path,
            owner = _missingRequiredField.owner; // This gives the consumer the chance to throw their own error if they so wish.

        environment.requiredFieldLogger({
          kind: 'missing_field.throw',
          owner: owner,
          fieldPath: path
        });
        throw new Error("Relay: Missing @required value at path '".concat(path, "' in '").concat(owner, "'."));
      }

    case 'LOG':
      missingRequiredFields.fields.forEach(function (_ref) {
        var path = _ref.path,
            owner = _ref.owner;
        environment.requiredFieldLogger({
          kind: 'missing_field.log',
          owner: owner,
          fieldPath: path
        });
      });
      break;

    default:
      {
        missingRequiredFields.action;
      }
  }
}

module.exports = reportMissingRequiredFields;