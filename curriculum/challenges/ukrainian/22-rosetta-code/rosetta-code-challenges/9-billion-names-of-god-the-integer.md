---
id: 5949b579404977fbaefcd736
title: 9 мільярдів імен Бога цілих чисел
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

Це завдання є варіацією оповідання Артура Ч. Кларка.

(Розв’язувачі мають знати про наслідки виконання цього завдання.)

Детальніше про те, що мається на увазі під «іменем»:

<ul>
  <li>Ціле число 1 має одне ім’я: «1».</li>
  <li>Ціле число 2 має два імені: «1+1» та «2».</li>
  <li>Ціле число 3 має три імені: «1+1+1», «2+1» та «3».</li>
  <li>Ціле число 4 має п’ять імен: «1+1+1+1», «2+1+1», «2+2», «3+1» та «4».</li>
  <li>Ціле число 5 має сім імен: «1+1+1+1+1», «2+1+1+1», «2+2+1», «3+1+1», «3+2», «4+1» та «5».</li>
</ul>

Це можна візуалізувати наступним чином:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Де рядок $n$ відповідає цілому числу $n$, а кожен стовпчик $C$ в рядку $m$ зліва направо відповідає кількості імені, починаючи з $C$.

Також зауважте, що сума $n$-го рядка $P(n)$ є функцією розбивання цілого числа.

# --instructions--

Реалізуйте функцію, яка повертає суму $n$-го рядка.

# --hints--

`numberOfNames` має бути функцією.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` має дорівнювати 7.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` має дорівнювати 77.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` має дорівнювати 385.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` має дорівнювати 1255.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` має дорівнювати 53174.

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` має дорівнювати 2552338241.

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
