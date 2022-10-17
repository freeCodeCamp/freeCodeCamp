---
id: ab6137d4e35944e21037b769
title: Алгоритм Великі літери у реченнях
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Стрічка повинна починатись з великої літери в кожному слові. Переконайтесь, що решта букв написана у нижньому регістрі.

Для виконання завдання, вам також необхідно писати з великої літери сполучення слів `the` та `of`.

# --hints--

`titleCase("I'm a little tea pot")` має повернути рядок.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` має повернути рядок `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` має повертати рядок `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` має повернути рядок `Here Is My Handle Here Is My Spout`.

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
