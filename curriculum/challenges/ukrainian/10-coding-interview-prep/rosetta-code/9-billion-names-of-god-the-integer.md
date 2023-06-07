---
id: 5949b579404977fbaefcd736
title: Ціле число "9 мільярдів імен Бога"
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(Той хто розв'язує завдання, має знати про наслідки виконання даного завдання.)

Детальніше про те, що означає "name"(ім'я):

<ul>
  <li>Ціле число 1 має 1 ім'я "1".</li>
  <li>Ціле число 2 має 2 ім'я "1+1" і "2".</li>
  <li>Ціле число 3 має 3 ім'я "1+1+1", "2+1" і "3".</li>
  <li>Ціле число 4 має 5 імен "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>Ціле число 5 має 7 імен "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

Це можна візуалізувати наступним чином:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Де рядки $n$ відповідають цілому числу $n$ і кожна колонка $C$ у рядку $m$ зліва направо відповідає кількості імен, які починаються з $C$.

Зауважте, що сума $n$-го рядку $P(n)$ - це функція розбиття цілого числа.

# --instructions--

Використовуйте функцію, що повертає суму $n$-го рядка.

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
