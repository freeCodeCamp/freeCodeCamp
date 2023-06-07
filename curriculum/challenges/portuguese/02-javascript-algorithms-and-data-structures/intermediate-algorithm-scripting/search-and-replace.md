---
id: a0b5010f579e69b815e7c5d6
title: Procurar e substituir
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

Realize uma busca e substitua na frase usando os argumentos fornecidos e retorne a nova frase.

O primeiro argumento é a frase para realizar a busca e substituir.

O segundo argumento é a palavra que você substituirá (antes).

O terceiro argumento é com o que você vai substituir o segundo argumento (depois).

**Observação:** preserve a capitalização do primeiro caractere na palavra original quando você estiver substituindo. Por exemplo, se você quiser substituir a palavra `Book` com a palavra `dog`, deve ser substituído com `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` deve retornar a string `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` deve retornar a string `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` deve retornar a string `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` deve retornar a string `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` deve retornar a string `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` deve retornar a string `Let us get back to more Algorithms`.

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
