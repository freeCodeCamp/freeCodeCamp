---
id: 5900f3881000cf542c50fe9b
title: 'Problema 28: soma dos números nas diagonais'
challengeType: 1
forumTopicId: 301930
dashedName: problem-28-number-spiral-diagonals
---

# --description--

Começando com o número 1 e movendo-se para a direita no sentido horário, uma espiral de 5x5 é formada:

<div style='padding-left: 4em;'>
  <div style='color: red; display: inline;'>21</div> 22 23 24 <div style='color: red; display: inline;'>25</div><br>
  20  <div style='color: red; display: inline;'>7</div>  8  <div style='color: red; display: inline;'>9</div> 10<br>
  19  6  <div style='color: red; display: inline;'>1</div>  2 11<br>
  18  <div style='color: red; display: inline;'>5</div>  4  <div style='color: red; display: inline;'>3</div> 12<br>
  <div style='color: red; display: inline;'>17</div> 16 15 14 <div style='color: red; display: inline;'>13</div><br>
</div>

É possível verificar que a soma dos números nas diagonais é 101.

Qual é a soma dos números nas diagonais em uma espiral `n` x `n` formada da mesma forma?

# --hints--

`spiralDiagonals(101)` deve retornar um número.

```js
assert(typeof spiralDiagonals(101) === 'number');
```

`spiralDiagonals(101)` deve retornar 692101.

```js
assert(spiralDiagonals(101) == 692101);
```

`spiralDiagonals(303)` deve retornar 18591725.

```js
assert(spiralDiagonals(303) == 18591725);
```

`spiralDiagonals(505)` deve retornar 85986601.

```js
assert(spiralDiagonals(505) == 85986601);
```

`spiralDiagonals(1001)` deve retornar 669171001.

```js
assert(spiralDiagonals(1001) == 669171001);
```

# --seed--

## --seed-contents--

```js
function spiralDiagonals(n) {

  return n;
}

spiralDiagonals(1001);
```

# --solutions--

```js
const spiralDiagonals = (n) => {
  const Sn2 = (n) => {
    return n*(n+1)*(2*n+1)/6;
  };
  const Sn = (n) => {
    return n*(n+1)/2;
  };
  let sum = (Sn2(n-1) + Sn(n-1) + n-1) + (Math.floor(n/2) + Sn2(n));
  return sum;
};
```
