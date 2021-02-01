const ENGLISH_CERTIFICATE = {
  id: '561add10cb82ac38a17513bc',
  title: 'Responsive Web Design Certificate',
  challengeType: 7,
  isPrivate: true,
  tests: [
    { id: 'bd7158d8c442eddfaeb5bd18', title: 'Build a Tribute Page' },
    { id: '587d78af367417b2b2512b03', title: 'Build a Survey Form' },
    {
      id: '587d78af367417b2b2512b04',
      title: 'Build a Product Landing Page'
    },
    {
      id: '587d78b0367417b2b2512b05',
      title: 'Build a Technical Documentation Page'
    },
    {
      id: 'bd7158d8c242eddfaeb5bd13',
      title: 'Build a Personal Portfolio Webpage'
    }
  ],
  solutions: ['// solution required\n'],
  description: '',
  instructions: '',
  files: []
};

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

const ENGLISH_VIDEO_CHALLENGE = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoId: 'abc123',
  forumTopicId: 12345,
  question: 'english question',
  description: 'description html string',
  instructions: 'instructions html string'
};

const TRANSLATED_CERTIFICATE = {
  id: '561add10cb82ac38a17513bc',
  title: '响应式网页设计证书',
  challengeType: 7,
  isPrivate: true,
  videoUrl: '',
  tests: [
    { id: 'bd7158d8c442eddfaeb5bd18', title: 'Build a Tribute Page' },
    { id: '587d78af367417b2b2512b03', title: 'Build a Survey Form' },
    {
      id: '587d78af367417b2b2512b04',
      title: 'Build a Product Landing Page'
    },
    {
      id: '587d78b0367417b2b2512b05',
      title: 'Build a Technical Documentation Page'
    },
    {
      id: 'bd7158d8c242eddfaeb5bd13',
      title: 'Build a Personal Portfolio Webpage'
    }
  ],
  solutions: ['// solution required\n'],
  description: '',
  instructions: '',
  files: []
};

const TRANSLATED_CHALLENGE = {
  id: 'id',
  title: 'Translated title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 9876,
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

const TRANSLATED_CHALLENGE_NO_TITLE = {
  id: 'id',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 9876,
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

const TRANSLATED_VIDEO_CHALLENGE = {
  id: 'id',
  title: 'Title',
  challengeType: 0,
  videoId: 'abc123',
  forumTopicId: 12345,
  question: 'translated question',
  description: 'translated description html string',
  instructions: 'translated instructions html string'
};

const WRONG_NUM_TESTS_CHALLENGE = {
  id: 'id',
  title: 'Translated title',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/',
  forumTopicId: 12345,
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

exports.ENGLISH_CERTIFICATE = ENGLISH_CERTIFICATE;
exports.ENGLISH_CHALLENGE = ENGLISH_CHALLENGE;
exports.ENGLISH_CHALLENGE_TWO_SOLUTIONS = ENGLISH_CHALLENGE_TWO_SOLUTIONS;
exports.ENGLISH_CHALLENGE_NO_FILES = ENGLISH_CHALLENGE_NO_FILES;
exports.ENGLISH_VIDEO_CHALLENGE = ENGLISH_VIDEO_CHALLENGE;
exports.TRANSLATED_CERTIFICATE = TRANSLATED_CERTIFICATE;
exports.TRANSLATED_CHALLENGE = TRANSLATED_CHALLENGE;
exports.TRANSLATED_CHALLENGE_NO_TITLE = TRANSLATED_CHALLENGE_NO_TITLE;
exports.TRANSLATED_VIDEO_CHALLENGE = TRANSLATED_VIDEO_CHALLENGE;
exports.WRONG_NUM_TESTS_CHALLENGE = WRONG_NUM_TESTS_CHALLENGE;
