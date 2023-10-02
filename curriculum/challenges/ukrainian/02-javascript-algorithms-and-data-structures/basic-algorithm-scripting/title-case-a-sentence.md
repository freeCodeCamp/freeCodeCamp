---
id: ab6137d4e35944e21037b769
title: Слова З Великої Літери
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Поверніть заданий рядок, де кожне слово починається з великої літери. Переконайтеся, що інші літери написані в нижньому регістрі.

Сполучні слова, як-от `the` та `of`, також потрібно писати з великої літери.

# --hints--

`titleCase("I'm a little tea pot")` має повертати рядок.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` має повертати рядок `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` має повертати рядок `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` має повертати рядок `Here Is My Handle Here Is My Spout`.

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# --solutions--

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```
