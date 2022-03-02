---
id: 5e4ce2f5ac708cc68c1df261
title: 線形合同法
challengeType: 5
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

[線形合同法](https://en.wikipedia.org/wiki/linear congruential generator) は、 [乱数発生器](http://rosettacode.org/wiki/random number generator)の非常に単純な例です。 すべての線形合同法は次の式を使用します。

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

ここでは、

<ul>
<li>$ r_0 $ はシードです。</li>
<li>$r_1$, $r_2$, $r_3$, ... は乱数です。</li>
<li>$a$, $c$, $m$ は定数です。</li>
</ul>

$a$、$c$、および $m$ の値を慎重に選択すると、発生器は $0$ から $m -1$ までの整数の一様分布を発生させます。

LCG (線形合同法) の乱数の質は低いです。 $r_n$ と $r\_{n + 1}$ には真の乱数にあるような独立性がありません。 $r_n$ を知っている人は誰でも $r\_{n + 1}$ を予測できるため、LCG は暗号的に安全ではありません。 LCG は [ミラー–ラビン素数判定法](http://rosettacode.org/wiki/Miller-Rabin primality test)や [フリーセルの駆け引き](http://rosettacode.org/wiki/deal cards for FreeCell) のようなシンプルなタスクには十分です。 LCG の利点に、同じ $r_0$ から簡単に数列を再現できることがあります。 式がとても簡単なので、このような数列を異なるプログラミング言語で再現することも可能です。

# --instructions--

$r_0,a,c,m,n$ をパラメータとして取り、 $r_n$ を返す関数を記述してください。

# --hints--

`linearCongGenerator` は関数とします。

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` は数値を返す必要があります。

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` は `855` を返す必要があります。

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` は `1110` を返す必要があります。

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` は `62217` を返す必要があります。

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` は `12345` を返す必要があります。

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` は `1406932606` を返す必要があります。

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
