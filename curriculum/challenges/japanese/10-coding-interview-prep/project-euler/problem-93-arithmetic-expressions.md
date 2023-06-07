---
id: 5900f3ca1000cf542c50fedc
title: '問題 93: 算術式'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

集合 {1, 2, 3, 4} の数字をそれぞれちょうど 1 回ずつ使用し、また四則演算 (+、 -、\*、/) と括弧を使用して、それぞれ異なる正の整数を作ることができます。

例えば次のようになります。

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

12 + 34 のように数字を連結することは許可されないので注意してください。

集合 {1, 2, 3, 4} を使用すると、31 個の異なる数が得られ (そのうち最大の数は 36)、表現不能な数に初めて遭遇するまでに 1 から 28 までのそれぞれの数が得られます。

1 から `n` までの連続した正の整数の最長の集合が得られるような、4 つの相異なる数字の集合 `a` &lt; `b` &lt; `c` &lt; `d` を求め、文字列 `abcd` として答えなさい。

# --hints--

`arithmeticExpressions()` は数値を返す必要があります。

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` は 1258 を返す必要があります。

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
