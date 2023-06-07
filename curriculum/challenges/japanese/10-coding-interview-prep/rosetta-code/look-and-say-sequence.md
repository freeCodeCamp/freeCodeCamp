---
id: 5e6dd14797f5ce267c2f19d0
title: 読み上げ数列
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

The Look and say sequence is a recursively defined sequence of numbers.

数列の定義

<ul><li>10進数の数値を 1 つ選びます</li>
<li>数字を<span>見て</span>、同じ数字の連続した並びのグループを視覚的に把握します</li>
<li>番号を左から右へグループごとに、数字が何個あるかと、続けてそのグループの数字を<span>読み上げ</span>ます。</li></ul><span> これが数列の次の数値になります。</span>

以下に例を示します。

<ul><li>数値 1 から始めると、<span>1</span> 個の 1 で 11 になります</li>
<li>11 から始めると、<span>2</span> 個の1。 つまり、21になります</li>
<li>21から始めると、 <span>1</span> 個の 2、<span>1</span> 個の 1。 つまり、(12)(11) で 1211 になります</li>
<li>1211から始めると、 <span>1</span> 個の 1、 <span>1</span> 個の 2、そして <span>2</span> 個の 1。 つまり、(11)(12)(21) で 111221 になります</li></ul>

# --instructions--

文字列をパラメータとして取る関数を記述し、それを実行して結果の文字列を返してください。

# --hints--

`lookAndSay` は関数とします。

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` は文字列を返す必要があります。

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` は `"11"` を返す必要があります。

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` は `"21"` を返す必要があります。

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` は `"1211"` を返す必要があります。

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` は `"111221"` を返す必要があります。

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` は `"13151412"` を返す必要があります。

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```
