class Presolver {
  constructor(context, { owner, repo, logger = console, ...config }) {
    this.context = context;
    this.github = context.github;
    this.logger = logger;
    this.config = Object.assign({}, require("./defaults"), config || {}, {
      owner,
      repo
    });
    this.pullRequest = {};
    this.conflictingFiles = [];
  }

  async presolve(pullRequest) {
    Object.assign(this.pullRequest, pullRequest);
    const { owner, repo } = this.config;
    const number = this.pullRequest.number;
    await this._ensurePresolverLabelExists();
    const state = await this._getState();
    /*switch(state) {
      case Presolver.STATE.CONFLICT:
      case Presolver.STATE.NOCONFLICT:
      default:
        throw new Error('Undefined state');*/
    
  }
  async _getState() {
    const files = await this.github.pullRequests.getFiles(this.context.issue());
    console.log(files)
    const {owner, repo} = this.config;
    const prs = await this.github.pullRequests.getAll({ owner, repo })
      .data || [];
    //let state;
    console.log(prs)
    await this._getConflictingFiles(prs, files);
    /*if (conflictingFiles.length) {
      return Presolver.STATE.CONFLICT;
    } else {
      return Presolver.STATE.NOCONFLICT;
    }*/
    return;
    // ... this.pullRequest.
    /*
    const prs = (await context.github.pullRequests.get({ owner, repo }))
      .data || [];
    prs.forEach(function(pr){
      const files = pr.files()
      console.log(files)
    })
    */
  }
  
  async _getConflictingFiles(prs, files) {
    prs.forEach(function(pr){
      var prFiles = pr.getFiles();
      prFiles.forEach(function(file){
        files.forEach(function(f){
          console.log(f, file)
          if (f === file) {
            this.conflictingFiles.push(file)
          }
        })
      })
    })
  }
  
  async _ensurePresolverLabelExists() {
    const label = this.config.labelPRConflict;
    await this._createLabel(label);
  }

  async _createLabel(labelObj) {
    const { owner, repo } = this.config;

    return this.github.issues
      .getLabels({ owner, repo, name: labelObj.name })
      .catch(() => {
        console.log(labelObj)
        return this.github.issues.createLabel({
          owner,
          repo,
          name: labelObj.name,
          color: labelObj.color
        });
      });
  }
}

module.exports = Presolver