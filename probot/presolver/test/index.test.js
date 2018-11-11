const nock = require('nock')
// Requiring our app implementation
const myProbotApp = require('..')
const { Probot } = require('probot')
// Requiring our fixtures
const payload = require('./fixtures/pullRequests.labeled')
const issueCreatedBody = { body: 'Thanks for contributing!' }
// const url = (process.env.NODE_ENV === 'production' ? 'https://api.github.com' : 'https://smee.io/Vq0IH8tsXTuCp6kM')
nock.disableNetConnect()

describe('My Probot app', () => {
  let probot, github

  beforeEach(() => {
    probot = new Probot({})
    // Load our app into probot
    let app = probot.load(myProbotApp)
    // This is an easy way to mock out the GitHub API
    // https://probot.github.io/docs/testing/
    github = {
      issues: {
        createComment: jest.fn().mockReturnValue(Promise.resolve({}))
      }
    }
    app.auth = () => Promise.resolve(github)
    // just return a test token
    //app.app = () => 'test'
  })

  test('creates a comment when an issue is opened', async () => {
    /*nock(url)
      .post('/app/installations/421598/access_tokens')
      .reply(200, { token: 'test' })*/

    // Test that a comment is posted
    /*nock('https://api.github.com')
      .post('/repos/hiimbex/testing-things/issues/1/comments', (body) => {
        expect(body).toMatchObject(issueCreatedBody)
        return true
      })
      .reply(200)*/

    // Receive a webhook event
    await probot.receive({name: 'pull_request.opened', payload: payload})
    expect(github.issues.createComment).toHaveBeenCalled()
  })
})

// For more information about testing with Jest see:
// https://facebook.github.io/jest/

// For more information about testing with Nock see:
// https://github.com/nock/nock
