---
id: 59622f89e4e137560018a40e
title: Послідовність Хофштадтера
challengeType: 5
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

Ці дві послідовності додатніх чисел визначаються як:

$R(1)=1\\ ;\\ S(1)=2 \\\\R(n)=R(n-1)+S(n-1), \\quad n>1.$

Послідовність $S(n)$ далі визначається як послідовність натуральних чисел, яких немає в $R(n)$.

Послідовність $R$ запущена:

<pre>1, 3, 7, 12, 18, ...</pre>

Послідовність $R$ запущена:

<pre>2, 4, 5, 6, 8, ...</pre>

# --instructions--

Створіть 2 функції названі як `ffr` і `ffs` коли їм надають `n` повернення` R(n)` або ` S(n)` відповідно. (Зверніть увагу на те, щоб R(1) = 1 і S(1) = 2 уникати окремих помилок).

Не слід припускати жодного максимального значення для ` n `.

**Посилання**

<ul>
  <li>
    Sloane's <a href='https://oeis.org/A005228' target='_blank'>A005228</a> і <a href='https://oeis.org/A030124' target='_blank'>A030124</a>.
  </li>
  <li>
    Вікіпедія: <a href='https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' title='wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' target='_blank'> Послідовність Хофштадтера</a>.
  </li>
</ul>

# --hints--

`ffr` має бути функцією.

```js
assert(typeof ffr === 'function');
```

`ffr` має бути функцією.

```js
assert(typeof ffs === 'function');
```

`ffr` повинен повернути ціле число.

```js
assert(Number.isInteger(ffr(1)));
```

`ffr` повинен повернути ціле число.

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` повинен повертатися `69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` повинен повертатися ` 1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` повинен повертатися ` 5764 `

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` повинен повертатися ` 526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` повинен повертатися ` 14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffr(50)` повинен повертатися ` 59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffr(100)` повинен повертатися ` 112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` повинен повертатися ` 1041`

```js
assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1]);
```

# --seed--

## --after-user-code--

```js
const ffrParamRes = [[10, 69], [50, 1509], [100, 5764], [1000, 526334]];
const ffsParamRes = [[10, 14], [50, 59], [100, 112], [1000, 1041]];
```

## --seed-contents--

```js
function ffr(n) {
  return n;
}

function ffs(n) {
  return n;
}
```

# --solutions--

```js
const R = [null, 1];
const S = [null, 2];

function extendSequences (n) {
  let current = Math.max(R[R.length - 1], S[S.length - 1]);
  let i;
  while (R.length <= n || S.length <= n) {
    i = Math.min(R.length, S.length) - 1;
    current += 1;
    if (current === R[i] + S[i]) {
      R.push(current);
    } else {
      S.push(current);
    }
  }
}

function ffr (n) {
  extendSequences(n);
  return R[n];
}

function ffs (n) {
  extendSequences(n);
  return S[n];
}
```
