---
id: 5900f38a1000cf542c50fe9d
title: 'Problema 30: Potências do número n'
challengeType: 1
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

Surpreendentemente, há apenas três números que são iguais à soma de seus algarismos elevados a 4:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

Como 1 = 1<sup>4</sup> não é uma soma, ele não deve ser incluído.

A soma destes números é 1634 + 8208 + 9474 = 19316.

Encontre a soma de todos os números que são iguais à soma de seus algarismos elevados a `n`.

# --hints--

`digitnPowers(2)` deve retornar um número.

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` deve retornar 0.

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` deve retornar 1301.

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` deve retornar 19316.

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` deve retornar 443839.

```js
assert(digitnPowers(5) == 443839);
```

# --seed--

## --seed-contents--

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

# --solutions--

```js
// solution required
```
