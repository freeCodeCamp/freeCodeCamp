<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# DevOps Guide

> ### :warning: THIS GUIDE IS NOT LIVE YET. :warning:
> The processes described here will come to effect in the upcoming version of freeCodeCamp.org.
> Some parts of the guide are applicable on the beta application.

## Developer Operations at freeCodeCamp.org

We continuously deploy our current `master`, the default development branch on a **separate isolated environment**.

Typically, the `master` branch is merged into the `production-staging` branch once a day and released into an isolated infrastructure. This is known as our "staging / beta" application. It is identical to our live production environment at `freeCodeCamp.org`, other than it using a separate set of databases. This isolation lets us test ongoing development and features in a "production like" scenario, without affecting regular users of freeCodeCamp.org's platforms. Once the developer teams are satisfied with the changes on the staging application, these changes are moved every few days to the `production-current` branch. This branch as the name suggests is what you would see live on `freeCodeCamp.org`.

We welcome you to test these releases in a **"public beta testing"** mode and get early access to upcoming features to the platforms. Sometimes these features/changes are referred to as **next, beta, staging,** etc. interchangeably.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent** and **stable** for everyone.

We thank you for reporting bugs that you encounter and help in making freeCodeCamp.org better. You rock!

## Identifying the upcoming version of freeCodeCamp

The domain name will be different than **`freeCodeCamp.org`**. Currently this public beta testing version is available at:

<h3 align="center"><a href='https://www.freecodecamp.dev' _target='blank'><code>www.freecodecamp.dev</code></a></h4>

## Build and Deployment Status

Usually the dev team will merge the changes from the master branch to special branch called `production-staging` (`beta/staging site`) when they deploy. Usually the top commit should be what you see live on the site.

We use Azure Pipelines and other CI software (Travis, GitHub Actions), to continiously test and deploy our applications.

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
| Client       | Production | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/12)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| API          | Production | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/11)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |

## Known Limitations

There will be some known limitations and tradeoffs when using this beta version of freeCodeCamp.

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

## ToDo: Add guidelines

- [ ] Checking and getting access to development logs and other resources
- [ ] Merging master into production-staging via fast forward
- [ ] ...
