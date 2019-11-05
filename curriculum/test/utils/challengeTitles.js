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
    const titleToCheck = title.replace(/\s+/g, '').toLowerCase();
    if (titleToCheck.length === 0) {
      throw new Error('Expected a title length greater than 0');
    }
<<<<<<< HEAD
    const isProjectCurriculumChallenge = title.match(/^Part\s*\d+/);
    const titleToAdd = isProjectCurriculumChallenge
      ? pathAndTitle
      : titleToCheck;
    const isKnown = this.knownTitles.includes(titleToAdd);
    if (isKnown) {
=======
    const isKnown = this.knownTitles.includes(titleToCheck);
    const isProjectCurriculumChallenge = title.match(/^Part\s*\d+/);
    if (isKnown && !isProjectCurriculumChallenge) {
>>>>>>> feat: Added steps
      throw new Error(`
    All current curriculum challenges must have a unique title.

    The title ${title} (at ${pathAndTitle}) is already assigned
    `);
    }
    this.knownTitles = [...this.knownTitles, titleToAdd];
  }
}

module.exports = ChallengeTitles;
