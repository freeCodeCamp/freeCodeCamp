---
id: 594810f028c0303b75339acf
title: アッカーマン関数
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

アッカーマン関数は、再帰関数の典型的な例です。原始再帰関数ではないため、特に注目に値します。 コールツリーの大きさと同様に、値が爆発的に増加します。

アッカーマン関数は通常、以下のように定義されます。

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

引数が負になることはなく、必ず完了します。

# --instructions--

$A(m, n)$ の値を返す関数を書きます。 (関数の数値が爆発的に増加するため)任意精度が好まれますが、必然性はありません。

# --hints--

`ack` という関数です。

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` は1を返します。

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` は3を返します。

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` は13を返します。

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` は61を返します。

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
