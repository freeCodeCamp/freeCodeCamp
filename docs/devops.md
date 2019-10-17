<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Developer Operations at freeCodeCamp.org

Thanks for your interest in learning more about how we do DevOps for the platform at freeCodeCamp.org.

We have tried to keep the language in this guide as simple as possible for everyone. However, you may find some technical jargon in here. This is not an exhaustive guide for all operations, and is to be used just as a reference for your understanding of the systems.

## How we build and deploy the codebase?

We continuously build and deploy [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master), our default development branch on a **separate set of servers**.

Typically, the `master` branch is merged into the [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) branch once a day and released into an isolated infrastructure. We call this our "staging/beta" application.

It is identical to our live production environment at `freeCodeCamp.org`, other than it using a separate set of databases, servers, web-proxy, etc. This isolation lets us test ongoing development and features in a "production like" scenario, without affecting regular users of freeCodeCamp.org's platforms.

Once the developer team [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) is happy with the changes on the staging application, these changes are moved every few days to the [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) branch. We then release the changes to our live platforms on freeCodeCamp.org

We employ various levels of integration and acceptance testing to check on the quality of the code. All our tests are done through software like Travis and Azure Pipelines. Some of this automated, that is once changes are pushed to the corresponding branch, they get built and deployed on the platforms.

We welcome you to test these releases in a **"public beta testing"** mode and get early access to upcoming features to the platforms. Sometimes these features/changes are referred to as **next, beta, staging,** etc. interchangeably.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent** and **stable** for everyone.

We thank you for reporting bugs that you encounter and help in making freeCodeCamp.org better. You rock!

## Identifying the upcoming version of platform

The domain name will be different than **`freeCodeCamp.org`**. Currently this public beta testing version is available at:

<h3 align="center"><a href='https://www.freecodecamp.dev' _target='blank'><code>www.freecodecamp.dev</code></a></h4>

The dev-team merges changes from the `master` branch to `production-staging` when they release changes. Usually the top commit should be what you see live on the site. You can identify the exact version deployed by visiting the build and deployment logs available below in the status section.

## Identifying the current version of platform

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

The dev-team merges changes from the `production-staging` branch to `production-current` when they release changes. The top commit should be what you see live on the site. You can identify the exact version deployed by visiting the build and deployment logs available below in the status section.

## Build and Deployment Status

We use Azure Pipelines and other CI software (Travis, GitHub Actions), to continuously test and deploy our applications.

### Triggering a build

Currently, only the developer team can push to the production branches, because of the automated deployments on live sites. The changes to the `production-*` branches can land only via fast-forward merge to the [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> Note: In the upcoming days we would improve this flow to be done via pull-requests, for better access management and transparency.

1. Configure your remotes correctly.

   ```sh
   freeCodeCamp on master is 📦 v0.0.1 via ⬢ v10.16.0
   ❯ git remote -v
   origin	git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin	git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream	git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream	git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Make sure your master is pristine and in sync with the upstream.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Check that the Travis CI is passing on the master branch for upstream.

   - [ ] https://travis-ci.org/freeCodeCamp/freeCodeCamp/branches should be Green.

   ![Image - Check build status on Travis CI](/docs/images/devops/travis-build.png)

4. Confirm that you are able to build the repository locally.

   ```
   npm run clean-and-develop
   ```

5. Move changes from master to `production-staging`

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   You will not be able to force push and if you have re-written the history in anyway these commands will error out.

### Triggering a deployment

Once the changes are pushed to the production branches, these should trigger our build and release pipelines:

- Build Pipeline: https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build

  This pipeline is setup to build artifacts for deployments.


- Release Pipeline: https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release

  This pipeline is setup to deploy artifacts to their destination servers.

The build pipeline triggers the release pipeline after a hold of 15 minutes for our staff developers to go in and intervene if necessary. We would make these to have manual approvals in future for more faster builds.

For now, you should not trigger more than one build within an hour, and wait for a previous build to complete.

The code/config is publicly accessible on Azure's Dev Dashboard. Write access to this is limited to the freeCodeCamp.org staff team.

> Note: The release pipeline is intentionally not deploying to production site currently, before the upcoming release. This should change when the guide goes live in a few days.

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
| Client       | Production | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/13)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| API          | Production | Manual Deployments - Status Not Available |

## Known Limitations

There will be some known limitations and tradeoffs when using the beta version of the platform.

- #### All data / personal progress on these beta applications `will NOT be saved or carried over` to production.

  **Users on the beta version will have a separate account from the production.** The beta version uses a physically separate database from production. This gives us the ability to prevent any accidental loss of data or modifications. The dev team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta applications.

  Deployment is expected to be frequent and in rapid iterations, sometimes multiple times a day. As a result there will be unexpected downtime at times or broken functionality on the beta version. The dev team will usually notify for updates in the [Contributors Chat room](https://gitter.im/FreeCodeCamp/Contributors).

- #### Do not send regular users to this site as a measure of confirming a fix

  The beta site is and always has been to augment local development and testing, nothing else. It's not a promise of what’s coming, but a glimpse of what is being worked upon.

- #### Sign in and authentication only available via email, not social.

  Google, GitHub and Facebook logins will NOT be available in this beta mode. This is simply a technical limitation, because we are using a separate `test domain` for this version. **Email logins will work just as fine.**

  The sign page may look different than production (as a measure to isolate the development and the production databases.)

## Reporting issues and leaving feedback

Please open fresh issues for discussions and reporting bugs. You can label them as **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** for triage.

You may send an email to `dev@freecodecamp.org` if you have any queries. As always all security vulnerabilities should be reported to `security@freecodecamp.org` instead of the public tracker and forum.
