---
id: cf1111c1c11feddfaeb9bdef
title: JavaScript で小数の乱数を生成する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

乱数はランダムな動作を作成するのに便利です。

JavaScript には、`0` (含む) から `1` (含まない) の間の小数の乱数を生成する `Math.random()` 関数があります。 つまり、`Math.random()` は `0` を返すことはありますが、`1` を返すことは決してありません。

**注意:** <a href="/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">代入演算子による値の格納</a>の場合と同様に、すべての関数呼び出しは `return` が実行される前に解決されるため、`Math.random()` 関数の値を `return` することができます。

# --instructions--

`0` の代わりに乱数を返すように、`randomFraction` を変更してください。

# --hints--

`randomFraction` は乱数を返す必要があります。

```js
assert(typeof randomFraction() === 'number');
```

`randomFraction` が返す数値は小数である必要があります。

```js
assert((randomFraction() + '').match(/\./g));
```

`Math.random` を使用して、小数の乱数を生成する必要があります。

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
