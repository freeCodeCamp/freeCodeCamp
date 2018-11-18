const debug = require("debug")("probot:presolver");
const Presolver = require('./lib/presolver')
/*const Presolver = {
  (github, { owner, repo, logger = console, ...config }) {
  //constructor(github, { owner, repo, logger = console, ...config }) {
    this.github = github;
    this.logger = logger;
    this.config = Object.assign({}, {
      owner,
      repo
    });
    this.pullRequest = {};
  //}

  /*static get STATE() {
    return Object.freeze({
      CLASH: 'clashing'
    });
  }*/
  
  
  

//}


async function probotPlugin(robot) {
  const events = [
    "pull_request.opened",
    "pull_request.edited",
    "pull_request.synchronize",
    "pull_request.reopened",
    "pull_request.labeled"
  ];

  robot.on(events, presolve.bind(null, robot));
}
/*async function _getClashingRanges(context, pullRequest) {
  const repo = pullRequest.base.repo;
  //console.log(pullRequest)
  const owner = repo.owner;
  const number = pullRequest.number;
	console.log(context)
  const prs = (await context.github.pullRequests.get({ owner, repo }))
    .data || [];
  prs.forEach(function(pr){
    const files = pr.files()
    console.log(files)
  })
}*/
/*async function presolver(context, pullRequest) {
  //Object.assign(this.pullRequest, pullRequest);
  //const { owner, repo } = this.config;
  //const number = this.pullRequest.number;

  const state = await _getClashingRanges(context, pullRequest);

}*/
async function presolve(app, context) {
  const presolver = forRepository(context);
  const pullRequest = getPullRequest(context);
  return presolver.presolve(pullRequest);
}

function forRepository(context) {
  const config = Object.assign({}, context.repo({ logger: debug }));
  return new Presolver(context, config);
}

function getPullRequest(context) {
  return context.payload.pull_request || context.payload.review.pull_request;
}


module.exports = probotPlugin;
/*module.exports = async app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('pull_request.opened', async githubcontext => {
    //console.log(githubcontext)
    const prContext = getPullRequest(githubcontext);
    //console.log(prContext);
    //const config = //Object.assign({}, githubcontext.repo({})
    //);
    //const context = prContext.github;
    //console.log(context)
    //constructor(github, { owner, repo, logger = console, ...config }) {

    //const prNumber = context.payload.pull_request.number;
    
    const { title, head, number, id } = prContext;*/
    //const owner = context.owner;
    //const repo = context.repo;
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
/*    const commit_id = head.sha;
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
    const reviewers = ['tbushman']*/
    /*return await context.github.pullRequests.createReview({
      owner,
      repo,
      number,
      commit_id,
      body,
      event,
      comments

    })*/
/*    const issueComment = githubcontext.issue({ body: 'probot label test' })
    return githubcontext.github.issues.createComment(issueComment)
    //return await githubcontext.github.pullRequests.createReviewRequest({owner, repo, number, reviewers})
  })*/

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
//}

