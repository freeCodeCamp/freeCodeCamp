---
title: Word wrap
id: 594810f028c0303b75339ad4
challengeType: 5
videoUrl: ''
localeTitle: 自动换行
---

## Description
<section id="description"><p>即使在今天，使用比例字体和复杂布局，仍然存在需要在指定列处包装文本的情况。基本任务是以简单的方式包装一段文本。示例文字： </p><pre>使用更复杂的算法（如Knuth和Plass TeX算法）包装文本。
如果您的语言提供此功能，您可以获得额外的信用，
但你“必须参考文档”表明该算法
比简单的最小长度算法更好。
</pre><p>任务： </p><pre> <code>Write a function that can wrap this text to any number of characters.</code> </pre><p>例如，包装为80个字符的文本应如下所示： </p><p></p><pre>使用更复杂的算法（如Knuth和Plass TeX）包装文本
算法。如果您的语言提供此功能，您可以轻松获得额外的功劳
必须参考文档，表明该算法更好
而不是简单的最小长度算法。
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap (text, limit) {
  return text;
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
</section>
