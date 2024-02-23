# Налаштування freeCodeCamp на Windows Subsystem for Linux (WSL)

> [!NOTE] Перш ніж виконувати ці інструкції, переконайтеся, що ваша система відповідає вимогам.
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 чи вище) — доступно для всіх дистрибутивів, включно з Windows 10 Home.
> 
> **Docker Desktop для Windows**: див. відповідні вимоги для [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) та [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Цей посібник охоплює деякі загальні кроки з налаштуванням WSL2. Як тільки загальні питання з WSL2 вирішено, ви зможете використовувати [цей посібник з локального налаштування](how-to-setup-freecodecamp-locally.md), щоб працювати з freeCodeCamp на Windows, запускаючи дистрибутив WSL як Ubuntu.

## Активуйте WSL

Дотримуйтесь інструкцій з [офіційної документації](https://docs.microsoft.com/en-us/windows/wsl/install-win10), щоб встановити WSL2.

## Встановіть Ubuntu

1. Рекомендуємо використовувати Ubuntu-18.04 або вище з WSL2.

   > [!NOTE]
   > 
   > Ви можете використовувати інші дистрибутиви, основою яких не є Debian, але у них наявні певні недоліки та вони виходять за рамки цього посібника.

   Станом на листопад 2023 року, Ubuntu та Debian є єдиними дистрибутивами Linux, [офіційно підтримуваними Playwright](https://playwright.dev/docs/intro#system-requirements) — наскрізною тестовою бібліотекою, яку використовує freeCodeCamp.

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

1. Запустіть новий термінал Ubuntu

2. Витягніть MongoDB із Docker Hub. Будь ласка, зверніться до таблиці з [передумовами](how-to-setup-freecodecamp-locally.md#Prerequisites) поточної версії MongoDB, яку використовує freeCodeCamp. Наприклад, якщо номером версії є `5.0.x`, замініть `<x.y>` на `5.0` у двох наступних фрагментах коду.

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

Як тільки його буде встановлено, використайте цю команду, щоб встановити та використовувати найновішу версію LTS Node.js:

```bash
nvm install --lts
```

Для інструкцій з встановлення та використання іншої версії Node.js, будь ласка, зверніться до [документації nvm](https://github.com/nvm-sh/nvm#usage).

Node.js надходить разом з `npm`, який можна використати для встановлення `pnpm`:

```bash
npm install -g pnpm
```

## Налаштуйте freeCodeCamp локально

Ви встановили передумови, тому дотримуйтесь [нашого посібника з локального налаштування](how-to-setup-freecodecamp-locally.md), щоб клонувати, встановити та налаштувати freeCodeCamp локально на своїй машині.

> [!WARNING]
> 
> Зауважте, що наразі налаштування тестів Cypress (та пов’язаних потреб GUI) знаходяться в стадії розробки. Ви повинні вміти працювати над більшою частиною кодової бази.

## Оптимізуйте Windows та WSL

   > [!NOTE]
   > 
   > Наступні поради були зібрані з різних джерел і не пройшли високоякісне тестування. Ваш результат може відрізнятися.

### Налаштування розкладу процесора для фонових служб

Це може знизити випадки збоїв контейнерів Docker через брак ресурсів.

Відкрийте панель керування системними налаштуваннями, натиснувши <kbd>Win + R</kbd> та ввівши `sysdm.cpl`

<details>
    <summary>
      Введіть <code>sysdm.cpl</code> у вікні діалогу (знімок екрану)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/run-sysdm.png" alt="Введіть `sysdm.cpl` у вікні діалогу" />
</details>
<br>

Перейдіть до Advanced -> Performance -> Settings…

<details>
    <summary>
      Кнопка Performance Settings розташована під вкладкою Advanced в System Properties (знімок екрану)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-performance-settings.png" alt="Кнопка Performance Settings розташована під вкладкою Advanced в System Properties" />
</details>
<br>

Під Advanced -> Processor scheduling, виберіть Background services. Не закривайте вікно. Перейдіть до наступної поради.

<details>
    <summary>
      Радіокнопка Background services розташована під вкладкою Advanced в Performance Options (знімок екрана)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/background-services.png" alt="Радіокнопка Background services розташована під вкладкою Advanced в Performance Options" />
</details>

### Збільшення розміру файлу сторінки Windows для системного диска

Під Advanced -> Virtual memory, натисніть Change…

<details>
    <summary>
      Кнопка Change virtual memory розташована під вкладкою Advanced в Performance Options (знімок екрану)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-virtual-memory.png" alt="Кнопка Change virtual memory розташована під вкладкою Advanced в Performance Options" />
</details>
<br>

Виберіть Custom size. Встановіть початковий розмір на 1.5x та максимальний розмір на 3x від фізичної пам’яті. Потім натисніть Set.

<details>
    <summary>
      Налаштування кнопки розміру у вікні Virtual Memory (знімок екрану)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/set-custom-size.png" alt="Налаштування кнопки розміру у вікні Virtual Memory" />
</details>

### Збільшення обсягу пам’яті, виділеної для WSL

Створіть файл [`.wslconfig`](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) у своєму каталозі [`%UserProfile%`](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig) (зазвичай `C:\Users\<UserName>\.wslconfig`). Будь ласка, уважно прочитайте [документацію WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) та замініть `x` на потрібні значення:

```ini
# Налаштування застосовуються до всіх дистрибутивів Linux, які працюють на WSL 2
[wsl2]

# Кількість пам’яті, що призначається для віртуальної машини WSL 2. Значення за замовчуванням може бути недостатньо
memory=xGB

# На скільки збільшити swap-простір в WSL 2 VM; за замовчуванням це 25% від доступної оперативної пам’яті
swap=xGB
```

### Збільшення максимального розміру старого простору Node.js

Це виправляє помилку [«JavaScript heap out of memory»](https://stackoverflow.com/a/54456814) з ESLint. Додайте наступне до `~/.bashrc` або `~/.zshrc`:

```sh
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Уникайте `pnpm run test`

Натомість використайте скрипт, [який відповідає вашому PR](https://forum.freecodecamp.org/t/wsl-performance-issues-while-working-on-the-codebase/644215/2#:~:text=usually%2C%20you%20just%20want%20to%20test%20something%20specific%20to%20either%20the%20curriculum%20or%20the%20client%20or%20the%20api%20-%20almost%20never%20all%203.): `pnpm run test:api`, `pnpm run test:curriculum` або `pnpm run test-client`.

## Корисні посилання

- [A WSL2 Dev Setup with Ubuntu 20.04, Node.js, MongoDB, VS Code, and Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) — стаття Мругеша Мохапатри (штатний розробник freeCodeCamp.org)
- Часті питання:
  - [Підсистема Windows для Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop для Windows](https://docs.docker.com/docker-for-windows/faqs)
