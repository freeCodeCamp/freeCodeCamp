---
id: 587d7dba367417b2b2512ba9
title: Lookahead positivi e negativi
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

I <dfn>Lookahead</dfn> sono pattern che dicono a JavaScript di guardare avanti nella tua stringa per controllare i pattern successivi. Questo può essere utile quando desideri cercare più pattern sulla stessa stringa.

Ci sono due tipi di lookahead: <dfn>lookahead positivi</dfn> e <dfn>lookahead negativi</dfn>.

Un lookahead positivo guarderà per assicurarsi che l'elemento nel pattern di ricerca sia presente, ma in realtà non lo riconoscerà. Un lookahead positivo è usato come `(?=...)` dove `...` è la parte richiesta sulla quale non viene fatto il matching.

Dall'altra parte, un lookahead negativo guarderà per assicurarsi che l'elemento nel pattern di ricerca non sia presente. Un lookahead negativo è usato come `(?!...)` dove `...` è il pattern che non deve essere presente. Il resto del pattern è restituito se la parte di lookahead negativo non è presente.

I lookahead possono confondere un po' ma alcuni esempi aiuteranno.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

Entrambe queste chiamate a `match` restituiranno `["q"]`.

Un uso più pratico dei lookaheads è quello di controllare due o più pattern in una stringa. Ecco un validatore di password (ingenuamente) semplice che richiede tra i 3 e i 6 caratteri e almeno un numero:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Usa i lookahead nell'espressione regolare `pwRegex` per riconoscere le password che sono lunghe più di 5 caratteri e hanno due cifre consecutive.

# --hints--

La tua espressione regolare dovrebbe usare due `lookaheads` positivi.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

La tua espressione regolare non dovrebbe corrispondere alla stringa `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
