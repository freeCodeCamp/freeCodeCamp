---
id: 5ea2815a8640bcc6cb7dab3c
title: リクレル数
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>0より大きい整数 <code>n₀</code> を取得します。</li>
  <li><code>n₀</code> を反転させ、 これを <code>n₀</code> に追加して、級数の次の数 <code>n</code> を作ります。</li>
  <li><code>n</code> が回文数になったとき、すなわち逆順の <code>n</code> の桁 == <code>n</code> になったときに停止します。</li>
</ol>

上記の漸化式は、適用するほとんどの開始数値 `n` = 1, 2, ... で、かなり早く回文数になり終了します。

例えば、 `n₀` = 12 の場合、以下のようになります。

```bash
12
12 + 21 = 33,  a palindrome!
```

`n₀` = 55 の場合、以下のようになります。

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

加算の*後に*回文数のチェックが行われることに注意してください。

開始数の中にはこのプロセスが永遠に続くかのように見えるものもあります。開始数が 196 のこの漸化式は回文数を形成せずに、数百万桁の数字を形成しながら、何百万もの計算を繰り返しています。 回文数で終わらない数字を**リクレル数**と呼びます。

このタスクでは、リクレル数は、500 回 (以上) の繰り返しの範囲において回文数を形成しない任意の開始数とします。

**種子数と親族リクレル数:**

リクレル数の数列で生成される整数もリクレル数になります。

一般に、1つのリクレル数からの数列は、以前のリクレル数候補からの数列に収束する*ことがあります*。例えば196と689で始まる数列は次のようになります。

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

689 で始まる数列が、196 の数列に収束し、196 の場合と同じ数字が続くことが分かります。

このことから、リクレル数を真の**種子数**としてのリクレル数候補と、回文数にはならないものの、より小さいリクレル数から生成された数列の一部とみられる整数を数列内に生成する**親族**数にさらに分割できます。

# --instructions--

パラメータとして数値を取る関数を記述してください。 数値がリクレル数の場合は true を返します。 それ以外は、falseを返します。 繰り返しの範囲は 500 回であることに注意してください。

# --hints--

`isLychrel` は関数とします。

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` はブール値を返す必要があります。

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` は `false` を返す必要があります。

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` は `false` を返す必要があります。

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` は `true` を返す必要があります。

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` は `true` を返す必要があります。

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` は `false` を返す必要があります。

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` は `true` を返す必要があります。

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
