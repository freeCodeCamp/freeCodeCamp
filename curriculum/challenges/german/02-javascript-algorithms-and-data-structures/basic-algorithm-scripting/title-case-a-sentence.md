---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Gib den angegebenen String zurück, wobei der erste Buchstabe jeden Wortes groß geschrieben wird. Stelle sicher, dass der Rest der Wörter kleingeschrieben ist.

Für den Zweck dieser Übung schreibe bitte auch Verbindungswörter wie `the` und `of` groß.

# --hints--

`titleCase("I'm a little tea pot")` soll einen String zurückgeben.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` soll den String `I'm A Little Tea Pot` zurückgeben.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` soll den String `Short And Stout` zurückgeben.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` soll den String `Here Is My Handle Here Is My Spout` zurückgeben.

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
