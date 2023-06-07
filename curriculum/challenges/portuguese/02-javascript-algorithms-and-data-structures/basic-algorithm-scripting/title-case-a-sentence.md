---
id: ab6137d4e35944e21037b769
title: Capitalizar a primeira letra de cada palavra de uma frase
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

Retorne a string fornecida com a primeira letra de cada palavra em letra maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas.

Para o propósito desse exercício, você também deve capitalizar as palavras conectoras como `the` e `of`.

# --hints--

`titleCase("I'm a little tea pot")` deve retornar uma string.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` deve retornar a string `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` deve retornar a string `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` deve retornar a string `Here Is My Handle Here Is My Spout`.

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
