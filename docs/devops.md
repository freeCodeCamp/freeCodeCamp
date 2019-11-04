<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Developer Operations at freeCodeCamp.org

Thanks for your interest in learning more about how we do DevOps for the platform at freeCodeCamp.org.

This guide will help you understand our infrastructure stack and how we maintain our platforms. While this guide does not have exhaustive details for all operations, it could be used as a reference for your understanding of the systems.

Let us know, if you have feedback or queries, and we will be happy to clarify.

## How do we build, test and deploy the codebase?

Our codebase is continuously built, tested and deployed  to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**. 

This involves three steps to be followed in sequence: 

First, new changes are merged into our primary development branch (`master`) in form of pull requests. Next, these changes are run through a series of automated tests. And finally, once the tests pass we release the changes (or update them if needed) to deployments on our infrastructure.

### Building the codebase - Mapping Git Branches to Deployments.

Typically, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (the default development branch) is merged into the [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) branch once a day and is released into an isolated infrastructure.

This is an intermediate release for our developers and volunteer contributors. It also known as our "staging/beta" application.

It is identical to our live production environment at `freeCodeCamp.org`, other than it using a separate set of databases, servers, web-proxies, etc. This isolation lets us test ongoing development and features in a "production" like scenario, without affecting regular users of freeCodeCamp.org's main platforms.

Once the developer team [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) is happy with the changes on the staging application, these changes are moved every few days to the [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) branch.

This is the final release that moves changes to our production platforms on freeCodeCamp.org.

### Testing changes - Integration and User Acceptance Testing.

We employ various levels of integration and acceptance testing to check on the quality of the code. All our tests are done through software like [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) and [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

We have unit tests for testing our challenge solutions, Server APIs and Client User interfaces. These help us test the integration between different components.

> Note: We are also in the process of writing end user tests which will help in replicating real world scenarios like updating an email or making a call to the API or third-party services.

Together these tests help in preventing issues from repeating themselves and ensure we do not introduce a bug while working on  another bug or a feature.

### Deploying Changes - Pushing changes to servers.

We have configured continuous delivery software to push changes to our development and production servers. Once the changes are pushed to the protected release branches, these should trigger our build and release pipelines:

You can take a look and browse these here:

| Build Pipeline | Release Pipeline |
| :------------- | :--------------- |
| Setup to build artifacts for deployments. | Setup to deploy artifacts to their destination servers. |
| [Go to builds](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build) | [Go to releases](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |

The build pipeline triggers the release pipeline after a hold of 5 minutes for our staff to go in and intervene if necessary.
The code/config is publicly accessible on Azure's Dev Dashboard. Write access to this is limited to the freeCodeCamp.org staff team.

We recommend not pushing more than 3-4 builds to the pipelines within a day and not more than one within the hour. This is because our artifacts are quite large and would put a load on our servers when deploying.

## Triggering a build, test and deployment.

Currently, only members on the developer team can push to the production branches. The changes to the `production-*` branches can land only via fast-forward merge to the [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> Note: In the upcoming days we would improve this flow to be done via pull-requests, for better access management and transparency.

### Pushing changes to Staging Applications.

1. Configure your remotes correctly.

   ```sh
   freeCodeCamp on master is 📦 v0.0.1 via ⬢ v10.16.0
   ❯ git remote -v
   origin	git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin	git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream	git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream	git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Make sure your `master` branch is pristine and in sync with the upstream.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Check that the Travis CI is passing on the `master` branch for upstream.

   The [continuous integration](https://travis-ci.org/freeCodeCamp/freeCodeCamp/branches) tests should be green and PASSING for the `master` branch.

    <details>
      <summary>
        Checking status on Travis CI (screenshot)
      </summary>
      <br>
      <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png" alt="Check build status on Travis CI">
    </details>

   If this is failing you should stop and investigate the errors.

4. Confirm that you are able to build the repository locally.

   ```
   npm run clean-and-develop
   ```

5. Move changes from `master` to `production-staging` via a fast-forward merge

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   You will not be able to force push and if you have re-written the history in anyway these commands will error out. If they do, you may have done something incorrectly and you should just start over.

And that's it, this will automatically trigger a build on the build pipeline for the `production-staging` branch. Typically this takes ~20-25 minutes for the all the applications. Once the build is complete, it will save the artifacts as `.zip` files in a cold storage to be retrieved and used by the release pipeline.

The release pipeline automatically triggers itself when a fresh artifact is available from the connected build pipeline. For the staging applications this is completely automated and the artifacts are pushed to the client CDN and the API servers. They typically take ~15-20 mins for the client, and ~5 mins for the API servers to be available live.

This makes each release from code push to being available on the staging applications ~60 mins.

### Pushing changes to Production Applications.

The process is mostly the same as the staging applications, with a few extra checks in place. This is just to make sure, we do not break anything on freeCodeCamp.org which can see hundreds of users using it at any moment.

> #### DO NOT execute these commands until you have verified that everything is working on the staging application. You should not bypass or skip any testing on staging before proceeding further.

1. Make sure your `production-staging` branch is pristine and in sync with the upstream.

   ```sh
   git checkout production-staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Move changes from `production-staging` to `production-current` via a fast-forward merge

   ```
   git checkout production-current
   git merge production-staging
   git push upstream
   ```

   You will not be able to force push and if you have re-written the history in anyway these commands will error out. If they do, you may have done something incorrectly and you should just start over.

And that's it, this will automatically trigger a build on the build pipeline for the `production-current` branch. Typically this also takes ~20-25 minutes for the all the applications like explained previously.

Here are some additional steps that need to be followed by a freeCodeCamp.org Staff developer. To prevent any accidental pushes we have a couple of manual approval steps configured on the pipelines.

Once a build artifact is ready on the `production-current` branch, it will trigger a release on the release pipeline. 

Next, freeCodeCamp.org developer staff team will receive an email. They can either *approve* or *reject* the release. Approval or rejection depends, if changes were nicely working and tested on the staging application. Each approval lasts only for 4 hours to avoid queuing up. Post the limit it gets auto rejected, wherein a staff will re-trigger the release pipeline manually.

For staff use:

| Approve Release |
| :-------------: |
| Check your email for a direct link or [Open release dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release?_a=releases&view=mine&definitionId=6) |

Once one of the members approves a release, the pipeline will push the changes live to freeCodeCamp.org's production CDN and API servers. They typically take ~15-20 mins for the client, and ~5 mins for the API servers to be available live.

As a final step, a staff member will also manually click the publish deploy button on Netlify's deployment's dashboard.

For staff use:

| Publish or Rollback on Netlify |
| :----------------------------: |
| [Open Netlify deployments](https://app.netlify.com/sites/freecodecamp-org/deploys) |


## Build and Deployment Status

Here is the current build and deployment status of the codebase.

### Build Status

| Platform        | Type       | Status      |
| :-------------- | :--------- | :---------: |
| Travis CI       | Unit Tests | [![Travis CI Build Status](https://travis-ci.org/freeCodeCamp/freeCodeCamp.svg?branch=master)](https://travis-ci.org/freeCodeCamp/freeCodeCamp) |
| Azure Pipelines | Artifacts  | [![Azure Pipelines Build Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/freeCodeCamp-CI)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build) |

### Deployment Status

| Application  | Version    | Status      |
| :----------- | :--------- | :---------: |
| Client       | Beta/Next  | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/8)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| API          | Beta/Next  | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/9)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| Client       | Production | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/6/22)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| API          | Production | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/6/23)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |

## Early access and beta testing upcoming versions of freeCodeCamp.org's platform and curriculum

We welcome you to test these releases in a **"public beta testing"** mode and get early access to upcoming features to the platforms. Sometimes these features/changes are referred to as **next, beta, staging,** etc. interchangeably.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent** and **stable** for everyone.

We thank you for reporting bugs that you encounter and help in making freeCodeCamp.org better. You rock!

## Identifying the upcoming version of platform

The domain name will be different than **`freeCodeCamp.org`**. Currently this public beta testing version is available at:

<h3 align="center"><a href='https://www.freecodecamp.dev' _target='blank'><code>www.freecodecamp.dev</code></a></h4>

## Identifying the current version of platform

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

The dev-team merges changes from the `production-staging` branch to `production-current` when they release changes. The top commit should be what you see live on the site. You can identify the exact version deployed by visiting the build and deployment logs available below in the status section.

## Known Limitations

There will be some known limitations and tradeoffs when using the beta version of the platform.

- #### All data / personal progress on these beta applications `will NOT be saved or carried over` to production.

  **Users on the beta version will have a separate account from the production.** The beta version uses a physically separate database from production. This gives us the ability to prevent any accidental loss of data or modifications. The dev team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta applications.

  Deployment is expected to be frequent and in rapid iterations, sometimes multiple times a day. As a result there will be unexpected downtime at times or broken functionality on the beta version.

- #### Do not send regular users to this site as a measure of confirming a fix

  The beta site is and always has been to augment local development and testing, nothing else. It's not a promise of what’s coming, but a glimpse of what is being worked upon.

- #### Sign in and authentication only available via email, not social.

  Google, GitHub and Facebook logins will NOT be available in this beta mode. This is simply a technical limitation, because we are using a separate `test domain` for this version. **Email logins will work just as fine.**

  The sign page may look different than production.

## Reporting issues and leaving feedback

Please open fresh issues for discussions and reporting bugs. You can label them as **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** for triage.

You may send an email to `dev@freecodecamp.org` if you have any queries. As always all security vulnerabilities should be reported to `security@freecodecamp.org` instead of the public tracker and forum.
