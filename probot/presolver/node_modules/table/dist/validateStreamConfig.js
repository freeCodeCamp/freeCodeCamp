'use strict';
var equal = require('ajv/lib/compile/equal');
var validate = (function() {
  var pattern0 = new RegExp('^[0-9]+$');
  var refVal = [];
  var refVal1 = (function() {
    var pattern0 = new RegExp('^[0-9]+$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        var errs__0 = errors;
        var valid1 = true;
        for (var key0 in data) {
          var isAdditional0 = !(false || validate.schema.properties[key0]);
          if (isAdditional0) {
            valid1 = false;
            var err = {
              keyword: 'additionalProperties',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/additionalProperties',
              params: {
                additionalProperty: '' + key0 + ''
              },
              message: 'should NOT have additional properties'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
        }
        if (data.topBody !== undefined) {
          var errs_1 = errors;
          if (!refVal2(data.topBody, (dataPath || '') + '.topBody', data, 'topBody', rootData)) {
            if (vErrors === null) vErrors = refVal2.errors;
            else vErrors = vErrors.concat(refVal2.errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.topJoin !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.topJoin, (dataPath || '') + '.topJoin', data, 'topJoin', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.topLeft !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.topLeft, (dataPath || '') + '.topLeft', data, 'topLeft', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.topRight !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.topRight, (dataPath || '') + '.topRight', data, 'topRight', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bottomBody !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bottomBody, (dataPath || '') + '.bottomBody', data, 'bottomBody', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bottomJoin !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bottomJoin, (dataPath || '') + '.bottomJoin', data, 'bottomJoin', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bottomLeft !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bottomLeft, (dataPath || '') + '.bottomLeft', data, 'bottomLeft', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bottomRight !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bottomRight, (dataPath || '') + '.bottomRight', data, 'bottomRight', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bodyLeft !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bodyLeft, (dataPath || '') + '.bodyLeft', data, 'bodyLeft', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bodyRight !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bodyRight, (dataPath || '') + '.bodyRight', data, 'bodyRight', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.bodyJoin !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.bodyJoin, (dataPath || '') + '.bodyJoin', data, 'bodyJoin', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.joinBody !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.joinBody, (dataPath || '') + '.joinBody', data, 'joinBody', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.joinLeft !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.joinLeft, (dataPath || '') + '.joinLeft', data, 'joinLeft', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.joinRight !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.joinRight, (dataPath || '') + '.joinRight', data, 'joinRight', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
        if (data.joinJoin !== undefined) {
          var errs_1 = errors;
          if (!refVal[2](data.joinJoin, (dataPath || '') + '.joinJoin', data, 'joinJoin', rootData)) {
            if (vErrors === null) vErrors = refVal[2].errors;
            else vErrors = vErrors.concat(refVal[2].errors);
            errors = vErrors.length;
          }
          var valid1 = errors === errs_1;
        }
      } else {
        var err = {
          keyword: 'type',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/type',
          params: {
            type: 'object'
          },
          message: 'should be object'
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      }
      validate.errors = vErrors;
      return errors === 0;
    };
  })();
  refVal1.schema = {
    "type": "object",
    "properties": {
      "topBody": {
        "$ref": "#/definitions/border"
      },
      "topJoin": {
        "$ref": "#/definitions/border"
      },
      "topLeft": {
        "$ref": "#/definitions/border"
      },
      "topRight": {
        "$ref": "#/definitions/border"
      },
      "bottomBody": {
        "$ref": "#/definitions/border"
      },
      "bottomJoin": {
        "$ref": "#/definitions/border"
      },
      "bottomLeft": {
        "$ref": "#/definitions/border"
      },
      "bottomRight": {
        "$ref": "#/definitions/border"
      },
      "bodyLeft": {
        "$ref": "#/definitions/border"
      },
      "bodyRight": {
        "$ref": "#/definitions/border"
      },
      "bodyJoin": {
        "$ref": "#/definitions/border"
      },
      "joinBody": {
        "$ref": "#/definitions/border"
      },
      "joinLeft": {
        "$ref": "#/definitions/border"
      },
      "joinRight": {
        "$ref": "#/definitions/border"
      },
      "joinJoin": {
        "$ref": "#/definitions/border"
      }
    },
    "additionalProperties": false
  };
  refVal1.errors = null;
  refVal[1] = refVal1;
  var refVal2 = (function() {
    var pattern0 = new RegExp('^[0-9]+$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if (typeof data !== "string") {
        var err = {
          keyword: 'type',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/type',
          params: {
            type: 'string'
          },
          message: 'should be string'
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      }
      validate.errors = vErrors;
      return errors === 0;
    };
  })();
  refVal2.schema = {
    "type": "string"
  };
  refVal2.errors = null;
  refVal[2] = refVal2;
  var refVal3 = (function() {
    var pattern0 = new RegExp('^[0-9]+$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        var errs__0 = errors;
        var valid1 = true;
        for (var key0 in data) {
          var isAdditional0 = !(false || pattern0.test(key0));
          if (isAdditional0) {
            valid1 = false;
            var err = {
              keyword: 'additionalProperties',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/additionalProperties',
              params: {
                additionalProperty: '' + key0 + ''
              },
              message: 'should NOT have additional properties'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
        }
        for (var key0 in data) {
          if (pattern0.test(key0)) {
            var errs_1 = errors;
            if (!refVal4(data[key0], (dataPath || '') + '[\'' + key0 + '\']', data, key0, rootData)) {
              if (vErrors === null) vErrors = refVal4.errors;
              else vErrors = vErrors.concat(refVal4.errors);
              errors = vErrors.length;
            }
            var valid1 = errors === errs_1;
          }
        }
      } else {
        var err = {
          keyword: 'type',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/type',
          params: {
            type: 'object'
          },
          message: 'should be object'
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      }
      validate.errors = vErrors;
      return errors === 0;
    };
  })();
  refVal3.schema = {
    "type": "object",
    "patternProperties": {
      "^[0-9]+$": {
        "$ref": "#/definitions/column"
      }
    },
    "additionalProperties": false
  };
  refVal3.errors = null;
  refVal[3] = refVal3;
  var refVal4 = (function() {
    var pattern0 = new RegExp('^[0-9]+$');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        var errs__0 = errors;
        var valid1 = true;
        for (var key0 in data) {
          var isAdditional0 = !(false || validate.schema.properties[key0]);
          if (isAdditional0) {
            valid1 = false;
            var err = {
              keyword: 'additionalProperties',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/additionalProperties',
              params: {
                additionalProperty: '' + key0 + ''
              },
              message: 'should NOT have additional properties'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
        }
        var data1 = data.alignment;
        if (data1 !== undefined) {
          var errs_1 = errors;
          var schema1 = validate.schema.properties.alignment.enum;
          var valid1;
          valid1 = false;
          for (var i1 = 0; i1 < schema1.length; i1++)
            if (equal(data1, schema1[i1])) {
              valid1 = true;
              break;
            }
          if (!valid1) {
            var err = {
              keyword: 'enum',
              dataPath: (dataPath || '') + '.alignment',
              schemaPath: '#/properties/alignment/enum',
              params: {
                allowedValues: schema1
              },
              message: 'should be equal to one of the allowed values'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          if (typeof data1 !== "string") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.alignment',
              schemaPath: '#/properties/alignment/type',
              params: {
                type: 'string'
              },
              message: 'should be string'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
        if (data.width !== undefined) {
          var errs_1 = errors;
          if (typeof data.width !== "number") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.width',
              schemaPath: '#/properties/width/type',
              params: {
                type: 'number'
              },
              message: 'should be number'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
        if (data.wrapWord !== undefined) {
          var errs_1 = errors;
          if (typeof data.wrapWord !== "boolean") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.wrapWord',
              schemaPath: '#/properties/wrapWord/type',
              params: {
                type: 'boolean'
              },
              message: 'should be boolean'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
        if (data.truncate !== undefined) {
          var errs_1 = errors;
          if (typeof data.truncate !== "number") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.truncate',
              schemaPath: '#/properties/truncate/type',
              params: {
                type: 'number'
              },
              message: 'should be number'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
        if (data.paddingLeft !== undefined) {
          var errs_1 = errors;
          if (typeof data.paddingLeft !== "number") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.paddingLeft',
              schemaPath: '#/properties/paddingLeft/type',
              params: {
                type: 'number'
              },
              message: 'should be number'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
        if (data.paddingRight !== undefined) {
          var errs_1 = errors;
          if (typeof data.paddingRight !== "number") {
            var err = {
              keyword: 'type',
              dataPath: (dataPath || '') + '.paddingRight',
              schemaPath: '#/properties/paddingRight/type',
              params: {
                type: 'number'
              },
              message: 'should be number'
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
      } else {
        var err = {
          keyword: 'type',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/type',
          params: {
            type: 'object'
          },
          message: 'should be object'
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      }
      validate.errors = vErrors;
      return errors === 0;
    };
  })();
  refVal4.schema = {
    "type": "object",
    "properties": {
      "alignment": {
        "type": "string",
        "enum": ["left", "right", "center"]
      },
      "width": {
        "type": "number"
      },
      "wrapWord": {
        "type": "boolean"
      },
      "truncate": {
        "type": "number"
      },
      "paddingLeft": {
        "type": "number"
      },
      "paddingRight": {
        "type": "number"
      }
    },
    "additionalProperties": false
  };
  refVal4.errors = null;
  refVal[4] = refVal4;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if (rootData === undefined) rootData = data;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      for (var key0 in data) {
        var isAdditional0 = !(false || key0 == 'border' || key0 == 'columns' || key0 == 'columnDefault' || key0 == 'columnCount');
        if (isAdditional0) {
          valid1 = false;
          var err = {
            keyword: 'additionalProperties',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/additionalProperties',
            params: {
              additionalProperty: '' + key0 + ''
            },
            message: 'should NOT have additional properties'
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
      }
      if (data.border !== undefined) {
        var errs_1 = errors;
        if (!refVal1(data.border, (dataPath || '') + '.border', data, 'border', rootData)) {
          if (vErrors === null) vErrors = refVal1.errors;
          else vErrors = vErrors.concat(refVal1.errors);
          errors = vErrors.length;
        }
        var valid1 = errors === errs_1;
      }
      if (data.columns !== undefined) {
        var errs_1 = errors;
        if (!refVal3(data.columns, (dataPath || '') + '.columns', data, 'columns', rootData)) {
          if (vErrors === null) vErrors = refVal3.errors;
          else vErrors = vErrors.concat(refVal3.errors);
          errors = vErrors.length;
        }
        var valid1 = errors === errs_1;
      }
      if (data.columnDefault !== undefined) {
        var errs_1 = errors;
        if (!refVal[4](data.columnDefault, (dataPath || '') + '.columnDefault', data, 'columnDefault', rootData)) {
          if (vErrors === null) vErrors = refVal[4].errors;
          else vErrors = vErrors.concat(refVal[4].errors);
          errors = vErrors.length;
        }
        var valid1 = errors === errs_1;
      }
      if (data.columnCount !== undefined) {
        var errs_1 = errors;
        if (typeof data.columnCount !== "number") {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.columnCount',
            schemaPath: '#/properties/columnCount/type',
            params: {
              type: 'number'
            },
            message: 'should be number'
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
    } else {
      var err = {
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'object'
        },
        message: 'should be object'
      };
      if (vErrors === null) vErrors = [err];
      else vErrors.push(err);
      errors++;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "id": "streamConfig.json",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "border": {
      "$ref": "#/definitions/borders"
    },
    "columns": {
      "$ref": "#/definitions/columns"
    },
    "columnDefault": {
      "$ref": "#/definitions/column"
    },
    "columnCount": {
      "type": "number"
    }
  },
  "additionalProperties": false,
  "definitions": {
    "columns": {
      "type": "object",
      "patternProperties": {
        "^[0-9]+$": {
          "$ref": "#/definitions/column"
        }
      },
      "additionalProperties": false
    },
    "column": {
      "type": "object",
      "properties": {
        "alignment": {
          "type": "string",
          "enum": ["left", "right", "center"]
        },
        "width": {
          "type": "number"
        },
        "wrapWord": {
          "type": "boolean"
        },
        "truncate": {
          "type": "number"
        },
        "paddingLeft": {
          "type": "number"
        },
        "paddingRight": {
          "type": "number"
        }
      },
      "additionalProperties": false
    },
    "borders": {
      "type": "object",
      "properties": {
        "topBody": {
          "$ref": "#/definitions/border"
        },
        "topJoin": {
          "$ref": "#/definitions/border"
        },
        "topLeft": {
          "$ref": "#/definitions/border"
        },
        "topRight": {
          "$ref": "#/definitions/border"
        },
        "bottomBody": {
          "$ref": "#/definitions/border"
        },
        "bottomJoin": {
          "$ref": "#/definitions/border"
        },
        "bottomLeft": {
          "$ref": "#/definitions/border"
        },
        "bottomRight": {
          "$ref": "#/definitions/border"
        },
        "bodyLeft": {
          "$ref": "#/definitions/border"
        },
        "bodyRight": {
          "$ref": "#/definitions/border"
        },
        "bodyJoin": {
          "$ref": "#/definitions/border"
        },
        "joinBody": {
          "$ref": "#/definitions/border"
        },
        "joinLeft": {
          "$ref": "#/definitions/border"
        },
        "joinRight": {
          "$ref": "#/definitions/border"
        },
        "joinJoin": {
          "$ref": "#/definitions/border"
        }
      },
      "additionalProperties": false
    },
    "border": {
      "type": "string"
    }
  }
};
validate.errors = null;
module.exports = validate;