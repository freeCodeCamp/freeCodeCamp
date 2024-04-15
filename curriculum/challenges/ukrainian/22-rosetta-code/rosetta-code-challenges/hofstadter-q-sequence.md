---
id: 59637c4d89f6786115efd814
title: Послідовність Хофштадтера Q
challengeType: 1
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

Послідовність Хофштадтера Q визначена як:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

Вона визначається як послідовність Фібоначчі, але в той час як наступний член у послідовності Фібоначчі є сумою попередніх двох членів, у послідовності Q попередні два члени вказують на те, як далеко треба повернутися назад в послідовності Q, щоб знайти два числа, які потрібно додати, щоб утворити наступний член послідовності.

# --instructions--

Реалізуйте рівняння послідовності Хофштадтера Q як функцію. Функція має приймати число `n` та повернути ціле число.

# --hints--

`hofstadterQ` має бути функцією.

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` має повернути ціле число.

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` має повернути `502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` має повернути `755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` має повернути `1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` має повернути `1261`

```js
assert.equal(hofstadterQ(testCase[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCase = [1000, 1500, 2000, 2500];
const res = [502, 755, 1005, 1261];
```

## --seed-contents--

```js
function hofstadterQ(n) {

  return n;
}
```

# --solutions--

```js
function hofstadterQ (n) {
  const memo = [1, 1, 1];
  const Q = function (i) {
    let result = memo[i];
    if (typeof result !== 'number') {
      result = Q(i - Q(i - 1)) + Q(i - Q(i - 2));
      memo[i] = result;
    }
    return result;
  };
  return Q(n);
}
```
