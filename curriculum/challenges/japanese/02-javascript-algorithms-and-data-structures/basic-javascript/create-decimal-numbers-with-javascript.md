---
id: cf1391c1c11feddfaeb4bdef
title: JavaScript で小数を作成する
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

変数に小数を格納することもできます。 小数は<dfn>浮動小数点数</dfn>または <dfn>float</dfn> と呼ばれることもあります。

**注:** 数値は有限精度で計算されます。 そのため、浮動小数点を使用した演算は、期待する結果と異なる結果になる可能性があります。 その場合は、<a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp フォーラム</a>にトピックを作成してください。

# --instructions--

変数 `myDecimal` を作成して、整数部と小数部からなる小数 (たとえば `5.7`) を代入してください。

# --hints--

`myDecimal` は数値である必要があります。

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` には小数点が含まれている必要があります。

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
