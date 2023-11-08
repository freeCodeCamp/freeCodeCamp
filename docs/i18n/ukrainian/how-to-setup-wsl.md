# Налаштування freeCodeCamp на Windows Subsystem for Linux (WSL)

> [!NOTE] Перш ніж виконувати ці інструкції, переконайтеся, що ваша система відповідає вимогам.
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 чи вище) — доступно для всіх дистрибутивів, включно з Windows 10 Home.
> 
> **Docker Desktop для Windows**: див. відповідні вимоги для [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) та [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Цей посібник охоплює деякі загальні кроки з налаштуванням WSL2. Як тільки загальні питання з WSL2 вирішено, ви зможете використовувати [цей посібник з локального налаштування](how-to-setup-freecodecamp-locally.md), щоб працювати з freeCodeCamp на Windows, запускаючи дистрибутив WSL як Ubuntu.

## Активуйте WSL

Follow the instructions on the [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install WSL2.

## Встановіть Ubuntu

1. Рекомендуємо використовувати Ubuntu-18.04 або вище з WSL2.

   > [!NOTE]
   > 
   > Ви можете використовувати інші дистрибутиви, основою яких не є Debian, але у них наявні певні недоліки та вони виходять за рамки цього посібника.

   As of November 2023, Ubuntu and Debian are the only Linux distributions [officially supported by Playwright](https://playwright.dev/docs/intro#system-requirements), the end-to-end testing library used by freeCodeCamp.

2. Оновіть залежності ОС

   ```bash
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

Якщо ви використовуєте [IntelliJ Idea](https://www.jetbrains.com/idea/), можливо, вам знадобиться оновити інтерпретатор Node та керування пакунками npm до версії, налаштованої у вашому дистрибутиві WSL.

Ви можете перевірити ці налаштування в розділі Settings > Languages & Frameworks > Node.js and npm.

## Встановлення Docker Desktop

**Docker Desktop на Windows** дозволяє встановити й запускати бази даних (наприклад, MongoDB) та інші служби (наприклад, NGINX), а також багато іншого. Це важливо для того, щоб уникнути помилок при налаштуванні MongoDB чи інших служб одразу на Windows або WSL2.

Дотримуйтесь інструкцій з [офіційної документації](https://docs.docker.com/docker-for-windows/install) та встановіть Docker Desktop на свій дистрибутив Windows.

Для кращого досвіду існують деякі мінімальні вимоги до апаратного забезпечення.

## Налаштуйте Docker Desktop на WSL

Як тільки Docker Desktop встановлено, [дотримуйтесь цих інструкцій](https://docs.docker.com/docker-for-windows/wsl) та налаштуйте його для роботи з Ubuntu-18.04 як бекенду.

Завдяки цьому контейнери працюють на стороні WSL, а не Windows. Ви можете отримати доступ до служб на `http://localhost` (як на Windows, так і на Ubuntu).

## Встановіть MongoDB із Docker Hub

Як тільки ви налаштували Docker Desktop для роботи з WSL2, дотримуйтесь цих кроків, щоб запустити службу MongoDB:

1. Launch a new Ubuntu terminal

2. Pull MongoDB from Docker Hub. Please refer to the [Prerequisites](how-to-setup-freecodecamp-locally.md#Prerequisites) table for the current version of MongoDB used by freeCodeCamp. For example, if the version number is `5.0.x`, replace `<x.y>` with `5.0` in the following two code snippets.

   ```bash
   docker pull mongo:<x.y>
   ```

3. Запустіть службу MongoDB на порті `27017` та налаштуйте її на автоматичний запуск після перезавантаження системи

   ```bash
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:<x.y>
   ```

4. Тепер ви можете отримати доступ до служби з Windows чи Ubuntu на `mongodb://localhost:27017`.

## Встановлення Node.js та pnpm

Ми рекомендуємо встановити випуск LTS для Node.js за допомогою Node Version Manager ([nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

Once installed use this command to install and use the latest Node.js LTS version:

```bash
nvm install --lts
```

For instructions on installing and using a different version of Node.js, please refer to the [nvm docs](https://github.com/nvm-sh/nvm#usage).

Node.js comes bundled with `npm`, which you can use to install `pnpm`:

```bash
npm install -g pnpm
```

## Налаштуйте freeCodeCamp локально

Now that you have installed the pre-requisites, follow [our local setup guide](how-to-setup-freecodecamp-locally.md) to clone, install and set up freeCodeCamp locally on your machine.

> [!WARNING]
> 
> Зауважте, що наразі налаштування тестів Cypress (та пов’язаних потреб GUI) знаходяться в стадії розробки. Ви повинні вміти працювати над більшою частиною кодової бази.

## Optimize Windows and WSL

   > [!NOTE]
   > 
   > The following tips were collected from across the web and have not gone through vigorous testing. Your mileage may vary.

### Adjust processer scheduling for background services

This may reduce incidents of Docker containers crashing due to lack of resources.

Open the System Properties control panel by pressing <kbd>Win + R</kbd> and entering `sysdm.cpl`

<details>
    <summary>
      Enter <code>sysdm.cpl</code> in the Run dialog (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/run-sysdm.png" alt="Enter `sysdm.cpl` in the Run dialog" />
</details>
<br>

Go to Advanced -> Performance -> Settings…

<details>
    <summary>
      Performance Settings button under Advanced tab in System Properties (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-performance-settings.png" alt="Performance Settings button under Advanced tab in System Properties" />
</details>
<br>

Under Advanced -> Processor scheduling, choose "Background services". Do not close the window. Continue to the next tip.

<details>
    <summary>
      Background services radio button under Advanced tab in Performance Options (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/background-services.png" alt="Background services radio button under Advanced tab in Performance Options" />
</details>

### Increase the size of Windows paging file for the system drive

Under Advanced -> Virtual memory, click "Change…"

<details>
    <summary>
      Change virtual memory button under Advanced tab in Performance Options (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-virtual-memory.png" alt="Change virtual memory button under Advanced tab in Performance Options" />
</details>
<br>

Choose "Custom size". Set the initial size to 1.5x and the maximum size to 3x of your physical memory. Then click "Set".

<details>
    <summary>
      Set custom size button in Virtual Memory window (screenshot)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/set-custom-size.png" alt="Set custom size button in Virtual Memory window" />
</details>

### Increase the size of memory allocated to WSL

Create a [`.wslconfig` file](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) in your [`%UserProfile%` directory](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig) (typically `C:\Users\<UserName>\.wslconfig`). Please read the [WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) carefully and replace `x` with values that suit your own needs:

```ini
# Settings apply across all Linux distros running on WSL 2
[wsl2]

# How much memory to assign to the WSL 2 VM. The default value might not be enough
memory=xGB

# How much swap space to add to the WSL 2 VM, default is 25% of available RAM
swap=xGB
```

### Increase Node.js max old space size

This fixes the ["JavaScript heap out of memory" error](https://stackoverflow.com/a/54456814) with ESLint. Add the following to your `~/.bashrc` or `~/.zshrc`:

```sh
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Avoid `pnpm run test`

Instead, use the script [appropriate to your PR](https://forum.freecodecamp.org/t/wsl-performance-issues-while-working-on-the-codebase/644215/2#:~:text=usually%2C%20you%20just%20want%20to%20test%20something%20specific%20to%20either%20the%20curriculum%20or%20the%20client%20or%20the%20api%20-%20almost%20never%20all%203.); either `pnpm run test:api`, `pnpm run test:curriculum`, or `pnpm run test-client`.

## Useful Links

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) — стаття Мругеша Мохапатри (штатний розробник freeCodeCamp.org)
- Часті питання:
  - [Підсистема Windows для Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop для Windows](https://docs.docker.com/docker-for-windows/faqs)
