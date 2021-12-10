---
id: 5cddbfd622f1a59093ec611d
title: Створіть модульний скрипт
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

Спочатку мова JavaScript відігравала незначну роль на веб-сторінках HTML, створених по-іншому. Сьогодні вона має величезне значення. Деякі сайти навіть створюються майже повністю за допомогою JavaScript. Для того, щоб мова JavaScript була більш модульною, точною і зручною у користуванні, ES6 створив новий спосіб для доступної передачі коду між файлами JavaScript. Таким чином, ви можете експортувати частини файлу і використати їх в більше ніж одному іншому файлі, а також імпортувати потрібні вам уривки. Щоб скористатися таким функціоналом, необхідно створити скрипт у вашому HTML-документі з `module` `type`. Наприклад:

```html
<script type="module" src="filename.js"></script>
```

Скрипт, що використовує тип `module`, відтепер може використовувати функції `import` і `export`, про які ви дізнаєтеся більше у наступних завданнях.

# --instructions--

Додайте скрипт до HTML-документа типу `module` та зробіть його вихідним файлом `index.js`

# --hints--

Ви маєте створити тег `script`.

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

Ваш тег `script` повинен мати `index.js` `src`.

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
