Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const module$1 = require('../utils/module.js');

function getSentryRelease(fallback) {
  if (process.env.SENTRY_RELEASE) {
    return process.env.SENTRY_RELEASE;
  }
  if (core.GLOBAL_OBJ.SENTRY_RELEASE?.id) {
    return core.GLOBAL_OBJ.SENTRY_RELEASE.id;
  }
  const possibleReleaseNameOfGitProvider = (
    // GitHub Actions - https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables
    process.env["GITHUB_SHA"] || // GitLab CI - https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
    process.env["CI_MERGE_REQUEST_SOURCE_BRANCH_SHA"] || process.env["CI_BUILD_REF"] || process.env["CI_COMMIT_SHA"] || // Bitbucket - https://support.atlassian.com/bitbucket-cloud/docs/variables-and-secrets/
    process.env["BITBUCKET_COMMIT"]
  );
  const possibleReleaseNameOfCiProvidersWithSpecificEnvVar = (
    // AppVeyor - https://www.appveyor.com/docs/environment-variables/
    process.env["APPVEYOR_PULL_REQUEST_HEAD_COMMIT"] || process.env["APPVEYOR_REPO_COMMIT"] || // AWS CodeBuild - https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-env-vars.html
    process.env["CODEBUILD_RESOLVED_SOURCE_VERSION"] || // AWS Amplify - https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html
    process.env["AWS_COMMIT_ID"] || // Azure Pipelines - https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml
    process.env["BUILD_SOURCEVERSION"] || // Bitrise - https://devcenter.bitrise.io/builds/available-environment-variables/
    process.env["GIT_CLONE_COMMIT_HASH"] || // Buddy CI - https://buddy.works/docs/pipelines/environment-variables#default-environment-variables
    process.env["BUDDY_EXECUTION_REVISION"] || // Builtkite - https://buildkite.com/docs/pipelines/environment-variables
    process.env["BUILDKITE_COMMIT"] || // CircleCI - https://circleci.com/docs/variables/
    process.env["CIRCLE_SHA1"] || // Cirrus CI - https://cirrus-ci.org/guide/writing-tasks/#environment-variables
    process.env["CIRRUS_CHANGE_IN_REPO"] || // Codefresh - https://codefresh.io/docs/docs/codefresh-yaml/variables/
    process.env["CF_REVISION"] || // Codemagic - https://docs.codemagic.io/yaml-basic-configuration/environment-variables/
    process.env["CM_COMMIT"] || // Cloudflare Pages - https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
    process.env["CF_PAGES_COMMIT_SHA"] || // Drone - https://docs.drone.io/pipeline/environment/reference/
    process.env["DRONE_COMMIT_SHA"] || // Flightcontrol - https://www.flightcontrol.dev/docs/guides/flightcontrol/environment-variables#built-in-environment-variables
    process.env["FC_GIT_COMMIT_SHA"] || // Heroku #1 https://devcenter.heroku.com/articles/heroku-ci
    process.env["HEROKU_TEST_RUN_COMMIT_VERSION"] || // Heroku #2 https://devcenter.heroku.com/articles/dyno-metadata#dyno-metadata
    process.env["HEROKU_BUILD_COMMIT"] || // Heroku #3 (deprecated by Heroku, kept for backward compatibility)
    process.env["HEROKU_SLUG_COMMIT"] || // Railway - https://docs.railway.app/reference/variables#git-variables
    process.env["RAILWAY_GIT_COMMIT_SHA"] || // Render - https://render.com/docs/environment-variables
    process.env["RENDER_GIT_COMMIT"] || // Semaphore CI - https://docs.semaphoreci.com/ci-cd-environment/environment-variables
    process.env["SEMAPHORE_GIT_SHA"] || // TravisCI - https://docs.travis-ci.com/user/environment-variables/#default-environment-variables
    process.env["TRAVIS_PULL_REQUEST_SHA"] || // Vercel - https://vercel.com/docs/v2/build-step#system-environment-variables
    process.env["VERCEL_GIT_COMMIT_SHA"] || process.env["VERCEL_GITHUB_COMMIT_SHA"] || process.env["VERCEL_GITLAB_COMMIT_SHA"] || process.env["VERCEL_BITBUCKET_COMMIT_SHA"] || // Zeit (now known as Vercel)
    process.env["ZEIT_GITHUB_COMMIT_SHA"] || process.env["ZEIT_GITLAB_COMMIT_SHA"] || process.env["ZEIT_BITBUCKET_COMMIT_SHA"]
  );
  const possibleReleaseNameOfCiProvidersWithGenericEnvVar = (
    // CloudBees CodeShip - https://docs.cloudbees.com/docs/cloudbees-codeship/latest/pro-builds-and-configuration/environment-variables
    process.env["CI_COMMIT_ID"] || // Coolify - https://coolify.io/docs/knowledge-base/environment-variables
    process.env["SOURCE_COMMIT"] || // Heroku #3 https://devcenter.heroku.com/changelog-items/630
    process.env["SOURCE_VERSION"] || // Jenkins - https://plugins.jenkins.io/git/#environment-variables
    process.env["GIT_COMMIT"] || // Netlify - https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    process.env["COMMIT_REF"] || // TeamCity - https://www.jetbrains.com/help/teamcity/predefined-build-parameters.html
    process.env["BUILD_VCS_NUMBER"] || // Woodpecker CI - https://woodpecker-ci.org/docs/usage/environment
    process.env["CI_COMMIT_SHA"]
  );
  return possibleReleaseNameOfGitProvider || possibleReleaseNameOfCiProvidersWithSpecificEnvVar || possibleReleaseNameOfCiProvidersWithGenericEnvVar || fallback;
}
const defaultStackParser = core.createStackParser(core.nodeStackLineParser(module$1.createGetModuleFromFilename()));

exports.defaultStackParser = defaultStackParser;
exports.getSentryRelease = getSentryRelease;
//# sourceMappingURL=api.js.map
