const Joi = require('joi');
const findIndex = require('lodash/findIndex');
Joi.objectId = require('joi-objectid')(Joi);

const schema = Joi.objectId();
const duplicatedProjectIds = [
  'bd7158d8c442eddfaeb5bd18',
  '587d78af367417b2b2512b03',
  '587d78af367417b2b2512b04',
  '587d78b0367417b2b2512b05',
  'bd7158d8c242eddfaeb5bd13',
  'aaa48de84e1ecc7c742e1124',
  'a7f4d8f2483413a6ce226cac',
  '56533eb9ac21ba0edf2244e2',
  'aff0395860f5d3034dc0bfc9',
  'aa2e6f85cab2ab736c9a9b24',
  '5a8b073d06fa14fcfde687aa',
  '587d7fb0367417b2b2512bed',
  '587d7fb0367417b2b2512bee',
  '587d7fb0367417b2b2512bef',
  '587d7fb0367417b2b2512bf0',
  '587d7fb1367417b2b2512bf1',
  '587d7fb1367417b2b2512bf2',
  '587d7fb1367417b2b2512bf3',
  '587d7fb1367417b2b2512bf4',
  '587d7fb2367417b2b2512bf5',
  '587d7fb2367417b2b2512bf6',
  '587d7fb2367417b2b2512bf7',
  '587d7fb2367417b2b2512bf8'
];

class MongoIds {
  constructor() {
    this.knownIds = [];
  }
  check(id, title) {
    try {
      schema.validate(id);
    } catch {
      return `Expected a valid ObjectId for ${title}, but got ${id}`;
    }

    const idIndex = findIndex(this.knownIds, existing => id === existing);
    if (idIndex !== -1 && !duplicatedProjectIds.includes(id)) {
      return `The id for challenge ${title} appears more than once. With the exception of duplicatedProjectIds this should not happen.`;
    }
    this.knownIds = [...this.knownIds, id];
    return null;
  }
}

module.exports = MongoIds;
