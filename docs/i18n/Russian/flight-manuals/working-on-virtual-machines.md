# Руководство по полетам для работы на виртуальных машинах

Являясь сотрудником или dev-team, вам был предоставлен доступ к нашим облачным поставщикам услуг, таким как Azure, Digital Ocean, и т. д.

Вот несколько полезных команд, которые можно использовать для работы на виртуальных машинах (VM), например, выполнение обновления технического обслуживания или общее обслуживание.

# Получить список ВМ

> [!ПРИМЕЧАНИЕ] Если у вас уже есть SSH доступ к ВМС, только это не позволит вам вывести список ВМ до тех пор, пока вам не будет предоставлен доступ к облачным порталам.

## Azure

Установить Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(One-time) Установить на macOS с [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **Вход в систему:**

```
az login
```

> **Получить список имен ВМ и P адресов:**

```
Таблица vm list-ip-addresses --output
```

## Цифровой океан

Установите Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(One-time) Установить на macOS с [`homebrew`](https://brew.sh):**

```
варить doctl установки
```

> **Вход в систему:**

Переключение контекста и аутентификации: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
init аутентификации doctl
```

> **Получить список имен и IP-адресов ВМ:**

```
doctl вычисляет список дроптов --format "ID,Имя,Публичный IPv4"
```

# Прокрутите набор VM (или VM масштабирование)

> Todo: Добавить инструкции для вращения VM(s)


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

# Не обновлять ВМ

Вы должны держать ВМ в курсе последних обновлений и обновлений. Это гарантирует, что виртуальная машина патче с последними исправлениями безопасности.

> [!ВНИМАНИЕ] Перед выполнением этих команд:
> 
> - Убедитесь, что ВМ был оснащен полностью и после установки не запущено.
> - Если вы обновляете пакеты на виртуальной машине, которая уже обслуживает приложение, убедитесь, что приложение было остановлено / сохранено. Обновление пакетов вызовет скачки пропускной способности сети, памяти и/или процессора , приводящие к сбоям в работе запущенных приложений.

Обновить информацию о пакете

```console
sudo apt обновление
```

Обновить установленные пакеты

```console
sudo apt upgrade -y
```

Очистка неиспользуемых пакетов

```console
sudo apt autoremove -y
```

# Работа на веб-серверах (Proxy)

Мы выполняем экземпляры сбалансированной нагрузки (Azure Load Balancer) для наших серверов. Эти серверы работают с NGINX, что обратит все трафик на freeCodeCamp.org от различных приложений, работающих на собственной инфраструктуре .

Конфигурация NGINX доступна на [этом репозитории](https://github.com/freeCodeCamp/nginx-config).

## Первая установка

Подготовка ВМ с кодом

### 1. (Необязательно) Установите NGINX и настройте из репозитория.

Базовая настройка должна быть готова OOTB, через облачную конфигурацию. SSH и вносят изменения, необходимые для конкретного экземпляра(ов).

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

### 2. Установите Cloudflare оригинальные сертификаты и конфигурацию приложения из исходного кода.

Получите сертификаты происхождения Cloudflare из безопасного хранилища и установите в требуемых местах.

**ИЛИ**

Переместить через существующие сертификаты:

```console
# Локальные
scp -r username@source-server-public-ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public-ip:/tmp/

# Удалять
rm -rf ./sssl
mv /tmp/ssl ./
```

Обновить настройки Upstream:

```console
vi configs/upstreams.conf
```

Добавить/обновить IP-адреса приложений источника/происхождения.

### 3. Настроить сеть и брандмауэры.

Настройте брандмауэры Azure и `ufw` , если это необходимо для адресов начала соединения.

### 4. Добавить ВМ в бэкэнд балансировщика нагрузки.

Настройка и добавление правил для балансировщика нагрузки при необходимости. Вам также может потребоваться добавить ВМ в пул балансировщика, если это необходимо.

## Ведение журнала и мониторинг

1. Проверка статуса службы NGINX с помощью команды ниже:

```console
sudo systemctl status nginx
```

2. Журналирование и мониторинг серверов доступны по адресу:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Обновление экземпляров (Maintenance)

Конфигурация изменений в наших экземплярах NGINX поддерживается на GitHub, они должны быть развернуты в каждом экземпляре, как так:

1. SSH в экземпляр и введите sudo

```console
sudo su
```

2. Получить последний код конфигурации.

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

# Работа над экземплярами API

1. Установить инструменты сборки для файлов узлов (`node-gyp`) и т.д.

```console
sudo apt инсталлирует сборку
```

## Первая установка

Подготовка ВМ с кодом

1. Установить узел LTS.

2. Обновите `npm` и установите PM2 и настройте logrotate и запустите при загрузке

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Бесплатное клонирование CodeCamp, настройка env и ключи.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # или любая другая ветка будет развернута
   ```

4. Создайте `.env` из безопасного хранилища учетных данных.

5. Создайте `google-credentials.json` из хранилища защищенных учетных данных.

6. Установить зависимости

   ```console
   npm ci
   ```

7. Построить сервер

   ```console
   npm запуск ensure-env && npm запустить build:server
   ```

8. Начать экземпляры

   ```console
   cd api-server
   pm2 запустить production-start.js -i max --max-memory-restart 600M --name org
   ```

## Ведение журнала и мониторинг

```console
pm2 журналы
```

```console
pm2 monit
```

## Обновление экземпляров (Maintenance)

Изменения кода должны время от времени вводиться в экземпляры API. может быть передвижным обновлением или ручным обновлением. Дальнейшее значение имеет при изменении зависимостей или добавлении переменных зависания.

> [!DANGER] Автоматизированные трубопроводы не обрабатывают обновления зависимостей в минуту. Нам нужно выполнить обновление вручную, прежде чем запускать любой конвейер установки.

### 1. Ручные обновления - Используется для обновления зависимостей, переменных env.

1. Остановить все экземпляры

```console
pm2 остановить все
```

2. Установить зависимости

```console
npm ci
```

3. Построить сервер

```console
npm запуск ensure-env && npm запустить build:server
```

4. Начать экземпляры

```console
pm2 запустить все --update-env && pm2 логи
```

### 2. Обновление роллирования - используется для логических изменений в коде.

```console
pm2 перезагрузить все --update-env && pm2 журналы
```

> [!ПРИМЕЧАНИЕ] Мы работаем над обновлением маршрутизации к коду, логике и через трубопроводы. Вам не нужно запускать эти команды. Они здесь для документации.

# Работа в клиентских экземплярах

1. Установить инструменты сборки для файлов узлов (`node-gyp`) и т.д.

```console
sudo apt инсталлирует сборку
```

## Первая установка

Подготовка ВМ с кодом

1. Установить узел LTS.

2. Обновите `npm` и установите PM2 и настройте logrotate и запустите при загрузке

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Клонируйте конфигурацию клиента, установите env и ключи.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git клиент
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git клиент
   cd client
   ```

   Запуск плейсхолдеров для веб-клиента, они будут обновляться артефактами из линии Piwik Azure.

   > Todo: Эта настройка должна быть перенесена на хранилище Blob S3 или Azure 
   > 
   > ```console
   echo "serve -c ../../serve.json www -p 50505" >> client-start-primary.sh
   chmod +x client-start-primary. h
   pm2 удалить client-primary
   pm2 start . client-start-primary.sh --name client-primary
   echo "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. h
   pm2 удалить client-secondary
   pm2 запустить ./client-start-secondary.sh --name client-secondary
```

## Ведение журнала и мониторинг

```console
pm2 журналы
```

```console
pm2 monit
```

## Обновление экземпляров (Maintenance)

Изменения кода должны время от времени вводиться в экземпляры API. может быть передвижным обновлением или ручным обновлением. Дальнейшее значение имеет при изменении зависимостей или добавлении переменных зависания.

> [!DANGER] Автоматизированные трубопроводы не обрабатывают обновления зависимостей в минуту. Нам нужно выполнить обновление вручную, прежде чем запускать любой конвейер установки.

### 1. Ручные обновления - Используется для обновления зависимостей, переменных env.

1. Остановить все экземпляры

   ```console
   pm2 остановить все
   ```

2. Установить или обновить зависимости

3. Начать экземпляры

   ```console
   pm2 запустить все --update-env && pm2 логи
   ```

### 2. Обновление роллирования - используется для логических изменений в коде.

```console
pm2 перезагрузить все --update-env && pm2 журналы
```

> [!ПРИМЕЧАНИЕ] Мы работаем над обновлением маршрутизации к коду, логике и через трубопроводы. Вам не нужно запускать эти команды. Они здесь для документации.
