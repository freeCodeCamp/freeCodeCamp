class ChallengeTitles {
  constructor() {
    this.knownTitles = [];
  }
  check(title) {
    if (typeof title !== 'string') {
      throw new Error(
        `Expected a valid string for ${title}, but got a(n) ${typeof title}`
      );
    }
    const titleToCheck = title.replace(/\s+/g, '').toLowerCase();
    if (titleToCheck.length === 0) {
      throw new Error('Expected a title length greater than 0');
    }
    const isKnown = this.knownTitles.includes(titleToCheck);
    if (isKnown) {
      throw new Error(`
    All challenges must have a unique title.

    The title ${title} is already assigned
    `);
    }
    this.knownTitles = [...this.knownTitles, titleToCheck];
  }
}

module.exports = ChallengeTitles;
