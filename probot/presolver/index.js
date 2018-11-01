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
function getPullRequest(context) {
  return context.payload.pull_request || context.payload.review.pull_request;
}
module.exports = async app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('pull_request.labeled', async context => {
    //const prNumber = context.payload.pull_request.number;
    const { title, head, number, id } = getPullRequest(context);
    const owner = context.repo().owner;
    const repo = context.repo().repo;
    /*const reviews =
      (await context.github.pullRequests.getReviews({ owner, repo, number }))
        .data || [];
    
    const uniqueReviews = reviews
      .filter(review => review.commit_id === sha)
      .reduce((reviewObj, review) => {
        if (
          reviewObj[review.user.id] === null ||
          reviewObj[review.user.id] === undefined
        ) {
          reviewObj[review.user.id] = {
            state: review.state,
            submitted_at: review.submitted_at
          };
        } else {
          const a = new Date(
            reviewObj[review.user.id]["submitted_at"]
          ).getTime();
          const b = new Date(review.submitted_at).getTime();
          if (a < b) {
            reviewObj[review.user.id] = {
              state: review.state,
              submitted_at: review.submitted_at
            };
          }
        }
        return reviewObj;
      }, {});

      return Object.values(uniqueReviews);
    }*/
    //const params = 
    const commit_id = head.sha;
    const body = 'probot comment test';
    const filepath = './app.js'
    const pos = 4;
    const event = 'COMMENT'
    const comments = {
      path: './app.js',
      position: 4,
      body: 'probot test'
    }
    const path = 
      //comments[].path = 
      filepath;
    const position = 
      //comments[].path = 
      pos;
    const reviewers = ['tbushman']
    /*return await context.github.pullRequests.createReview({
      owner,
      repo,
      number,
      commit_id,
      body,
      event,
      comments

    })
    /*const issueComment = context.issue({ body: 'probot label test' })
    return context.github.issues.createComment(issueComment)*/
    return await context.github.pullRequests.createReviewRequest({owner, repo, number, reviewers})
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}

