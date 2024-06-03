---
id: 5e4ce2f5ac708cc68c1df261
title: Лінійний конгруентний генератор
challengeType: 1
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

Лінійний конгруентний генератор (LCG) — це <em>алгоритм</em>, який генерує послідовність псевдовипадкових чисел, обчислених за допомогою розривного кусково-лінійного рівняння. Всі лінійні конгруентні генератори використовують цю формулу:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Де:

<ul>
<li>$ r_0 $ є початковим числом.</li>
<li>$r_1$, $r_2$, $r_3$, ... є випадковими числами.</li>
<li>$a$, $c$, $m$ є константами.</li>
</ul>

Якщо ретельно вибрати значення $a$, $c$ та $m$, то генератор утворюватиме рівномірний розподіл цілих чисел від $0$ до $m - 1$.

Числа <abbr title="linear congruential generator">LCG</abbr> мають низьку якість. $r_n$ та $r\_{n + 1}$ не є незалежними, як справжні випадкові числа. Будь-хто, хто знає $r_n$, може передбачити $r\_{n + 1}$, тому <abbr title="linear congruential generator">LCG</abbr> не є криптографічно безпечним. Проте <abbr title="linear congruential generator">LCG</abbr> добре справляється з простими завданнями, такими як тест простоти Міллера-Рабіна або роздача в FreeCell. Однією з переваг <abbr title="linear congruential generator">LCG</abbr> є те, що можна легко відтворити послідовність чисел з того самого $r_0$. Формула настільки проста, що таку послідовність можна відтворити іншою мовою програмування.

# --instructions--

Напишіть функцію, яка приймає $r_0,a,c,m,n$ як параметри та повертає $r_n$.

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
