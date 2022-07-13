---
id: acda2fb1324d9b0fa741e6b5
title: Підтвердження Закінчення
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Перевірте, чи рядок (перший аргумент, `str`) закінчується заданим цільовим рядком (другий аргумент, `target`).

Цю проблему *can* можна вирішити за допомогою методу `.endsWith()`, який був введений в ES2015. Але, мета цього завдання передбачає використання одного із методів виділення підрядків JavaScript.

# --hints--

`confirmEnding("Bastian", "n")` повинен перетворюватися на `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` повинен перетворюватися на `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` повинен перетворюватися на `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` повинен перетворюватися на `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` повинен перетворюватися на `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` повинен перетворюватися на `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` повинен перетворюватися на `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` повинен перетворюватися на `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` повинен перетворюватися на `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` повинен перетворюватися на `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

У вашому коді не повинен використовуватися вбудований метод `.endsWith()` для вирішення завдання.

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
