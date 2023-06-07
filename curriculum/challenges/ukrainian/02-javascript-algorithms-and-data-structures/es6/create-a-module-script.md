---
id: 5cddbfd622f1a59093ec611d
title: Створення модульного скрипту
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

Спочатку JavaScript відігравав невелику роль у мережі, де все було здебільшого HTML. Сьогодні JavaScript настільки величезний, що деякі вебсайти майже повністю побудовані на ньому. Щоб зробити JavaScript більш модульним, чистим і придатним для обслуговування, ES6 представив простіший спосіб обміну кодом між файлами JavaScript. Таким чином ви можете експортувати частини файлу та використовувати їх у зовнішніх файлах, а також імпортувати потрібні частини. Щоб скористатися перевагами цієї функціональності, ви повинні створити скрипт у своєму документі HTML із `type` зі значенням `module`. Ось приклад:

```html
<script type="module" src="filename.js"></script>
```

Скрипт із типом `module` тепер може використовувати `import` та `export`, про які ви дізнаєтеся у наступних завданнях.

# --instructions--

Додайте скрипт до документа HTML типу `module` та надайте йому вихідний файл зі значенням `index.js`

# --hints--

Ви повинні створити тег `script`.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

Ваш тег `script` повинен мати атрибут `type` зі значенням `module`.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

Ваш тег `script` повинен мати `src` зі значенням `index.js`.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
