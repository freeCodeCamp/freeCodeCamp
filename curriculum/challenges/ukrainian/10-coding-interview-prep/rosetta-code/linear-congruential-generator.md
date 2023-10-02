---
id: 5e4ce2f5ac708cc68c1df261
title: Лінійний конгруентний метод
challengeType: 1
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

A linear congruential generator (LCG) is an <em>algorithm</em> that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. Усі лінійні конгруентні генератори працюють за формулою:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Де:

<ul>
<li>$ r_0 $ — початкове число.</li>
<li>$r_1$, $r_2$, $r_3$, ..., — випадкові числа.</li>
<li>$a$, $c$, $m$ — константи.</li>
</ul>

Якщо уважно вибирати значення $a$, $c$ і $m$, то генератор створює рівномірний розподіл цілих чисел від $0$ до $m - 1$.

<abbr title="linear congruential generator">LCG</abbr> numbers have poor quality. $r_n$ та $r\_{n + 1}$ не є незалежними, як справжні випадкові числа. Anyone who knows $r_n$ can predict $r\_{n + 1}$, therefore <abbr title="linear congruential generator">LCG</abbr> is not cryptographically secure. The <abbr title="linear congruential generator">LCG</abbr> is still good enough for simple tasks like Miller-Rabin primality test, or FreeCell deals. Among the benefits of the <abbr title="linear congruential generator">LCG</abbr>, one can easily reproduce a sequence of numbers, from the same $r_0$. Можна також відтворити таку послідовність за допомогою іншої мови програмування, оскільки формула дуже проста.

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
