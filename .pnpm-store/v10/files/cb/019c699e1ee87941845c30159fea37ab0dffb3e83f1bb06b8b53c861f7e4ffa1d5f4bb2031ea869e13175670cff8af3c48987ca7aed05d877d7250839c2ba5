{
  "name": "hosted-git-info",
  "version": "2.8.9",
  "description": "Provides metadata and conversions from repository urls for Github, Bitbucket and Gitlab",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/npm/hosted-git-info.git"
  },
  "keywords": [
    "git",
    "github",
    "bitbucket",
    "gitlab"
  ],
  "author": "Rebecca Turner <me@re-becca.org> (http://re-becca.org)",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/npm/hosted-git-info/issues"
  },
  "homepage": "https://github.com/npm/hosted-git-info",
  "scripts": {
    "prerelease": "npm t",
    "postrelease": "npm publish --tag=ancient-legacy-fixes && git push --follow-tags",
    "posttest": "standard",
    "release": "standard-version -s",
    "test:coverage": "tap --coverage-report=html -J --coverage=90 --no-esm test/*.js",
    "test": "tap -J --coverage=90 --no-esm test/*.js"
  },
  "devDependencies": {
    "standard": "^11.0.1",
    "standard-version": "^4.4.0",
    "tap": "^12.7.0"
  },
  "files": [
    "index.js",
    "git-host.js",
    "git-host-info.js"
  ]
}
