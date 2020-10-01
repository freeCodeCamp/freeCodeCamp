---
id: 587d7db4367417b2b2512b92
challengeType: 1
forumTopicId: 301340
title: 提取匹配项
---

## Description
<section id='description'>
到目前为止，只是检查了一个匹配模式是否存在于字符串中。还可以使用<code>.match()</code>方法来提取找到的实际匹配项。
可以使用字符串来调用<code>.match()</code>方法，并在括号内传入正则表达式。以下是一个示例：

```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

</section>

## Instructions
<section id='instructions'>
利用<code>.match()</code>方法提取单词<code>coding</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>结果</code>应该包含单词<code>coding</code>。
    testString: assert(result.join() === "coding");
  - text: 你的正则表达式<code>codingRegex</code>应该搜寻<code>coding</code>。
    testString: assert(codingRegex.source === "coding");
  - text: 你应该使用<code>.match()</code>方法。
    testString: assert(code.match(/\.match\(.*\)/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```

</section>
