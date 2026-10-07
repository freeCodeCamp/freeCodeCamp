{
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "groups": {
        "type": "array",
        "minitems": 1,
        "uniqueItems": true,
        "items": {
          "$ref": "definitions.json#/groupList"
        }
      },
      "status": {
        "enum": [
          "standard",
          "nonstandard",
          "experimental"
        ]
      }
    },
    "required": [
      "groups",
      "status"
    ]
  }
}
