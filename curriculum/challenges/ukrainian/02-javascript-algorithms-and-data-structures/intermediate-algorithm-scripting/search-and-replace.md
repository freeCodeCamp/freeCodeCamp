---
id: a0b5010f579e69b815e7c5d6
title: Пошук та заміна
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

Виконайте пошук та заміну на реченні, використовуючи надані аргументи, та поверніть нове речення.

Першим аргументом є речення, над яким потрібно виконати пошук і заміну.

Другим аргументом є слово, яке ви будете заміняти (до).

Третім аргументом є слово, яким ви заміните другий аргумент (після).

**Примітка:** збережіть регістр першого символу початкового слова, коли ви замінюєте його. Наприклад, якщо ви хочете замінити слово `Book` словом `dog`, його потрібно замінювати як `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` має повертати рядок `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` має повертати рядок `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` має повертати рядок `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` має повертати рядок `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` має повертати рядок `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` має повертати рядок `Let us get back to more Algorithms`.

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```
