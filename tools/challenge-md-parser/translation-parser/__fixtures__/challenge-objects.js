const ENGLISH_CHALLENGE = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 12345,
  tests: [
    {
      text: 'Test text',
      testString: 'assertions'
    },
    {
      text: 'Test text2',
      testString: 'assertions2'
    }
  ],
  solutions: ['solution html string'],
  description: 'description html string',
  instructions: 'instructions html string',
  files: [
    {
      key: 'indexhtml',
      ext: 'html',
      name: 'index',
      contents: 'seed html string',
      head: 'head string',
      tail: 'tail string'
    }
  ]
};

const ENGLISH_CHALLENGE_TWO_SOLUTIONS = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 12345,
  tests: [
    {
      text: 'Test text',
      testString: 'assertions'
    },
    {
      text: 'Test text2',
      testString: 'assertions2'
    }
  ],
  solutions: ['solution html string', 'second solution html string'],
  description: 'description html string',
  instructions: 'instructions html string',
  files: [
    {
      key: 'indexhtml',
      ext: 'html',
      name: 'index',
      contents: 'seed html string',
      head: '',
      tail: ''
    }
  ]
};

const ENGLISH_CHALLENGE_NO_FILES = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 12345,
  tests: [
    {
      text: 'Test text',
      testString: 'assertions'
    },
    {
      text: 'Test text2',
      testString: 'assertions2'
    }
  ],
  solutions: ['solution html string'],
  description: 'description html string',
  instructions: 'instructions html string',
  files: []
};

const TRANSLATED_CHALLENGE = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 9876,
  localeTitle: 'Translated title',
  tests: [
    {
      text: 'Translated test text',
      testString: 'Translated assertions, should be ignored'
    },
    {
      text: 'Translated test text2',
      testString: 'Translated assertions, should be ignored2'
    }
  ],
  solutions: ['Translated solution html string, should be ignored'],
  description: 'Translated description html string',
  instructions: 'Translated instructions html string',
  files: [
    {
      key: 'indexhtml',
      ext: 'html',
      name: 'index',
      contents: 'Translated seed html string, should be ignored',
      head: 'Translated head string, should be ignored',
      tail: 'Translated tail string, should be ignored'
    }
  ]
};

const WRONG_NUM_TESTS_CHALLENGE = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 12345,
  localeTitle: 'Translated title',
  tests: [
    {
      text: 'Translated test text',
      testString: 'Translated assertions, should be ignored'
    }
  ],
  solutions: ['Translated solution html string, should be ignored'],
  description: 'Translated description html string',
  instructions: 'Translated instructions html string',
  files: [
    {
      key: 'indexhtml',
      ext: 'html',
      name: 'index',
      contents: 'Translated seed html string, should be ignored',
      head: '',
      tail: ''
    }
  ]
};

exports.ENGLISH_CHALLENGE = ENGLISH_CHALLENGE;
exports.ENGLISH_CHALLENGE_TWO_SOLUTIONS = ENGLISH_CHALLENGE_TWO_SOLUTIONS;
exports.ENGLISH_CHALLENGE_NO_FILES = ENGLISH_CHALLENGE_NO_FILES;
exports.TRANSLATED_CHALLENGE = TRANSLATED_CHALLENGE;
exports.WRONG_NUM_TESTS_CHALLENGE = WRONG_NUM_TESTS_CHALLENGE;
