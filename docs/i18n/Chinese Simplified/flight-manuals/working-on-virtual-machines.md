# 虚拟机工作飞行手册

作为工作人员或发展小组的成员， 您可能已经被授权访问我们的 云服务提供商，如Azure、 Digital Ocean等。

这里有一些便捷的命令，你可以用来在虚拟机上工作 (VM), 例如，进行维修更新或一般维护住房。

# 获取虚拟机列表

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you been granted access to the cloud portals as well.

## Azure

安装 Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) 在 macOS 上安装 [`homebrew`](https://brew.sh):**

```
酿造安装 azure-cli
```

> **(One-time) 登录：**

```
az login
```

> **获取虚拟机名称和P地址列表：**

```
az vm list-ip-address--output 表
```

## Digital Ocean

安装Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) 在 macOS 上安装 [`homebrew`](https://brew.sh):**

```
酿造安装doctl
```

> **(One-time) 登录：**

身份验证和上下文切换： https://github.com/digitalocean/doctl#身份验证-with-digitalocean

```
Doctl 认证init
```

> **获取虚拟机名称和IP地址列表：**

```
doctl 计算 droplet list --format "ID,Name,PublicIPv4"
```

# 旋转虚拟机 (或虚拟机缩放)

> 待办事宜：添加旋转VM(s) 的说明


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

# 保持虚拟机更新

您应该通过更新和升级来随时更新虚拟机。 这将 确保虚拟机器有最新的安全修复补丁。

> [!警告] 在您运行这些命令之前：
> 
> - 请确保虚拟机已经完全预设，没有 安装后步骤正在运行。
> - 如果您正在更新已经在应用程序上服务的虚拟机上的软件包， 请确保应用程序已经停止/保存。 软件包更新将导致 个网络带宽、内存和/或CPU 使用率跳跃导致运行中的 应用程序停用。

更新软件包信息

```console
sudo apt 更新
```

升级已安装的软件包

```console
sudo apt 升级 -y
```

清理未使用的软件包

```console
sudo apt autoremove -y
```

# Web 服务器上的工作 (Proxy)

我们正在为我们的 web 服务器运行负载均衡(Azure Load Balancer) 实例。 这些服务器正在运行NGINX, 将所有的流量 转换为 freeCodeCamp.org 的多个应用程序在他们自己的 基础结构。

NGINX配置在 [这个资源库](https://github.com/freeCodeCamp/nginx-config) 上可用。

## 首次安装

使用代码提供虚拟机

### 1. (可选) 安装 NGINX 并从仓库进行配置。

基本设置应该通过云端内部配置准备好OOTB。 SSH 和 对特定实例进行必要的更改。

如果您没有使用云端配置，请先前使用下面的手动 设置NGINX和错误页面：

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. 安装Cloudflare原始证书和上游应用程序配置。

从安全存储获取Cloudflare原始证书并在 所需位置安装。

**或**

在现有证书上移：

```console
# local
scp -r username@source-server-public-ip:/etc/nginx/sl ./
scp -pr ./sl username@target-server-public-ip::tmp/

# 远程
rm -rf ./sl
mv /tmp/sl ./
```

更新上游配置：

```console
vi configs/upstreams.conf
```

添加/更新源应用程序IP地址。

### 3. 设置网络和防火墙。

配置 Azure 防火墙和 `ufw` 是导入原始地址所必需的。

### 4. 将虚拟机添加到负载均衡器后端池。

配置并添加规则以在需要时加载平衡器。 您可能还需要添加 VM 以便在需要时装入平衡器后端池。

## 日志记录和监测

1. 使用下面的命令检查NGINX服务状态：

```console
sudo systemctl status nginx
```

2. 记录和监视服务器：

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## 更新实例(维护)

Config changes to our NGINX instances are maintained on GitHub, these should be deployed on each instance like so:

1. SSH 到实例，然后输入 sudo

```console
sudo su
```

2. 获取最新的配置代码。

```console
cd /etc/nginx
git 获取 --all --prune
git 重置 --hard origin/master
```

3. 测试并重新加载配置 [与信号](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx)。

```console
nginx -t
nginx -s reload
```

# API 实例的工作

1. 为节点二进制安装构建工具(`node-gyp`) 等。

```console
sudo apt install build-essential
```

## 首次安装

使用代码提供虚拟机

1. 安装节点LTS。

2. 更新 `npm` 并安装 PM2 并在启动时设置 logrotate 和启动

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. 克隆免费CodeCamp，设置env和keys。

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCodeCam
   git 签出生产-current # 或任何其它要部署的分支
   ```

4. 从安全的凭据存储创建 `.env`。

5. 从安全的凭据存储创建 `google credentials.json`

6. 安装依赖项

   ```console
   npm ci
   ```

7. 构建服务器

   ```console
   npm 运行确保启动... && npm 运行构建：服务器
   ```

8. 开始实例

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-reest-600M --name org
   ```

## 日志记录和监测

```console
pm2 日志
```

```console
pm2 monit
```

## 更新实例(维护)

代码更改需要不时部署到 API 实例。 It can be a rolling update or a manual update. 当更改 依赖关系或添加离子变量时，后者是必不可少的。

> [!DANGER] 自动管道在 分钟内没有处理依赖关系更新。 我们需要在任何部署管道运行之前进行人工更新。

### 1. 手动更新 - 用于更新依赖，环境变量。

1. 停止所有实例

```console
pm2 停止所有
```

2. 安装依赖项

```console
npm ci
```

3. 构建服务器

```console
npm 运行确保启动... && npm 运行构建：服务器
```

4. 开始实例

```console
pm2 开始所有 --update-env && pm2 日志
```

### 2. 滚动更新 - 用于对代码的逻辑更改。

```console
pm2 重新加载所有 --update-env && pm2 日志
```

> [!注意] 我们正在通过管道对代码、逻辑进行滚动更新。 您 不应需要运行这些命令。 这里是为了提供文件。

# 客户端实例方面的工作

1. 为节点二进制安装构建工具(`node-gyp`) 等。

```console
sudo apt install build-essential
```

## 首次安装

使用代码提供虚拟机

1. 安装节点LTS。

2. 更新 `npm` 并安装 PM2 并在启动时设置 logrotate 和启动

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g service
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. 克隆客户端配置、设置环境和密钥。

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git 客户端
   cd 客户端
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git 客户端
   cd 客户端
   ```

   启动网页客户端的占位符实例，这些实例将会被Azure pipline的 个伪影更新。

   > 待办事项：此设置需要移动到 S3 或 Azure Blob 存储 
   > 
   > ```console
   echo "service -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 删除客户端-主
   pm2 start . sh --name client-start-primary
   echo "service -c /../serve.json www -p 52525” >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 删除 client-secondary
   pm2 start ./client-start-secondary.sh --name client-secondary
```

## 日志记录和监测

```console
pm2 日志
```

```console
pm2 monit
```

## 更新实例(维护)

代码更改需要不时部署到 API 实例。 It can be a rolling update or a manual update. 当更改 依赖关系或添加离子变量时，后者是必不可少的。

> [!DANGER] 自动管道在 分钟内没有处理依赖关系更新。 我们需要在任何部署管道运行之前进行人工更新。

### 1. 手动更新 - 用于更新依赖，环境变量。

1. 停止所有实例

   ```console
   pm2 停止所有
   ```

2. 安装或更新依赖关系

3. 开始实例

   ```console
   pm2 开始所有 --update-env && pm2 日志
   ```

### 2. 滚动更新 - 用于对代码的逻辑更改。

```console
pm2 重新加载所有 --update-env && pm2 日志
```

> [!注意] 我们正在通过管道对代码、逻辑进行滚动更新。 您 不应需要运行这些命令。 这里是为了提供文件。
