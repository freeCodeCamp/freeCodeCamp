const Joi = require('joi');
const findIndex = require('lodash/findIndex');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.objectId();

class MongoIds {
  constructor() {
    this.knownIds = [];
  }
  check(id, title) {
    try {
      schema.validate(id);
    } catch {
      throw new Error(`Expected a valid ObjectId for ${title}, but got ${id}`);
    }

    const idIndex = findIndex(this.knownIds, existing => id === existing);
    // TODO: check for the exceptions or remove the warning.
    if (idIndex !== -1) {
      console.warn(`The id for challenge ${title} appears more than once.
      With the exception of some projects this should not happen.
    `);
    }
    this.knownIds = [...this.knownIds, id];
  }
}

module.exports = MongoIds;
