---
id: 5900f4de1000cf542c50fff0
title: 'Problema 369: Badugi'
challengeType: 1
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

In un mazzo standard di 52 carte da gioco, un set di 4 carte è un Badugi se contiene 4 carte senza coppie e nessuna due carte dello stesso seme.

Lascia che $f(n)$ sia il numero di modi per scegliere $n$ carte con un sottoinsieme di 4 carte che è un Badugi. Ad esempio, ci sono $2\\,598\\,960$ modi per scegliere cinque carte da un mazzo standard di 52 carte, di cui $514\\,800$ contengono un sottoinsieme di 4 carte che è un Badugi, quindi $f(5) = 514800$.

Trova $\sum f(n)$ per $4 ≤ n ≤ 13$.

# --hints--

`badugi()` dovrebbe restituire `862400558448`.

```js
assert.strictEqual(badugi(), 862400558448);
```

# --seed--

## --seed-contents--

```js
function badugi() {

  return true;
}

badugi();
```

# --solutions--

```js
// solution required
```
