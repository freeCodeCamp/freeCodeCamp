exports.octokitConfig = {
    timeout: 0, // 0 means no request timeout
    headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': 'octokit/rest.js v1.2.3' // v1.2.3 will be current version
    },
    // custom GitHub Enterprise URL
    baseUrl: 'https://api.github.com',
    // Node only: advanced request options can be passed as http(s) agent
    agent: undefined
}

exports.octokitAuth = {
    type: 'basic',
    username: process.env.myUN,
    password: process.env.myPW
}
