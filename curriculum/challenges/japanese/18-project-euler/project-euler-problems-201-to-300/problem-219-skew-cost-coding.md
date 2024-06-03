---
id: 5900f4481000cf542c50ff5a
title: '問題 219: 不均一な料金で符号を送信する'
challengeType: 1
forumTopicId: 301861
dashedName: problem-219-skew-cost-coding
---

# --description--

$A$ と $B$ をビット列 (0 と 1 の数列) とします。

$B$ の<u>左</u>端から $A$ の長さ分のビットが $A$ に等しい場合、$A$ は $B$ の接頭辞と呼ばれます。

例えば、00110 は <u>00110</u>1001 の接頭辞ですが、00111 や 100110 の接頭辞ではありません。

サイズ $n$ の接頭符号は、いずれのビット列も他のビット列の接頭辞ではない、$n$ 個の相異なるビット列の集合です。 サイズ 6 の接頭符号の例を下に示します。

$$0000, 0001, 001, 01, 10, 11$$

ここで、"0" のビットを 1 つ送信するのに 1 ペンス、"1" のビットを 1 つ送信するのに 4 ペンスかかるとします。 上の例にある接頭符号の総費用は 35 ペンスです。これは偶然にも、今の焦点である不均一な料金体系において最も安い符号です。 これを $Cost(6) = 35$ と簡潔に表します。

$Cost(10^9)$ を求めなさい。

# --hints--

`skewCostCoding()` は `64564225042` を返す必要があります。

```js
assert.strictEqual(skewCostCoding(), 64564225042);
```

# --seed--

## --seed-contents--

```js
function skewCostCoding() {

  return true;
}

skewCostCoding();
```

# --solutions--

```js
// solution required
```
