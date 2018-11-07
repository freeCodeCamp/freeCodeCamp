const prOpenClose = async () => {
  const result = await octokit.pullRequests.update({ owner, repo , number, state: 'closed', base })
  .then(() => {
    return octokit.pullRequests.update({ owner, repo , number, state: 'open', base })
  })
  .then(() => {
    log.update(true)
  })
  .catch(() => {
    log.update(false)
  })
};

exports.changePrState = changePrState;
