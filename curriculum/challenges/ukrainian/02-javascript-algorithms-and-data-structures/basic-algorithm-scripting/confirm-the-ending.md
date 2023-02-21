---
id: acda2fb1324d9b0fa741e6b5
title: Підтвердження закінчення
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

Перевірте, чи рядок (перший аргумент, `str`) закінчується заданим цільовим рядком (другий аргумент, `target`).

Це завдання *можна* вирішити за допомогою методу `.endsWith()`, який був введений в ES2015. Але ми б хотіли, щоб ви використали один із методів підрядків JavaScript.

# --hints--

`confirmEnding("Bastian", "n")` має повертати `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` має повертати `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` має повертати `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` має повертати `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` має повертати `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` має повертати `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` має повертати `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` має повертати `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` має повертати `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` має повертати `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Ваш код не повинен використовувати вбудований метод `.endsWith()`, щоб розв’язати це завдання.

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
