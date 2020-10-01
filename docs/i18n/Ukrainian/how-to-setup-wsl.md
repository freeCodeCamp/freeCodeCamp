# Встановити freeCodeCamp для Windows Subsystem для Linux (WSL)

> [!NOTE] Перш ніж ви дотримуєтесь цих інструкцій, переконайтеся, що ваша система відповідає вимогам
> 
> **WSL 2**: Windows 10 64-розрядна (версія 2004, Поновлення 19041 року або вище) - доступно для всіх дистрибуцій, включаючи Windows 10 Home.
> 
> **Docker Desktop for Windows**: See respective requirements for [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) and [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Це керівництво охоплює деякі загальні кроки з настройками WSL2. Після вирішення деяких поширених проблем з WSL2 ви повинні мати можливість слідувати нашому посібнику з локальних налаштувань для роботи з безкоштовним CodeCamp на Windows з підтримкою WSL distro, як Ubuntu.

## Увімкнути WSL

Follow the instructions on the [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install WSL1 and followed by upgrading to WSL2.

## Install Ubuntu

1. Рекомендуємо використовувати Ubuntu-18.04 або вище з WSL2.

   > [!NOTE]
   > 
   > Всі вони із власним хребтом і утворюють недебське походження, у той час як ви можете використовувати інші недебіянські спини, всі вони приходять зі своїми хребтами і виходять за рамки цього керівництва.

2. Оновіть залежності для ОС

   ```console
   sudo apt оновлення
   sudo apt оновлення -y

   # очищення
   sudo apt autoremove -y
   ```

## Налаштуйте Git

Git постачається попередньо встановленою Ubuntu 18.04, переконайтеся, що ваша Git версія `git --version`.

```output
~
<unk> git --version
git version 2.25.1
```

(Не обов'язково, але рекомендовано) ви можете тепер перейти до [налаштування її жорстких ключів](https://help.github.com/articles/generating-an-ssh-key) за допомогою GitHub.

## Встановлення редактора коду

Ми наполегливо рекомендуємо встановити [Visual Studio Code](https://code.visualstudio.com) on Windows 10. Вона має велику підтримку WSL і автоматично встановлює всі необхідні розширення на вашому WSL distro.

По суті, ви зміните та збережете свій код на Ubuntu-18.04 встановленим на Windows.

## Встановлення робочого столу Docker

**Докер ПК для Windows** дозволяє встановлювати і запускати базу даних і сервіси, такі як MongoDB, NGINX, і т. д. Це корисно для уникнення поширених паркувань із встановленням MongoDB або інших служб безпосередньо на Windows або WSL2.

Слідкуйте за вбудованістю в [офіційну документацію](https://docs.docker.com/docker-for-windows/install) і встановіть Docker робочий стіл для дистрибуції Windows.

Є деякі мінімальні вимоги апаратного забезпечення для найкращої роботи.

## Налаштування Docker робочого столу для WSL

Після установки Docker на робочому столі [виконайте ці інструкції](https://docs.docker.com/docker-for-windows/wsl) і налаштуйте їх для використання встановлення Ubuntu-18.04 у якості зворотного серверу.

Це робить його так, що контейнери працюють на стороні WSL, а не на Windows. Ви зможете отримати доступ до сервісів через `http://localhost` як до Windows, так і до Ubuntu.

## Встановити MongoDB з Docker Hub

Після налаштування Docker для роботи з WSL2, виконайте ці кроки для запуску MongoDB служби:

1. Запуск нового терміналу Ubuntu-18.04

2. Потягніть `MongoDB 3.6` з dockerhub

   ```console
   docker pull mongo:3
   ```

3. Запустіть службу MongoDB на порту `27017`і налаштуйте його для автоматичного запуску системи

   ```console
   docker запустив -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Тепер ви можете отримати доступ до сервісу з обох Windows або Ubuntu за `mongodb://localhost:27017`.

## Встановлення Node.js та npm

Рекомендується встановити LTS реліз для Node.js з менеджером версій вузла - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Після інсталяції ці команди для встановлення і використання потрібних версій Node.js

```console
установка nvm --lts

# OR
# nvm встановити <version>

nvm встановити 14

# Використання
# nvm використовувати <version>

nvm використання 12
```

Node.js приходить в пакет з `npm`, ви можете оновити до останньої версії `npm` з:

```console
npm встановити -g npm@latest
```

## Налаштувати локальний пошук

Тепер, коли ви встановили передкумісти, виконайте [наш локальний посібник з налаштування](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) для клонування, встановити та налаштувати freeCodeCamp локально на вашому комп'ютері.

> [!УВАГА]
> 
> Зауважте, що наразі налаштовано для кіпрських тестів (і пов'язаних з цим графічним інтерфейсом). Ви повинні вміти працювати на більшій частині кодової бази.

## Корисні посилання

- [Налаштування WSL2 Dev з Ubuntu 20.04, Node.js, MongoDB, VS Code і Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - статтю компанії Mrugesh Mohapatra (Staff Developer на freeCodeCamp.org)
- Часті запитання на:
  - [Підсистема Windows для Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker стільниці для Windows](https://docs.docker.com/docker-for-windows/faqs)
