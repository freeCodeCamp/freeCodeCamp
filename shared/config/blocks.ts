export enum BlockTypes {
  lecture = 'lecture',
  workshop = 'workshop',
  lab = 'lab',
  review = 'review',
  quiz = 'quiz',
  exam = 'exam'
}

export enum BlockLayouts {
  /**
   * These three are for the new Full Stack Developer Certification,
   * so we can play with them without affecting the existing block layouts
   */
  ChallengeList = 'challenge-list',
  Link = 'link',
  ChallengeGrid = 'challenge-grid',

  /**
   * ChallengeList displays challenges in a list.
   * This layout is used in backend blocks, The Odin Project blocks, and blocks in legacy certification.
   * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
   */
  LegacyChallengeList = 'legacy-challenge-list',

  /**
   * LegacyChallengeGrid displays challenges in a grid.
   * This layout is used for step-based blocks.
   * Example: https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app
   */
  LegacyChallengeGrid = 'legacy-challenge-grid',

  /**
   * Link displays the block as a single link.
   * This layout is used if the block has a single challenge.
   * Example: https://www.freecodecamp.org/learn/2022/responsive-web-design/#build-a-survey-form-project
   */
  LegacyLink = 'legacy-link',

  /**
   * ProjectList displays a list of certification projects.
   * This layout is used in legacy certifications.
   * Example: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects
   */
  ProjectList = 'project-list'
}
