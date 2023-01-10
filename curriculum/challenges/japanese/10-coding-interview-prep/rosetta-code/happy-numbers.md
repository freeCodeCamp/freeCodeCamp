---
id: 594810f028c0303b75339ad1
title: ハッピー数
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

任意の正の整数から開始して、その各桁をそれぞれ 2 乗して足した数で置き換え、この数が `1` に等しくなる (1 からは変化しない) か、`1`を含まないサイクルで無限ループするまでこのプロセスを繰り返します。 このプロセスが`1`で終わる場合の数字がハッピー数となり、`1`で終わらない場合はアンハッピー数となります。

# --instructions--

数値がハッピー数なら true を返し、そうでない場合は false を返す関数を作成してください。

# --hints--

`happy` は関数とします。

```js
assert(typeof happy === 'function');
```

`happy(1)` はブール値を返す必要があります。

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)`は`true`を返す必要があります。

```js
assert(happy(1));
```

`happy(2)` は`false`を返す必要があります。

```js
assert(!happy(2));
```

`happy(7)` は`true`を返す必要があります。

```js
assert(happy(7));
```

`happy(10)` は`true`を返す必要があります。

```js
assert(happy(10));
```

`happy(13)` は`true`を返す必要があります。

```js
assert(happy(13));
```

`happy(19)` は`true`を返す必要があります。

```js
assert(happy(19));
```

`happy(23)` は`true`を返す必要があります。

```js
assert(happy(23));
```

`happy(28)` は`true`を返す必要があります。

```js
assert(happy(28));
```

`happy(31)` は`true`を返す必要があります。

```js
assert(happy(31));
```

`happy(32)` は`true`を返す必要があります。

```js
assert(happy(32));
```

`happy(33)` は`false`を返す必要があります。

```js
assert(!happy(33));
```

# --seed--

## --seed-contents--

```js
function happy(number) {

}
```

# --solutions--

```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}
```
