require('dotenv').config();

const owner = process.env.REPOSITORY_OWNER;
const repo = process.env.REPOSITORY;
const fccBaseUrl = `https://github.com/${owner}/${repo}/`;
const prBaseUrl = `${fccBaseUrl}pull/`;

const octokitConfig = {
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

const octokitAuth = {
    type: 'basic',
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_ACCESS_TOKEN
};

module.exports = { owner, repo, prBaseUrl, octokitConfig, octokitAuth }
