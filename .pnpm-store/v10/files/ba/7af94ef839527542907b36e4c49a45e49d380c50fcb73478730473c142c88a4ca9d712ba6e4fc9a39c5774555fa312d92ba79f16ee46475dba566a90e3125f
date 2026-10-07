{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/json-schema-secure.json#",
  "title": "Meta-schema for the security assessment of JSON Schemas",
  "description": "If a JSON Schema fails validation against this meta-schema, it may be unsafe to validate untrusted data",
  "definitions": {
    "schemaArray": {
      "type": "array",
      "minItems": 1,
      "items": {"$ref": "#"}
    }
  },
  "dependencies": {
    "patternProperties": {
      "description": "prevent slow validation of large property names",
      "required": ["propertyNames"],
      "properties": {
        "propertyNames": {
          "required": ["maxLength"]
        }
      }
    },
    "uniqueItems": {
      "description": "prevent slow validation of large non-scalar arrays",
      "if": {
        "properties": {
          "uniqueItems": {"const": true},
          "items": {
            "properties": {
              "type": {
                "anyOf": [
                  {
                    "enum": ["object", "array"]
                  },
                  {
                    "type": "array",
                    "contains": {"enum": ["object", "array"]}
                  }
                ]
              }
            }
          }
        }
      },
      "then": {
        "required": ["maxItems"]
      }
    },
    "pattern": {
      "description": "prevent slow pattern matching of large strings",
      "required": ["maxLength"]
    },
    "format": {
      "description": "prevent slow format validation of large strings",
      "required": ["maxLength"]
    }
  },
  "properties": {
    "additionalItems": {"$ref": "#"},
    "additionalProperties": {"$ref": "#"},
    "dependencies": {
      "additionalProperties": {
        "anyOf": [
          {"type": "array"},
          {"$ref": "#"}
        ]
      }
    },
    "items": {
      "anyOf": [
        {"$ref": "#"},
        {"$ref": "#/definitions/schemaArray"}
      ]
    },
    "definitions": {
      "additionalProperties": {"$ref": "#"}
    },
    "patternProperties": {
      "additionalProperties": {"$ref": "#"}
    },
    "properties": {
      "additionalProperties": {"$ref": "#"}
    },
    "if": {"$ref": "#"},
    "then": {"$ref": "#"},
    "else": {"$ref": "#"},
    "allOf": {"$ref": "#/definitions/schemaArray"},
    "anyOf": {"$ref": "#/definitions/schemaArray"},
    "oneOf": {"$ref": "#/definitions/schemaArray"},
    "not": {"$ref": "#"},
    "contains": {"$ref": "#"},
    "propertyNames": {"$ref": "#"}
  }
}
