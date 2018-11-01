class Presolver {
  constructor(github, { owner, repo, logger = console, ...config }) {
    this.github = github;
    this.logger = logger;
    this.config = Object.assign({
      owner,
      repo
    });
    this.pullRequest = {};
  }

  static get STATE() {
    return Object.freeze({
      CLASH: 'clashing'
    })
    
  async _getClashingRanges(pullRequest) {
    Object.assign(this.pullRequest, pullRequest);
    const { owner, repo } = this.config;
    const number = this.pullRequest.number;

    const prs = (await this.github.pullRequests.get({ owner, repo }))
      .data || [];
      this.logger(prs)
    prs.forEach(function(pr){
      const files = pr.files()
    })
  }
  
  async presolve(pullRequest) {
    Object.assign(this.pullRequest, pullRequest);
    const { owner, repo } = this.config;
    const number = this.pullRequest.number;

    const state = await this._getClashingRanges(pullRequest);

  }

}

module.exports = Presolver;