class ChallengeTitles {
  constructor() {
    this.knownTitles = [];
  }
  check(title, pathAndTitle) {
    if (typeof title !== 'string') {
      throw new Error(
        `Expected a valid string for ${title}, but got a(n) ${typeof title}`
      );
    }
    let titleToCheck = title.replace(/\s+/g, '').toLowerCase();
    if (titleToCheck.length === 0) {
      throw new Error('Expected a title length greater than 0');
    }
    // reassign titleToCheck if challenge is part of the project
    // based curriculum
    const isProjectCurriculumChallenge = title.match(/^Step\s*\d+$/);
    titleToCheck = isProjectCurriculumChallenge ? pathAndTitle : titleToCheck;
    const isKnown = this.knownTitles.includes(titleToCheck);
    // TODO: check for the exceptions or remove the warning.
    if (isKnown) {
      console.warn(`
        All current curriculum challenges must have a unique title.
        The title ${title} (at ${pathAndTitle}) is already assigned
      `);
    }
    this.knownTitles = [...this.knownTitles, titleToCheck];
  }
}

module.exports = ChallengeTitles;
