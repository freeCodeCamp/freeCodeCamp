# 仮想マシンを操作するためのフライトマニュアル

スタッフまたは開発チームのメンバーとして Azure、Digital Oceanなどの クラウドサービスプロバイダーへのアクセスが許可されている可能性があります。

仮想マシン (VM) で作業するために使用できる便利なコマンドをいくつか紹介します。 例えばメンテナンスの更新や ハウスキーピングなどです

# VMのリストを取得する

> [!注:] 既にVMへのSSHアクセスがある場合があります。 クラウドポータルへのアクセスが許可されていない限り、 VMをリストすることはできません。

## Azure

Azure CLI をインストール `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(任意) [`homebrew`](https://brew.sh) を使って macOS にインストールする :**

```
brew install azure-cli
```

> **(一度だけ) ログイン:**

```
az login
```

> **VM 名と P アドレスのリストを取得します。**

```
az vm list-ip-addresses --output table
```

## Digital Ocean

Digital Ocean CLI をインストールする `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(任意) [`homebrew`](https://brew.sh) を使って macOS にインストールする :**

```
brew install doctl
```

> **(一度だけ) ログイン:**

認証とコンテキストの切り替え: https://github.com/digitalocean/doctl#authenticating-with-digitalocai

```
doctl auth init
```

> **VM 名と IP アドレスのリストを取得します。**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# VM（またはVMスケールセット）

> Todo: VMの回転手順を追加します。


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

# VM を更新してください

アップデートとアップグレードを行うことで、VMを最新の状態に保つ必要があります。 これにより により、仮想マシンが最新のセキュリティ修正でパッチを適用されるようになります。

> [!警告] これらのコマンドを実行する前に:
> 
> - VMが完全にプロビジョニングされており、 インストール後のステップが実行されていないことを確認してください。
> - アプリケーションをすでに提供している VM 上のパッケージを更新している場合は、 アプリが停止/保存されていることを確認してください。 パッケージの更新により、 ネットワーク帯域幅、メモリ、CPU使用率のスパイクが発生し、 実行中のアプリケーションで停止します。

パッケージ情報を更新

```console
sudo apt update
```

インストール済みパッケージのアップグレード

```console
sudo apt upgrade -y
```

未使用のパッケージをクリーンアップ

```console
sudo apt autoremove -y
```

# Web サーバーでの作業 (プロキシ)

Web サーバーのロードバランシング(Azure Load Balancer)インスタンスを実行しています。 これらのサーバーは、すべてのトラフィック を、独自の インフラストラクチャ上で実行されるさまざまなアプリケーションから freeCodeCamp.org にリバースプロキシする NGINX を実行しています。

NGINX 設定は [このリポジトリ](https://github.com/freeCodeCamp/nginx-config) で利用できます。

## 最初のインストール

コードでVMをプロビジョニングする

### 1. (オプション)NGINXをインストールし、リポジトリから設定します。

基本的な設定は、cloud-initの設定を介してOOTBの準備ができている必要があります。 SSH と は特定のインスタンスに対して必要に応じて変更を加えます。

cloud-init 設定を以前に使用していない場合は、NGINX とエラーページの手動設定に 以下を使用します。

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. Cloudflareのオリジン証明書とアップストリームアプリケーションの設定をインストールします。

安全なストレージからCloudflareのオリジン証明書を取得し、 必要な場所にインストールしてください。

**OR**

既存の証明書の上に移動:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/ssl ./
```

アップストリーム構成を更新:

```console
vi configs/upstreams.conf
```

ソース/オリジンアプリケーションの IP アドレスを追加/更新します。

### 3. ネットワーキングとファイアウォールをセットアップします。

イングレスオリジンアドレスに必要に応じて Azure ファイアウォールと `ufw` を設定します。

### 4. VMをロードバランサバックエンドプールに追加します。

必要に応じて、ロードバランサーにルールを追加します。 バランサバックエンドプールをロードするために、 VMを追加する必要があるかもしれません。

## ロギングとモニタリング

1. 以下のコマンドでNGINXサービスの状態を確認します。

```console
sudo systemctl status nginx
```

2. サーバーのログとモニタリングはこちらから行えます：

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## インスタンスの更新 (メンテナンス)

NGINX インスタンスへの設定変更は GitHub 上でメンテナンスされています。これらは以下のように各インスタンスに デプロイされる必要があります。

1. SSHでインスタンスに接続し、sudo と入力してください

```console
sudo su
```

2. 最新の設定コードを取得します。

```console
cd /etc/nginx
git fetch --all -prune
git reset --hard origin/master
```

3. [を](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx) でテストし、リロードします。

```console
nginx -t
nginx -s reload
```

# API インスタンスの操作

1. ノードバイナリのビルドツールをインストールする (`node-gyp`) など。

```console
sudo apt install build-essential
```

## 最初のインストール

コードでVMをプロビジョニングする

1. ノード LTS をインストールします。

2. `npm` を更新し、PM2をインストールし、起動時にログローテーションと起動をセットアップします

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. freeCodeCampをクローンし、envとキーをセットアップします。

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # またはデプロイされる他のブランチ
   ```

4. セキュア認証情報ストレージから `.env` を作成します。

5. セキュア認証ストレージから `google-credentials.json` を作成します。

6. 依存関係のインストール

   ```console
   npm ci
   ```

7. サーバーを構築

   ```console
   npm run ensre-env && npm run build:server
   ```

8. インスタンスを開始

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## ロギングとモニタリング

```console
pm2 ログ
```

```console
pm2 monit
```

## インスタンスの更新 (メンテナンス)

コードの変更は、適宜APIインスタンスにデプロイする必要があります。 は、ローリングアップデートまたはマニュアルアップデートとすることができます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が重要です。

> [!DANGER] 自動パイプラインは 分間で依存関係の更新を処理していません。 デプロイパイプラインが実行される前に、手動で更新する必要があります。

### 1. 手動更新 - 依存関係、env変数の更新に使用します。

1. すべてのインスタンスを停止

```console
Pm2全部止めろ
```

2. 依存関係のインストール

```console
npm ci
```

3. サーバーを構築

```console
npm run ensre-env && npm run build:server
```

4. インスタンスを開始

```console
pm2 start all --update-env && pm2 logs
```

### 2. ローリングアップデート - コードの論理的な変更に使用されます。

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] パイプライン経由でコード、ロジックの更新をロールリング処理しています。 はこれらのコマンドを実行する必要はありません。 これらはドキュメントのためにここにあります。

# クライアントインスタンスに関する作業

1. ノードバイナリのビルドツールをインストールする (`node-gyp`) など。

```console
sudo apt install build-essential
```

## 最初のインストール

コードでVMをプロビジョニングする

1. ノード LTS をインストールします。

2. `npm` を更新し、PM2をインストールし、起動時にログローテーションと起動をセットアップします

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. クライアントの設定をクローンし、envとキーをセットアップします。

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   Web クライアントのプレースホルダー インスタンスを開始します。これらは 個の Azure ピプラインのアーティファクトで更新されます。

   > Todo: この設定は S3 または Azure Blob ストレージに移動する必要があります。 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary.sh
   pm2 delete client-primary
   pm2 start  ./client-start-primary.sh --name client-primary
   echo "serve -c ../../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary.sh
   pm2 delete client-secondary
   pm2 start  ./client-start-secondary.sh --name client-secondary
```

## ロギングとモニタリング

```console
pm2 ログ
```

```console
pm2 monit
```

## インスタンスの更新 (メンテナンス)

コードの変更は、適宜APIインスタンスにデプロイする必要があります。 は、ローリングアップデートまたはマニュアルアップデートとすることができます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が重要です。

> [!DANGER] 自動パイプラインは 分間で依存関係の更新を処理していません。 デプロイパイプラインが実行される前に、手動で更新する必要があります。

### 1. 手動更新 - 依存関係、env変数の更新に使用します。

1. すべてのインスタンスを停止

   ```console
   Pm2全部止めろ
   ```

2. 依存関係をインストールまたは更新

3. インスタンスを開始

   ```console
   pm2 start all --update-env && pm2 logs
   ```

### 2. ローリングアップデート - コードの論理的な変更に使用されます。

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] パイプライン経由でコード、ロジックの更新をロールリング処理しています。 はこれらのコマンドを実行する必要はありません。 これらはドキュメントのためにここにあります。
