import _ from 'lodash';

class ChallengeTitles {
  constructor() {
    this.knownTitles = [];
  }
  check(title) {
    if (typeof title !== 'string') {
      throw new Error(`Expected a valid string for ${title}, got ${typeof title}`);
    } else if (title.length === 0) {
      throw new Error(`Expected a title length greater than 0`);
    }
    const titleToCheck = title.toLowerCase().replace(/\s+/g, '');
    const titleIndex = _.findIndex(this.knownTitles, existing => titleToCheck === existing);
    if (titleIndex !== -1) {
      throw new Error(`
    All challenges must have a unique title.

    The title ${title} is already assigned
    `);
    }
    this.knownTitles = [ ...this.knownTitles, titleToCheck ];
  }
}

export default ChallengeTitles;
