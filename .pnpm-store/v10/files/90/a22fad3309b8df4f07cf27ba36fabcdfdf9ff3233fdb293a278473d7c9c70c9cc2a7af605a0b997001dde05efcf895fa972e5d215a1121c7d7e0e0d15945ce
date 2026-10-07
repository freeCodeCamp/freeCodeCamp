'use strict'

class Location {
  constructor (schema, schemaId, jsonPointer = '#') {
    this.schema = schema
    this.schemaId = schemaId
    this.jsonPointer = jsonPointer
  }

  getPropertyLocation (propertyName) {
    const propertyLocation = new Location(
      this.schema[propertyName],
      this.schemaId,
      this.jsonPointer + '/' + propertyName
    )
    return propertyLocation
  }

  getSchemaRef () {
    return this.schemaId + this.jsonPointer
  }
}

module.exports = Location
