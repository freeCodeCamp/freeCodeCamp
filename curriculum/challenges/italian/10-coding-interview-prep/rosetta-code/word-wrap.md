---
id: 594810f028c0303b75339ad4
title: Mandare a capo
challengeType: 1
forumTopicId: 302344
dashedName: word-wrap
---

# --description--

Ancora oggi, con caratteri proporzionali e layout complessi, ci sono ancora casi in cui è necessario mandare a capo il testo in una colonna specificata. Il compito di base è quello di chiudere un paragrafo di testo in modo semplice.

# --instructions--

Scrivi una funzione che può mandare a capo questo testo a qualsiasi numero di caratteri. Ad esempio, il testo a capo di 80 caratteri dovrebbe assomigliare a quanto segue:

<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
</pre>

# --hints--

wrap dovrebbe essere una funzione.

```js
assert.equal(typeof wrap, 'function');
```

wrap dovrebbe restituire una stringa.

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

wrap(80) dovrebbe restituire 4 righe.

```js
assert(wrapped80.split('\n').length === 4);
```

La funzione `wrap` dovrebbe restituire il testo previsto.

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

wrap(42) dovrebbe restituire 7 righe.

```js
assert(wrapped42.split('\n').length === 7);
```

La funzione `wrap` dovrebbe restituire il testo previsto.

```js
assert.equal(wrapped42.split('\n')[0], firstRow42);
```

# --seed--

## --after-user-code--

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';
```

## --seed-contents--

```js
function wrap(text, limit) {
  return text;
}
```

# --solutions--

```js
function wrap(text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}
```
