---
id: 587d7db6367417b2b2512b9b
title: Trovare caratteri con la corrispondenza lazy
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

Nelle espressioni regolari, una corrispondenza <dfn>greedy</dfn> (avida) trova la parte più lunga possibile di una stringa che si adatta al pattern dell'espressione regolare e la restituisce. L'alternativa è chiamata corrispondenza <dfn>lazy</dfn> (pigra), che trova la parte più piccola possibile della stringa che soddisfa il modello dell'espressione regolare.

Puoi applicare l'espressione regolare `/t[a-z]*i/` alla stringa `"titanic"`. Questa espressione regolare è fondamentalmente un pattern che inizia con `t`, termina con `i`e ha alcune lettere nel mezzo.

Le espressioni regolari sono di default greedy, quindi la corrispondenza restituirà `["titani"]`. Trova la sotto-stringa più grande possibile che si adatti al pattern.

Puoi usare il carattere `?` per passare alla corrispondenza lazy. `"titanic"` passato attraverso l'espressione regolare modificata di `/t[a-z]*?i/` restituisce `["ti"]`.

**Nota:** L'analisi dell'HTML con le espressioni regolari dovrebbe essere evitata, ma il pattern che corrisponde a una stringa HTML con le espressioni regolari va del tutto bene.

# --instructions--

Correggi l'espressione regolare `/<.*>/` in modo che restituisca il tag HTML `<h1>` e non il testo `"<h1>Winter is coming</h1>"`. Ricorda che il carattere jolly `.` in un'espressione regolare corrisponde a qualsiasi carattere.

# --hints--

La variabile `result` dovrebbe essere un array con `<h1>` al suo interno

```js
assert(result[0] == '<h1>');
```

`myRegex` dovrebbe usare la corrispondenza lazy

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` non dovrebbe includere la stringa `h1`

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
