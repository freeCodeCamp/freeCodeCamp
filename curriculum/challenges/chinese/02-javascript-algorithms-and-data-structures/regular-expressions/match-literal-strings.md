---
id: 587d7db3367417b2b2512b8f
challengeType: 1
forumTopicId: 301355
title: 匹配文字字符串
---

## Description
<section id='description'>
在上一个挑战中，使用正则表达式<code>/Hello/</code>搜索到了字符串<code>"Hello"</code>。那个正则表达式在字符串中搜寻<code>"Hello"</code>的文字匹配。下面是另一个在字符串中搜寻<code>"Kevin"</code>的示例：

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```

任何其他形式的<code>"Kevin"</code>都不会被匹配。例如，正则表达式<code>/Kevin/</code>不会匹配<code>"kevin"</code>或者<code>"KEVIN"</code>。

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```

后续的挑战将为你展示如何匹配其他形式的字符串。
</section>

## Instructions
<section id='instructions'>
完成正则表达式<code>waldoRegex</code>，在字符串<code>waldoIsHiding</code>中匹配到文本<code>"Waldo"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的正则表达式<code>waldoRegex</code>应该匹配到<code>'Waldo'</code>。"
    testString: assert(waldoRegex.test(waldoIsHiding));
  - text: 你的正则表达式<code>waldoRegex</code>不应该搜寻其他的任何内容。
    testString: assert(!waldoRegex.test('Somewhere is hiding in this text.'));
  - text: 你应该使用你的正则表达式对字符串执行文字匹配。
    testString: assert(!/\/.*\/i/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

</section>
