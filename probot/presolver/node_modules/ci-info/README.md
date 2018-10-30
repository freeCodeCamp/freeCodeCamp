# ci-info

Get details about the current Continuous Integration environment.

Please [open an
issue](https://github.com/watson/ci-info/issues/new?template=ci-server-not-detected.md)
if your CI server isn't properly detected :)

[![npm](https://img.shields.io/npm/v/ci-info.svg)](https://www.npmjs.com/package/ci-info)
[![Build status](https://travis-ci.org/watson/ci-info.svg?branch=master)](https://travis-ci.org/watson/ci-info)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```bash
npm install ci-info --save
```

## Usage

```js
var ci = require('ci-info')

if (ci.isCI) {
  console.log('The name of the CI server is:', ci.name)
} else {
  console.log('This program is not running on a CI server')
}
```

## Supported CI tools

Officially supported CI servers:

| Name | Constant |
|------|----------|
| [AWS CodeBuild](https://aws.amazon.com/codebuild/) | `ci.CODEBUILD` |
| [AppVeyor](http://www.appveyor.com) | `ci.APPVEYOR` |
| [Bamboo](https://www.atlassian.com/software/bamboo) by Atlassian | `ci.BAMBOO` |
| [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) | `ci.BITBUCKET` |
| [Bitrise](https://www.bitrise.io/) | `ci.BITRISE` |
| [Buddy](https://buddy.works/) | `ci.BUDDY` |
| [Buildkite](https://buildkite.com) | `ci.BUILDKITE` |
| [CircleCI](http://circleci.com) | `ci.CIRCLE` |
| [Cirrus CI](https://cirrus-ci.org) | `ci.CIRRUS` |
| [Codeship](https://codeship.com) | `ci.CODESHIP` |
| [Drone](https://drone.io) | `ci.DRONE` |
| [dsari](https://github.com/rfinnie/dsari) | `ci.DSARI` |
| [GitLab CI](https://about.gitlab.com/gitlab-ci/) | `ci.GITLAB` |
| [GoCD](https://www.go.cd/) | `ci.GOCD` |
| [Hudson](http://hudson-ci.org) | `ci.HUDSON` |
| [Jenkins CI](https://jenkins-ci.org) | `ci.JENKINS` |
| [Magnum CI](https://magnum-ci.com) | `ci.MAGNUM` |
| [Sail CI](https://sail.ci/) | `ci.SAIL` |
| [Semaphore](https://semaphoreci.com) | `ci.SEMAPHORE` |
| [Shippable](https://www.shippable.com/) | `ci.SHIPPABLE` |
| [Solano CI](https://www.solanolabs.com/) | `ci.SOLANO` |
| [Strider CD](https://strider-cd.github.io/) | `ci.STRIDER` |
| [TaskCluster](http://docs.taskcluster.net) | `ci.TASKCLUSTER` |
| [Team Foundation Server](https://www.visualstudio.com/en-us/products/tfs-overview-vs.aspx) by Microsoft | `ci.TFS` |
| [TeamCity](https://www.jetbrains.com/teamcity/) by JetBrains | `ci.TEAMCITY` |
| [Travis CI](http://travis-ci.org) | `ci.TRAVIS` |

## API

### `ci.name`

A string. Will contain the name of the CI server the code is running on.
If not CI server is detected, it will be `null`.

Don't depend on the value of this string not to change for a specific
vendor. If you find your self writing `ci.name === 'Travis CI'`, you
most likely want to use `ci.TRAVIS` instead.

### `ci.isCI`

A boolean. Will be `true` if the code is running on a CI server.
Otherwise `false`.

Some CI servers not listed here might still trigger the `ci.isCI`
boolean to be set to `true` if they use certain vendor neutral
environment variables. In those cases `ci.name` will be `null` and no
vendor specific boolean will be set to `true`.

### `ci.isPR`

A boolean if PR detection is supported for the current CI server. Will
be `true` if a PR is being tested. Otherwise `false`. If PR detection is
not supported for the current CI server, the value will be `null`.

### `ci.<VENDOR-CONSTANT>`

A vendor specific boolean constants is exposed for each support CI
vendor. A constant will be `true` if the code is determined to run on
the given CI server.  Otherwise `false`.

Examples of vendor constants are `ci.TRAVIS` or `ci.APPVEYOR`. For a
complete list, see the support table above.

Deprecated vendor constants that will be removed in the next major
release:

- `ci.TDDIUM` (Solano CI) This have been renamed `ci.SOLANO`

## License

[MIT](LICENSE)
