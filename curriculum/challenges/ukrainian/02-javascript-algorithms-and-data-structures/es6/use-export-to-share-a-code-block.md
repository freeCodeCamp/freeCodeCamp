---
id: 587d7b8c367417b2b2512b56
title: Використання експорту для спільного використання блоку коду
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

Уявіть файл під назвою `math_functions.js`, який містить декілька функцій, пов'язаних із математичними операціями. Один із них зберігається у змінній, `add`, яка приймає два числа і виводить їх суму. Ви захочете використовувати цю функцію в декількох різних JavaScript файлах. Для того, щоб поділитися цим з іншими файлами вам спочатку потрібно `export` його.

```js
export const add = (x, y) => {
  return x + y;
}
```

Зверху - звичайний спосіб експортування однієї функції, але ви можете досягти того ж результату так:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

При експорті змінної або функції, ви можете імпортувати їх в інший файл і використовувати без необхідності переписувати код. Ви можете експортувати декілька речей, повторюючи перший приклад для кожного файлу, який хочете експортувати, або ж розмістивши їх усіх в експортній команді другого прикладу:

```js
export { add, subtract };
```

# --instructions--

У редакторі є дві функції рядка. Експортуйте обидві, використовуючи один з методів на ваш вибір.

# --hints--

Слід належним чином експортувати `uppercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

Слід належним чином експортувати `lowercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
