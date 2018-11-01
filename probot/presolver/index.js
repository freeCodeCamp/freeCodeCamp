/*const Presolver = require('./lib/presolver');

function probotPlugin(robot) {
  const events = [
    "pull_request.opened",
    "pull_request.edited",
    "pull_request.synchronize",
    "pull_request.reopened"
  ];

  robot.on(events, presolve);
}

async function presolve(context) {
  const presolverContext = getRepository(context);
  const pullRequest = getPullRequest(context);
}

function getRepository(context) {
  const config = Object.assign(context.repo());
  return new Presolver(context.github, config);
}

function getPullRequest(context) {
  return context.payload.pull_request || context.payload.review.pull_request;
}

module.exports = probotPlugin;
*/
module.exports = async app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('pull_request.labeled', async context => {
    //const [requestedAction, prNumber] = context.payload.requested_action.identifier.split(':')
    return context.payload.pullRequest.createComment({body:'probot label test'})
    /*const issueComment = context.issue({ body: 'probot label test' })
    return context.github.issues.createComment(issueComment)*/
    
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
