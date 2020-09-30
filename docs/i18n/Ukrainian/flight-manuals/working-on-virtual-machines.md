# Посібник з Віртуальних машин

Як учасник персоналу або розробник, вам, можливо, було надано доступ до наших хмарних провайдерів, наприклад Azure, Digital Ocean і т.д.

Ось кілька зручних команд, які можна використовувати для роботи на віртуальних машинах (VM), наприклад, оновлення технічного обслуговування або загальний захист будинків.

# Отримати список ОЗП

> [!NOTE] Поки ви вже можете отримати доступ до SSH до віртуальних повідомлень, не кажучи вже дозволити вам список віртуальних повідомлень, якщо Вам не надано доступ до хмарних порталів.

## Azure

Встановити Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Однораз) Встановіть на macOS з [`homebrew`](https://brew.sh):**

```
встановити azure-cli
```

> **(Одноразовий вхід:**

```
az login
```

> **Отримати список імен VM і адрес P:**

```
Газ vm list-addresses - таблиця виведення даних
```

## Цифровий океан

Встановіть Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Однораз) Встановіть на macOS з [`homebrew`](https://brew.sh):**

```
створити brew встановити doctl
```

> **(Одноразовий вхід:**

Автентифікація і контекст: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Отримати список імен VM та IP-адреси:**

```
doctl обчислений список droplet --format "ID,Name,PublicIPv4"
```

# Повернути VM (або VM комплект масштабу VM)

> Todo: Додати інструкції для обертання віртуальної пам'яті


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

# Залишити оновлення VMs

Ви повинні тримати ОП в курсі оновлень і оновлень. Це гарантує, що віртуальна машина буде виправлена найновішими виправленнями безпеки.

> [!УВАГА] Перед запуском цих команд:
> 
> - Переконайтеся, що VM повністю було ініціалізовано, і його немає пост-інсталяційний кроки.
> - Якщо ви оновлюєте пакунки ОП, які вже обслуговують додаток, переконайтеся, що додаток було зупинено / збережено. Оновлення пакунків призведе до розширення мережевого трафіку, пам'ять та/або сплеш процесора що супроводжують до витоку запущених програм.

Оновлення інформації пакунку

```console
sudo apt оновлення
```

Оновлення встановлених пакетів

```console
sudo apt оновлення -y
```

Очистити невикористані пакунки

```console
sudo apt автоматично -y
```

# Робота на веб-серверах (проксі)

Ми працюємо для збалансованих екземплярів Балансу Навантаження (Azure Load для наших серверів серверів. Ці сервери працюють NGINX, який повернув проксі весь трафік на freeCodeCamp.org від різних програм, що працюють на власній інфраструктурі.

Конфігурацію NGINX доступно на [цього репозиторію](https://github.com/freeCodeCamp/nginx-config).

## Перша установка

Ініціалізація VM за допомогою коду

### 1. (Необов'язково) Встановіть NGINX і налаштуйте із репозиторію.

Базове налаштування має бути готове до OOTB, за допомогою конфігурації хмари. SSH і вносити зміни до конкретних екземплярів(-ів).

Якщо ви не користувалися конфігурацією cloud-init у якості нижнього для ручного налаштування NGINX та сторінки помилок:

```console
sudo

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-pages

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx config nginx

cd /etc/nginx
```

### 2. Встановити Cloudflare походження сертифікати і налаштування upstream програми.

Отримайте вихідні сертифікати Cloudflare з безпечного сховища та встановіть необхідні місця.

**АБО**

Пересунути існуючі сертифікати:

```console
# Local
scp -r username@source-server-public-ip:/etc/nginx/sl ./
scp -pr ./sl username@target-server-public-ip:/tmp/

# Remote
rm -rf ./ssl
mv /tmp/sl ./
```

Оновити конфігурації:

```console
vi config/upstreams.conf
```

Додати/оновити IP-адреси вихідного/походження джерела.

### 3. Налаштування мережі і брандмауерів.

Налаштуйте Azure firewall і `ufw` необхідно для ingress origin адрес.

### 4. Додати VM до фонду балансувальника навантаження.

Налаштуйте і додавайте правила для завантаження балансувальника, при необхідності. Вам також може знадобитися додати ПМ для завантаження фонду балансувальника в разі потреби.

## Журнал і монітор

1. Перевіряти статус NGINX сервісу за допомогою команди нижче:

```console
sudo systemctl status nginx
```

2. Логінг і моніторинг для серверів доступні:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## Оновлення екземплярів (обслуговування)

Конфігураційні зміни на наші NGINX екземпляри підтримуються на GitHub, їх слід розгорнути на кожному екземплярі таким чином:

1. SSH в екземпляр і введіть sudo

```console
sudo su
```

2. Отримайте останній код конфігурації.

```console
cd /etc/nginx
git fetch --all --prune
git reset --hard origin/master
```

3. Перевірте та перезавантажте конфігурацію [на Сигнали](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# Робота в API екземплярах

1. Встановити інструменти збірки для бінарних вузлів (`node-gyp`і т. д.

```console
sudo apt встановити головний збірку
```

## Перша установка

Ініціалізація VM за допомогою коду

1. Встановити LTS.

2. Оновити `npm` і встановити PM2 і налаштувати logrotate і запустити під час завантаження

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. Клон freeCodeCamp, налаштування та ключі.

   ```console
   git clone https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git checkout production-current # або будь-яка інша гілка, щоб бути розгорнутим
   ```

4. Створіть `.env` з захищеного сховища облікових даних.

5. Створіть `google-credentials.json` з сховища захищених облікових даних.

6. Встановити залежності

   ```console
   npm ci
   ```

7. Зібрати сервер

   ```console
   npm запускає цензуру введення && npm запуск build:server
   ```

8. Запуск екземплярів

   ```console
   cd api-server
   pm2 start production-start.js -i max --max-memory-restart 600M --name org
   ```

## Журнал і монітор

```console
pm2 журнали
```

```console
pm2 monit
```

## Оновлення екземплярів (обслуговування)

Зміни коду потрібно розгорнути на API екземпляри з часу на час. Він може бути оновленням до рухомого або ручним оновленням. Пізніше під час зміни залежностей або додавання змінних.

> [!DANGER] Автоматизовані конвеєри не оновлюються через хвилину. Нам потрібно провести ручне оновлення перед будь-якими запущеними конвеєрами розгортання.

### 1. Ручні оновлення - використовуються для оновлення залежностей, змінні.

1. Зупинити всі екземпляри

```console
pm2 зупинити все
```

2. Встановити залежності

```console
npm ci
```

3. Зібрати сервер

```console
npm запускає цензуру введення && npm запуск build:server
```

4. Запуск екземплярів

```console
pm2 запускає всі --update-env && pm2 журнали
```

### 2. Оновлення для логічних змін в код.

```console
pm2 перезавантажити всі --update-env && pm2 лог
```

> [!NOTE] Ми обробляємо оновлення, логічно, через конвеєри. Вам не потрібно виконувати ці команди. Тут вони до документації.

# Робота з екземплярами клієнта

1. Встановити інструменти збірки для бінарних вузлів (`node-gyp`і т. д.

```console
sudo apt встановити головний збірку
```

## Перша установка

Ініціалізація VM за допомогою коду

1. Встановити LTS.

2. Оновити `npm` і встановити PM2 і налаштувати logrotate і запустити під час завантаження

   ```console
   npm i -g npm
   npm i -g pm2
   npm install -g serve
   pm2 install p2-logrotate
   pm2 запуску
   ```

3. Клонувати налаштування клієнта, установки і ключі.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git клієнт
   cd клієнт
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git клієнт
   cd клієнт
   ```

   Запустити екземпляри заповнення для веб-клієнта, їх буде оновлено з артефактами з літака Azure.

   > Todo: Це налаштування має переміститися в сховище S3 або Azure Blob 
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

## Журнал і монітор

```console
pm2 журнали
```

```console
pm2 monit
```

## Оновлення екземплярів (обслуговування)

Зміни коду потрібно розгорнути на API екземпляри з часу на час. Він може бути оновленням до рухомого або ручним оновленням. Пізніше під час зміни залежностей або додавання змінних.

> [!DANGER] Автоматизовані конвеєри не оновлюються через хвилину. Нам потрібно провести ручне оновлення перед будь-якими запущеними конвеєрами розгортання.

### 1. Ручні оновлення - використовуються для оновлення залежностей, змінні.

1. Зупинити всі екземпляри

   ```console
   pm2 зупинити все
   ```

2. Встановити або оновити залежності

3. Запуск екземплярів

   ```console
   pm2 запускає всі --update-env && pm2 журнали
   ```

### 2. Оновлення для логічних змін в код.

```console
pm2 перезавантажити всі --update-env && pm2 лог
```

> [!NOTE] Ми обробляємо оновлення, логічно, через конвеєри. Вам не потрібно виконувати ці команди. Тут вони до документації.
