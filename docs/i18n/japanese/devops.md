# DevOps ハンドブック

このガイドは、インフラストラクチャスタックとプラットフォームをどのように維持するかを理解するのに役立ちます。 このガイドで、すべての操作について詳しく説明しているわけではありませんが、システムを理解する上での参考になります。

Let us know if you have feedback or queries and we will be happy to clarify.

## Flight Manual - Code Deployments

This repository is continuously built, tested, and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

これには3つのステップが含まれます。

1. 新規変更 (修正および機能変更の両方を含む) は、プルリクエストによりプライマリ開発ブランチ (`main`) にマージされます。
2. これらの変更は、一連の自動テストで実行されます。
3. テストに合格すると、インフラストラクチャ上でのデプロイメントに対して変更をリリースします(または必要に応じて更新します)。

### Building the codebase - Mapping Git Branches to Deployments

通常、[`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (デフォルトの開発ブランチ) は、[`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) ブランチに 1 日 1 回マージされ、分離されたインフラストラクチャにリリースされます。

これは開発者とボランティアのコントリビューター用の中間リリースです。 「ステージング」または「ベータ」リリースとも呼ばれます。

それは `freeCodeCamp.org` のライブプロダクション環境と同じで、データベース、サーバー、Web プロキシなどの別々のセットを使用しています。 この分離により、freeCodeCamp.org の main プラットフォームの正規ユーザーに影響を与えることなく、「本番」のようなシナリオで継続的な開発と機能をテストすることができます。

開発者チーム [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) が、ステージングプラットフォームでの変更に満足したら、これらの変更は数日ごとに [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current) ブランチに移されます。

これが freeCodeCamp.org で本番プラットフォームに変更を加えた最終リリースです。

### Testing changes - Integration and User Acceptance Testing

私たちは、コードの品質を確認するために、様々なレベルの統合と受け入れテストを採用しています。 すべてのテストは、[GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) や [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp) のようなソフトウェアにより実行されます。

We have unit tests for testing our challenge solutions, Server APIs, and Client User interfaces. これらは、異なるコンポーネント間の統合をテストするのに役立ちます。

> [!NOTE] We are also in the process of writing end user tests which will help in replicating real-world scenarios like updating an email or making a call to the API or third-party services.

これらのテストを組み合わせることで、問題が繰り返されるのを防ぎ、別のバグや機能の作業中にバグが発生しないようにします。

### Deploying Changes - Pushing changes to servers

開発サーバーと本番サーバーに変更をプッシュする継続的デリバリーソフトウェアを設定しています。

保護されたリリースブランチに変更がプッシュされると、そのブランチに対してビルドパイプラインが自動的にトリガーされます。 ビルドパイプラインは、アーティファクトを構築し、後で使用するためにコールドストレージに保管する責任があります。

実行が正常に完了すると、ビルドパイプラインは対応するリリースパイプラインをトリガーします。 The release pipelines are responsible for collecting the build artifacts, moving them to the servers, and going live.

The statuses of builds and releases are [available here](#build-test-and-deployment-status).

## Trigger a Build, Test, and Deploy

Currently, only members of the developer team can push to the production branches. `production-*` ブランチへの変更は、[`upstream`](https://github.com/freeCodeCamp/freeCodeCamp) への早送りマージによってのみ可能です。

> [!NOTE] In the upcoming days, we would improve this flow to be done via pull requests, for better access management and transparency.

### Pushing changes to Staging Applications

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
      ![GitHub Actions でビルドステータスを確認する](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   これに失敗した場合は、停止してエラーの確認をします。

4. リポジトリをローカルにビルドできることを確認します。

   ```
   pnpm run clean-and-develop
   ```

5. 早送りマージにより、変更を `main` から `prod-staging` に移行します。

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > エラーになったとしたら、誤った操作をしたかもしれませんので、やり直します。

上記手順では、`prod-staging` ブランチのビルドパイプラインで自動的に実行がトリガーされます。 ビルドが完了すると、アーティファクトは `.zip` ファイルとしてコールドストレージで保存され、後で取り出され使用されます。

接続されたビルドパイプラインから新たなアーティファクトが利用可能になると、リリースパイプラインが自動的にトリガーされます。 For staging platforms, this process does not involve manual approval, and the artifacts are pushed to the Client CDN and API servers.

### Pushing changes to Production Applications

プロセスはほとんどステージングプラットフォームと同じですが、いくつかの追加のチェックが行われます。 これは、何百人ものユーザーが常に使用している freeCodeCamp.org 上で何も壊さないようにするためです。

| すべてがステージングプラットフォームで動作していることを確認しない限り、これらのコマンドを実行しないでください。 先に進む前に、ステージング上のテストを回避またはスキップしないでください。 |
|:---------------------------------------------------------------------------------------------- |
|                                                                                                |

1. `prod-staging` ブランチが初期状態であり、アップストリームと同期していることを確認してください。

   ```sh
   git checkout prod-staging
   git fetch --all --prune
   git reset --hard upstream/prod-staging
   ```

2. 早送りマージにより、変更を `prod-staging` から `prod-current` に移行します。

   ```
   git checkout prod-current
   git merge prod-staging
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > エラーになったとしたら、誤った操作をしたかもしれませんので、やり直します。

上記手順では、`prod-current` ブランチのビルドパイプラインで自動的に実行がトリガーされます。 ビルドアーティファクトの準備が完了すると、リリースパイプラインで実行がトリガーされます。

**スタッフアクションの追加手順**

Once a release run is triggered, members of the developer staff team will receive an automated manual intervention email. 彼らはリリース実行を _承認_、または _拒否_ することができます。

変更がうまく動作し、ステージングプラットフォームでテストされている場合は、承認することができます。 承認は、自動的に拒否される前に、リリースがトリガーされてから4時間以内に行われる必要があります。 拒否された実行が拒否された場合、スタッフは手動でリリース実行を再トリガーするか、リリースの次のサイクルを待つことになります。

スタッフ用:

| ビルドの実行が完了したら、直接リンクについて E メールを確認するか、[リリースダッシュボードにアクセス](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) してください。 |
|:--------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                             |

スタッフがリリースを承認すると、パイプラインは freeCodeCamp.org の本番用 CDN および API サーバーにその変更を反映させます。

## Build, Test and Deployment Status

ここでは、コードベースの現在のテスト、ビルド、およびデプロイの状況を示します。

| ブランチ                                                                             | 単体テスト                                                                                                                                                                                                                            | 統合テスト                                                                                                                                                                                                                  | ビルド & デプロイ                                                                                                                        |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E テスト](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E テスト](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E テスト](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (試験的、予定)                                                             | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                      | -                                                                                                                                 |

## Early Access and Beta Testing

皆さんがこれらのリリースを **"パブリックベータテスト"** モードでテストし、プラットフォームの今後の機能に早期アクセスできるようにします。 これらの機能 / 変更は、**ネクスト、ベータ、ステージング** などと呼ばれます。

Your contributions via feedback and issue reports will help us in making the production platforms at `freeCodeCamp.org` more **resilient**, **consistent**, and **stable** for everyone.

見つけたバグの報告や、freeCodeCamp.orgをより良くする支援に感謝します。 素晴らしい皆さんです！

### Identifying the Upcoming Version of the Platforms

Currently, a public beta testing version is available at:

| アプリケーション | 言語    | URL                                      |
|:-------- |:----- |:---------------------------------------- |
| 学習       | 英語    | <https://www.freecodecamp.dev>           |
|          | スペイン語 | <https://www.freecodecamp.dev/espanol>   |
|          | 中国語   | <https://www.freecodecamp.dev/chinese>   |
| ニュース     | 英語    | <https://www.freecodecamp.dev/news>      |
| フォーラム    | 英語    | <https://forum.freecodecamp.dev>         |
|          | 中国語   | <https://freecodecamp.dev/chinese/forum> |
| API      | -     | `https://api.freecodecamp.dev`           |

> [!NOTE] ドメイン名は **`freeCodeCamp.org`** とは異なります。 これは、検索エンジンのインデックス作成を防止し、プラットフォームの通常ユーザーの混乱を避けるための、意図的なものです。
> 
> The above list is not exhaustive of all the applications that we provision. Also, not all language variants are deployed in staging to conserve resources.

### Identifying the Current Version of the Platforms

**プラットフォームの現在のバージョンは [`freeCodeCamp.org`](https://www.freecodecamp.org) で常に利用できます。**

開発者チームは、リリース変更時に、`prod-staging` ブランチから `prod-current` への変更をマージします。 トップコミットは、サイト上で表示されるもののはずです。

ステータスセクションにあるビルド & デプロイログにアクセスして、デプロイされた正確なバージョンを確認できます。 Alternatively, you can also ping us in the [contributors chat room](https://discord.gg/PRyKn3Vbay) for a confirmation.

### Known Limitations

プラットフォームのベータ版を使用する場合、いくつかの既知の制限とトレードオフがあります。

- #### All data / personal progress on these beta platforms will NOT be saved or carried over to production

  **ベータ版のユーザーは本番とは異なるアカウントを持つことになります。** ベータ版は本番と物理的に分離されたデータベースを使用します。 これにより、偶発的なデータ損失や変更を防ぐことができます。 The dev-team may purge the database on this beta version as needed.

- #### There are no guarantees on the uptime and reliability of the beta platforms

  デプロイは頻繁に行われ、時には非常に速いペースで 1 日に複数回行われることになります。 As a result, there will be unexpected downtime at times or broken functionality on the beta version.

- #### 修正を確認する手段として、このサイトに一般ユーザーを送らないでください。

  ベータサイトは、ローカルの開発とテストを強化するためのものでしたし、今もそうです。 それはこれから起こることを約束するものではありませんが、取り組まれていることを垣間見るものです。

- #### サインインページが本番環境とは異なる場合があります。

  Auth0 上で freeCodeCamp.dev にはテストテナントを使用しているため、カスタムドメインを設定することはできません。 そのため、すべてのリダイレクトコールバックとログインページが `https://freecodecamp-dev.auth0.com/` のようなデフォルトドメインに表示されます。 これが機能に影響を与えることはありませんし、本番環境に近いものです。

## Reporting issues and leaving feedback

ディスカッションやバグ報告をする場合、新しい Issue を開いてください。

ご質問があれば、`dev[at]freecodecamp.org` にメールをご送信ください。 セキュリティ脆弱性は、公開トラッカーやフォーラムではなく、`security[at]freecodecamp.org` に報告する必要があります。

## Flight Manual - Server Maintenance

> [!WARNING]
> 
> 1. ガイドは、**freeCodeCamp スタッフのみ** に適用されます。
> 2. インストラクションは包括的なものではありませんので、ご注意ください。

スタッフの一員として、Azure、Digital Ocean などのクラウドサービスプロバイダーへのアクセスが許可されている可能性があります。

仮想マシン (VM) で作業するために使用できる便利なコマンドをいくつか紹介します。例えばメンテナンスの更新や一般的なハウスキーピングの実行です。

## Get a list of the VMs

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you have been granted access to the cloud portals as well.

### Azure

Azure CLI のインストール `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(一回のみ) [`homebrew`](https://brew.sh) で macOS にインストールします。**

```
brew install azure-cli
```

> **(一回のみ) ログインします。**

```
az login
```

> **VM 名と IP アドレスのリストを取得します。**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Digital Ocean CLI `doctl` のインストール: https://github.com/digitalocean/doctl#installing-doctl

> **(一回のみ) [`homebrew`](https://brew.sh) で macOS にインストールします。**

```
brew install doctl
```

> **(一回のみ) ログインします。**

認証とコンテキストの切り替え: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **VM 名と IP アドレスのリストを取得します。**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Spin New Resources

私たちは IaC 設定の作成に取り組んでいます。そして、その作業中は Azure ポータルまたは Azure CLI を使用して、新しい仮想マシンやその他のリソースをスピンさせることができます。

> [!TIP] スピニングリソースの選択に関係なく、docker のインストールや SSH キーの追加など基本的なプロビジョニングを行うのに役立つ [便利な cloud-init 設定ファイル](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) がいくつかあります。

## Keep VMs Updated

アップデートとアップグレードを行うことで、VM を最新の状態に保つ必要があります。 This will ensure that the virtual machine is patched with the latest security fixes.

> [!WARNING] これらのコマンドを実行する前に下記を実行します。
> 
> - Make sure that the VM has been provisioned completely and that there are no post-install steps running.
> - アプリケーションを既に提供している VM 上で、パッケージを更新する場合は、アプリが停止 / 保存されていることを確認してください。 パッケージ更新により、ネットワーク帯域幅や、メモリ、CPU の使用率が急増し、 実行中のアプリケーションが停止します。

パッケージ情報を更新します。

```console
sudo apt update
```

インストール済みパッケージをアップグレードします。

```console
sudo apt upgrade -y
```

未使用のパッケージをクリーンアップします。

```console
sudo apt autoremove -y
```

## Work on Web Servers (Proxy)

Web サーバーのために、負荷分散 (Azure Load Balancer) インスタンスを実行しています。 これらのサーバーは NGINX を実行しています。NGINX は、独自インフラストラクチャで実行される様々なアプリケーションから freeCodeCamp.org へと、トラフィックを中継するリバースプロキシとして使用されます。

NGINX 設定は [このリポジトリ](https://github.com/freeCodeCamp/nginx-config) で確認できます。

### 最初のインストール

コードを使用して VM をプロビジョニング

1. NGINX をインストールし、リポジトリから設定します。

   ```console
   sudo su

   cd /var/www/html
   git clone https://github.com/freeCodeCamp/error-pages

   cd /etc/
   rm -rf nginx
   git clone https://github.com/freeCodeCamp/nginx-config nginx

   cd /etc/nginx
   ```

2. Cloudflare のオリジン証明書とアップストリームアプリケーション設定をインストールします。

   安全なストレージから Cloudflare のオリジン証明書を取得し、 必要な場所にインストールします。

   **または**

   既存の証明書を移動させます。

   ```console
   # Local
   scp -r username@source-server-public-ip:/etc/nginx/ssl ./
   scp -pr ./ssl username@target-server-public-ip:/tmp/

   # Remote
   rm -rf ./ssl
   mv /tmp/ssl ./
   ```

   アップストリーム設定を更新します。

   ```console
   vi configs/upstreams.conf
   ```

   ソース / オリジンアプリケーションの IP アドレスを追加 / 更新します。

3. Set up networking and firewalls.

   必要に応じて、イングレスオリジンアドレスに Azure ファイアウォールと `ufw` を設定します。

4. VM をロードバランサーバックエンドプールに追加します。

   必要に応じて、ロードバランサーにルールを設定し追加します。 バランサーバックエンドプールをロードするために、VM を追加する必要があるかもしれません。

### ログとモニタリング

1. 以下のコマンドを使用して NGINX サービスのステータスを確認します。

   ```console
   sudo systemctl status nginx
   ```

2. サーバーのログとモニタリングは以下で行います。

   現行の基本的なモニタリングダッシュボードは、NGINX Amplify ([https://amplify.nginx.com]('https://amplify.nginx.com')) です。 監視向上のため、より細かいメトリックに取り組んでいます。

### インスタンスの更新 (メンテナンス)

NGINX インスタンスへの設定変更は、GitHub 上でメンテナンスされています。これらは、以下のように各インスタンスにデプロイされる必要があります。

1. SSH でインスタンスに接続し、sudo と入力します。

```console
sudo su
```

2. 最新の設定コードを取得します。

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/main
```

3. 設定 [with Signals](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx) をテストして再度読み込みます。

```console
nginx -t
nginx -s reload
```

## Work on API Instances

1. ノードバイナリのビルドツール (`node-gyp`) をインストールします。

```console
sudo apt install build-essential
```

### 最初のインストール

コードを使用して VM をプロビジョニング

1. Install Node LTS.

2. Install pnpm globally.

```console
npm install -g pnpm
```

3. Clone freeCodeCamp, set up env, and keys.

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
cd freeCodeCamp
git checkout prod-current # or any other branch to be deployed
```

4. Create the `.env` from the secure credentials storage.

5. Install dependencies

```console
pnpm install
```

6. Setup pm2 `logrotate` and startup on boot

```console
pnpm pm2 install pm2-logrotate
pnpm pm2 startup
```

7. Build the server

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

8.  Start Instances

```console
pnpm start:server
```

### ログとモニタリング

```console
pnpm pm2 logs
```

```console
pnpm pm2 monit
```

### インスタンスの更新 (メンテナンス)

コードの変更は、適宜 API インスタンスにデプロイする必要があります。 ローリング更新または手動更新により実行できます。 The latter is essential when changing dependencies or adding environment variables.

> [!ATTENTION] 自動パイプラインは、分単位で依存関係の更新を処理していません。 デプロイパイプラインが実行される前に、手動で更新する必要があります。

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

```console
pnpm pm2 stop all
```

2. Install dependencies

```console
pnpm install
```

3. Build the server

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

4. Start Instances

```console
pnpm start:server && pnpm pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pnpm reload:server && pnpm pm2 logs
```

> [!NOTE] We are handling rolling updates to code and logic via pipelines. これらのコマンドを実行する必要はありません。 ドキュメント用として、ここに記載されているだけです。

#### 3. Updating Node

1. Install new Node version

2. Update pm2 to use the new version

```console
pnpm pm2 update
```

## Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

### 最初のインストール

コードを使用して VM をプロビジョニング

1. Install Node LTS.

2. Update `npm` and install PM2 and setup `logrotate` and startup on boot

   ```console
   npm i -g npm@8
   npm i -g pm2@4
   npm install -g serve@13
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
   >    echo "serve -c ../serve.json -p 50505 www" > client-start-primary.sh
   >    chmod +x client-start-primary.sh
   >    pm2 delete client-primary
   >    pm2 start  ./client-start-primary.sh --name client-primary
   >    echo "serve -c ../serve.json -p 52525 www" > client-start-secondary.sh
   >    chmod +x client-start-secondary.sh
   >    pm2 delete client-secondary
   >    pm2 start  ./client-start-secondary.sh --name client-secondary
   > ```

### ログとモニタリング

```console
pm2 logs
```

```console
pm2 monit
```

### インスタンスの更新 (メンテナンス)

コードの変更は、適宜 API インスタンスにデプロイする必要があります。 ローリング更新または手動更新により実行できます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が必須です。

> [!ATTENTION] 自動パイプラインは、分単位で依存関係の更新を処理していません。 デプロイパイプラインが実行される前に、手動で更新する必要があります。

#### 1. 手動更新 - 依存関係や env 変数の更新に使用します。

1. Stop all instances

   ```console
   pm2 stop all
   ```

2. Install or update dependencies

3. Start Instances

   ```console
   pm2 start all --update-env && pm2 logs
   ```

#### 2. ローリング更新 - コードの論理的な変更に使用されます。

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] パイプライン経由で、コードやロジックの更新をロールリング処理しています。 これらのコマンドを実行する必要はありません。 ドキュメント用として、ここに記載されているだけです。

## Work on Chat Servers

チャットサーバーは、[Rocket.Chat ドキュメントで推奨されている](https://docs.rocket.chat/installation/docker-containers/high-availability-install) HA 構成で利用可能です。 そのために使用する `docker-compose` ファイルは、[こちらで入手可能](https://github.com/freeCodeCamp/chat-config) です。

Rocket.Chat クラスタの前で、負荷分散型 (Azure ロードバランサー) の冗長 NGINX インスタンスを提供します。 NGINX 設定ファイルは、[こちらで入手可能](https://github.com/freeCodeCamp/chat-nginx-config) です。

### First Install

コードを使用して VM をプロビジョニング

**NGINX クラスタ:**

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

3. Set up networking and firewalls.

   Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

4. Add the VM to the load balancer backend pool.

   Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

**Docker クラスタ:**

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

**NGINX クラスタ:**

NGINX インスタンスへの設定変更は、GitHub 上でメンテナンスされています。これらは、以下のように各インスタンスにデプロイされる必要があります。

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

**Docker クラスタ:**

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

### Deploy Updates

(Digital Ocean 上でホストされている) VM に ssh で接続します。

```console
cd tools
git pull origin master
pnpm install
pnpm run build
pm2 restart contribute-app
```

## Updating Node.js Versions on VMs

現在インストールされている node と npm のバージョンをリストアップします。

```console
nvm -v
node -v
npm -v

nvm ls
```

最新の Node.js LTS をインストールし、グローバルパッケージを再インストールします。

```console
nvm install --lts --reinstall-packages-from=default
```

インストールされたパッケージを確認します。

```console
npm ls -g --depth=0
```

Alias the `default` Node.js version to the current LTS (pinned to the latest major version)

```console
nvm alias default 16
```

(オプション) 旧バージョンをアンインストールします。

```console
nvm uninstall <version>
```

> [!ATTENTION] クライアントアプリケーションでは、`pm2 resurrect` を使用して、Node.js バージョン間でシェルスクリプトを復元することはできません。 ゼロからプロセスをデプロイします。 This should become nicer when we move to a docker-based setup.
> 
> プロセスに PM2 を使用する場合は、アプリケーションを起動し、再起動時に自動リカバリを行うためのプロセスリストを保存する必要があります。

`unstartup` コマンドでアンインストールの手順 / コマンドを取得し、出力を使用して systemctl サービスを削除します。

```console
pm2 unstartup
```

`startup` コマンドでインストールの手順 / コマンドを取得し、出力を使用して systemctl サービスを追加します。

```console
pm2 startup
```

以下は、PM2 からリストへのクイックコマンド、保存されたプロセスの復元などです。

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

See: https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops and follow the instructions to stop, remove, and reinstall agents. 一般的には、ここに記載されている手順に従います。

https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens から入手できる PAT が必要です。

### Installing Agents on Deployment targets

[Azure Devops](https://dev.azure.com/freeCodeCamp-org) に移動し、必要な [デプロイグループ](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup) でエージェントをゼロから登録します。

> [!NOTE] スクリプトをホームディレクトリで実行し、他の `azagent` ディレクトリが存在しないことを確認します。

### Updating Agents

現在、エージェントを更新するには、エージェントを削除して再設定する必要があります。 これは、`PATH` の値や他のシステム環境変数を正しく取り出すために必要です。 デプロイターゲット VM 上で、Node.js を更新する場合は、以下を実行する必要があります。

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

上記の手順を完了したら、エージェントのインストールと同じ手順を繰り返すことができます。

## Flight Manual - Email Blast

[CLIツール](https://github.com/freecodecamp/sendgrid-email-blast) で、ウィークリーニュースレターを送信します。 プロセスは次のとおりです。

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

## Flight Manual - Adding news instances for new languages

### Theme Changes

ニュースの掲載には、カスタム [テーマ](https://github.com/freeCodeCamp/news-theme) を使用します。 テーマに以下の変更を加えることで、新しい言語の追加が可能になります。

1. Include an `else if` statement for the new [ISO language code](https://www.loc.gov/standards/iso639-2/php/code_list.php) in [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Create an initial config folder by duplicating the [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) folder and changing its name to the new language code. (`en` —> `es` for Spanish)
3. Inside the new language folder, change the variable names in `main.js` and `footer.js` to the relevant language short code (`enMain` —> `esMain` for Spanish)
4. Duplicate the [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) and rename it to the new language code.
5. In [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs), add scripts for the newly created config files.
6. Add the related language `day.js` script from [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) to the [freeCodeCamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Ghost Dashboard Changes

Ghost ダッシュボード > 設定 > 一般と進み、出版物の [アイコン](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png)、[ロゴ](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png) および [カバー](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png) をアップロードすることで、出版物アセットを更新します。
