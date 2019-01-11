const expect = require('expect');
const { Probot } = require('probot');
const prOpened = require('./payloads/events/pullRequests.opened');
const prExisting = require('./payloads/events/pullRequests.existing');
const prUnrelated = require('./payloads/events/pullRequests.unrelated');
const prDeleted = require('./payloads/events/pullRequests.deleted');
const prOpenedFiles = require('./payloads/files/files.opened');
const prExistingFiles = require('./payloads/files/files.existing');
const prUnrelatedFiles = require('./payloads/files/files.unrelated');
const probotPlugin = require('..');
const { PRtest } = require('./utils/testmodels');

// https://medium.com/
  // @art.longbottom.jr/concurrent-testing-with-mongoose-and-jest-83a27ceb87ee
// Load models since we will not be instantiating our express server.
require('../server/models/index');

describe('Presolver', () => {
  let probot, github;

  afterEach(async (done) => {
    PRtest.remove({}).catch(err => console.log(err));
    process.env.TEST_ENV = false;
    done();
  });

  beforeEach( async() => {
    process.env.TEST_ENV = true;
    probot = new Probot({});
    // Load our app into probot
    let app = probot.load(probotPlugin);

    // This is an easy way to mock out the GitHub API
    // https://probot.github.io/docs/testing/
    github = {
      issues: {
        /* eslint-disable no-undef */
        createComment: jest.fn().mockReturnValue(Promise.resolve({})),
        addLabels: jest.fn(),
        getLabel: jest.fn().mockImplementation(() => Promise.resolve([])),
        createLabel: jest.fn()
        /* eslint-enable no-undef */
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
        // eslint-disable-next-line no-undef
        getFiles: jest.fn().mockImplementation((issue) => {
          const { number } = issue;
          let data;
          switch (number) {
            case 31525:
              data = prOpenedFiles;
              break;
            case 33363:
              data = prExistingFiles;
              break;
            case 34559:
              data = prUnrelatedFiles;
              break;
            default:
              data = prExistingFiles;
          }
          return { data };
        }),
        // eslint-disable-next-line no-undef
        getAll: jest
          .fn()
          .mockImplementation(() => ({ data: [
            prExisting.pull_request
          ] }))
      }
    };
    app.auth = () => Promise.resolve(github);
  });

  test(`adds a label if a PR has changes to files targeted by an
    existing PR`, async () => {
    // Receive a webhook event
    await probot.receive({
      name: 'pull_request.opened',
      payload: prOpened
    });
    expect(github.issues.addLabels).toHaveBeenCalled();
  });

  test('does not add a label when files do not coincide', async () => {
    await probot.receive({
      name: 'pull_request.opened',
      payload: prUnrelated
    });
    expect(github.issues.addLabels).toHaveBeenCalledTimes(0);
  });

  test('db should update if the action is opened', async () => {
    await probot.receive({
      name: 'pull_request.opened',
      payload: prOpened
    });
    const results = await PRtest.find({}).then(data => data);
    expect(results.length).toBeGreaterThan(0);
  });

  test('db should have removed document if action is delete', async () => {
    await probot.receive({
      name: 'pull_request.delete',
      payload: prDeleted
    });
    const results = await PRtest.find({}).then(data => data)
      .catch(err => console.log(err));
    expect(results.length).toBe(0);

  });
});

// For more information about testing with Jest see:
// https://facebook.github.io/jest/
