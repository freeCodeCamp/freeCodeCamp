---
id: bd7993c9ca9feddfaeb7bdef
title: JavaScript で小数どうしの割り算をする
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
dashedName: divide-one-decimal-by-another-with-javascript
---

# --description--

小数どうしの割り算をしてみましょう。

# --instructions--

`0.0` を変更して、`quotient` (割り算の商) が `2.2` と等しくなるようにしてください。

# --hints--

変数 `quotient` が `2.2` と等しくなる必要があります。

```js
assert(quotient === 2.2);
```

`/` 演算子を使用して 4.4 を 2.0 で割る必要があります。

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
```

変数 quotient には一度だけ代入してください。

```js
assert(code.match(/quotient/g).length === 1);
```

# --seed--

## --seed-contents--

```js
const quotient = 0.0 / 2.0; // Change this line
```

# --solutions--

```js
const quotient = 4.4 / 2.0;
```
