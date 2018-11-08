const { owner, repo } = require('./constants');

const paginate = async function paginate (method, octokit, firstPR, lastPR, prPropsToGet) {
  const minMaxFilter = (prs, first, last, prPropsToGet) => {
    return prs.reduce((filtered, pr) => {
      if (pr.number >= first && pr.number <= last) {
        const propsObj = prPropsToGet.reduce((obj, prop) => {
          obj[prop] = pr[prop];
          return obj;
        } ,{});
        filtered =  [propsObj, ...filtered];
      }
      return filtered;
    }, []);
  };

  const includesPRNum = (prs, prNum) => prs.some(({ number }) => number >= prNum);

  const methodProps = {
    owner,  repo, state: 'open',
    base: 'master',  sort: 'created',
    direction: 'asc', page: 1, per_page: 100
  };

  let done = false; // will be true when lastPR is seen paginated results
  let response = await method(methodProps);
  let { data } = response;
  data = minMaxFilter(data, firstPR, lastPR, prPropsToGet);
  done = includesPRNum(data, lastPR);
  while (octokit.hasNextPage(response) && !done) {
    response = await octokit.getNextPage(response);
    let dataFiltered = minMaxFilter(response.data, firstPR, lastPR, prPropsToGet);
    data = data.concat(dataFiltered);
    done = includesPRNum(dataFiltered, lastPR);
  }
  return data;
};

exports.paginate = paginate;
