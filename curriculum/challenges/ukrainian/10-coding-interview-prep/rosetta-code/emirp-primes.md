---
id: 599d0ba974141b0f508b37d5
title: Emirp primes (Прості числа Емірпа)
challengeType: 1
forumTopicId: 302253
dashedName: emirp-primes
---

# --description--

Emirp (**простий** написаний у зворотному порядку) є простими числами, які при зміні (у їх десятковому представленні) є різними простими числами.

# --instructions--

Напишіть функцію, яка:

<ul>
  <li>Показує перші <code>n</code> прості числа.</li>
  <li>Показує прості числа в діапазоні.</li>
  <li>Показує кількість простих чисел у діапазоні.</li>
  <li>Показує <code>n<sup>th</sup></code> простого числа.</li>
</ul>

Функція повинна приймати два параметри. Перший отримає `n` або діапазон у вигляді масиву. Другий отримає логічний тип, що вказує, чи повертається функція emirps у вигляді масиву або окремого числа (кількість простих чисел у діапазоні або просте число <code>n<sup>th</sup></code>). Відповідно до параметрів функція повинна повертати масив або число.

# --hints--

`emirps` має бути функцією.

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)` повинен повертатися як `[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]`

```js
assert.deepEqual(emirps(20, true), [
  13,
  17,
  31,
  37,
  71,
  73,
  79,
  97,
  107,
  113,
  149,
  157,
  167,
  179,
  199,
  311,
  337,
  347,
  359,
  389
]);
```

`emirps(1000)` повинен повертатися як `70529`

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)` повинен повертатися як `[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]`

```js
assert.deepEqual(emirps([7700, 8000], true), [
  7717,
  7757,
  7817,
  7841,
  7867,
  7879,
  7901,
  7927,
  7949,
  7951,
  7963
]);
```

`emirps([7700,8000],false)` повинен повертатися як `11`

```js
assert.deepEqual(emirps([7700, 8000], false), 11);
```

# --seed--

## --seed-contents--

```js
function emirps(n) {

}
```

# --solutions--

```js
function emirps(num, showEmirps)
{
  const is_prime = function(n)
    {
    if (!(n % 2) || !(n % 3)) return false;
    let p = 1;
    while (p * p < n)
                    { if (n % (p += 4) == 0 || n % (p += 2) == 0)
                            { return false; } }
    return true;
  };
  const is_emirp = function(n) {
    const r = parseInt(n.toString().split('').reverse().join(''));
    return r != n && is_prime(n) && is_prime(r);
  };

  let i,
    arr = [];
  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (is_emirp(i)) arr.push(i);
    // first x emirps
    if (showEmirps) return arr;
    // xth emirp
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (is_emirp(i)) arr.push(i);
    // emirps between x .. y
    if (showEmirps) return arr;
    // number of emirps between x .. y
    return arr.length;
  }
}
```
