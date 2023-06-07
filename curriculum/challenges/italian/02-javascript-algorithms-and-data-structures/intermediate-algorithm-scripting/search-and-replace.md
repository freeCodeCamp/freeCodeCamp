---
id: a0b5010f579e69b815e7c5d6
title: Cercare e sostituire
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

Esegui un cerca e sostituisci sulla frase utilizzando gli argomenti forniti e restituisci la nuova frase.

Il primo argomento è la frase su cui eseguire la ricerca e sostituzione.

Il secondo argomento è la parola che stai cercando.

Il terzo argomento è quello con cui sostituirai il secondo argomento.

**Nota:** Preserva l'iniziale maiuscola o minuscola del primo carattere nella parola originale se viene sostituita. Per esempio, se intendi sostituire la parola `Book` con la parola `dog`, dovrebbe essere sostituita come `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` dovrebbe restituire la stringa `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` dovrebbe restituire la stringa `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` dovrebbe restituire la stringa `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` dovrebbe restituire `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` dovrebbe restituire la stringa `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` dovrebbe restituire la stringa `Let us get back to more Algorithms`.

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
