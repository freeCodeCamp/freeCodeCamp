---
id: 56533eb9ac21ba0edf2244ae
title: Trovare un resto in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

L’operatore <dfn>resto</dfn> `%` fornisce il resto della divisione di due numeri.

**Esempio**

<blockquote>5 % 2 = 1 perché<br>Math.floor(5 / 2) = 2 (Quoziente)<br>2 * 2 = 4<br>5 - 4 = 1 (Resto)</blockquote>

**Uso**  
In matematica si può verificare se un numero è pari o dispari controllando il resto della divisione del numero per `2`.

<blockquote>17 % 2 = 1 (17 è dispari)<br>48 % 2 = 0 (48 è pari)</blockquote>

**Nota:** L'operatore <dfn>resto</dfn> è a volte erroneamente indicato come l'operatore del modulo. Esso è molto simile al modulo, ma non funziona correttamente con numeri negativi.

# --instructions--

Imposta `remainder` pari al resto di `11` diviso per `3` utilizzando l'operatore <dfn>resto</dfn> (`%`).

# --hints--

La variabile `remainder` dovrebbe essere inizializzata

```js
assert(/var\s+?remainder/.test(code));
```

Il valore di `remainder` dovrebbe essere `2`

```js
assert(remainder === 2);
```

Dovresti utilizzare l'operatore `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
// Only change code below this line

var remainder;
```

# --solutions--

```js
var remainder =  11 % 3;
```
