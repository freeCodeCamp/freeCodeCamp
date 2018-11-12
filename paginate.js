const { owner, repo } = require('./constants');

const paginate = async function paginate (method, octokit, firstPR, lastPR, prPropsToGet) {

  const prFilter = (prs, first, last, prPropsToGet) => {
    const filtered = [];
    for (let pr of prs) {
      if (pr.number >= first && pr.number <= last) {
        const propsObj = prPropsToGet.reduce((obj, prop) => {
          obj[prop] = pr[prop];
          return obj;
        } ,{});
        filtered.push(propsObj);
      }
      if (pr.number >= last) {
        done = true;
        return filtered;
      }
    }
    return filtered;
  };

  const methodProps = {
    owner,  repo, state: 'open',
    base: 'master',  sort: 'created',
    direction: 'asc', page: 1, per_page: 100
  };

  let done = false; // will be true when lastPR is seen paginated results
  let response = await method(methodProps);
  let { data } = response;
  data = prFilter(data, firstPR, lastPR, prPropsToGet);
  while (octokit.hasNextPage(response) && !done ) {
    response = await octokit.getNextPage(response);
    let dataFiltered = prFilter(response.data, firstPR, lastPR, prPropsToGet);
    data = data.concat(dataFiltered);
  }
  return data;
};

module.exports =  { paginate };
