import _ from 'lodash';
import { isMongoId } from 'validator';

class MongoIds {
  constructor() {
    this.knownIds = [];
  }
  check(id, title) {
    if (!isMongoId(id)) {
      throw new Error(`Expected a valid ObjectId for ${title}, but got ${id}`);
    }
    const idIndex = _.findIndex(this.knownIds, existing => id === existing);
    if (idIndex !== -1) {
      throw new Error(`
    All challenges must have a unique id.

    The id for ${title} is already assigned
    `);
    }
    this.knownIds = [ ...this.knownIds, id ];
  }
}

export default MongoIds;
