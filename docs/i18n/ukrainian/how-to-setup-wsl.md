# Налаштування freeCodeCamp на Windows Subsystem for Linux (WSL)

> [!NOTE] Перш ніж виконувати ці інструкції, переконайтеся, що ваша система відповідає вимогам
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 чи вище) — доступно для всіх дистрибутивів, включно з Windows 10 Home.
> 
> **Docker Desktop для Windows**: див. відповідні вимоги для [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) та [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Цей посібник охоплює деякі загальні кроки з налаштуванням WSL2. Як тільки загальні питання з WSL2 вирішено, ви зможете використовувати [цей посібник з локального налаштування](how-to-setup-freecodecamp-locally.md), щоб працювати з freeCodeCamp на Windows, запускаючи дистрибутив WSL як Ubuntu.

## Активуйте WSL

Дотримуйтесь інструкцій з [офіційної документації](https://docs.microsoft.com/en-us/windows/wsl/install-win10), щоб встановити WSL1 та оновити його до WSL2.

## Встановіть Ubuntu

1. Рекомендуємо використовувати Ubuntu-18.04 або вище з WSL2.

   > [!NOTE]
   > 
   > Ви можете використовувати інші дистрибутиви, основою яких не є Debian, але у них наявні певні недоліки та вони виходять за рамки цього посібника.

2. Оновіть залежності ОС

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Налаштуйте Git

Git попередньо встановлений в Ubuntu 18.04. Перевірте версію Git за допомогою команди `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Необов’язково, але рекомендовано) Тепер ви можете перейти до [налаштування ключів ssh](https://help.github.com/articles/generating-an-ssh-key) на GitHub.

## Встановлення редактора коду

Ми наполегливо рекомендуємо встановити [Visual Studio Code](https://code.visualstudio.com) на Windows 10. Цей редактор підтримує WSL та автоматично встановлює всі необхідні розширення на вашому дистрибутиві WSL.

По суті, ви змінюватимете та зберігатимете свій код на Ubuntu-18.04 із VS Code, встановленим на Windows.

Якщо ви використовуєте [IntelliJ Idea](https://www.jetbrains.com/idea/), можливо, вам знадобиться оновити інтерпретатор Node та керування пакунками Npm до версії, налаштованої у вашому дистрибутиві WSL.

Ви можете перевірити ці налаштування в розділі Settings > Languages & Frameworks > Node.js and NPM.

## Встановлення Docker Desktop

**Docker Desktop на Windows** дозволяє встановити й запускати бази даних (наприклад, MongoDB) та інші служби (наприклад, NGINX), а також багато іншого. Це важливо для того, щоб уникнути помилок при налаштуванні MongoDB чи інших служб одразу на Windows або WSL2.

Дотримуйтесь інструкцій з [офіційної документації](https://docs.docker.com/docker-for-windows/install) та встановіть Docker Desktop на свій дистрибутив Windows.

Для кращого досвіду існують деякі мінімальні вимоги до апаратного забезпечення.

## Налаштуйте Docker Desktop на WSL

Як тільки Docker Desktop встановлено, [дотримуйтесь цих інструкцій](https://docs.docker.com/docker-for-windows/wsl) та налаштуйте його для роботи з Ubuntu-18.04 як бекенду.

Завдяки цьому контейнери працюють на стороні WSL, а не Windows. Ви можете отримати доступ до служб на `http://localhost` (як на Windows, так і на Ubuntu).

## Встановіть MongoDB із Docker Hub

Як тільки ви налаштували Docker Desktop для роботи з WSL2, дотримуйтесь цих кроків, щоб запустити службу MongoDB:

1. Запустіть новий термінал Ubuntu-18.04

2. Витягніть `MongoDB 4.0.x` із dockerhub

   ```console
   docker pull mongo:4.0
   ```

3. Запустіть службу MongoDB на порті `27017` та налаштуйте її на автоматичний запуск після перезавантаження системи

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. Тепер ви можете отримати доступ до служби з Windows чи Ubuntu на `mongodb://localhost:27017`.

## Встановлення Node.js та pnpm

Ми рекомендуємо встановити випуск LTS для Node.js за допомогою Node Version Manager ([nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

Як тільки його буде встановлено, використайте ці команди, щоб встановити та використовувати версію Node.js за потреби:

```console
nvm install --lts

# АБО
# nvm install <version>

nvm install 14

# Використання
# nvm use <version>

nvm use 12
```

Node.js надходить разом з `npm`, який можна використати для встановлення `pnpm`:

```console
npm install -g pnpm
```

## Налаштуйте freeCodeCamp локально

Ви встановили передумови, тому дотримуйтесь [нашого посібника з локального налаштування](how-to-setup-freecodecamp-locally.md), щоб клонувати, встановити та налаштувати freeCodeCamp локально на своїй машині.

> [!WARNING]
> 
> Зауважте, що наразі налаштування тестів Cypress (та пов’язаних потреб GUI) знаходяться в стадії розробки. Ви повинні вміти працювати над більшою частиною кодової бази.

## Корисні посилання

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) — стаття Мругеша Мохапатри (штатний розробник freeCodeCamp.org)
- Часті питання:
  - [Підсистема Windows для Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop для Windows](https://docs.docker.com/docker-for-windows/faqs)
