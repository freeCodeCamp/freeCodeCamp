---
id: 5e6dd14797f5ce267c2f19d0
title: 外观序列
challengeType: 1
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

The Look and say sequence is a recursively defined sequence of numbers.

序列定义

<ul><li>Take a decimal number</li>
<li><span>看</span>这些数字，然后直观地将同一数字的连续运行分组。</li>
<li><span>说</span>这些数字，从左到右，一组一组；作为该数字有多少 - 后跟分组的数字。</li></ul><span> 这将成为序列的下一个数字。</span>

一个例子：

<ul><li>Starting with the number 1, you have <span>one</span> 1 which produces 11</li>
<li>从 11 开始，你有 <span>两个</span> 1。 即：21</li>
<li>从 21 开始，你有 <span>一个</span> 2，然后是 <span>一个</span> 1。 即：(12)(11) 也就是 1211</li>
<li>从 1211 开始，你有 <span>一个</span> 1、<span>一个</span> 2，然后是 <span>两个</span> 1。 即：(11)(12)(21) 也就是 111221</li></ul>

# --instructions--

编写一个函数，该函数接受一个字符串作为参数，对其进行处理，并返回结果字符串。

# --hints--

`lookAndSay` 应该是一个函数。

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` 应该返回一个字符串。

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` 应该返回 `"11"`。

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` 应该返回 `"21"`。

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` 应该返回 `"1211"`。

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` 应该返回 `"111221"`。

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` 应该返回 `"13151412"`。

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
