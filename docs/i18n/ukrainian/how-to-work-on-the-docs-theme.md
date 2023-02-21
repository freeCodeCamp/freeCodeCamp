# Як працювати над документацією

## Робота над вмістом документації

Щоб працювати над рекомендаціями щодо внеску, ви можете редагувати або додавати файли в каталозі `docs`, [доступному тут](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Коли ваші зміни об'єднані, вони стануть автоматично доступними на документаційному сайті.

When adding a new file to the `docs` directory, you should evaluate if the file should also be added to the sidebar navigation. We typically create a link in the [`_sidebar.md`](_sidebar.md) file for new and independent guides. Alternatively, You may follow the instructions below on creating an internal link for supporting guides.

### Як створити внутрішнє посилання

If you want to create a link targeting a different section of the contributing guidelines, follow this format:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Якщо цільовий розділ знаходиться на тій же сторінці, ви можете опустити назву файлу
[Link text](#target-section-heading-id)
```

Make sure you include the file extension (`.md`). Don't specify the full URL or append `/` before the file name.

This is necessary to make these links work for the translated version of the document. Otherwise, they will redirect to the English version of the page regardless of the language.

#### Переклад документації з внутрішніми посиланнями

When you work on translating docs on Crowdin, make sure to replace the `#target-section-heading-id` with the id on the translated document. [Learn more about translating docs here](how-to-translate-files.md#translate-documentation).

## Робота над темою документації

> [!NOTE] Швидке нагадування, що вам не потрібно нічого налаштовувати для роботи над вмістом документації.
> 
> Щоб працювати над рекомендаціями щодо внеску, див. розділ [робота над вмістом документації](#work-on-the-docs-content).

### Структура вебсайту документації

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

- Джерело домашньої сторінки для цього сайту доступне в [`docs/index.html`](index.html).
- Ми обслуговуємо цей файл як SPA, використовуючи `docsify` та GitHub Pages.
- Скрипт `docsify` генерує вміст файлів `markdown` в каталозі `docs` за запитом.
- Домашня сторінка генерується з [`_coverpage.md`](_coverpage.md).
- The sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

### Обслуговування документаційного сайту локально

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

#### Обслужити та запустити лише документаційний сайт

```console
npm run docs:serve
```

#### Обслужити документаційний сайт поряд з freeCodeCamp локально:

```console
npm run develop
```

> Сайт документації повинен бути доступним на <http://localhost:3400>
