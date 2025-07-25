const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.objectId();

class MongoIds {
  constructor() {
    this.known = [];
  }
  check(id, block) {
    try {
      schema.validate(id);
    } catch {
      return `Expected a valid ObjectId for block ${block}, but got ${id}`;
    }

    const key = `${block}:${id}`;

    const exists = this.known.includes(key);
    this.known.push(key);
    return exists
      ? `The id, ${id}, appears more than once in block ${block}. All the ids in a single block should be unique.`
      : null;
  }
}

module.exports = MongoIds;
