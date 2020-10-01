---
id: 594faaab4e2a8626833e9c3d
challengeType: 5
videoUrl: ''
title: 使用转义标记字符串
---

## Description
<section id="description"><p>编写一个函数或程序，可以在分隔符的每个非转义事件中拆分字符串。 </p><p>它应该接受三个输入参数： </p> <b>字符串</b> <b>分隔符字符</b> <b>转义字符</b> <p>它应该输出一个字符串列表。 </p><p>拆分规则： </p>由分隔符分隔的字段将成为输出列表的元素。应保留空字段，即使在开始和结束时也是如此。 <p>转义规则： </p> “Escaped”意味着出现一个尚未自行转义的转义字符。当转义字符位于没有特殊含义的字符之前时，它仍然被视为转义符（但不会做任何特殊操作）。用于转义某些内容的每次出现的转义字符都不应成为输出的一部分。 <p>证明您的函数满足以下测试用例：给定字符串</p><pre>一个^ | UNO || 3 ^^^^ |四^^^ | ^夸| </pre>和使用<pre> | </pre>作为分隔符和<pre> ^ </pre>作为转义字符，您的函数应输出以下数组： <p></p><pre> [&#39;one | uno&#39;，“，&#39;three ^^&#39;，&#39;four ^ | quatro&#39;，”]
  </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code>是一个函数。
    testString: assert(typeof tokenize === 'function');
  - text: <code>tokenize</code>应该返回一个数组。
    testString: assert(typeof tokenize('a', 'b', 'c') === 'object');
  - text: <code>tokenize("one^|uno||three^^^^|four^^^|^cuatro|", "|", "^")</code>应返回[“one | uno”，“”，“three ^^” ，“四个^ | cuatro”，“”]“）
    testString: assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
  - text: '<code>tokenize("a@&amp;bcd&amp;ef&amp;&amp;@@hi", "&amp;", "@")</code>应返回<code>["a&amp;bcd", "ef", "", "@hi"]</code>'
    testString: assert.deepEqual(tokenize(testStr2, '&', '@'), res2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function tokenize(str, esc, sep) {
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
