# Flight Manual for working on Virtual Machines

Являясь сотрудником или dev-team, вам был предоставлен доступ к нашим облачным поставщикам услуг, таким как Azure, Digital Ocean, и т. д.

Вот несколько полезных команд, которые можно использовать для работы на виртуальных машинах (VM), например, выполнение обновления технического обслуживания или общее обслуживание.

# Get a list of the VMs

> [!ПРИМЕЧАНИЕ] Если у вас уже есть SSH доступ к ВМС, только это не позволит вам вывести список ВМ до тех пор, пока вам не будет предоставлен доступ к облачным порталам.

## Azure

Установить Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

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

Установите Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Install on macOS with [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(One-time) Login:**

Переключение контекста и аутентификации: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

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

You should keep the VMs up to date by performing updates and upgrades. Это гарантирует, что виртуальная машина патче с последними исправлениями безопасности.

> [!WARNING] Before you run these commands:
> 
> - Убедитесь, что ВМ был оснащен полностью и после установки не запущено.
> - Если вы обновляете пакеты на виртуальной машине, которая уже обслуживает приложение, убедитесь, что приложение было остановлено / сохранено. Обновление пакетов вызовет скачки пропускной способности сети, памяти и/или процессора , приводящие к сбоям в работе запущенных приложений.

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

Мы выполняем экземпляры сбалансированной нагрузки (Azure Load Balancer) для наших серверов. Эти серверы работают с NGINX, что обратит все трафик на freeCodeCamp.org от различных приложений, работающих на собственной инфраструктуре .

Конфигурация NGINX доступна на [этом репозитории](https://github.com/freeCodeCamp/nginx-config).

## First Install

Provisioning VMs with the Code

### 1. (Optional) Install NGINX and configure from repository.

The basic setup should be ready OOTB, via the cloud-init configuration. SSH и вносят изменения, необходимые для конкретного экземпляра(ов).

Если вы не использовали конфигурацию облачного вложения ранее используйте для ручной работы установки страниц NGINX и ошибок:

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

Получите сертификаты происхождения Cloudflare из безопасного хранилища и установите в требуемых местах.

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

Configure and add rules to load balancer if needed. Вам также может потребоваться добавить ВМ в пул балансировщика, если это необходимо.

## Обновление экземпляров (Maintenance)

1. Check status for NGINX service using the below command:

```console
sudo systemctl status nginx
```

2. Logging and monitoring for the servers are available at:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Updating Instances (Maintenance)

Конфигурация изменений в наших экземплярах NGINX поддерживается на GitHub, они должны быть развернуты в каждом экземпляре, как так:

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

3. Проверьте и перезагрузите конфигурацию [со Сигналами](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

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

## Обновление экземпляров (Maintenance)

```console
## Ведение журнала и мониторинг

```console
pm2 журналы
```

```console
pm2 monit
```

## Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. может быть передвижным обновлением или ручным обновлением. Дальнейшее значение имеет при изменении зависимостей или добавлении переменных зависания.

> [!DANGER] Автоматизированные трубопроводы не обрабатывают обновления зависимостей в минуту. We need to do a manual update before any deployment pipeline runs.

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

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. Вам не нужно запускать эти команды. These are here for documentation.

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

   Запуск плейсхолдеров для веб-клиента, они будут обновляться артефактами из линии Piwik Azure.

   > Todo: This setup needs to move to S3 or Azure Blob storage 
   > 
   > ```console
   ```console
     echo "serve -c ../../serve.json www -p 50505" &#062;&#062; client-start-primary.sh
     chmod +x client-start-primary. h
     pm2 удалить client-primary
     pm2 start . client-start-primary.sh --name client-primary
     echo "serve -c . /../serve.json www -p 52525" &#062;&#062; client-start-secondary.sh
     chmod +x client-start-secondary. h
     pm2 удалить client-secondary
     pm2 запустить ./client-start-secondary.sh --name client-secondary
```

## Обновление экземпляров (Maintenance)

```console
## Ведение журнала и мониторинг

```console
pm2 журналы
```

```console
pm2 monit
```

## Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. может быть передвижным обновлением или ручным обновлением. Дальнейшее значение имеет при изменении зависимостей или добавлении переменных зависания.

> [!DANGER] Автоматизированные трубопроводы не обрабатывают обновления зависимостей в минуту. We need to do a manual update before any deployment pipeline runs.

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

> [!NOTE] We are handling rolling updates to code, logic, via pipelines. Вам не нужно запускать эти команды. These are here for documentation.
