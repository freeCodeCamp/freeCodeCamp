---
id: 5e6dd14797f5ce267c2f19d0
title: 外觀序列
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

The Look and say sequence is a recursively defined sequence of numbers.

序列定義

<ul><li>Take a decimal number</li>
<li><span>看</span>這些數字，然後直觀地將同一數字的連續運行分組。</li>
<li><span>說</span>這些數字，從左到右，一組一組；作爲該數字有多少 - 後跟分組的數字。</li></ul><span> 這將成爲序列的下一個數字。</span>

一個例子：

<ul><li>Starting with the number 1, you have <span>one</span> 1 which produces 11</li>
<li>從 11 開始，你有 <span>兩個</span> 1。 即：21</li>
<li>從 21 開始，你有 <span>一個</span> 2，然後是 <span>一個</span> 1。 即：(12)(11) 也就是 1211</li>
<li>從 1211 開始，你有 <span>一個</span> 1、<span>一個</span> 2，然後是 <span>兩個</span> 1。 即：(11)(12)(21) 也就是 111221</li></ul>

# --instructions--

編寫一個函數，該函數接受一個字符串作爲參數，對其進行處理，並返回結果字符串。

# --hints--

`lookAndSay` 應該是一個函數。

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` 應該返回一個字符串。

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` 應該返回 `"11"`。

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` 應該返回 `"21"`。

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` 應該返回 `"1211"`。

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` 應該返回 `"111221"`。

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` 應該返回 `"13151412"`。

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
