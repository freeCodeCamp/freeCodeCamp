---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1

videoUrl: ''
localeTitle: Split a String into an Array Using the split Method
---

## Description
<section id='description'>
<code>split</code>方法用于把字符串分割成字符串数组，接收一个分隔符参数，分隔符可以是用于分解字符串或正则表达式的字符。举个例子，如果分隔符是空格，你会得到一个单词数组；如果分隔符是空字符串，你会得到一个由字符串中每个字符组成的数组。
下面是两个用空格分隔一个字符串的例子，另一个是用数字的正则表达式分隔：
<blockquote>var str = "Hello World";<br>var bySpace = str.split(" ");<br>// Sets bySpace to ["Hello", "World"]<br><br>var otherString = "How9are7you2today";<br>var byDigits = str.split(/\d/);<br>// Sets byDigits to ["How", "are", "you", "today"]</blockquote>
因为字符串是固定的，<code>split</code>方法可以更简单的操作它们。
</section>

## Instructions
<section id='instructions'>
在<code>splitify</code>函数中用<code>split</code>方法将<code>str</code>分割成单词数组，这个方法应该返回一个数组。单词不一定都是用空格分隔，所以数组中不应包含标点符号。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>split</code>方法。
    testString: assert(code.match(/\.split/g), '应该使用<code>split</code>方法。');
  - text: "<code>splitify('Hello World,I-am code')</code>应返回<code>['Hello', 'World', 'I', 'am', 'code']</code>。"
    testString: assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), '<code>splitify("Hello World,I-am code")</code>应返回<code>["Hello", "World", "I", "am", "code"]</code>。');
  - text: "<code>splitify('Earth-is-our home')</code>应返回<code>['Earth', 'is', 'our', 'home']</code>。"
    testString: assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), '<code>splitify("Earth-is-our home")</code>应返回<code>["Earth", "is", "our", "home"]</code>。');
  - text: "<code>splitify('This.is.a-sentence')</code>应返回<code>['This', 'is', 'a', 'sentence']</code>。"
    testString: assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]), '<code>splitify("This.is.a-sentence")</code>应返回<code>["This", "is", "a", "sentence"]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              