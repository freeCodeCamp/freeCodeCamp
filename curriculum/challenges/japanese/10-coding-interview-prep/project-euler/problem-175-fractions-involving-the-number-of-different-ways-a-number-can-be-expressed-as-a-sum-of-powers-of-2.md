---
id: 5900f41c1000cf542c50ff2e
title: >-
  問題 175: ある数を 2 の累乗の和で表す方法が何通りあるかに関わる分数
challengeType: 1
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

$f(0)=1$ と定義し、$n$ を 2 の累乗の和で表す方法が何通りあるかを $f(n)$ で表すものとします。ただし、それぞれの累乗は最大 2 回しか使えないものとします。

例えば、10 を表す方法は次のように 5 通りあるので、$f(10) = 5$ です。

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

すべての分数 $\frac{p}{q}\\; (p>0, q>0)$ について、$\frac{f(n)}{f(n - 1)} = \frac{p}{q}$ となるような整数 $n$ が少なくとも 1 つあることが分かっています。

例えば、$\frac{f(n)}{f(n - 1)} = \frac{13}{17}$ となるような最小の $n$ は 241 です。 241 の 2 進展開は 11110001 です。

この 2 進数の最上位の桁から最下位の桁までを読むと、1 が 4 つ、0 が 3つ、1 が 1 つ並んでいます。 この 4, 3, 1 を、241 の「短縮型 2 進展開」と呼ぶことにします。

次の式が成り立つ最小の $n$ の短縮型 2 進展開を求めなさい。

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

回答は、スペースを含まないカンマ区切りの整数にすること。

# --hints--

`shortenedBinaryExpansionOfNumber()` は文字列を返す必要があります

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` は文字列 `1,13717420,8` を返す必要があります。

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```
