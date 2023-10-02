# Розширення VSCode Courses

Тут детально описано інструкції з обслуговування репозиторію [freeCodeCamp/courses-vscode-extension](https://github.com/freeCodeCamp/courses-vscode-extension), який містить вихідний код для розширення [freeCodeCamp - Courses](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses).

## Публікування розширення

GitHub Action автоматично публікує розширення для Visual Studio Marketplace після випуску нового GitHub Release.

1. Запакуйте нову версію розширення:

```bash
npm run pack -- <tag_type>
```

Де `<tag_type>` є одним із: `major`, `minor`, `patch`.

2. Надішліть нову версію до `main`:

```bash
git commit -am "<tag_type>(<version>): <description>"
git push
```

За бажанням, ви можете надіслати її одразу до `upstream/main`, але ми рекомендуємо створити новий PR для перевірки працездатності.

3. Створіть новий GitHub Release, використовуючи GitHub UI:

- Правильно збільште номер версії під час створення нового тегу.
- Завантажте файл `.vsix` із випуском.
- Опублікуйте випуск та підтвердьте успішність дії.

> [!NOTE] Для створення випуску потрібен письмовий доступ до репозиторію `freeCodeCamp/courses-vscode-extension`.

## Публікування розширення вручну

Завантаження до Visual Studio Marketplace можна здійснити вручну, дотримуючись таких дій:

1. Відвідайте https://marketplace.visualstudio.com/ та увійдіть
2. Перейдіть на [сторінку freeCodeCamp Publisher](https://marketplace.visualstudio.com/manage/publishers/freecodecamp)
3. Виберіть відповідне розширення та оберіть `Update`
4. Завантажте файл зі своїх локальних файлів
