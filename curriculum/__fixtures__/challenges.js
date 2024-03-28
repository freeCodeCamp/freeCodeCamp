exports.sourceChallenge = {
  id: 'abc123',
  title: 'English Title',
  challengeType: 1,
  forumTopicId: 302261,
  dashedName: 'some-dashed-name',
  challengeFiles: [
    {
      ext: 'js',
      name: 'script',
      contents: 'english seed source',
      head: 'english seed head',
      tail: 'english seed tail',
      id: '',
      editableRegionBoundaries: []
    }
  ],
  solutions: [
    [
      {
        ext: 'js',
        name: 'script',
        contents: 'english source',
        head: 'english head',
        tail: 'english tail',
        id: ''
      }
    ]
  ],
  assignments: [],
  tests: [
    {
      text: 'english text one',
      testString: "original code"
    },
    {
      text: 'english text two',
      testString: "more original code"
    },
  ],
  description: 'english description'
}

exports.targetChallenge = {
  id: 'abc123',
  title: 'Italian Title',
  challengeType: 1,
  forumTopicId: 302261,
  dashedName: 'some-dashed-name',
  challengeFiles: [
    {
      ext: 'js',
      name: 'script',
      contents: 'italian seed source',
      head: 'italian seed head',
      tail: 'italian seed tail',
      id: '',
      editableRegionBoundaries: []
    }
  ],
  solutions: [
    [
      {
        ext: 'js',
        name: 'script',
        contents: 'italian source',
        head: 'italian head',
        tail: 'italian tail',
        id: ''
      }
    ]
  ],
  assignments: [],
  tests: [
    {
      text: 'italian text one',
      testString: "code that should not have been modified"
    },
    {
      text: 'italian text two',
      testString: "more code that should not have been modified"
    },
  ],
  description: 'italian description'
}
