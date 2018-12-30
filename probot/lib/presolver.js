class Presolver {
  constructor (context, { owner, repo, logger = console, ...config }) {
    this.context = context
    this.github = context.github
    this.logger = logger
    this.config = Object.assign({}, require('./defaults'), config || {}, {
      owner,
      repo
    })
    // console.log(this.config)
    this.pullRequest = {}
    this.conflictingFiles = []
  }

  async presolve (pullRequest) {
    Object.assign(this.pullRequest, pullRequest)
    await this._ensurePresolverLabelExists()
    await this._getState()
    const labelObj = this.config.labelPRConflict
    if (this.conflictingFiles.length) {
      await this._addLabel(labelObj)
    }
  }

  async _getState () {
    // console.log(this.context.issue())
    const files = await this.github.pullRequests.getFiles(this.context.issue())
    // console.log(files)
    const {owner, repo} = this.config
    const prs = await this.github.pullRequests.getAll({ owner, repo })
      .data || []
    // console.log(prs)
    await this._getConflictingFiles(prs, files)
  }

  async _getConflictingFiles (prs, files) {
    const {owner, repo} = this.config
    const github = this.github
    const conflictingFiles = this.conflictingFiles
    // console.log(prs, files)
    prs.forEach((pr) => {
      const prIssue = {
        number: pr.number,
        owner: owner,
        repo: repo
      }
      var prFiles = github.pullRequests.getFiles(prIssue)
      prFiles.data.forEach((file) => {
        files.data.forEach((f) => {
          // console.log(f, file)
          if (f.filename === file.filename) {
            conflictingFiles.push(file.filename)
          }
        })
      })
    })
  }

  async _ensurePresolverLabelExists () {
    const label = this.config.labelPRConflict
    await this._createLabel(label)
  }

  async _createLabel (labelObj) {
    const { owner, repo } = this.config
    const github = this.github
    // console.log(this.github.issues.getLabel({ owner, repo, name: labelObj.name }))
    return this.github.issues
      .getLabel({ owner, repo, name: labelObj.name })
      .catch(() => {
        console.log(labelObj)
        return github.issues.createLabel({
          owner,
          repo,
          name: labelObj.name,
          color: labelObj.color
        })
      })
  }

  _getLabel (labelObj) {
    return new Promise((resolve, reject) => {
      for (const label of this.pullRequest.labels) {
        if (labelObj && labelObj.name && label.name === labelObj.name) {
          resolve(labelObj)
        }
      }
      reject(new Error('Not found'))
    })
  }
  async _addLabel (labelObj) {
    const { owner, repo } = this.config
    const number = this.pullRequest.number
    const label = this.config.labelPRConflict
    const github = this.github
    // Check if a label does not exist. If it does, it addes the label.
    return this._getLabel(label).catch(() => {
      // console.log(labelObj)
      return github.issues.addLabels({
        owner,
        repo,
        number,
        labels: [labelObj.name]
      })
    })
  }
}

module.exports = Presolver
