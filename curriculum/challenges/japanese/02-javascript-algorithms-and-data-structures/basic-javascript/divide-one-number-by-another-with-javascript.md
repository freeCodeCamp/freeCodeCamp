---
id: cf1111c1c11feddfaeb6bdef
title: JavaScript で数値どうしの割り算をする
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqkbdAr'
forumTopicId: 17566
dashedName: divide-one-number-by-another-with-javascript
---

# --description--

数値どうしの割り算をすることもできます。

JavaScript では除算記号として `/` を使用します。

**例**

```js
const myVar = 16 / 2;
```

`myVar` の値は `8` になります。
# --instructions--

`0` を変更して、`quotient` (割り算の商) が `2` と等しくなるようにしてください。

# --hints--

変数 `quotient` が 2 と等しくなる必要があります。

```js
assert(quotient === 2);
```

`/` 演算子を使用してください。

```js
assert(/\d+\s*\/\s*\d+/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'quotient = '+z;})(quotient);
```

## --seed-contents--

```js
const quotient = 66 / 0;
```

# --solutions--

```js
const quotient = 66 / 33;
```
