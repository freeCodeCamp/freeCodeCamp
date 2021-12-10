---
id: 5e4ce2f5ac708cc68c1df261
title: Лінійний конгруентний метод
challengeType: 5
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

[Лінійний конгруентний метод](https://en.wikipedia.org/wiki/linear congruential generator) є дуже простим прикладом [генератора випадкових чисел](http://rosettacode.org/wiki/random number generator). Усі лінійні конгруентні генератори працюють за формулою:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Де:

<ul>
<li>$ r_0 $ — початкове число.</li>
<li>$r_1$, $r_2$, $r_3$, ..., — випадкові числа.</li>
<li>$a$, $c$, $m$ — константи.</li>
</ul>

Якщо уважно вибирати значення $a$, $c$ і $m$, то генератор створює рівномірний розподіл цілих чисел від $0$ до $m - 1$.

Згенеровані алгоритмом числа неякісні. $r_n$ та $r\_{n + 1}$ не є незалежними, як справжні випадкові числа. Знаючи $r_n$, можна передбачити $r\_{n + 1}$, тому лінійний конгруентний метод не є криптографічно стійким. Лінійний конгруентний метод добре підходить для простих завдань, наприклад для [Miller-Rabin primality test](http://rosettacode.org/wiki/Miller-Rabin primality test) або [FreeCell deals](http://rosettacode.org/wiki/deal cards for FreeCell). Перевагою цього методу є те, що можна легко відтворити послідовність чисел з того самого $r_0$. Можна також відтворити таку послідовність за допомогою іншої мови програмування, оскільки формула дуже проста.

# --instructions--

Напишіть функцію з параметрами $r_0,a,c,m,n$, яка видає $r_n$.

# --hints--

`linearCongGenerator` має бути функцією.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` має повернути число.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` має повернути `855`.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` має повернути `1110`.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` має повернути `62217`.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` має повернути `12345`.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` має повернути `1406932606`.

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
