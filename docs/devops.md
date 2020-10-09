# DevOps Handbook

This guide will help you understand our infrastructure stack and how we maintain our platforms. While this guide does not have exhaustive details for all operations, it could be used as a reference for your understanding of the systems.

Let us know, if you have feedback or queries, and we will be happy to clarify.

# Flight Manual - Code deployments

This repository is continuously built, tested and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

This involves three steps to be followed in sequence:

1. New changes (both fixes and features) are merged into our primary development branch (`master`) via pull requests.
2. These changes are run through a series of automated tests.
3. Once the tests pass we release the changes (or update them if needed) to deployments on our infrastructure.

#### Building the codebase - Mapping Git Branches to Deployments.

Typically, [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (the default development branch) is merged into the [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) branch once a day and is released into an isolated infrastructure.

This is an intermediate release for our developers and volunteer contributors. It is also known as our "staging" or "beta" release.

It is identical to our live production environment at `freeCodeCamp.org`, other than it using a separate set of databases, servers, web-proxies, etc. This isolation lets us test ongoing development and features in a "production" like scenario, without affecting regular users of freeCodeCamp.org's main platforms.

Once the developer team [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) is happy with the changes on the staging platform, these changes are moved every few days to the [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) branch.

This is the final release that moves changes to our production platforms on freeCodeCamp.org.

#### Testing changes - Integration and User Acceptance Testing.

We employ various levels of integration and acceptance testing to check on the quality of the code. All our tests are done through software like [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) and [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

We have unit tests for testing our challenge solutions, Server APIs and Client User interfaces. These help us test the integration between different components.

> [!NOTE]
> We are also in the process of writing end user tests which will help in replicating real world scenarios like updating an email or making a call to the API or third-party services.

Together these tests help in preventing issues from repeating themselves and ensure we do not introduce a bug while working on another bug or a feature.

#### Deploying Changes - Pushing changes to servers.

We have configured continuous delivery software to push changes to our development and production servers.

Once the changes are pushed to the protected release branches, a build pipeline is automatically triggered for the branch. The build pipelines are responsible for building artifacts and keeping them in a cold storage for later use.

The build pipeline goes on to trigger a corresponding release pipeline if it completes a successful run. The release pipelines are responsible for collecting the build artifacts, moving them to the servers and going live.

Status of builds and releases are [available here](#build-test-and-deployment-status).

## Trigger a build, test and deploy

Currently, only members on the developer team can push to the production branches. The changes to the `production-*` branches can land only via fast-forward merge to the [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE]
> In the upcoming days we would improve this flow to be done via pull-requests, for better access management and transparency.

### Pushing changes to Staging Applications.

1. Configure your remotes correctly.

   ```sh
   git remote -v
   ```

   **Results:**

   ```
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

   The [continuous integration](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) tests should be green and PASSING for the `master` branch.

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

   > [!NOTE]
   > You will not be able to force push and if you have re-written the history in anyway these commands will error out.
   >
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `production-staging` branch. Once the build is complete, the artifacts are saved as `.zip` files in a cold storage to be retrieved and used later.

The release pipeline is triggered automatically when a fresh artifact is available from the connected build pipeline. For staging platforms, this process does not involve manual approval and the artifacts are pushed to the Client CDN and API servers.

> [!TIP|label:Estimates]
> Typically the build run takes ~20-25 minutes to complete followed by the release run which takes ~15-20 mins for the client, and ~5-10 mins for the API to be available live. From code push to being live on the staging platforms the whole process takes **~35-45 mins** in total.

### Pushing changes to Production Applications.

The process is mostly the same as the staging platforms, with a few extra checks in place. This is just to make sure, we do not break anything on freeCodeCamp.org which can see hundreds of users using it at any moment.

| Do NOT execute these commands unless you have verified that everything is working on the staging platform. You should not bypass or skip any testing on staging before proceeding further. |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


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

   > [!NOTE]
   > You will not be able to force push and if you have re-written the history in anyway these commands will error out.
   >
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `production-current` branch. Once a build artifact is ready, it will trigger a run on the release pipeline.

> [!TIP|label:Estimates]
> Typically the build run takes ~20-25 minutes to complete.

**Additional Steps for Staff Action**

One a release run is triggered, members of the developer staff team will receive an automated manual intervention email. They can either _approve_ or _reject_ the release run.

If the changes are working nicely and have been tested on the staging platform, then it can be approved. The approval must be given within 4 hours of the release being triggered before getting rejected automatically. A staff can re-trigger the release run manually for rejected runs, or wait for the next cycle of release.

For staff use:

| Check your email for a direct link or [go to the release dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) after the build run is complete. |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |


Once one of the staff members approves a release, the pipeline will push the changes live to freeCodeCamp.org's production CDN and API servers. They typically take ~15-20 mins for the client, and ~5 mins for the API servers to be available live.

> [!TIP|label:Estimates]
> The release run typically takes ~15-20 mins for each client instance, and ~5-10 mins for each API instance to be available live. From code push to being live on the production platforms the whole process takes **~90-120 mins** in total (not counting the wait time for the staff approval).

## Build, Test and Deployment Status

Here is the current test, build and deployment status of the codebase.

| Type             | Branch                                                                                       | Status                                                                                                                                                                                                                                              | Dashboard                                                                                 |
| :--------------- | :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| CI Tests         | [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                         | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Go to status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Tests         | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Go to status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Build Pipeline   | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Build Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Release Pipeline | [`production-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                     | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Tests         | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Travis CI Build Status](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Go to status dashboard](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Build Pipeline   | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Build Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Release Pipeline | [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                     | [Go to status dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Early access and beta testing

We welcome you to test these releases in a **"public beta testing"** mode and get early access to upcoming features to the platforms. Sometimes these features/changes are referred to as **next, beta, staging,** etc. interchangeably.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent** and **stable** for everyone.

We thank you for reporting bugs that you encounter and help in making freeCodeCamp.org better. You rock!

### Identifying the upcoming version of the platforms

Currently a public beta testing version is available at:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>freecodecamp.dev</a></h1>

> [!NOTE]
> The domain name is different than **`freeCodeCamp.org`**. This is intentional to prevent search engine indexing and avoid confusion for regular users of the platform.

### Identifying the current version of the platforms

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

The dev-team merges changes from the `production-staging` branch to `production-current` when they release changes. The top commit should be what you see live on the site.

You can identify the exact version deployed by visiting the build and deployment logs available in the status section. Alternatively you can also ping us in the [contributors chat room](https://gitter.im/FreeCodeCamp/Contributors) for a confirmation.

### Known Limitations

There are some known limitations and tradeoffs when using the beta version of the platform.

- #### All data / personal progress on these beta platforms `will NOT be saved or carried over` to production.

  **Users on the beta version will have a separate account from the production.** The beta version uses a physically separate database from production. This gives us the ability to prevent any accidental loss of data or modifications. The dev team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta platforms.

  Deployment is expected to be frequent and in rapid iterations, sometimes multiple times a day. As a result there will be unexpected downtime at times or broken functionality on the beta version.

- #### Do not send regular users to this site as a measure of confirming a fix

  The beta site is and always has been to augment local development and testing, nothing else. It's not a promise of what’s coming, but a glimpse of what is being worked upon.

- #### Sign page may look different than production

  We use a test tenant for freecodecamp.dev on Auth0, and hence do not have the ability to set a custom domain. This makes it so that all the redirect callbacks and the login page appear at a default domain like: `https://freecodecamp-dev.auth0.com/`. This does not affect the functionality is as close to production as we can get.

## Reporting issues and leaving feedback

Please open fresh issues for discussions and reporting bugs. You can label them as **[`release: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** for triage.

You may send an email to `dev[at]freecodecamp.org` if you have any queries. As always all security vulnerabilities should be reported to `security[at]freecodecamp.org` instead of the public tracker and forum.

# Flight Manual - Server Maintenance

> [!WARNING]
>
> 1. The guide applies to the **freeCodeCamp Staff members only**.
> 2. These instructions should not be considered exhaustive, please use caution.

As a member of the staff, you may have been given access to our cloud service providers like Azure, Digital Ocean, etc.

Here are some handy commands that you can use to work on the Virtual Machines (VM), for instance performing maintenance updates or doing general houeskeeping.

## Get a list of the VMs

> [!NOTE] While you may already have SSH access to the VMs, that alone will not
> let you list VMs unless you been granted access to the cloud portals as well.

### Azure

Install Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(One-time) Login:**

```
az login
```

> **Get the list of VM names and P addresses:**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Install Digital Ocean CLI `doctl`:
https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

Authentication and context switching:
https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Spin a VM (or VM Scale Set)

> Todo: Add instructions for spinning VM(s)

<!--

The below instructions are stale.

### 0. Prerequisites (workspace Setup) for Staff

Get a login session on `azure cli`, and clone the
[`infra`](https://github.com/freeCodeCamp/infra) for setting up template
workspace.

```console
az login
git clone https://github.com/freeCodeCamp/infra
cd infra
```

Use the Scratchpad subdirectory for temporary files, and making one-off edits.
The contents in this subdirectory are intentionally ignored from source control.

### 1. Provision VMs on Azure.

List all Resource Groups

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
```

Create a Resource Group

```
az group create --location eastus --name stg-rg
```

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
stg-rg                             eastus         Succeeded
```

Next per the need, provision a single VM or a scaleset.

#### A. provision single instances

```console
az vm create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

#### B. provision scaleset instance

```console
az vmss create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_SCALESET_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --upgrade-policy-mode automatic \
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

> [!NOTE]
>
> - The custom-data config should allow you to configure and add SSH keys,
>   install packages etc. via the `cloud-init` templates in your local
>   workspace. Tweak the files in your local workspace as needed. The cloud-init
>   config is optional and you can omit it completely to do setups manually as
>   well.
>
> - The virtual machine SKU is something like: **Standard_B2s** which can be
>   retrived by executing something like
>   `az vm list-sizes -l eastus --output table` or checking the Azure portal
>   pricing.

-->

## Keep VMs updated

You should keep the VMs up to date by performing updates and upgrades. This will
ensure that the virtual machine is patched with latest security fixes.

> [!WARNING] Before you run these commands:
>
> - Make sure that the VM has been provisioned completely and there is no
>   post-install steps running.
> - If you are updating packages on a VM that is already serving an application,
>   make sure the app has been stopped / saved. Package updates will cause
>   network bandwidth, memory and/or CPU usage spikes leading to outages on
>   running applications.

Update package information

```console
sudo apt update
```

Upgrade installed packages

```console
sudo apt upgrade -y
```

Cleanup unused packages

```console
sudo apt autoremove -y
```

## Work on Web Servers (Proxy)

We are running load balanced (Azure Load Balancer) instances for our web
servers. These servers are running NGINX which reverse proxy all of the traffic
to freeCodeCamp.org from various applications running on their own
infrastructures.

The NGINX config is available on
[this repository](https://github.com/freeCodeCamp/nginx-config).

### First Install

Provisioning VMs with the Code

#### 1. (Optional) Install NGINX and configure from repository.

The basic setup should be ready OOTB, via the cloud-init configuration. SSH and
make changes as necessary for the particular instance(s).

If you did not use the cloud-init config previously use the below for manual
setup of NGINX and error pages:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

#### 2. Install Cloudflare origin certificates and upstream application config.

Get the Cloudflare origin certificates from the secure storage and install at
required locations.

**OR**

Move over existing certificates:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

Update Upstream Configurations:

```console
vi configs/upstreams.conf
```

Add/update the source/origin application IP addresses.

#### 3. Setup networking and firewalls.

Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

#### 4. Add the VM to the load balancer backend pool.

Configure and add rules to load balancer if needed. You may also need to add the
VMs to load balancer backend pool if needed.

### Logging and Monitoring

1. Check status for NGINX service using the below command:

```console
sudo systemctl status nginx
```

2. Logging and monitoring for the servers are available at:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>

### Updating Instances (Maintenance)

Config changes to our NGINX instances are maintained on GitHub, these should be
deployed on each instance like so:

1. SSH into the instance and enter sudo

```console
sudo su
```

2. Get the latest config code.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Test and reload the config
   [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

## Work on API Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup logrotate and startup on boot

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # or any other branch to be deployed
   ```

4. Create the `.env` from the secure credentials storage.

5. Create the `google-credentials.json` from the secure credentials storage.

6. Install dependencies

   ```console
   npm ci
   ```

7. Build the server

   ```console
   npm run ensure-env && npm run build:server
   ```

8. Start Instances

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

### Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can
be a rolling update or a manual update. The later is essential when changing
dependencies or adding enviroment variables.

> [!DANGER] The automated pipelines are not handling dependencies updates at the
> minute. We need to do a manual update before any deployment pipeline runs.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

```console
pm2 stop all
```

2. Install dependencies

```console
npm ci
```

3. Build the server

```console
npm run ensure-env && npm run build:server
```

4. Start Instances

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You
> should not need to run these commands. These are here for documentation.

## Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup logrotate and startup on boot

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone client config, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Start placeholder instances for the web client, these will be updated with
   artifacts from the Azure pipline.

   > Todo: This setup needs to move to S3 or Azure Blob storage

   ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary.sh
   pm2 delete client-primary
   pm2 start  ./client-start-primary.sh --name client-primary
   echo "serve -c ../../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary.sh
   pm2 delete client-secondary
   pm2 start  ./client-start-secondary.sh --name client-secondary
   ```

### Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can
be a rolling update or a manual update. The later is essential when changing
dependencies or adding enviroment variables.

> [!DANGER] The automated pipelines are not handling dependencies updates at the
> minute. We need to do a manual update before any deployment pipeline runs.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

   ```console
   pm2 stop all
   ```

2. Install or update dependencies

3. Start Instances

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You
> should not need to run these commands. These are here for documentation.
