---
id: 5900f4de1000cf542c50fff0
title: 'Problema 369: Badugi'
challengeType: 1
forumTopicId: 302030
dashedName: problem-369-badugi
---

# --description--

Em um baralho padrão de 52 cartas, um conjunto de 4 cartas é um Badugi caso tenha 4 cartas sem pares e se não houver duas cartas do mesmo naipe.

Considere $f(n)$ como o número de maneiras de escolher $n$ cartas com um subconjunto de 4 cartas que é um Badugi. Por exemplo, há $2.598.960$ maneiras de escolher cinco cartas de um baralho padrão de 52 cartas. Dessas, $514.800$ contêm um subconjunto que é um Badugi. Assim, $f(5) = 514800$.

Encontre $\sum f(n)$ para $4 ≤ n ≤ 13$.

# --hints--

`badugi()` deve retornar `862400558448`.

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
