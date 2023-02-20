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

<pre>
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Usage**  
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`. Even numbers have a remainder of `0`, while odd numbers a remainder of `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Nota:** L'operatore <dfn>resto</dfn> è a volte erroneamente indicato come l'operatore del modulo. Esso è molto simile al modulo, ma non funziona correttamente con numeri negativi.

# --instructions--

Imposta `remainder` pari al resto di `11` diviso per `3` utilizzando l'operatore <dfn>resto</dfn> (`%`).

# --hints--

La variabile `remainder` dovrebbe essere inizializzata

```js
assert(/(const|let|var)\s+?remainder/.test(code));
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
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
