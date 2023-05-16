Дотримуйтесь цих рекомендацій, щоб налаштувати середовище розробки freeCodeCamp. Особливо рекомендовано, якщо ви хочете робити внески регулярно.

## Оберіть між Gitpod чи власною машиною (локальне налаштування)

Якщо ви бажаєте зробити одноразовий внесок, використовуйте Gitpod. Налаштування Gitpod надає готове середовище у вашому браузері за декілька хвилин. Для тривалих внесків ми рекомендуємо налаштувати freeCodeCamp на локальній машині.

Ось деякі плюси та мінуси, які допоможуть із вибором:

| Gitpod                                                                    | Власна машина (локальне налаштування)                           |
| ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Відсутність мінімальних вимог обладнання                                  | Специфічні та мінімальні вимоги                                 |
| Не потрібно встановлювати програмне забезпечення                          | Потрібно додаткове програмне забезпечення                       |
| Копія репозиторію завжди актуальна                                        | Потрібно підтримувати локальну копію репозиторію                |
| Повільніший та може займати декілька хвилин для запуску                   | Швидший та займає декілька секунд для запуску                   |
| Потрібне інтернет-з’єднання                                               | Мінімальне інтернет-з’єднання (після налаштування)              |
| Деякі завдання (наприклад, компіляція та тестування) можуть тривати довше | Швидше виконання завдань (залежно від можливостей вашої машини) |

> [!ATTENTION] **Примітка:** якщо ви використовуєте Windows 10 або 11, вам знадобиться WSL2. Використовуйте [цей посібник](how-to-setup-wsl.md), щоб налаштувати WSL2. Ви не можете використовувати командний рядок, Git Bash або PowerShell для запуску freeCodeCamp на Windows.

### Як підготувати робоче середовище Gitpod

Ми автоматизували процес встановлення усіх необхідних залежностей та інструментів. With Gitpod you get a free ready-to-code environment in a few minutes, and is useful if you do not have access to computer or want to make one-time changes.

There are various ways to launch an Gitpod workspace:

1. **(Найшвидший спосіб)** Додайте `gitpod.io/#` на початку будь-якого URL з GitHub.

   Наприклад, якщо ви відвідуєте розгалуження на `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, додайте `gitpod.io/#` на початку URL-адреси та натисніть клавішу enter.

   Ви перейдете на `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` та побачите робоче середовище, створене для вас. Це працює для будь-якого репозиторію чи PR на GitHub.

2. В іншому випадку встановіть одне з нижчеподаних розширень браузера.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) — працює з браузерами на основі Chromium (Google Chrome, Brave, Edge тощо)
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) — Firefox

   Once installed you will see a 'Gitpod' button on every repository, pull-request, etc. as a handy shortcut to launch a workspace from there. Перегляньте сторінку розширень для детальнішої інформації, знімків екрану тощо.

That's it, you can now skip to the 'syncing up from parent' section after you have launched a Gitpod workspace. Most parts of this guide applies to Gitpod workspaces, but be mindful of [how the URLs & Ports work within a Gitpod](https://www.gitpod.io/docs/configure/workspaces/ports) workspace.

**Note: Troubleshooting port issues on Gitpod**

Sometimes the service on port `8000` doesn't go live. This is common when you are restarting an inactive workspace.

If the service is not coming up on port `8000`, you can troubleshoot using these steps:

- **Start the server**: Run `pnpm run develop:server` in one terminal window from the root project directory (`/workspace/freeCodeCamp`) to start the server.

- **Start the client**: In another terminal window, run `pnpm run develop -- -H '0.0.0.0'` from the client directory (`/workspace/freeCodeCamp/client`) to start the client.

This should make port `8000` available.

### Як підготувати локальну машину

Here is a minimum system requirement for running freeCodeCamp locally:

- 8 GB RAM
- Relatively fast CPU (4+ cores)
- Windows 10 or 11 (with WSL), macOS, or Linux

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems like Ubuntu and macOS. You can develop on Windows 10 or 11 with WSL2 only. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.


#### Передумови:

| Передумова                                                                                    | Версія  | Примітки                                                                                          |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                  | `18.x`  | Ми використовуємо версію «Active LTS», див. [розклад LTS](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                          | `8.x`   | -                                                                                                 |
| [Сервер спільноти MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                                 |

> [!ATTENTION] Якщо у вас інша версія, встановіть рекомендовану версію. Ми можемо вирішити проблеми зі встановленням лише для рекомендованих версій. Див. [розв’язання проблем розробки](#troubleshooting) для деталей.

If Node.js is already installed on your machine, run the following commands to validate the versions:

```console
node -v
pnpm -v
```

> [!TIP] Ми наполегливо рекомендуємо оновити вищевказані програмні забезпечення до останнього стабільного випуску, також відомого як довгострокова підтримка (LTS).

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

##### Виконайте наступні дії, щоб підготувати середовище розробки:

1. Встановіть [Git](https://git-scm.com/) або інший клієнт Git, якщо ви досі цього не зробили. Оновіть його до останньої версії; версія, яка пов’язана з вашою ОС, може бути застарілою.

2. (Необов’язково, але рекомендовано) [Налаштуйте ключ SSH](https://help.github.com/articles/generating-an-ssh-key/) для GitHub.


3. Встановіть редактор коду на свій вибір. Якщо ви вагаєтесь, ми рекомендуємо [Visual Studio Code](https://code.visualstudio.com/) — він безоплатний та має відкритий код.

4. Налаштуйте лінтинг для редактора коду.

   Ви повинні [запустити ESLint у своєму редакторі](http://eslint.org/docs/user-guide/integrations.html), оскільки він виділятиме все, що не відповідає [нашій інструкції з оформлення JavaScript](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Будь ласка, не ігноруйте помилки лінтингу. Вони **допомагають** забезпечувати чисту й просту базу коду.

## Розгалужте репозиторій на GitHub

[Forking](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (a.k.a _repo_) on GitHub.

This is essential, as it allows you to work on your own copy of freeCodeCamp on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

> [!TIP] Головний репозиторій на `https://github.com/freeCodeCamp/freeCodeCamp` часто називають репозиторієм `upstream`.
> 
> Ваше розгалуження на `https://github.com/YOUR_USER_NAME/freeCodeCamp` часто називають репозиторієм `origin`. `YOUR_USER_NAME` буде змінено на ваше ім’я користувача GitHub.

**Follow these steps to fork the `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Перейдіть до репозиторію freeCodeCamp на GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Натисніть кнопку «Fork» у верхньому правому куті інтерфейсу ([детальніша інформація тут](https://help.github.com/articles/fork-a-repo/))

3. Як тільки репозиторій розгалужено, вас буде переміщено до копії репозиторію freeCodeCamp на `https://github.com/YOUR_USER_NAME/freeCodeCamp` (`YOUR_USER_NAME` буде змінено на ваше ім’я користувача GitHub.)

<details>
   <summary>
      How to fork freeCodeCamp on GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="How to fork freeCodeCamp on GitHub" />
</details>

## Клонуйте розгалуження з GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

> [!WARNING] Якщо ви використовуєте дистрибутив WSL2 Linux, у вас можуть виникнути проблеми, пов’язані з продуктивністю та стабільністю під час запуску цього проєкту в папці, спільній між Windows і WSL2 (наприклад, `/mnt/c/Users/`). Ми рекомендуємо клонувати цей репозиторій до папки, яка в основному використовується дистрибутивом WSL2 Linux і не має прямого доступу до Windows (наприклад, `~/PROJECTS/`).
> 
> Див. [завдання на GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) для детальнішої інформації щодо цієї проблеми.

Run these commands on your local machine:

1. Відкрийте термінал / командний рядок / оболонку в каталозі проєктів

   _тобто `/yourprojectsdirectory/`_

2. Клонуйте своє розгалуження freeCodeCamp, замінивши `YOUR_USER_NAME` на ім’я користувача GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Налаштуйте синхронізацію з батьківського репозиторію

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred to as the `upstream` repository. Your fork is referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Змініть каталог на новий каталог freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Додайте віддалене посилання на основний репозиторій freeCodeCamp:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Переконайтеся, що конфігурація правильна:

   ```console
   git remote -v
   ```

   Вивід повинен бути схожим на нижчеподаний приклад (замініть `YOUR_USER_NAME` на своє ім’я користувача GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Локальний запуск freeCodeCamp

Now that you have a local copy of freeCodeCamp, you can follow these instructions to run it locally. This will allow you to:

- Preview edits to pages as they would appear on the learning platform.
- Work on UI related issues and enhancements.
- Debug and fix issues with the application servers and client apps.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) page for a solution and report the issue if it has not yet been reported.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our chat server](https://discord.gg/PRyKn3Vbay).

### Налаштування залежностей

#### Крок 1: налаштуйте файл змінних середовища

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Створіть копію «sample.env» та назвіть її «.env».
# Заповніть її необхідними ключами та секретами API:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Майте на увазі, якщо ви використовуватимете Auth0 або Algolia, вам потрібно отримати власні ключі API для цих служб та відредагувати введені дані у файлі `.env`.

#### Крок 2: встановіть залежності

This step will install the dependencies required for the application to run:

```console
pnpm install && pnpm run create:config
```

#### Крок 3: запустіть MongoDB та додайте базу даних

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Якщо MongoDB працює за замовчуванням, то URL-адреса, збережена як значення `MONGOHQ_URL` у файлі `.env`, має працювати. Якщо ви використовуєте власне налаштування, змініть значення за потреби.
> 
> Якщо ви дотримувались [посібника з налаштування Windows 10 з WSL2](how-to-setup-wsl.md), ви можете пропустити цей крок за умови, що сервер MongoDB вже працює. Це можна перевірити, зв’язавшись із `http://localhost:27017` на локальній машині.

Start the MongoDB server in a separate terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- On Windows, you must specify the full path to the `mongod` binary

```console
"C:\Program Files\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] Ви можете не запускати MongoDB кожного разу, встановивши його як фонову службу. Для детальнішої інформації див. [документацію MongoDB для вашої ОС](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
pnpm run seed
```

#### Крок 4: запустіть клієнтську програму freeCodeCamp та сервер API

You can now start up the API server and the client applications.

```console
pnpm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and visit <http://localhost:8000>. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API server serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`.

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Якщо очистити cookies чи запустити `pnpm run seed:certified-user`, ви вийдете з системи та вам доведеться увійти знову.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md).

## Коротко про команди

A quick reference to the commands that you will need when working locally.

| команда            | опис                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `pnpm install`     | Встановлює/перевстановлює всі залежності та запускає різні служби.   |
| `pnpm run seed`    | Створює авторизованих тестових користувачів і розміщує їх у MongoDB. |
| `pnpm run develop` | Запускає сервер API та клієнтські програми freeCodeCamp.             |
| `pnpm run clean`   | Видаляє всі залежності та очищує кеш.                                |
