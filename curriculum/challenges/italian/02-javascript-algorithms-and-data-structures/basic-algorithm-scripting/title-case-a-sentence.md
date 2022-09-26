---
id: ab6137d4e35944e21037b769
title: Scrivere in maiuscolo le iniziali di ogni parola
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Restituisci la stringa fornita con la prima lettera di ogni parola in maiuscolo. Assicurati che il resto della parola sia in minuscolo.

Ai fini di questo esercizio, dovresti anche mettere in maiuscolo le parole di collegamento come `the` e `of`.

# --hints--

`titleCase("I'm a little tea pot")` dovrebbe restituire una stringa.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` dovrebbe restituire la stringa `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` dovrebbe restituire la stringa `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` dovrebbe restituire la stringa `Here Is My Handle Here Is My Spout`.

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
