---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1

videoUrl: ''
localeTitle: Extract Matches
---

## Description
<section id='description'>
到目前为止，你只是检查了一个匹配模式是否存在于字符串中。你还可以使用<code>.match()</code>方法来提取你找到的实际匹配项。
请使用字符串来调用<code>.match()</code>方法，并在括号内传入正则表达式。以下是一个示例：
<blockquote>"Hello, World!".match(/Hello/);<br>// Returns ["Hello"]<br>let ourStr = "Regular expressions";<br>let ourRegex = /expressions/;<br>ourStr.match(ourRegex);<br>// Returns ["expressions"]</blockquote>
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
    testString: assert(result.join() === "coding", '<code>结果</code>应该包含单词<code>coding</code>。');
  - text: 你的正则表达式<code>codingRegex</code>应该搜寻<code>coding</code>。
    testString: assert(codingRegex.source === "coding", '你的正则表达式<code>codingRegex</code>应该搜寻<code>coding</code>。');
  - text: 你应该使用<code>.match()</code>方法。
    testString: assert(code.match(/\.match\(.*\)/), '你应该使用<code>.match()</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              