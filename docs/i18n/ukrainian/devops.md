# Довідник DevOps

Цей посібник допоможе вам зрозуміти наш стек інфраструктури і те, як ми підтримуємо наші платформи. Хоча цей посібник не має вичерпних подробиць всіх операцій, його можна використовувати як довідник для розуміння систем.

Зв’яжіться з нами, якщо у вас виникнуть запитання, і ми з радістю роз’яснимо всі деталі.

## Керівництво з розгортання коду

Цей репозиторій постійно будується, тестується та розробляється на **окремих наборах інфраструктури (серверах, базах даних, CDN тощо)**.

Це передбачає три кроки, які потрібно виконувати послідовно:

1. Нові зміни (виправлення та функціональності) об’єднуються до нашої основної гілки (`main`) через запити на злиття.
2. Ці зміни проходять через ряд автоматизованих тестів.
3. Після проходження тестів ми випускаємо зміни (або оновлюємо їх, якщо потрібно) для розгортання у нашій інфраструктурі.

### Building the codebase - Mapping Git Branches to Deployments

Typically, [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main) (the default development branch) is merged into the [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) branch once a day and is released into an isolated infrastructure.

This is an intermediate release for our developers and volunteer contributors. It is also known as our "staging" or "beta" release.

It is identical to our live production environment at `freeCodeCamp.org`, other than it using a separate set of databases, servers, web-proxies, etc. This isolation lets us test ongoing development and features in a "production" like scenario, without affecting regular users of freeCodeCamp.org's main platforms.

Once the developer team [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) is happy with the changes on the staging platform, these changes are moved every few days to the [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-current) branch.

This is the final release that moves changes to our production platforms on freeCodeCamp.org.

### Тестування змін: інтеграція та приймальне користувацьке тестування

Ми використовуємо різні рівні інтеграції та приймального тестування, щоб перевірити якість коду. Всі наші тести виконуються за допомогою такого програмного забезпечення, як [GitHub Actions CI](https://github.com/freeCodeCamp/freeCodeCamp/actions) та [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Ми маємо модульні тести для тестування розв’язків завдань, API серверів та інтерфейсів користувача. Це допомагає протестувати інтеграцію різних компонентів.

> [!NOTE] Ми також в процесі написання тестів кінцевого користувача, що допоможе відтворити реальні сценарії, як-от оновлення електронної пошти або дзвінок до API чи сторонніх служб.

Ці тести допомагають запобігти повторенню проблем і гарантують, що ми не вводимо нову помилку під час роботи над іншою помилкою або функцією.

### Deploying Changes - Pushing changes to servers

Ми налаштували безперервне програмне забезпечення доставки для надсилання змін до наших серверів розробки та виробництва.

Once the changes are pushed to the protected release branches, a build pipeline is automatically triggered for the branch. The build pipelines are responsible for building artifacts and keeping them in a cold storage for later use.

The build pipeline goes on to trigger a corresponding release pipeline if it completes a successful run. The release pipelines are responsible for collecting the build artifacts, moving them to the servers, and going live.

Статуси збірок та випуски [доступні тут](#build-test-and-deployment-status).

## Trigger a Build, Test, and Deploy

Currently, only members of the developer team can push to the production branches. The changes to the `production-*` branches can land only via fast-forward merge to the [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!NOTE] In the upcoming days, we would improve this flow to be done via pull requests, for better access management and transparency.

### Pushing changes to Staging Applications

1. Configure your remotes correctly.

   ```sh
   git remote -v
   ```

   **Results:**

   ```
   origin   git@github.com:raisedadead/freeCodeCamp.git (fetch)
   origin   git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Make sure your `main` branch is pristine and in sync with the upstream.

   ```sh
   git checkout main
   git fetch --all --prune
   git reset --hard upstream/main
   ```

3. Check that the GitHub CI is passing on the `main` branch for upstream.

   The [continuous integration](https://github.com/freeCodeCamp/freeCodeCamp/actions) tests should be green and PASSING for the `main` branch. Click the green check mark next to the commit hash when viewing the `main` branch code.

    <details> <summary> Checking status on GitHub Actions (screenshot) </summary>
      <br>
      ![Check build status on GitHub Actions](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/devops/github-actions.png)
    </details>

   If this is failing you should stop and investigate the errors.

4. Confirm that you are able to build the repository locally.

   ```
   pnpm run clean-and-develop
   ```

5. Move changes from `main` to `prod-staging` via a fast-forward merge

   ```
   git checkout prod-staging
   git merge main
   git push upstream
   ```

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `prod-staging` branch. Once the build is complete, the artifacts are saved as `.zip` files in a cold storage to be retrieved and used later.

The release pipeline is triggered automatically when a fresh artifact is available from the connected build pipeline. For staging platforms, this process does not involve manual approval, and the artifacts are pushed to the Client CDN and API servers.

### Pushing changes to Production Applications

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

   > [!NOTE] You will not be able to force push and if you have re-written the history in any way, these commands will error out.
   > 
   > If they do, you may have done something incorrectly and you should just start over.

The above steps will automatically trigger a run on the build pipeline for the `prod-current` branch. Once a build artifact is ready, it will trigger a run on the release pipeline.

**Additional Steps for Staff Action**

Once a release run is triggered, members of the developer staff team will receive an automated manual intervention email. They can either _approve_ or _reject_ the release run.

If the changes are working nicely and have been tested on the staging platform, then it can be approved. The approval must be given within 4 hours of the release being triggered before getting rejected automatically. A staff can re-trigger the release run manually for rejected runs, or wait for the next cycle of release.

For staff use:

| Check your email for a direct link or [go to the release dashboard](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) after the build run is complete. |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                    |

Once one of the staff members approves a release, the pipeline will push the changes live to freeCodeCamp.org's production CDN and API servers.

## Збірка, тест та статус розгортання

Ось поточний тест, збірка та статус розгортання кодової бази.

| Гілка                                                                            | Модульні тести                                                                                                                                                                                                                   | Інтеграційні тести                                                                                                                                                                                                       | Збірки та розгортання                                                                                                             |
|:-------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------------------------------------- |
| [`main`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main)                 | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22)                               | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time)         | -                                                                                                                                 |
| [`prod-staging`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-staging)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-staging) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-staging&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| [`prod-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/prod-staging) | [![Node.js CI](https://github.com/freeCodeCamp/freeCodeCamp/workflows/Node.js%20CI/badge.svg?branch=prod-current)](https://github.com/freeCodeCamp/freeCodeCamp/actions?query=workflow%3A%22Node.js+CI%22+branch%3Aprod-current) | [![Cypress E2E Tests](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ke77ns/prod-current&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ke77ns/analytics/runs-over-time) | [Azure Pipelines](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_dashboards/dashboard/d59f36b9-434a-482d-8dbd-d006b71713d4) |
| `prod-next` (експериментальне, майбутнє)                                         | -                                                                                                                                                                                                                                | -                                                                                                                                                                                                                        | -                                                                                                                                 |

## Ранній доступ та бета-тестування

Ми вітаємо вас протестувати ці випуски в режимі **публічного бета-тестування** та отримати ранній доступ до майбутніх функціональностей платформи. Іноді ці функціональності/зміни також називають **наступними, бета, проміжними** тощо.

Ваші внески у вигляді зворотного зв’язку та повідомлень про проблеми допоможуть нам зробити платформу `freeCodeCamp.org` більш **стійкою**, **послідовною** та **стабільною** для кожного.

Ми вдячні за повідомлення про помилки, з якими ви стикаєтесь. Це допомагає покращити freeCodeCamp.org. Ви круті!

### Ідентифікація майбутньої версії платформ

Наразі публічне бета-тестування доступне на:

| Програма | Мова       | URL                                      |
|:-------- |:---------- |:---------------------------------------- |
| Навчання | Англійська | <https://www.freecodecamp.dev>           |
|          | Іспанська  | <https://www.freecodecamp.dev/espanol>   |
|          | Китайська  | <https://www.freecodecamp.dev/chinese>   |
| Новини   | Англійська | <https://www.freecodecamp.dev/news>      |
| Форум    | Англійська | <https://forum.freecodecamp.dev>         |
|          | Китайська  | <https://freecodecamp.dev/chinese/forum> |
| API      | -          | `https://api.freecodecamp.dev`           |

> [!NOTE] Назва домену відрізняється від **`freeCodeCamp.org`**. Це є навмисним, щоб відвернути індексацію пошукової системи і запобігти непорозумінь для користувачів платформи.
> 
> Наведений вище список не є повним списком усіх програм, які ми забезпечуємо. Також не всі мовні варіанти розгорнуті у проміжній версії, щоб зберегти ресурси.

### Ідентифікація поточної версії платформ

**Поточна версія платформи завжди доступна на [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Команда розробників об’єднує зміни з гілки `prod-staging` до `prod-current`, коли вони випускають зміни. Верхнім затвердженням має бути те, що ви побачите на сайті.

Ви можете ідентифікувати точну розгорнуту версію, відвідавши збірку та журнали розгортання, доступні в розділі статусу. Або ж ви можете написати нам у [чаті](https://discord.gg/PRyKn3Vbay) для підтвердження.

### Відомі обмеження

Існують деякі відомі обмеження і компроміси при використанні бета-версії платформи.

- **Всі дані та особистий прогрес на бета-платформі НЕ будуть збережені чи перенесені до робочої версії**

  **Користувачі бета-версії матимуть окремий обліковий запис.** Бета-версія використовує іншу фізичну базу даних. Це дає можливість запобігти випадковій втраті даних чи змін. В разі потреби команда розробників може очистити базу даних цієї бета-версії.

- **Бета-платформи не надають жодних гарантій щодо працездатності та надійності**

  Очікується, що розгортання відбуватиметься часто та у швидких ітераціях, іноді декілька разів на день. В результаті іноді в бета-версії будуть неочікувані простої чи неробочі функціональності.

- **Щоб забезпечити ефективність виправлення, радимо не надсилати регулярних користувачів на цей вебсайт з метою перевірки.**

  Метою бета-сайту завжди було вдосконалити локальну розробку та тестування, нічого іншого. Це не майбутня версія платформи, а звичайний перегляд того, над чим ми працюємо.

- **Сторінка входу може відрізнятись від робочої версії**

  Ми використовуємо тестовий клієнт для freeCodeCamp.dev на Auth0, тому не можемо встановити власний домен. Це дозволяє зробити так, що всі зворотні виклики й сторінки авторизації з’являтимуться на домені за замовчуванням: `https://freecodecamp-dev.auth0.com/`. Це не впливає на функціональність та є максимально приближеним до робочої версії.

## Повідомлення про проблеми та зворотний зв’язок

Будь ласка, створюйте нові завдання для обговорення чи повідомлення про помилки.

Ви можете надіслати електронний лист на `dev[at]freecodecamp.org` у разі виникнення будь-яких запитів. Про вразливість безпеки потрібно повідомляти на `security[at]freecodecamp.org`, а не публічному журналі чи форумі.

## Керівництво з обслуговування сервера

> [!WARNING]
> 
> 1. Це керівництво стосується **лише персоналу freeCodeCamp**.
> 2. У цих інструкціях вказано не всю інформацію, тому будьте обережними.

As a member of the staff, you may have been given access to our cloud service providers like Azure, Digital Ocean, etc.

Here are some handy commands that you can use to work on the Virtual Machines (VM), for instance performing maintenance updates or doing general housekeeping.

## Get a list of the VMs

> [!NOTE] While you may already have SSH access to the VMs, that alone will not let you list VMs unless you have been granted access to the cloud portals as well.

### Azure

Встановіть Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(Одноразово) Встановіть на macOS за допомогою [`homebrew`](https://brew.sh):**

```
brew install azure-cli
```

> **(Одноразовий) Вхід:**

```
az login
```

> **Отримайте список назв віртуальних машин та IP-адрес:**

```
az vm list-ip-addresses --output table
```

### Digital Ocean

Встановіть Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(Одноразово) Встановіть на macOS за допомогою [`homebrew`](https://brew.sh):**

```
brew install doctl
```

> **(Одноразовий) Вхід:**

Authentication and context switching: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
doctl auth init
```

> **Отримайте список назв віртуальних машин та IP-адрес:**

```
doctl compute droplet list --format "ID,Name,PublicIPv4"
```

## Spin New Resources

We are working on creating our IaC setup, and while that is in works you can use the Azure portal or the Azure CLI to spin new virtual machines and other resources.

> [!TIP] No matter your choice of spinning resources, we have a few [handy cloud-init config files](https://github.com/freeCodeCamp/infra/tree/main/cloud-init) to help you do some of the basic provisioning like installing docker or adding SSH keys, etc.

## Keep VMs Updated

You should keep the VMs up to date by performing updates and upgrades. This will ensure that the virtual machine is patched with the latest security fixes.

> [!WARNING] Before you run these commands:
> 
> - Make sure that the VM has been provisioned completely and that there are no post-install steps running.
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

## Працюйте над вебсерверами (проксі)

Ми запускаємо збалансовані екземпляри (Azure Load Balancer) для наших вебсерверів. These servers are running NGINX which reverse proxy all of the traffic to freeCodeCamp.org from various applications running on their own infrastructures.

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

3. Налаштуйте мережу та брандмауери.

   Configure Azure firewalls and `ufw` as needed for ingress origin addresses.

4. Add the VM to the load balancer backend pool.

   Configure and add rules to load balancer if needed. You may also need to add the VMs to load balancer backend pool if needed.

### Журналювання та моніторинг

1. Перевірте стан служби NGINX за допомогою наступної команди:

   ```console
   sudo systemctl status nginx
   ```

2. Журналювання та моніторинг служб доступні на:

   NGINX Amplify: [https://amplify.nginx.com]('https://amplify.nginx.com') — наша поточна базова панель моніторингу. Ми працюємо над детальнішими показниками для кращого спостереження

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

1. Встановіть Node LTS.

2. Встановіть pnpm глобально.

```console
npm install -g pnpm
```

3. Клонуйте freeCodeCamp, налаштуйте середовище та ключі.

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
cd freeCodeCamp
git checkout prod-current # or any other branch to be deployed
```

4. Create the `.env` from the secure credentials storage.

5. Встановіть залежності

```console
pnpm install
```

6. Setup pm2 `logrotate` and startup on boot

```console
pnpm pm2 install pm2-logrotate
pnpm pm2 startup
```

7. Побудуйте сервер

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

8.  Запустіть екземпляри

```console
pnpm start:server
```

### Logging and Monitoring

```console
pnpm pm2 logs
```

```console
pnpm pm2 monit
```

### Updating Instances (Maintenance)

Code changes need to be deployed to the API instances from time to time. It can be a rolling update or a manual update. The latter is essential when changing dependencies or adding environment variables.

> [!ATTENTION] The automated pipelines are not handling dependencies updates at the minute. We need to do a manual update before any deployment pipeline runs.

#### 1. Manual Updates - Used for updating dependencies, env variables.

1. Зупиніть всі екземпляри

```console
pnpm pm2 stop all
```

2. Встановіть залежності

```console
pnpm install
```

3. Побудуйте сервер

```console
pnpm prebuild && pnpm build:curriculum && pnpm build:server
```

4. Запустіть екземпляри

```console
pnpm start:server && pnpm pm2 logs
```

#### 2. Rolling updates - Used for logical changes to code.

```console
pnpm reload:server && pnpm pm2 logs
```

> [!NOTE] We are handling rolling updates to code and logic via pipelines. You should not need to run these commands. These are here for documentation.

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

### First Install

Provisioning VMs with the Code

1. Встановіть Node LTS.

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

1. Зупиніть всі екземпляри

   ```console
   pm2 stop all
   ```

2. Встановіть чи оновіть залежності

3. Запустіть екземпляри

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

3. Налаштуйте мережу та брандмауери.

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

**Кластер Docker:**

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

ssh into the VM (hosted on Digital Ocean).

```console
cd tools
git pull origin master
pnpm install
pnpm run build
pm2 restart contribute-app
```

## Updating Node.js Versions on VMs

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

Alias the `default` Node.js version to the current LTS (pinned to the latest major version)

```console
nvm alias default 16
```

(Optional) Uninstall old versions

```console
nvm uninstall <version>
```

> [!ATTENTION] For client applications, the shell script can't be resurrected between Node.js versions with `pm2 resurrect`. Deploy processes from scratch instead. This should become nicer when we move to a docker-based setup.
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

## Встановлення та оновлення агентів Azure Pipeline

Див. https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=azure-devops та дотримуйтесь інструкцій, щоб зупинити, видалити та перевстановити агентів. Загалом ви можете дотримуватись кроків, наведених нижче.

Вам знадобиться PAT, який можна взяти тут: https://dev.azure.com/freeCodeCamp-org/_usersSettings/tokens

### Installing Agents on Deployment targets

Navigate to [Azure Devops](https://dev.azure.com/freeCodeCamp-org) and register the agent from scratch in the requisite [deployment groups](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_machinegroup).

> [!NOTE] You should run the scripts in the home directory, and make sure no other `azagent` directory exists.

### Оновлення агентів

Currently updating agents requires them to be removed and reconfigured. This is required for them to correctly pick up `PATH` values and other system environment variables. We need to do this for instance updating Node.js on our deployment target VMs.

1. Перейдіть та перевірте статус служби

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

## Керівництво з розсилки листів

Ми використовуємо [інструмент CLI](https://github.com/freecodecamp/sendgrid-email-blast) для наших тижневих листів. Щоб підготувати та почати цей процес потрібно:

1. Увійдіть до DigitalOcean та почніть використовувати нові краплі в межах проєкту `Sendgrid`. Використайте знімок Ubuntu Sendgrid з найновішою датою. Він попередньо завантажений з інструментом CLI та сценарієм для отримання електронних пошт з бази даних. Зважаючи на поточний обсяг, трьох крапель достатньо для своєчасного надсилання листів.

2. Налаштуйте сценарій, щоб отримати віддалений доступ до списку електронних пошт.

   ```console
   cd /home/freecodecamp/scripts/emails
   cp sample.env .env
   ```

   Вам потрібно буде замінити значення заповнювачів у файлі `.env` на свої облікові дані.

3. Запустіть сценарій.

   ```console
   node get-emails.js emails.csv
   ```

   Це збереже список електронних пошт у файлі `emails.csv`.

4. Розділіть електронні пошти на декілька файлів, залежно від кількості потрібних крапель. Це найлегше зробити за допомогою `scp`, щоб локально отримати список електронних пошт та, використовуючи свій улюблений текстовий редактор, розділити їх на декілька файлів. Кожен файл потребує заголовку `email,unsubscribeId`.

5. Перейдіть до каталогу CLI за допомогою `cd /home/sendgrid-email-blast` та налаштуйте інструмент [згідно документації](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/README.md).

6. Запустіть інструмент, щоб надіслати листи, дотримуючись [документації з користування](https://github.com/freeCodeCamp/sendgrid-email-blast/blob/main/docs/cli-steps.md).

7. Як тільки розсилка листів завершиться, переконайтеся, що усі повідомлення доставлено успішно, перш ніж знищити краплі.

## Керівництво з додавання екземплярів новин нових мов

### Зміни теми

Ми використовуємо власну [тему](https://github.com/freeCodeCamp/news-theme) для публікацій новин. Виконавши наступні зміни теми, можна додати нову мову.

1. Врахуйте інструкцію `else if` до [коду ISO нової мови](https://www.loc.gov/standards/iso639-2/php/code_list.php) у [`setup-locale.js`](https://github.com/freeCodeCamp/news-theme/blob/main/assets/config/setup-locale.js)
2. Створіть початкову папку конфігурації, створивши копію папки [`assets/config/en`](https://github.com/freeCodeCamp/news-theme/tree/main/assets/config/en) та змінивши її назву на код нової мови. (`en` —> `es` для іспанської)
3. Всередині папки нової мови змініть назви змінних у `main.js` та `footer.js` на відповідні скорочені коди мови (`enMain` —> `esMain` для іспанської)
4. Створіть копію [`locales/en.json`](https://github.com/freeCodeCamp/news-theme/blob/main/locales/en.json) та змініть її назву на код нової мови.
5. Додайте сценарії для щойно створених файлів конфігурації до [`partials/i18n.hbs`](https://github.com/freeCodeCamp/news-theme/blob/main/partials/i18n.hbs).
6. Додайте сценарій відповідної мови `day.js` з [cdnjs](https://cdnjs.com/libraries/dayjs/1.10.4) до [freeCodeCamp CDN](https://github.com/freeCodeCamp/cdn/tree/main/build/news-assets/dayjs/1.10.4/locale)

### Зміни інформаційної панелі Ghost

Оновіть активи публікацій, перейшовши на Ghost Dashboard > Settings > General та завантаживши [піктограму](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc-puck-500-favicon.png), [логотип](https://github.com/freeCodeCamp/design-style-guide/blob/master/downloads/fcc_primary_large.png) та [зображення](https://github.com/freeCodeCamp/design-style-guide/blob/master/assets/fcc_ghost_publication_cover.png).
