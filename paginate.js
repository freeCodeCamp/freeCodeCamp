exports.paginate = async function paginate (method, methodProps, octokit, maxPages = 10000) {
    let response = await method(methodProps);
    let { data } = response;
    let pageNum = 1;
    while (octokit.hasNextPage(response) && pageNum < maxPages) {
      response = await octokit.getNextPage(response);
      data = data.concat(response.data);
      if (pageNum % 5 === 0) {
        console.log(`page #${pageNum}`);
      }
      pageNum++;
    }
    return data;
}
