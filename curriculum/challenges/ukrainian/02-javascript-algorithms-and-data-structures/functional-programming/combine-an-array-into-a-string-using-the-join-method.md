---
id: 587d7daa367417b2b2512b6c
title: Об'єднання масиву у рядок з використанням методу Join
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

Метод `join` використовується для об'єднання елементів масиву для створення стрічки. Потрібний аргумент для розділювача, який використовується для відокремлення елементів масиву у рядку.

Ось приклад:

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` матиме значення рядка `Hello World`.
# --instructions--

Використовуйте метод `join` (з-поміж інших) у функції `sentensify` для створення речення зі слів у рядку `str`. Ваша функція повинна повертати рядок. Наприклад, `I-like-Star-Wars` буде перетворений в `I like Star Wars`. Для цього завдання не використовуйте метод `replace`.

# --hints--

Ваш код повинен використовувати метод `join`.

```js
assert(code.match(/\.join/g));
```

Ваш код не повинен використовувати метод `replace`.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` повинен повертати рядок.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` повинен повертати рядок `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` повинен повертати рядок `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` повинен повертати рядок `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```
