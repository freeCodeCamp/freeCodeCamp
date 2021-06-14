---
id: 587d7dbb367417b2b2512baa
title: Riutilizzare i pattern usando i gruppi di cattura
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Alcuni pattern che cerchi si verificheranno più volte in una stringa. È una perdita di tempo ripetere manualmente quell'espressione regolare. C'è un modo migliore per specificare quando si hanno più sottostringhe ripetute nella stringa.

È possibile cercare sottostringhe ripetute utilizzando i <dfn>gruppi di cattura</dfn>. Le parentesi, `(` e `)`, sono usate per trovare sottostringhe ripetute. Metti tra le parentesi l'espressione regolare del pattern che si ripeterà.

Per specificare dove apparirà quella stringa ripetuta, si utilizza una barra rovesciata (`\`) e quindi un numero. Questo numero inizia da 1 e aumenta con ogni gruppo di cattura aggiuntivo che utilizzi. Un esempio potrebbe essere `\1` per abbinare il primo gruppo.

L'esempio sottostante riconosce qualsiasi parola che compare due volte separata da uno spazio:

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
```

La chiamata a `test` restituirà `true` e la chiamata a `match` restituirà `["regex regex", "regex"]`.

Usando il metodo `.match()` su una stringa esso restituirà un array con la stringa che corrisponde, insieme al suo gruppo di cattura.

# --instructions--

Usa i gruppi di cattura in `reRegex` per riconoscere una stringa che consiste solo dello stesso numero ripetuto esattamente tre volte separato da spazi singoli.

# --hints--

La tua espressione regolare dovrebbe usare la classe scorciatoria di carattere per le cifre.

```js
assert(reRegex.source.match(/\\d/));
```

La tua espressione regolare dovrebbe riutilizzare un gruppo di cattura due volte.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

La tua espressione regolare dovrebbe riconoscere la stringa `42 42 42`.

```js
assert(reRegex.test('42 42 42'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `100 100 100`.

```js
assert(reRegex.test('100 100 100'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

La tua espressione regolare non dovrebbe riconoscere la stringa `101 102 103`.

```js
assert(!reRegex.test('101 102 103'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `1 2 3`.

```js
assert(!reRegex.test('1 2 3'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `10 10 10`.

```js
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
