class ChallengeTitles {
  constructor() {
    /**
     * Takes the shape of { [block]: title[]}
     */
    this.knownTitles = {};
  }
  check(title, block) {
    if (typeof title !== 'string') {
      throw new Error(
        `Expected a valid string for ${title}, but got a(n) ${typeof title}`
      );
    }
    let titleToCheck = title.replace(/\s+/g, '').toLowerCase();
    if (titleToCheck.length === 0) {
      throw new Error('Expected a title length greater than 0');
    }
    if (!this.knownTitles[block]) {
      this.knownTitles[block] = [];
    }
    const isKnown = this.knownTitles[block].includes(title);
    if (isKnown) {
      return false;
    }
    this.knownTitles[block].push(title);
    return true;
  }
}

module.exports = ChallengeTitles;
