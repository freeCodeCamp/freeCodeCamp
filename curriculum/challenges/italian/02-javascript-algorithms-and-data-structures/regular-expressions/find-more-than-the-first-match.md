---
id: 587d7db4367417b2b2512b93
title: Trovare altre corrispondenze oltre alla prima
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

Finora, sei stato in grado di estrarre o cercare un pattern una volta sola.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Qui `match` restituirà `["Repeat"]`.

Per cercare o estrarre un pattern più di una volta, puoi usare l'opzione di ricerca globale: `g`.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

E qui `match` restituisce il valore `["Repeat", "Repeat", "Repeat"]`

# --instructions--

Utilizzando l'espressione regolare `starRegex`, trova ed estrai entrambe le parole `Twinkle` dalla stringa `twinkleStar`.

**Nota**  
Puoi avere più flag nella tua espressione regolare, come ad esempio in `/search/gi`

# --hints--

La tua espressione regolare `starRegex` dovrebbe utilizzare il flag globale `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

La tua espressione regolare `starRegex` dovrebbe utilizzare il flag per l'indifferenza a maiuscole e minuscole `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

La tua corrispondenza dovrebbe riconoscere entrambe le occorrenze della parola `Twinkle`

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

La tua corrispondenza `result` dovrebbe avere due elementi in essa.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
