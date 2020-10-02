# Flight Manual for working on Virtual Machines

スタッフまたは開発チームのメンバーとして Azure、Digital Oceanなどの クラウドサービスプロバイダーへのアクセスが許可されている可能性があります。

仮想マシン (VM) で作業するために使用できる便利なコマンドをいくつか紹介します。 例えばメンテナンスの更新や ハウスキーピングなどです

# Get a list of the VMs

> [!注:] 既にVMへのSSHアクセスがある場合があります。 クラウドポータルへのアクセスが許可されていない限り、 VMをリストすることはできません。

## Azure

Azure CLI をインストール `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

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

## Digital Ocean

Digital Ocean CLI をインストールする `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

認証とコンテキストの切り替え: https://github.com/digitalocean/doctl#authenticating-with-digitalocai

```
doctl auth init
```

> **Get the list of VM names and IP addresses:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

# Spin a VM (or VM Scale Set)

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

# Keep VMs updated

You should keep the VMs up to date by performing updates and upgrades. これにより により、仮想マシンが最新のセキュリティ修正でパッチを適用されるようになります。

> [!WARNING] Before you run these commands:
> 
> - VMが完全にプロビジョニングされており、 インストール後のステップが実行されていないことを確認してください。
> - アプリケーションをすでに提供している VM 上のパッケージを更新している場合は、 アプリが停止/保存されていることを確認してください。 パッケージの更新により、 ネットワーク帯域幅、メモリ、CPU使用率のスパイクが発生し、 実行中のアプリケーションで停止します。

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

# Work on Web Servers (Proxy)

Web サーバーのロードバランシング(Azure Load Balancer)インスタンスを実行しています。 これらのサーバーは、すべてのトラフィック を、独自の インフラストラクチャ上で実行されるさまざまなアプリケーションから freeCodeCamp.org にリバースプロキシする NGINX を実行しています。

NGINX 設定は [このリポジトリ](https://github.com/freeCodeCamp/nginx-config) で利用できます。

## First Install

Provisioning VMs with the Code

### 1. (Optional) Install NGINX and configure from repository.

The basic setup should be ready OOTB, via the cloud-init configuration. SSH と は特定のインスタンスに対して必要に応じて変更を加えます。

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

### 2. Install Cloudflare origin certificates and upstream application config.

安全なストレージからCloudflareのオリジン証明書を取得し、 必要な場所にインストールしてください。

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

### 3. Setup networking and firewalls.

Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

### 4. Add the VM to the load balancer backend pool.

Configure and add rules to load balancer if needed. バランサバックエンドプールをロードするために、 VMを追加する必要があるかもしれません。

## インスタンスの更新 (メンテナンス)

1. Check status for NGINX service using the below command:

```console
sudo systemctl status nginx
```

2. Logging and monitoring for the servers are available at:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Updating Instances (Maintenance)

NGINX インスタンスへの設定変更は GitHub 上でメンテナンスされています。 これらは以下のように各インスタンスに デプロイされる必要があります。

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

3. [を](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx) でテストし、リロードします。

```console
nginx -t
nginx -s reload
```

# Work on API Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## First Install

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

## インスタンスの更新 (メンテナンス)

```console
## ロギングとモニタリング

```console
pm2 ログ
```

```console
pm2 monit
```

## Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. は、ローリングアップデートまたはマニュアルアップデートとすることができます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が重要です。

> [!DANGER] 自動パイプラインは 分間で依存関係の更新を処理していません。 We need to do a manual update before any deployment pipeline runs.

### 1. Manual Updates - Used for updating dependencies, env variables.

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

### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. はこれらのコマンドを実行する必要はありません。 These are here for documentation.

# Work on Client Instances

1. Install build tools for node binaries (`node-gyp`) etc.

```console
sudo apt install build-essential
```

## First Install

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

   Web クライアントのプレースホルダー インスタンスを開始します。 これらは 個の Azure ピプラインのアーティファクトで更新されます。

   > Todo: This setup needs to move to S3 or Azure Blob storage 
   > 
   > ```console
   ```console
     echo "serve -c ../../serve.json www -p 50505" &#062;&#062; client-start-primary.sh
     chmod +x client-start-primary.sh
     pm2 delete client-primary
     pm2 start  ./client-start-primary.sh --name client-primary
     echo "serve -c ../../serve.json www -p 52525" &#062;&#062; client-start-secondary.sh
     chmod +x client-start-secondary.sh
     pm2 delete client-secondary
     pm2 start  ./client-start-secondary.sh --name client-secondary
```

## インスタンスの更新 (メンテナンス)

```console
## ロギングとモニタリング

```console
pm2 ログ
```

```console
pm2 monit
```

## Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. は、ローリングアップデートまたはマニュアルアップデートとすることができます。 依存関係を変更したり、環境変数を追加したりする場合は、後者が重要です。

> [!DANGER] 自動パイプラインは 分間で依存関係の更新を処理していません。 We need to do a manual update before any deployment pipeline runs.

### 1. Manual Updates - Used for updating dependencies, env variables.

1. Stop all instances

   ```console
   pm2 stop all
   ```

2. Install or update dependencies

3. Start Instances

   ```console
   pm2 start all --update-env && pm2 logs
   ```

### 2. Rolling updates - Used for logical changes to code.

```console
pm2 reload all --update-env && pm2 logs
```

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. はこれらのコマンドを実行する必要はありません。 These are here for documentation.
