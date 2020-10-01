---
id: 594810f028c0303b75339ad4
challengeType: 5
videoUrl: ''
title: 自动换行
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
  - text: <code>wrap</code>是一个功能。
    testString: assert.equal(typeof wrap, 'function');
  - text: <code>wrap("abc", 10)</code>必须返回一个字符串。
    testString: assert.equal(typeof wrap('abc', 10), 'string');
  - text: wrap（80）必须返回4行。
    testString: assert(wrapped80.split('\n').length === 4);
  - text: 你的<code>wrap</code>函数应该返回我们期望的文本
    testString: assert.equal(wrapped80.split('\n')[0], firstRow80);
  - text: wrap（42）必须返回7行。
    testString: assert(wrapped42.split('\n').length === 7);
  - text: 你的<code>wrap</code>函数应该返回我们期望的文本
    testString: assert.equal(wrapped42.split('\n')[0], firstRow42);

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

/section>
