const expect = require('expect');
const { Probot } = require('probot');
const prSuccessEvent = require('./events/pullRequests.opened');
const prExisting = require('./events/pullRequests.existing');
const probotPlugin = require('..');

describe('Presolver', () => {
  let probot, github;

  beforeEach(() => {
    probot = new Probot({});
    // Load our app into probot
    let app = probot.load(probotPlugin);
    // This is an easy way to mock out the GitHub API
    // https://probot.github.io/docs/testing/
    github = {
      issues: {
        createComment: jest.fn().mockReturnValue(Promise.resolve({})),
        addLabels: jest.fn(),
        getLabel: jest.fn().mockImplementation(() => Promise.resolve([])),
        createLabel: jest.fn()
      },
      repos: {
        getContent: () =>
          Promise.resolve({
            data: Buffer.from(
              `
          issueOpened: Message  
          pullRequestOpened: Message
          `
            ).toString('base64')
          })
      },
      pullRequests: {
        getFiles: jest.fn().mockImplementation(() => ({
          data: [{ filename: 'test.txt' }]
        })),
        getAll: jest
          .fn()
          .mockImplementation(() => ({ data: [prExisting.pull_request] }))
      }
    };
    app.auth = () => Promise.resolve(github);
    // just return a test token
    // app.app = () => 'test'
  });

  test('adds a label if a PR has changes to files targeted by an existing PR', async () => {
    // Receive a webhook event
    await probot.receive({
      name: 'pull_request.opened',
      payload: prSuccessEvent
    });
    expect(github.issues.addLabels).toHaveBeenCalled();
  });
});

// For more information about testing with Jest see:
// https://facebook.github.io/jest/

// For more information about testing with Nock see:
// https://github.com/nock/nock
