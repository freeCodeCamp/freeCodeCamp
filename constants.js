require('dotenv').config();
const owner = process.env.REPOSITORY_OWNER;
const repo = process.env.REPOSITORY;
const fccBaseUrl = `https://github.com/${owner}/${repo}/`;
const prBaseUrl = `${fccBaseUrl}pull/`;

module.exports = { owner, repo, fccBaseUrl, prBaseUrl }
