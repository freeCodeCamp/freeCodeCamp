# DevOps ハンドブック

このガイドは、インフラストラクチャスタックとプラットフォームをどのように維持するかを理解するのに役立ちます。 このガイドで、すべての操作について詳しく説明しているわけではありませんが、システムを理解する上での参考になります。

ご意見やご質問があれば、どうぞご連絡ください。喜んでご説明いたします。

# フライトマニュアル - コードデプロイ

このリポジトリは、継続的に構築され、テストされ、**インフラストラクチャの個別のセット (サーバー、データベース、CDNなど)** にデプロイされます。

これには3つのステップが含まれます。

1. 新規変更 (修正および機能変更の両方を含む) は、プルリクエストによりプライマリ開発ブランチ (`main`) にマージされます。
2. これらの変更は、一連の自動テストで実行されます。
3. テストに合格すると、インフラストラクチャ上でのデプロイメントに対して変更をリリースします(または必要に応じて更新します)。

#### コードベースのビルド - Git ブランチのデプロイメントへのマッピング

通常、[`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (デフォルトの開発ブランチ) は、[`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) ブランチに 1 日 1 回マージされ、分離されたインフラストラクチャにリリースされます。

これは開発者とボランティアのコントリビューター用の中間リリースです。 「ステージング」または「ベータ」リリースとも呼ばれます。

それは `freeCodeCamp.org` のライブプロダクション環境と同じで、データベース、サーバー、Web プロキシなどの別々のセットを使用しています。 この分離により、freeCodeCamp.org の main プラットフォームの正規ユーザーに影響を与えることなく、「本番」のようなシナリオで継続的な開発と機能をテストすることができます。

開発者チーム [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) が、ステージングプラットフォームでの変更に満足したら、これらの変更は数日ごとに [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current) ブランチに移されます。

これが freeCodeCamp.org で本番プラットフォームに変更を加えた最終リリースです。

#### 変更のテスト - 統合テストとユーザー承認テスト

私たちは、コードの品質を確認するために、様々なレベルの統合と受け入れテストを採用しています。 すべてのテストは、[GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) や [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) のようなソフトウェアにより実行されます。

私たちは、チャレンジソリューション、Server API、クライアントユーザーインターフェースをテストするための単体テストを行っています。 これらは、異なるコンポーネント間の統合をテストするのに役立ちます。

> [!NOTE] また、メールの更新や API やサードパーティサービスへの呼び出しなど、現実世界のシナリオを再現するのに役立つエンドユーザーテストを作成中です。

これらのテストを組み合わせることで、問題が繰り返されるのを防ぎ、別のバグや機能の作業中にバグが発生しないようにします。

#### 変更のデプロイ - 変更をサーバーにプッシュする

開発サーバーと本番サーバーに変更をプッシュする継続的デリバリーソフトウェアを設定しています。

保護されたリリースブランチに変更がプッシュされると、そのブランチに対してビルドパイプラインが自動的にトリガーされます。 ビルドパイプラインは、アーティファクトを構築し、後で使用するためにコールドストレージに保管する責任があります。

実行が正常に完了すると、ビルドパイプラインは対応するリリースパイプラインをトリガーします。 リリースパイプラインは、ビルドアーティファクトを収集し、それらをサーバーに移動し、稼働させる責任があります。

ビルドとリリースのステータスは [こちら](#build-test-and-deployment-status) からご確認いただけます。

## ビルドをトリガー・テスト・デプロイする

現時点では、開発チームのメンバーのみが本番ブランチにプッシュできます。 `production-*` ブランチへの変更は、[`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) への早送りマージによってのみ可能です。

> [!NOTE] 今後、アクセス管理と透明性を向上させるために、プルリクエストを介してこのフローを改善します。

### ステージングアプリケーションに変更をプッシュする

1. リモートを正しく構成します。

   ```sh
   git remote -v
   ```

   **結果:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. `main` ブランチが初期状態であり、アップストリームと同期していることを確認してください。

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. GitHub CI がアップストリームの `main` ブランチを渡していることを確認してください。

   [継続的インテグレーション](https://github.com/freeCodeCamp/freeCodeCamp/actions) テストは、`main` ブランチに関して、緑色であり PASSING でなければなりません。 `main` ブランチコードを表示する際、コミットハッシュの横にある緑色のチェックマークをクリックします。

    <details> <summary> GitHub Actionsでステータスを確認する (スクリーンショット) </summary>
      <br>
      ![Check build status on GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   これに失敗した場合は、停止してエラーの確認をします。

4. リポジトリをローカルにビルドできることを確認します。

   ```
   npm run clean-and-develop
   ```

5. 早送りマージにより、変更を `main` から `prod-staging` に移行します。

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] 強制的にプッシュすることはできません。履歴を書き直した場合、これらのコマンドはエラーになります。
   > 
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `prod-staging` branch. Once the build is complete, the artifacts are saved as `.zip` files in a cold storage to be retrieved and used later.

The release pipeline is triggered automatically when a fresh artifact is available from the connected build pipeline. For staging platforms, this process does not involve manual approval and the artifacts are pushed to the Client CDN and API servers.

### Pushing changes to Production Applications.

The process is mostly the same as the staging platforms, with a few extra checks in place. This is just to make sure, we do not break anything on freeCodeCamp.org which can see hundreds of users using it at any moment.

| Do NOT execute these commands unless you have verified that everything is working on the staging platform. You should not bypass or skip any testing on staging before proceeding further. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                            |

1. Make sure your `prod-staging` branch is pristine and in sync with the upstream.

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. Move changes from `prod-staging` to `prod-current` via a fast-forward merge

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in anyway these commands will error out.
   > 
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `prod-current` branch. Once a build artifact is ready, it will trigger a run on the release pipeline.

**Additional Steps for Staff Action**

One a release run is triggered, members of the developer staff team will receive an automated manual intervention email. They can either _approve_ or _reject_ the release run.

If the changes are working nicely and have been tested on the staging platform, then it can be approved. The approval must be given within 4 hours of the release being triggered before getting rejected automatically. A staff can re-trigger the release run manually for rejected runs, or wait for the next cycle of release.

For staff use:

| Check your email for a direct link or [go to the release dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) after the build run is complete. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                    |

Once one of the staff members approves a release, the pipeline will push the changes live to freeCodeCamp.org's production CDN and API servers.

## Build, Test and Deployment Status

Here is the current test, build and deployment status of the codebase.

| Branch                                                                           | Unit Tests                                                                                                                                                                                                                       | Integration Tests                                                                                                                                                                                                        | Builds & Deployments                                                                                                              |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (experimental, upcoming)                                             | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                        | -                                                                                                                                 |

## Early access and beta testing

We welcome you to test these releases in a **"public beta testing"** mode and get early access to upcoming features to the platforms. Sometimes these features/changes are referred to as **next, beta, staging,** etc. interchangeably.

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent** and **stable** for everyone.

We thank you for reporting bugs that you encounter and help in making freeCodeCamp.org better. You rock!

### Identifying the upcoming version of the platforms

Currently a public beta testing version is available at:

| Application | Language | URL                                      |
|:----------- |:-------- |:---------------------------------------- |
| Learn       | English  | <https://www.freecodecamp.dev>           |
|             | Espanol  | <https://www.freecodecamp.dev/espanol>   |
|             | Chinese  | <https://chinese.freecodecamp.dev>       |
| News        | English  | <https://www.freecodecamp.dev/news>      |
| Forum       | English  | <https://forum.freecodecamp.dev>         |
|             | Chinese  | <https://chinese.freecodecamp.dev/forum> |
| API         | -        | `https://api.freecodecamp.dev`           |

> [!NOTE] The domain name is different than **`freeCodeCamp.org`**. This is intentional to prevent search engine indexing and avoid confusion for regular users of the platform.
> 
> The above list not exhaustive of all the applications that we provision. Also not all language variants are deployed in staging to conserve resources.

### Identifying the current version of the platforms

**The current version of the platform is always available at [`freeCodeCamp.org`](https://www.freecodecamp.org).**

The dev-team merges changes from the `prod-staging` branch to `prod-current` when they release changes. The top commit should be what you see live on the site.

You can identify the exact version deployed by visiting the build and deployment logs available in the status section. Alternatively you can also ping us in the [contributors chat room](https://chat.freecodecamp.org/channel/contributors) for a confirmation.

### Known Limitations

There are some known limitations and tradeoffs when using the beta version of the platform.

- #### All data / personal progress on these beta platforms will NOT be saved or carried over to production.

  **Users on the beta version will have a separate account from the production.** The beta version uses a physically separate database from production. This gives us the ability to prevent any accidental loss of data or modifications. The dev team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta platforms.

  Deployment is expected to be frequent and in rapid iterations, sometimes multiple times a day. As a result there will be unexpected downtime at times or broken functionality on the beta version.

- #### Do not send regular users to this site as a measure of confirming a fix

  The beta site is and always has been to augment local development and testing, nothing else. It's not a promise of what’s coming, but a glimpse of what is being worked upon.

- #### Sign in page may look different than production

  We use a test tenant for freeCodeCamp.dev on Auth0, and hence do not have the ability to set a custom domain. This makes it so that all the redirect callbacks and the login page appear at a default domain like: `https://freecodecamp-dev.auth0.com/`. This does not affect the functionality and is as close to production as we can get.

## Reporting issues and leaving feedback

Please open fresh issues for discussions and reporting bugs.

You may send an email to `dev[at]freecodecamp.org` if you have any queries. As always all security vulnerabilities should be reported to `security[at]freecodecamp.org` instead of the public tracker and forum.

# Flight Manual - Server Maintenance

> [!WARNING]
> 
> 1. The guide applies to the **freeCodeCamp Staff members only**.
> 2. These instructions should not be considered exhaustive, please use caution.

As a member of the staff, you may have been given access to our cloud service providers like Azure, Digital Ocean, etc.

Here are some handy commands that you can use to work on the Virtual Machines (VM), for instance performing maintenance updates or doing general housekeeping.

## Get a list of the VMs

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you been granted access to the cloud portals as well.

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

Install Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

Authentication and context switching: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Spin new Resources

We are working on creating our IaC setup, and while that is in works you can use the Azure portal or the Azure CLI to spin new virtual machines and other resources.

> [!TIP] No matter your choice of spinning resources, we have a few [handy cloud-init config files](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) to help you do some of the basic provisioning like installing docker or adding SSH keys, etc.

## Keep VMs updated

You should keep the VMs up to date by performing updates and upgrades. This will ensure that the virtual machine is patched with latest security fixes.

> [!WARNING] Before you run these commands:
> 
> - Make sure that the VM has been provisioned completely and there is no post-install steps running.
> - If you are updating packages on a VM that is already serving an application, make sure the app has been stopped / saved. Package updates will cause network bandwidth, memory and/or CPU usage spikes leading to outages on running applications.

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

We are running load balanced (Azure Load Balancer) instances for our web servers. These servers are running NGINX which reverse proxy all of the traffic to freeCodeCamp.org from various applications running on their own infrastructures.

The NGINX config is available on [this repository](https://github.com/freeCodeCamp/nginx-config).

### First Install

Provisioning VMs with the Code

1. Install NGINX and configure from repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Install Cloudflare origin certificates and upstream application config.

   Get the Cloudflare origin certificates from the secure storage and install at required locations.

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

3. Setup networking and firewalls.

   Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

4. Add the VM to the load balancer backend pool.

   Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

### Logging and Monitoring

1. Check status for NGINX service using the below command:

   ```console
   sudo systemctl status nginx
   ```

2. Logging and monitoring for the servers are available at:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com'), our current basic monitoring dashboard. We are working on more granular metrics for better observability

### Updating Instances (Maintenance)

Config changes to our NGINX instances are maintained on GitHub, these should be deployed on each instance like so:

1. SSH into the instance and enter sudo

```console
sudo su
```

2. Get the latest config code.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. Test and reload the config [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

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

2. Update `npm` and install PM2 and setup `logrotate` and startup on boot

   ```console
   npm i -g npm@8
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Clone freeCodeCamp, setup env and keys.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout prod-current # or any other branch to be deployed
   ```

4. Create the `.env` from the secure credentials storage.

5. Create the `google-credentials.json` from the secure credentials storage.

6. Install dependencies

   ```console
   npm ci
   ```

7. Build the server

   ```console
   npm run create:config && npm run build:curriculum && npm run build:server
   ```

8. Start Instances

   ```console
   cd api-server
   pm2 start ./lib/production-start.js -i max --max-memory-restart 600M --name org
   ```

### Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding environment variables.

> [!ATTENTION] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

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
npm run create:config && npm run build:curriculum && npm run build:server
```

4. Start Instances

```console
pm2 start all --update-env && pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.

## Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### First Install

Provisioning VMs with the Code

1. Install Node LTS.

2. Update `npm` and install PM2 and setup `logrotate` and startup on boot

   ```console
   npm i -g npm@8
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

   Start placeholder instances for the web client, these will be updated with artifacts from the Azure pipeline.

   > Todo: This setup needs to move to S3 or Azure Blob storage 
   > 
   > ```console
   >    echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../../serve.json www -p 52525" >> client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### Logging and Monitoring

```console
pm2 logs
```

```console
pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The later is essential when changing dependencies or adding environment variables.

> [!ATTENTION] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

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

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. You should not need to run these commands. These are here for documentation.

## Work on Chat Servers

Our chat servers are available with a HA configuration [recommended in Rocket.Chat docs](https://docs.rocket.chat/installation/docker-containers/high-availability-install). The `docker-compose` file for this is [available here](https://github.com/freeCodeCamp/chat-config).

We provision redundant NGINX instances which are themselves load balanced (Azure Load Balancer) in front of the Rocket.Chat cluster. The NGINX configuration file are [available here](https://github.com/freeCodeCamp/chat-nginx-config).

### First Install

Provisioning VMs with the Code

**NGINX Cluster:**

1. Install NGINX and configure from repository.

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/chat-nginx-config nginx

   cd /etc/nginx
   ```

2. Install Cloudflare origin certificates and upstream application config.

   Get the Cloudflare origin certificates from the secure storage and install at required locations.

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

3. Setup networking and firewalls.

   Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

4. Add the VM to the load balancer backend pool.

   Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

**Docker Cluster:**

1. Install Docker and configure from the repository

   ```console
   git clone https://github.com/freeCodeCamp/chat-config.git chat
   cd chat
   ```

2. Configure the required environment variables and instance IP addresses.

3. Run rocket-chat server

   ```console
   docker-compose config
   docker-compose up -d
   ```

### Logging and Monitoring

1. Check status for NGINX service using the below command:

   ```console
   sudo systemctl status nginx
   ```

2. Check status for running docker instances with:

   ```console
   docker ps
   ```

### Updating Instances (Maintenance)

**NGINX Cluster:**

Config changes to our NGINX instances are maintained on GitHub, these should be deployed on each instance like so:

1. SSH into the instance and enter sudo

   ```console
   sudo su
   ```

2. Get the latest config code.

   ```console
   cd /etc/nginx
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Test and reload the config [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

   ```console
   nginx -t
   nginx -s reload
   ```

**Docker Cluster:**

1. SSH into the instance and navigate to the chat config path

   ```console
   cd ~/chat
   ```

2. Get the latest config code.

   ```console
   git fetch --all --prune
   git reset --hard origin/main
   ```

3. Pull down the latest docker image for Rocket.Chat

   ```console
   docker-compose pull
   ```

4. Update the running instances

   ```console
   docker-compose up -d
   ```

5. Validate the instances are up

   ```console
   docker ps
   ```

6. Cleanup extraneous resources

   ```console
   docker system prune --volumes
   ```

   Output:

   ```console
   WARNING! This will remove:
     - all stopped containers
     - all networks not used by at least one container
     - all volumes not used by at least one container
     - all dangling images
     - all dangling build cache

   Are you sure you want to continue? [y/N] y
   ```

   Select yes (y) to remove everything that is not in use. This will remove all stopped containers, all networks and volumes not used by at least one container, and all dangling images and build caches.

## Work on Contributor Tools

### Deploy updates

ssh into the VM (hosted on Digital Ocean).

```console
cd tools
git pull origin master
npm ci
npm run build
pm2 restart contribute-app
```

## Updating Node.js versions on VMs

List currently installed node & npm versions

```console
nvm -v
node -v
npm -v

nvm ls
```

Install the latest Node.js LTS, and reinstall any global packages

```console
nvm install --lts --reinstall-packages-from=default
```

Verify installed packages

```console
npm ls -g --depth=0
```

Alias the `default` Node.js version to the current LTS (pinned to latest major version)

```console
nvm alias default 16
```

(Optional) Uninstall old versions

```console
nvm uninstall <version>
```

> [!ATTENTION] For client applications, the shell script can't be resurrected between Node.js versions with `pm2 resurrect`. Deploy processes from scratch instead. This should become nicer when we move to a docker based setup.
> 
> If using PM2 for processes you would also need to bring up the applications and save the process list for automatic recovery on restarts.

Get the uninstall instructions/commands with the `unstartup` command and use the output to remove the systemctl services

```console
pm2 unstartup
```

Get the install instructions/commands with the `startup` command and use the output to add the systemctl services

```console
pm2 startup
```

Quick commands for PM2 to list, resurrect saved processes, etc.

```console
pm2 ls
```

```console
pm2 resurrect
```

```console
pm2 save
```

```console
pm2 logs
```

## Installing and Updating Azure Pipeline Agents

See: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops and follow the instructions to stop, remove and reinstall agents. Broadly you can follow the steps listed here.

You would need a PAT, that you can grab from here: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installing agents on Deployment targets

Navigate to [Azure Devops](https://dev.azure.com/freeCodeCamp-org) and register the agent from scratch in the requisite [deployment groups](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] You should run the scripts in the home directory, and make sure no other `azagent` directory exists.

### Updating agents

Currently updating agents requires them to be removed and reconfigured. This is required for them to correctly pick up `PATH` values and other system environment variables. We need to do this for instance updating Node.js on our deployment target VMs.

1. Navigate and check status of the service

   ```console
   cd ~/azagent
   sudo ./svc.sh status
   ```

2. Stop the service

   ```console
   sudo ./svc.sh stop
   ```

3. Uninstall the service

   ```console
   sudo ./svc.sh uninstall
   ```

4. Remove the agent from the pipeline pool

   ```console
   ./config.sh remove
   ```

5. Remove the config files

   ```console
   cd ~
   rm -rf ~/azagent
   ```

Once You have completed the steps above, you can repeat the same steps as installing the agent.

# Flight Manual - Email Blast

We use [a CLI tool](https://github.com/freecodecamp/sendgrid-email-blast) to send out the weekly newsletter. To spin this up and begin the process:

1. Sign in to DigitalOcean, and spin up new droplets under the `Sendgrid` project. Use the Ubuntu Sendgrid snapshot with the most recent date. This comes pre-loaded with the CLI tool and the script to fetch emails from the database. With the current volume, three droplets are sufficient to send the emails in a timely manner.

2. Set up the script to fetch the email list.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   You will need to replace the placeholder values in the `.env` file with your credentials.

3. Run the script.

   ```console
   node get-emails.js emails.csv
   ```

   This will save the email list in an `emails.csv` file.

4. Break the emails down into multiple files, depending on the number of droplets you need. This is easiest to do by using `scp` to pull the email list locally and using your preferred text editor to split them into multiple files. Each file will need the `email,unsubscribeId` header.

5. Switch to the CLI directory with `cd /home/sendgrid-email-blast` and configure the tool [per the documentation](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Run the tool to send the emails, following the [usage documentation](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. When the email blast is complete, verify that no emails have failed before destroying the droplets.

# Flight Manual - Adding news instances for new languages

### Theme Changes

We use a custom [theme](https://github.com/freeCodeCamp/news-theme) for our news publication. Adding the following changes to the theme enables the addition of new languages.

1. Include an `else if` statement for the new [ISO language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) in [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Create an initial config folder by duplicating the [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) folder and changing its name to the new language code. (`en` —> `es` for Spanish)
3. Inside the new language folder, change the variable names in `main.js` and `footer.js` to the relevant language short code (`enMain` —> `esMain` for Spanish)
4. Duplicate the [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) and rename it to the new language code.
5. In [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs), add scripts for the newly created config files.
6. Add the related language `day.js` script from [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) to the [freeCodeCamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Ghost Dashboard Changes

Update the publication assets by going to the Ghost dashboard > settings > general and uploading the publications's [icon](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), [logo](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png), and [cover](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png).
